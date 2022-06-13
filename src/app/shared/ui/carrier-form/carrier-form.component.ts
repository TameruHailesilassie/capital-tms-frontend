import { Component, OnInit, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { City, Country, State } from 'country-state-city';
@Component({
  selector: 'carrier-form',
  templateUrl: './carrier-form.component.html',
  styleUrls: ['./carrier-form.component.scss']
})
export class CarrierFormComponent implements OnInit {

  carrierForm: FormGroup;
  submit: boolean;
  stateList: any[];
  cDialCode: string;
  cityList: any[];
  countryList: any[];
  factoringCompanies:any[];
  public modalRef: any;
  mcff: any[];
  bTypes: any[];
  countryCode: string;
  currencyList: any[];
  paymentTerms: any[];

  constructor(private formBuilder: FormBuilder,private modalService: NgbModal) { }
  @Input() formData;
  @Output() onSubmit = new EventEmitter();
  @Output() onCancel = new EventEmitter();
  @ViewChild('factoringCompanyAddModal') editModal: ElementRef;
  ngOnInit(): void {

    this.carrierForm = this.formBuilder.group({

      name: new FormControl("", [Validators.required]),
      primaryConatct: new FormControl(""),
      blacklisted: new FormControl(false),
      address_1: new FormControl("", [Validators.required, Validators.pattern("[a-zA-Z0-9]+")]),
      address_2: new FormControl("", [Validators.required, Validators.pattern("[a-zA-Z0-9]+")]), //optional
      city: new FormControl(null, [Validators.required, Validators.pattern("[a-zA-Z0-9]+")]),
      ext: new FormControl('', [Validators.pattern("[0-9]+"), Validators.maxLength(3)]),
      email: new FormControl("", [Validators.email]),
      zip: new FormControl(null, [Validators.required, Validators.pattern("[a-zA-Z0-9]+")]),
      tollFree: new FormControl("", [Validators.maxLength(3), Validators.pattern("[0-9]+")]),
      state: new FormControl(null, [Validators.required, Validators.pattern("[a-zA-Z0-9]+")]),
      country: new FormControl(null, [Validators.required, Validators.pattern("[a-zA-Z0-9]+")]),
      currency: new FormControl("USD", [Validators.required]),
      mcffOption: new FormControl("mc", [Validators.required]),
      factoringCompany:new FormControl(null),
      mcff: new FormControl(null, [Validators.required]),
      urs: new FormControl(null, [Validators.required]),
      dot: new FormControl(null, [Validators.required]),
      paymentTerms: new FormControl("n30", Validators.required),
      telephone: new FormControl("", [Validators.required, Validators.minLength(16), Validators.maxLength(18)]),
      taxID: new FormControl("", [Validators.maxLength(0), Validators.pattern("[0-9]+")]),
      note: new FormControl(""),
      faxNumber: new FormControl("", [Validators.minLength(16), Validators.maxLength(18)]),
      remittanceEmail: new FormControl("", [Validators.email]),

    });

    this.submit = false;
    this.cDialCode = '';
    this.countryList = Country.getAllCountries();

    this.bTypes = [
      {
        name: "Corporation"
      }
    ]

    this.currencyList = [{
      code: "USD",

    },
    {
      code: "CAD"
    }];

    this.mcff = [{
      name: "M.C.#",
      code: "mc",

    },
    {
      name: "F.F.#",
      code: "ff"
    }];

    this.paymentTerms = [{
      name: "NET 30",
      code: "n30"

    },
    {
      name: "NET 20",
      code: "n20"

    },
    {
      name: "QuickPay 3%",
      code: "q3%"
    }]

    if (this.formData) {
      this.carrierForm.patchValue(this.formData)
    }

  }

  get form() {
    return this.carrierForm.controls;
  }

  onCountryChange($event) {
    this.countryCode = $event;
    this.stateList = State.getStatesOfCountry($event);
    this.cDialCode = `+${Country.getCountryByCode($event).phonecode}`

  }

  onStateChange($event) {
    this.cityList = City.getCitiesOfState(this.countryCode, $event);
    console.log(this.cityList);

  }

  validSubmit() {
    this.submit = true;
    if (this.form.valid) {
      this.onSubmit.emit(this.form.value)
    }
  }

  onAddfactoringCompany(){
    this.modalRef = this.modalService.open(this.editModal, {
      scrollable: true,
      size: "xl",
      centered: true,
    });
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Country, City, State } from "country-state-city";
@Component({
  selector: 'company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})

export class CompanyFormComponent implements OnInit {

  companyForm: FormGroup;
  submit: boolean;
  stateList: any[];
  cDialCode: string;
  cityList: any[];
  countryList: any[];
  countryCode: string;
  currencyList: any[];
  paymentTerms: any[];

  constructor(private formBuilder: FormBuilder,) { }
  @Input() formData;
  @Output() onSubmit = new EventEmitter();
  @Output() onCancel = new EventEmitter();

  ngOnInit(): void {

    this.companyForm = this.formBuilder.group({

      name: new FormControl("", [Validators.required]),
      primaryConatct: new FormControl(""),
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
    
    this.currencyList = [{
      code: "USD",

    },
    {
      code: "CAD"
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

 if(this.formData){
      this.companyForm.patchValue(this.formData)
 }

  }

  get form() {
    return this.companyForm.controls;
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



}

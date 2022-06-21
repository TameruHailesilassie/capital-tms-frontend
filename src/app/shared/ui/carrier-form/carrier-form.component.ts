import {
  Component,
  OnInit,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ElementRef,
} from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { City, Country, State } from "country-state-city";
@Component({
  selector: "carrier-form",
  templateUrl: "./carrier-form.component.html",
  styleUrls: ["./carrier-form.component.scss"],
})
export class CarrierFormComponent implements OnInit {
  carrierForm: FormGroup;
  profileForm: FormGroup;

  submit: boolean;
  stateList: any[];
  cDialCode: string;
  cityList: any[];
  ratingList:any[];
  countryList: any[];
  factoringCompanies: any[];
  public modalRef: any;
  mcff: any[];
  bTypes: any[];
  countryCode: string;
  currencyList: any[];
  paymentTerms: any[];

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal
  ) { }
  @Input() formData;
  @Output() onSubmit = new EventEmitter();
  @Output() onCancel = new EventEmitter();
  @ViewChild("factoringCompanyAddModal") editModal: ElementRef;
  ngOnInit(): void {
    this.carrierForm = new FormGroup({
      profile: new FormGroup({
        name: new FormControl("", [Validators.required]),
        primaryConatct: new FormControl(""),
        secondaryConatct: new FormControl(""),
        blacklisted: new FormControl(false),
        address_1: new FormControl("", [
          Validators.required,
          Validators.pattern("[a-zA-Z0-9]+"),
        ]),
        address_2: new FormControl("", [
          Validators.required,
          Validators.pattern("[a-zA-Z0-9]+"),
        ]), //optional
        city: new FormControl(null, [
          Validators.required,
          Validators.pattern("[a-zA-Z0-9]+"),
        ]),
        ext: new FormControl("", [
          Validators.pattern("[0-9]+"),
          Validators.maxLength(3),
        ]),
        email: new FormControl("", [Validators.email]),
        zip: new FormControl(null, [
          Validators.required,
          Validators.pattern("[a-zA-Z0-9]+"),
        ]),
        tollFree: new FormControl("", [
          Validators.maxLength(3),
          Validators.pattern("[0-9]+"),
        ]),
        state: new FormControl(null, [
          Validators.required,
          Validators.pattern("[a-zA-Z0-9]+"),
        ]),
        country: new FormControl(null, [
          Validators.required,
          Validators.pattern("[a-zA-Z0-9]+"),
        ]),
        currency: new FormControl("USD", [Validators.required]),
        mcffOption: new FormControl("mc", [Validators.required]),
        factoringCompany: new FormControl(null),
        mcff: new FormControl(null, [Validators.required]),
        urs: new FormControl(null, [Validators.required]),
        scac: new FormControl(null, [Validators.required]),
        dot: new FormControl(null, [Validators.required]),
        paymentTerms: new FormControl("n30", Validators.required),
        telephone: new FormControl("", [
          Validators.required,
          Validators.minLength(16),
          Validators.maxLength(18),
        ]),
        taxID: new FormControl("", [
          Validators.maxLength(0),
          Validators.pattern("[0-9]+"),
        ]),
        note: new FormControl(""),
        faxNumber: new FormControl("", [
          Validators.minLength(16),
          Validators.maxLength(18),
        ]),
        businessType: new FormControl(),
        remittanceEmail: new FormControl("", [Validators.email]),
      }),

      liability: new FormGroup({
        liabilityCompany: new FormControl("", [Validators.required]),
        conatct: new FormControl("", [Validators.required]),
        telephone: new FormControl("", [
          Validators.required,
          Validators.minLength(16),
          Validators.maxLength(18),
        ]),
        ext: new FormControl("", [
          Validators.pattern("[0-9]+"),
          Validators.maxLength(3),
        ]),
        policyNumber: new FormControl("", [
          Validators.required,
          Validators.pattern("[0-9]+"),
        ]),
        expirationDate: new FormControl("", Validators.required),
        liability: new FormControl("", [
          Validators.pattern("[0-9]+"),
          Validators.required,
        ]),
        note: new FormControl(""),

      }),

      auto: new FormGroup({

        insCompany: new FormControl("", [Validators.required]),
        conatct: new FormControl("", [Validators.required]),
        telephone: new FormControl("", [
          Validators.required,
          Validators.minLength(16),
          Validators.maxLength(18),
        ]),
        ext: new FormControl("", [
          Validators.pattern("[0-9]+"),
          Validators.maxLength(3),
        ]),
        policyNumber: new FormControl("", [
          Validators.required,
          Validators.pattern("[0-9]+"),
        ]),
        expirationDate: new FormControl("", Validators.required),
        liability: new FormControl("", [
          Validators.pattern("[0-9]+"),
          Validators.required,
        ]),
        note: new FormControl(""),


      }),

      cargo: new FormGroup({
        cargoCompany: new FormControl("", [Validators.required]),
        conatct: new FormControl("", [Validators.required]),
        telephone: new FormControl("", [
          Validators.required,
          Validators.minLength(16),
          Validators.maxLength(18),
        ]),
        ext: new FormControl("", [
          Validators.pattern("[0-9]+"),
          Validators.maxLength(3),
        ]),
        policyNumber: new FormControl("", [
          Validators.required,
          Validators.pattern("[0-9]+"),
        ]),
        expirationDate: new FormControl("", Validators.required),
        cargoInsuarance: new FormControl("", [
          Validators.pattern("[0-9]+"),
          Validators.required,
        ]),
        wsib: new FormControl(""),

      }),

      fmcsa: new FormGroup({
        fmcsaCompany: new FormControl("", [Validators.required]),
        type: new FormControl("", [Validators.required]),
        telephone: new FormControl("", [
          Validators.required,
          Validators.minLength(16),
          Validators.maxLength(18),
        ]),
        ext: new FormControl("", [
          Validators.pattern("[0-9]+"),
          Validators.maxLength(3),
        ]),
        policyNumber: new FormControl("", [
          Validators.required,
          Validators.pattern("[0-9]+"),
        ]),
        expirationDate: new FormControl("", Validators.required),
        coverage: new FormControl("", [
          Validators.pattern("[0-9]+"),
          Validators.required,
        ]),

        amBestRating: new FormControl("", [
          Validators.required,
        ]),

      }),

    });


    this.submit = false;
    this.cDialCode = "";
    this.countryList = Country.getAllCountries();

    this.bTypes = [
      {
        name: "Corporation",
      },
      {
        name: "Sole proprietorship",
      },
    ];

    this.currencyList = [
      {
        code: "USD",
      },
      {
        code: "CAD",
      },
    ];

    this.mcff = [
      {
        name: "M.C.#",
        code: "mc",
      },
      {
        name: "F.F.#",
        code: "ff",
      },
    ];

    this.ratingList=[
      {
        name: "A+",
        value:"A+"
      },
      {
        name: "A",
        value:"A"
      },
      {
        name: "A-",
        value:"A-"
      },
      {
        name: "B+",
        value:"B+"
      },
      {
        name: "B",
        value:"B"
      },
      {
        name: "B-",
        value:"B-"
      },
      {
        name: "C+",
        value:"C+"
      },
      {
        name: "C",
        value:"C"
      },
      {
        name: "C-",
        value:"C-"
      },
      {
        name: "D",
        value:"D"
      }
    ]

    this.paymentTerms = [
      {
        name: "NET 30",
        code: "n30",
      },
      {
        name: "NET 20",
        code: "n20",
      },
      {
        name: "QuickPay 3%",
        code: "q3%",
      },
    ];
  }


  get form() {
    return this.carrierForm.get('profile')['controls']
  }

  get liability() {
    return this.carrierForm.get('liability')['controls']
  }
  get auto() {
    return this.carrierForm.get('auto')['controls']
  }
  get cargo() {
    return this.carrierForm.get('cargo')['controls']
  }

  get fmcsa() {
    return this.carrierForm.get('fmcsa')['controls']
  }

  onCountryChange($event) {
    this.countryCode = $event;
    this.stateList = State.getStatesOfCountry($event);
    this.cDialCode = `+${Country.getCountryByCode($event).phonecode}`;
  }

  onStateChange($event) {
    this.cityList = City.getCitiesOfState(this.countryCode, $event);
    console.log(this.cityList);
  }

  validSubmit() {
    this.submit = true;
    if (this.form.valid) {
      this.onSubmit.emit(this.form.value);
    }
  }

  onAddfactoringCompany() {
    this.modalRef = this.modalService.open(this.editModal, {
      scrollable: true,
      size: "xl",
      centered: true,
    });
  }
}

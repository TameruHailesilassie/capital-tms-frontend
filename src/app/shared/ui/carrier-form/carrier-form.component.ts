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
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Equipments } from "./equipments";
import { City, Country, State } from "country-state-city";
import { SaferwatchService } from "src/app/core/services/integration/saferwatch.service";
import { LoaderService } from "src/app/core/services/loader.service";
@Component({
  selector: "carrier-form",
  templateUrl: "./carrier-form.component.html",
  styleUrls: ["./carrier-form.component.scss"],
})
export class CarrierFormComponent implements OnInit {
  carrierForm: FormGroup;
  profileForm: FormGroup;
  searchForm: FormGroup;
  submit: boolean;
  stateList: any[];
  cDialCode: string;
  cityList: any[];
  ratingList: any[];
  equipmentList: any[];
  countryList: any[];
  factoringCompanies: any[];
  public modalRef: any;
  mcff: any[];
  mcffSearch: any[];
  bTypes: any[];
  countryCode: string;
  currencyList: any[];
  paymentTerms: any[];
  isSearching:boolean=false;
  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    public saferWatchService: SaferwatchService
   
  ) { }
  @Input() formData;
  @Output() onSubmit = new EventEmitter();
  @Output() onCancel = new EventEmitter();
  @ViewChild("factoringCompanyAddModal") editModal: ElementRef;

  ngOnInit(): void {
    this.saferWatchService.checkAddon();
    this.searchForm = new FormGroup({
      mcff: new FormControl("MC", Validators.required),
      searchValue: new FormControl("", Validators.required)
    })

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
        liabilityCompany: new FormControl(""),
        conatct: new FormControl(""),
        telephone: new FormControl("", [
          Validators.minLength(16),
          Validators.maxLength(18),
        ]),
        ext: new FormControl("", [
          Validators.pattern("[0-9]+"),
          Validators.maxLength(3),
        ]),
        policyNumber: new FormControl("", [

          Validators.pattern("[0-9]+"),
        ]),
        expirationDate: new FormControl(""),
        liability: new FormControl("", [
          Validators.pattern("[0-9]+"),

        ]),
        note: new FormControl(""),

      }),

      auto: new FormGroup({

        insCompany: new FormControl(""),
        conatct: new FormControl(""),
        telephone: new FormControl("", [

          Validators.minLength(16),
          Validators.maxLength(18),
        ]),
        ext: new FormControl("", [
          Validators.pattern("[0-9]+"),
          Validators.maxLength(3),
        ]),
        policyNumber: new FormControl("", [

          Validators.pattern("[0-9]+"),
        ]),
        expirationDate: new FormControl(""),
        liability: new FormControl("", [
          Validators.pattern("[0-9]+"),

        ]),
        note: new FormControl(""),


      }),

      cargo: new FormGroup({
        cargoCompany: new FormControl("", [Validators.required]),
        conatct: new FormControl("", [Validators.required]),
        telephone: new FormControl("", [

          Validators.minLength(16),
          Validators.maxLength(18),
        ]),
        ext: new FormControl("", [
          Validators.pattern("[0-9]+"),
          Validators.maxLength(3),
        ]),
        policyNumber: new FormControl("", [

          Validators.pattern("[0-9]+"),
        ]),
        expirationDate: new FormControl("", Validators.required),
        cargoInsuarance: new FormControl("", [
          Validators.pattern("[0-9]+"),

        ]),
        wsib: new FormControl(""),

      }),

      fmcsa: new FormGroup({
        fmcsaCompany: new FormControl(""),
        type: new FormControl(""),
        telephone: new FormControl("", [

          Validators.minLength(16),
          Validators.maxLength(18),
        ]),
        ext: new FormControl("", [
          Validators.pattern("[0-9]+"),
          Validators.maxLength(3),
        ]),
        policyNumber: new FormControl("", [

          Validators.pattern("[0-9]+"),
        ]),
        expirationDate: new FormControl("", Validators.required),
        coverage: new FormControl("", [
          Validators.pattern("[0-9]+"),

        ]),
        amBestRating: new FormControl("", [

        ]),

      }),

      equipments: new FormArray([
        this.equipmentfield()
      ]),
      gNote: new FormControl("")
    });


    this.fetchEquipmentList();
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
        code: "MC",
      },
      {
        name: "F.F.#",
        code: "FF",
      },
      {
        name: "M.X.#",
        code: "MX",
      },
      {
        name: "D.O.T.#",
        code: "DOT",
      },
    ];

    this.mcffSearch = [
      {
        name: "M.C.#",
        code: "MC",
      },
      {
        name: "F.F.#",
        code: "FF",
      },
      {
        name: "M.X.#",
        code: "MX",
      },
      {
        name: "D.O.T.#",
        code: "DOT",
      }
        ];

    this.ratingList = [
      {
        name: "A+",
        value: "A+"
      },
      {
        name: "A",
        value: "A"
      },
      {
        name: "A-",
        value: "A-"
      },
      {
        name: "B+",
        value: "B+"
      },
      {
        name: "B",
        value: "B"
      },
      {
        name: "B-",
        value: "B-"
      },
      {
        name: "C+",
        value: "C+"
      },
      {
        name: "C",
        value: "C"
      },
      {
        name: "C-",
        value: "C-"
      },
      {
        name: "D",
        value: "D"
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

  equipments(): FormArray {
    return this.carrierForm.get('equipments') as FormArray;
  }

  equipmentfield(): FormGroup {
    return new FormGroup({
      equipment: new FormControl(null, Validators.required),
      qty: new FormControl(null, Validators.required),
    });
  }

  addField() {
    this.equipments().push(this.equipmentfield());
  }

  removeField(i: number) {
    this.equipments().removeAt(i);

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
  searchSubmit() {

    if (this.searchForm.valid) {
      this.isSearching=true;
  
      this.saferWatchService.searchCarrier(
        {
          identifier:this.searchForm.get('mcff').value,
          parameter:this.searchForm.get('searchValue').value
        }
      )

    }
  }
  onAddfactoringCompany() {
    this.modalRef = this.modalService.open(this.editModal, {
      scrollable: true,
      size: "xl",
      centered: true,
    });
  }


  fetchEquipmentList() {

    this.equipmentList = Equipments;

  }
}

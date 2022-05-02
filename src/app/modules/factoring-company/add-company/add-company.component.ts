import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Country, City, State } from "country-state-city";
import { CompanyService } from "src/app/core/services/company.service";

@Component({
  selector: "app-add-company",
  templateUrl: "./add-company.component.html",
  styleUrls: ["./add-company.component.scss"],
})
export class AddCompanyComponent implements OnInit {
  companyForm: FormGroup;
  breadCrumbItems: Array<{}>;
  submit: boolean;
  stateList: any[];
  cDialCode:string;
  cityList: any[];
  countryList: any[];
  countryCode: string;
  currencyList: any[];
  paymentTerms: any[];

  constructor(
    private formBuilder: FormBuilder,
    private service: CompanyService
  ) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((data) => {
      //console.log(data);
    });

    this.companyForm = this.formBuilder.group({
      name: new FormControl("", [Validators.required]),
      primaryConatct: new FormControl(""),
      telephone: new FormControl("", [Validators.required, Validators.minLength(16), Validators.maxLength(18)]),
      ext: new FormControl('', [Validators.pattern("[0-9]+"), Validators.maxLength(3)]),
      fax: new FormControl("", [ Validators.minLength(16), Validators.maxLength(18)]),
      email: new FormControl("", [Validators.email]),
      tollFree: new FormControl("", [Validators.maxLength(3), Validators.pattern("[0-9]+")]),
      address_1: new FormControl("", [Validators.required, Validators.pattern("[a-zA-Z0-9]+")]),
      address_2: new FormControl("", [Validators.required, Validators.pattern("[a-zA-Z0-9]+")]), //optional
      city: new FormControl(null, [Validators.required, Validators.pattern("[a-zA-Z0-9]+")]),
      state: new FormControl(null, [Validators.required, Validators.pattern("[a-zA-Z0-9]+")]),
      country: new FormControl(null, [Validators.required, Validators.pattern("[a-zA-Z0-9]+")]),
      zip: new FormControl(null, [Validators.required, Validators.pattern("[a-zA-Z0-9]+")]),
      currency: new FormControl("USD", [Validators.required]),
      paymentTerms: new FormControl("n30", Validators.required),
      remittanceEmail: new FormControl("", [Validators.email]),
      taxID: new FormControl("", [Validators.maxLength(9), Validators.pattern("[0-9]+")]),
      note: new FormControl("")
    });

    this.breadCrumbItems = [
      { label: "factoring-company" },
      { label: "Add", active: true },
    ];
    this.submit = false;
    this.cDialCode='';
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
  }

  validSubmit() {
    this.submit = true;
    console.log(this.form.telephone.value.length);
  }
  onCountryChange($event) {
    this.countryCode = $event;
    this.stateList = State.getStatesOfCountry($event);
    this.cDialCode = `+${Country.getCountryByCode($event).phonecode}`
    console.log(this.cDialCode);
    
  }

  onStateChange($event) {
    this.cityList = City.getCitiesOfState(this.countryCode, $event);
  }
  get form() {
    return this.companyForm.controls;
  }
}

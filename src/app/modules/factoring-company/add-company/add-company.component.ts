import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { States } from "./states";
import { Country, State, } from 'country-state-city-slim';

@Component({
  selector: "app-add-company",
  templateUrl: "./add-company.component.html",
  styleUrls: ["./add-company.component.scss"],
})
export class AddCompanyComponent implements OnInit {
  companyForm: FormGroup;
  breadCrumbItems: Array<{}>;
  submit: boolean;
  stateList: any[]
  countryList:any[];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.companyForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      address_1: [
        "",
        [Validators.required, Validators.pattern("[a-zA-Z0-9]+")],
      ],
      address_2: [
        "",
        [Validators.required, Validators.pattern("[a-zA-Z0-9]+")],
      ], //optional
      city: [null, [Validators.required, Validators.pattern("[a-zA-Z0-9]+")]],
      state: [null, [Validators.required, Validators.pattern("[a-zA-Z0-9]+")]],
      country: [null, [Validators.required, Validators.pattern("[a-zA-Z0-9]+")]],
      phoneNumber: ["", Validators.required],
      remittanceEmail: ["", [Validators.required, Validators.email]],
      faxNumber: ["", [Validators.required, Validators.pattern("[0-9]+")]], //digit pattern
    });

    this.breadCrumbItems = [
      { label: "factoring-company" },
      { label: "Add", active: true },
    ];
    this.submit = false;
    this.countryList = Country.getAllCountries();
    console.log(Country.getAllCountries());

  }

  validSubmit() {
    this.submit = true;
   // console.log( this.form.state.errors);
    console.log(this.companyForm.value);

    //alert(`valid=${this.form.name.errors}`)
  }
  onCountryChnage(event){
console.log(event);
this.stateList=State.getStatesOfCountry(event)

  }
  get form() {
    return this.companyForm.controls;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit {

 companyForm:FormGroup;
 breadCrumbItems: Array<{}>;
 submit: boolean;
  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.companyForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      city: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      state: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      zip: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    });

    this.breadCrumbItems = [
      { label: "factoring-company" },
      { label: "Add", active: true },
    ];

  }


   validSubmit(){

  }
  get form() {
    return this.companyForm.controls;
  }

}

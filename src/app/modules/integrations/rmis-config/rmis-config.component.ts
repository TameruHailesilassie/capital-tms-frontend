import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Breadcrumb } from 'src/app/core/services/breadcrumb.service';

@Component({
  selector: 'app-rmis-config',
  templateUrl: './rmis-config.component.html',
  styleUrls: ['./rmis-config.component.scss']
})
export class RmisConfigComponent implements OnInit {

  rmisFromGroup: FormGroup;
  submit: boolean;

  breadCrumbItems: Breadcrumb[];
  constructor(
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {

    this.submit = false;
    this.rmisFromGroup = this._fb.group({
      rmisClientID: new FormControl("", Validators.required),
      rmisClientPwd: new FormControl("", Validators.required)
    })

    this.breadCrumbItems = [{
      label: "integrations",
      url: "/integrations",
      active: true
    },
    {
      label: "rmis",
      url: "",
      active: false
    }

    ]
  }

  get form() {
    return this.rmisFromGroup.controls
  }

  onSubmit() {

    this.submit = true;
    if (!this.form.valid) {
      console.log(this.form.value);

    }
  }

  disable(){

    console.log("disabling---rmis");
    
  }

}

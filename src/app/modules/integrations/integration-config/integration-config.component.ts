import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-integration-config',
  templateUrl: './integration-config.component.html',
  styleUrls: ['./integration-config.component.scss']
})
export class IntegrationConfigComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }


  configRmis() {
    this._router.navigate(["integrations/rmis"])
  }

  configSaferwatch() {
    this._router.navigate(["integrations/saferWatch"])
  }
  configQuickBook() {

    this._router.navigate(["integrations/quickBooks"])
  }

}

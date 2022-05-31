import { Component, OnInit } from "@angular/core";
import { Breadcrumb } from "src/app/core/services/breadcrumb.service";
import { CompanyService } from "src/app/core/services/company.service";

@Component({
  selector: "app-add-company",
  templateUrl: "./add-company.component.html",
  styleUrls: ["./add-company.component.scss"],
})

export class AddCompanyComponent implements OnInit {

  breadCrumbItems: Breadcrumb[];
  constructor(
    private service: CompanyService
  ) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((data) => {

    });

  }

  onSubmit($event): void {
    console.log($event);


  }





}

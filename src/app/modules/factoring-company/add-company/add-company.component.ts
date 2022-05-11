import { Component, OnInit } from "@angular/core";
import { CompanyService } from "src/app/core/services/company.service";

@Component({
  selector: "app-add-company",
  templateUrl: "./add-company.component.html",
  styleUrls: ["./add-company.component.scss"],
})

export class AddCompanyComponent implements OnInit {

  breadCrumbItems: Array<{}>;
  constructor(
    private service: CompanyService
  ) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((data) => {
      //console.log(data);
    });


    this.breadCrumbItems = [
      { label: "factoring-company" },
      { label: "Add", active: true },
    ];

    

  }

  onSubmit($event):void{
      console.log($event);
      
  
  }

 
 
 
  
}

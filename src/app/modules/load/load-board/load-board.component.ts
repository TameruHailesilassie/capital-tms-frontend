import { Component, OnInit } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { LoadService, LOAD_TAB_TYPE} from "src/app/core/services/loadService";
import { AuthfakeauthenticationService } from "src/app/core/services/authfake.service";
import { ActivatedRoute } from "@angular/router";
import { Breadcrumb, BreadcrumbService } from "src/app/core/services/breadcrumb.service";

@Component({
  selector: "app-load-board",
  templateUrl: "./load-board.component.html",
  styleUrls: ["./load-board.component.scss"],
  providers: [LoadService, DecimalPipe],
})
export class LoadBoardComponent implements OnInit {
  breadCrumbItems: Breadcrumb[];
  tabType = LOAD_TAB_TYPE;
  onlyMyLoad = false;

  constructor(
    public service: LoadService,
    public route:ActivatedRoute,
    public authService: AuthfakeauthenticationService,
  
  ) {}
  isAdmin: boolean = false;

  ngOnInit(): void {
   
    this.service.fetchLoads();
    this.isAdmin =
      this.authService.currentUserValue.role === "super-admin" ||
      this.authService.currentUserValue.role === "office-admin";
  }


  onShowMyLods() {
    if (this.onlyMyLoad) this.service.showMyLoads();
    else this.service.showAllLoads();
  }


}

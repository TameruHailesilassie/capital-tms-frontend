import { Component, OnInit } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { LoadService } from "../loadService";

@Component({
  selector: "app-load-board",
  templateUrl: "./load-board.component.html",
  styleUrls: ["./load-board.component.scss"],
  providers: [LoadService, DecimalPipe],
})
export class LoadBoardComponent implements OnInit {
  breadCrumbItems: Array<{}>;

  constructor(public service: LoadService) {}

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Loads" },
      { label: "Load Board", active: true },
    ];
  }
}

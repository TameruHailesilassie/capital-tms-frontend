import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-load-attribute-modal",
  templateUrl: "./load-attribute-modal.component.html",
  styleUrls: ["./load-attribute-modal.component.scss"],
})
export class LoadAttributeModalComponent implements OnInit {
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
}

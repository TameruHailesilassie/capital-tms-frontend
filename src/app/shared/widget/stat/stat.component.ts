import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-stat",
  templateUrl: "./stat.component.html",
  styleUrls: ["./stat.component.scss"],
})
export class StatComponent implements OnInit {
  @Input() title: string;
  @Input() value: number;
  @Input() icon: string;
  @Input() comparison: number;
  @Input() isCurrency: boolean = false;

  constructor() {}

  ngOnInit() {}
}

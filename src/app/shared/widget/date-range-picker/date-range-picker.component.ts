import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import * as moment from "moment";
export interface DateRangeSelectedEvent {
  startDate: String;
  endDate: String;
}

@Component({
  selector: "date-range-picker",
  templateUrl: "./date-range-picker.component.html",
  styleUrls: ["./date-range-picker.component.scss"],
})
export class DateRangePickerComponent implements OnInit {
  selectedDateRange: any = { startDate: null, endDate: null };
  locale: any = {
    format: "MMM-DD-YYYY", // could be 'YYYY-MM-DDTHH:mm:ss.SSSSZ'
    displayFormat: "MMM-DD-YYYY", // default is format value
    direction: "ltr", // could be rtl
    separator: " To ", // default is ' - '
    customRangeLabel: "Custom range",
    firstDay: 1, // first day is monday
  };
  constructor() {}

  @Input() ranges: any;
  @Output() rangeSelected = new EventEmitter<DateRangeSelectedEvent>();

  ngOnInit(): void {
    this.selectedDateRange.startDate = moment().startOf("month");
    this.selectedDateRange.endDate = moment().endOf("month");
  }

  choosedDate(range) {
    if (range.startDate !== null && range.endDate !== null) {
      this.rangeSelected.emit({
        startDate: range.startDate.format("MMM-DD-YYYY"),
        endDate: range.endDate.format("MMM-DD-YYYY"),
      });
    }
  }
}

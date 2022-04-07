import { Directive, EventEmitter, Input, Output } from "@angular/core";

export interface ShowPopupEvent {
  attribute: string;
  attributeID: number;
}

@Directive({
  selector: "td[showDetail]",
  host: {
    "(click)": "triggerEvent()",
  },
})
export class LoadShowDetailDirective {
  constructor() {}
  @Input() loadAttribute: string;
  @Input() loadAttributeId: number;
  @Output() showPopup = new EventEmitter<ShowPopupEvent>();

  triggerEvent() {
    this.showPopup.emit({
      attribute: this.loadAttribute,
      attributeID: this.loadAttributeId,
    });
  }
}

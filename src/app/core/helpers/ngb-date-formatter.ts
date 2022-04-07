import {
    NgbDateParserFormatter,
    NgbDate,
    NgbDateStruct,
  } from '@ng-bootstrap/ng-bootstrap';
  import { Injectable } from '@angular/core';
  

  function isNumber(value: any): boolean {
    return !isNaN(toInteger(value));
}
function toInteger(value: any): number {
  return parseInt(`${value}`, 10);
}

  @Injectable()
  export class NgbDateCustomParserFormatter extends NgbDateParserFormatter {
    parse(value: string): NgbDate {
      if (value) {
        const dateParts = value.trim().split('-');
        if (dateParts.length === 1 && isNumber(dateParts[0])) {
          return new NgbDate(toInteger(dateParts[0]), null, null);
        } else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
          return new NgbDate(toInteger(dateParts[0]), toInteger(dateParts[1]) - 1, null);
        } else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
          return new NgbDate(toInteger(dateParts[0]), toInteger(dateParts[1]) - 1, toInteger(dateParts[2]));
        }
      }
      return null;
    }
  
    static formatDate(date: NgbDateStruct | NgbDate | null): string {
      var  months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
       "Aug", "Sept", "Oct", "Nov", "Dec"];
      return date
        ? `${months[date.month-1]} ${("0"+date.day).slice(-2)}, ${date.year || ''}`
        : '';
       
  }
    
    format(date: NgbDateStruct | null): string {
      return NgbDateCustomParserFormatter.formatDate(date);
    }

  }
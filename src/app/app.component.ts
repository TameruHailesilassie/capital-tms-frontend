import { Component , OnInit} from '@angular/core';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateCustomParserFormatter } from './core/helpers/ngb-date-formatter';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[{ provide: NgbDateParserFormatter, useFactory: () => new NgbDateCustomParserFormatter(),}]
})
export class AppComponent implements OnInit  {

  constructor(
private themeServise:ThemeService

  ){}

  ngOnInit() {
    // document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");


  }
}

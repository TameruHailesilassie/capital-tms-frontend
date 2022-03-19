import { Component , OnInit} from '@angular/core';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {

  constructor(
private themeServise:ThemeService

  ){}

  ngOnInit() {
    // document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");


  }
}

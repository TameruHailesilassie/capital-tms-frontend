import { Injectable } from '@angular/core';

import { Subject, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    
    constructor(@Inject(DOCUMENT) private document: Document) { }


    loadStyle(styleName: string) {
        const head = this.document.getElementsByTagName('head')[0];
    
        let themeLink = this.document.getElementById(
          'client-theme'
        ) as HTMLLinkElement;
        if (themeLink) {
          themeLink.href = styleName;
        } else {
          const style = this.document.createElement('link');
          style.id = 'client-theme';
          style.rel = 'stylesheet';
          style.href = `${styleName}`;
    
          head.appendChild(style);
        }
      }

}

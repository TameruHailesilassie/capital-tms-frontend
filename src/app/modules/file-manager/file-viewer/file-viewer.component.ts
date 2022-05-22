import { Component, OnInit } from '@angular/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-file-viewer',
  templateUrl: './file-viewer.component.html',
  styleUrls: ['./file-viewer.component.scss'],
  providers: [
    NgbDropdown
  ]
})
export class FileViewerComponent implements OnInit{
  // bread crumb items
  breadCrumbItems: Array<{}>;
  constructor() { }
  public isCollapsed = false;
  
  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Apps' }, { label: 'File Manager', active: true }];

   
  }
  
  
}

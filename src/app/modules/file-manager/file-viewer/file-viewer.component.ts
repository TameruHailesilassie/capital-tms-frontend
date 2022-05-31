import { Component, OnInit } from '@angular/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { Breadcrumb, BreadcrumbService } from 'src/app/core/services/breadcrumb.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-file-viewer',
  templateUrl: './file-viewer.component.html',
  styleUrls: ['./file-viewer.component.scss'],
  providers: [
    NgbDropdown
  ]
})
export class FileViewerComponent implements OnInit {
  // bread crumb items
  breadCrumb: Breadcrumb[];

  constructor(private activatedRouter: ActivatedRoute, private breadCrumbService: BreadcrumbService) { }
  public isCollapsed = false;

  ngOnInit(): void {
    this.breadCrumb = this.breadCrumbService.getCurrentBreadCrumb();
  }


}

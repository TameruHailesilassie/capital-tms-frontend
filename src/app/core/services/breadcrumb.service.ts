import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Data, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export interface Breadcrumb {
  label: String,
  url: String,
  active: boolean
}

@Injectable({
  providedIn: 'root'
})

export class BreadcrumbService {


  private breadCrumbList: Breadcrumb[];
  // Subject emitting the breadcrumb hierarchy 
  private readonly _breadcrumbs$ = new BehaviorSubject<Breadcrumb[]>([]);

  // Observable exposing the breadcrumb hierarchy 
  readonly breadcrumbs$ = this._breadcrumbs$.asObservable();

  constructor(private router: Router) {

    this.router.events.pipe(
      // Filter the NavigationEnd events as the breadcrumb is updated only when the route reaches its end 
      filter((event) => event instanceof NavigationEnd)
    ).subscribe(event => {
      // Construct the breadcrumb hierarchy 
      const root = this.router.routerState.snapshot.root;
      const breadcrumbs: Breadcrumb[] = [];
      this.addBreadcrumb(root, [], breadcrumbs);
      // Emit the new hierarchy 
      this._breadcrumbs$.next(breadcrumbs);
    });
  }

  public getCurrentBreadCrumb() {
    this._breadcrumbs$.subscribe(list => {
      list[list.length - 1].active = false;
      this.breadCrumbList = list;
    })

    return this.breadCrumbList;
  }

  private addBreadcrumb(route: ActivatedRouteSnapshot, parentUrl: string[], breadcrumbs: Breadcrumb[]) {
    if (route) {
      // Construct the route URL 
      const routeUrl = parentUrl.concat(route.url.map(url => url.path))

      // Add an element for the current route part 
      if (route.data.breadcrumb) {
        const breadcrumb = {
          label: this.getLabel(route.data),
          url: '/' + routeUrl.join('/'),
          active: true

        };
        breadcrumbs.push(breadcrumb);
      }


      // Add another element for the next route part 
      this.addBreadcrumb(route.firstChild, routeUrl, breadcrumbs);
    }
  }

  private getLabel(data: Data) {
    // The breadcrumb can be defined as a static string or as a function to construct the breadcrumb element out of the route data 
    return typeof data.breadcrumb === 'function' ? data.breadcrumb(data) : data.breadcrumb;
  }

}
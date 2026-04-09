import { ICurrentRoute, IRouterEvents } from '@aurelia/router';
import { resolve } from '@aurelia/kernel';

export class NavBar {
  private readonly currentRoute = resolve(ICurrentRoute);
  private currentPath = '';

  constructor() {
    resolve(IRouterEvents).subscribe('au:router:navigation-end', () => {
      this.currentPath = this.currentRoute.path;
    });
  }
}

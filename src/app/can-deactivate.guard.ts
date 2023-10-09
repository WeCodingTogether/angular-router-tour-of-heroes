import { ActivatedRouteSnapshot, CanDeactivateFn, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs'
import { CrisisDetailComponent } from './crisis-center/crisis-detail/crisis-detail.component';

export interface CanComponentDeactivate {
  canDeactivate?: () => Observable<boolean> | Promise<boolean> | boolean;
}

// export const canDeactivateGuard: CanDeactivateFn<CanComponentDeactivate> =
//     (component: CanComponentDeactivate) => component.canDeactivate ? component.canDeactivate(): true;
export const canDeactivateGuard: CanDeactivateFn<CrisisDetailComponent> = (
  component: CrisisDetailComponent,
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> | boolean => {
  // get the Crisis Center ID
  console.log(route.paramMap.get('id'));
  // get the currentr Url
  console.log(state.url);

  if(!component.crisis || component.crisis.name === component.editName) {
    return true;
  }

  return component.dialogService.confirm('Discard changes?');
}


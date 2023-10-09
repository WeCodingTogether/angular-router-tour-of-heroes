import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CrisisCenterRoutingModule } from './crises-center-routing.module';
import { CrisisDetailComponent} from './crisis-detail/crisis-detail.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { Routes } from '@angular/router';


@NgModule({
  declarations: [
    CrisisDetailComponent,
    CrisisListComponent,
    CrisisCenterComponent,
    CrisisCenterHomeComponent,
  ],
  imports: [
    CommonModule,
    CrisisCenterRoutingModule,
    FormsModule,
    // HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false}
    // ),
  ]
})
export class CrisisCenterModule { }

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Observable} from 'rxjs';

import {Crisis} from '../crisis';
import { DialogService } from 'src/app/dialog.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {
  crisis!: Crisis;
  editName = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialogService: DialogService) {
  }


  ngOnInit() {
    this.route.data.subscribe(data => {
      const crisis: Crisis | undefined = data['crisis'];
      if(crisis) {
        this.editName = crisis.name;
        this.crisis = crisis;
      } else {
        console.error('Connot access crisis from route data.')
      }
    });
  }

  cancel() {
    this.goToCrises();
  }

  save() {
    this.crisis.name = this.editName;
    this.goToCrises();
  }

  canDeactivate(): Observable<boolean> | boolean {
    if(!this.crisis || this.crisis.name === this.editName) {
      return true;
    }
    return this.dialogService.confirm('Discard changes?')
 }

  goToCrises() {
    const crisisId = this.crisis ? this.crisis.id : null;
    // Pass along the crisis id if available
    // so that the CrisisListComponent can select that crisis.
    // Add a totally useless `foo` parameter for kicks.
    // Relative navigation back to the crises
    this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
  }


}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

import {Crisis} from '../crisis';
import {CrisisService} from '../crisis.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {
  crisis$!: Observable<Crisis>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CrisisService) {
  }


  ngOnInit() {
    this.crisis$ = this.route.paramMap.pipe(
        switchMap((params: ParamMap) => this.service.getCrisis(Number(params.get('id')!))));
    // const id = this.route.snapshot.paramMap.get('id');
    // this.crisis$ = this.service.getCrisis(id!);
  }

  gotoCrisises(crisis: Crisis) {
    //this.router.navigate(['/crisises']);
    const crisisId = crisis ? crisis.id : null;
    // Pass along the crisis id if available
    // so that the CrisisList component can select that crisis.
    // Include a junk 'foo' property for fun.
    // this.router.navigate(['/crisis-center', {id: crisisId, foo: 'foo'}]);

    //using relative path navigation
    //这个路径使用了 ../ 语法返回上一级。如果当前危机的 id 是 3，那么最终返回到的路径就是 /crisis-center/;id=3;foo=foo
    this.router.navigate(
      ['../', { id: crisisId, foo: 'foo'}],
      { relativeTo: this.route }
    );
  }
}

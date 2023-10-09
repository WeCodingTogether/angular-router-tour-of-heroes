import { Component, OnInit } from '@angular/core';

import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';
import { MessageService } from 'src/app/mesage.service';
import { Observable } from 'rxjs/internal/Observable';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {

  crises$?: Observable<Crisis[]>;
  selectedId = 0;

  constructor(
    private service: CrisisService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.crises$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10); // 10 表示使用十进制进行转换, 更符合日常用法
        return this.service.getCrisises();
      })
    );
  }
}

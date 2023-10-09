import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from 'src/app/mesage.service';
import { Observable } from 'rxjs/internal/Observable';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes$!: Observable<Hero[]>;
  selectedId = 0;

  constructor(
    private service: HeroService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.heroes$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10); // 10 表示使用十进制进行转换, 更符合日常用法
        return this.service.getHeroes();
      })
    );
  }
}

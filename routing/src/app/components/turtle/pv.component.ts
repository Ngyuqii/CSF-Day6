import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pv',
  templateUrl: './pv.component.html',
  styleUrls: ['./pv.component.css']
})

export class PvComponent implements OnInit, OnDestroy {

  num = "";
  param$! : Subscription;

  name! : string[];
  queryParams$! :  Subscription;

  constructor(private activatedRoute: ActivatedRoute){ };

  ngOnInit(): void {
      //1. Path Variable
      //http://localhost:4200/adoptaturtle/{pvId}
      this.param$ = this.activatedRoute.params.subscribe(
        params => {
          this.num= params["pvId"];
          console.log(this.num);
        }
      );

      //2. Query Param
      //http://localhost:4200/adoptaturtle/{pvId}?name=name1|name2|name3
      this.queryParams$ = this.activatedRoute.queryParams.subscribe(
        (queryParams) => {
          this.name = queryParams['name'].split('|');
          console.log(this.name);
        }
      );
  }

  ngOnDestroy(): void {
      this.param$.unsubscribe();
      this.queryParams$.unsubscribe();
  }

}

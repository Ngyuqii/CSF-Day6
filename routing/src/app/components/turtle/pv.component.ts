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

  constructor(private activatedRoute: ActivatedRoute){ };

  ngOnInit(): void {
      this.param$ = this.activatedRoute.params.subscribe(
        params => {
          this.num= params["pvId"];
          console.log(this.num);
        }
      );
  }

  ngOnDestroy(): void {
      this.param$.unsubscribe();
  }

}

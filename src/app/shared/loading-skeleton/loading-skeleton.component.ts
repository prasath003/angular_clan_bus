import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-skeleton',
  templateUrl: './loading-skeleton.component.html',
  styleUrls: ['./loading-skeleton.component.scss']
})
export class LoadingSkeletonComponent implements OnInit {
  skeletonView: Array<any> = new Array(5);
  constructor() { }

  ngOnInit() {
  }

}

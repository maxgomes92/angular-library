import { Component, OnInit } from '@angular/core';
import { MyLibService } from './my-lib.service';

@Component({
  selector: 'lib-my-lib',
  templateUrl: './my-lib.page.html',
})
export class MyLibComponent implements OnInit {
  public currentTime: string;

  constructor(
    public myLibService: MyLibService,
  ) { }

  ngOnInit(): void {
  }

  onClick() {
    this.currentTime = this.myLibService.getTime();
    console.log('click', this.currentTime)
  }
}

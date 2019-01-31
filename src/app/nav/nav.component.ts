import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isNavShow: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  w3_close() {
    this.isNavShow = false
  }

  w3_open() {
    console.log('inside w3_open')
    this.isNavShow = true
  }
}

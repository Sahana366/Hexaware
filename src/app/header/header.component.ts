import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerMenuDisplay: any = "flex";
  constructor() { }

  ngOnInit(): void {
    this.headerMenuDisplay = (window.innerWidth <= 1080) ? "none" : "flex";
  }
  scrollToElement(target:any): void {
    target.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  onResize(event: any) {
    console.log(event)
    this.headerMenuDisplay = (event.target.innerWidth <= 1080) ? "none" : "flex";
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  svgDisplay: any;

  constructor() { }

  ngOnInit(): void {
    this.svgDisplay = (window.innerWidth <= 1080) ? "none" : "block";
  }
  onResize(event: any) {
    console.log(event)
    this.svgDisplay = (event.target.innerWidth <= 1080) ? "none" : "block";
  }

}

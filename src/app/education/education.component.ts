import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  breakpoints: number = 12;
  eduColums: any = [3,9];
  eduWidth: any = "80%";
  eduRowHeight: any;

  constructor() { }

  ngOnInit(): void {
    this.onResize(window);
  }
  onResize(event: any) {
    console.log(event.innerWidth)
    // this.breakpoints = (event.target.innerWidth <= 400) ? 4 : 12;
    if(event.innerWidth <= 400){
      this.breakpoints = 4;
      this.eduColums[0] = 4;
      this.eduColums[1] = 4;
      this.eduWidth = "95%";
    }
    else if(event.innerWidth > 400 && event.innerWidth < 1080){
      this.breakpoints = 4;
      this.eduColums[0] = 4;
      this.eduColums[1] = 4;
      this.eduWidth = "90%";
    }
    else if(event.innerWidth > 1080){
      this.breakpoints = 12;
      this.eduColums[0] = 4;
      this.eduColums[1] = 4;
      this.eduWidth = "80%";
    }
  }
}

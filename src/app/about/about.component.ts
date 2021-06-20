import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  breakpoints: number = 12;
  aboutColums: any = [3,9];
  aboutWidth: any = "80%";
  aboutRowHeight: any = "200px"
  aboutBullets: any = [
    "Well qualified Fullstack Developer offering 3 years of experience with wide range of programming utilities in MEAN and MERN stack.",
    "Complex problem solver with an analytical and driven mindset.",
    "Dedicated to achieving demanding development objectives according to tight schedules while producing impeccable code."
  ]
  constructor() { }

  ngOnInit(): void {
    // this.breakpoints = (window.innerWidth <= 400) ? 3 : 12;
    this.onResize(window);
  }
  onResize(event: any) {
    console.log(event.innerWidth)
    // this.breakpoints = (event.target.innerWidth <= 450) ? 3 : 12;
    if(event.innerWidth <= 400){
      this.breakpoints = 3;
      this.aboutColums[0] = 3;
      this.aboutColums[1] = 3;
      this.aboutWidth = "95%";
      this.aboutRowHeight = "250px"
    }
    if(event.innerWidth > 400 && event.innerWidth < 1080){
      this.breakpoints = 9;
      this.aboutColums[0] = 3;
      this.aboutColums[1] = 6;
      this.aboutWidth = "90%";
      this.aboutRowHeight = "300px"
    }
    if(event.innerWidth > 1080){
      this.breakpoints = 12;
      this.aboutColums[0] = 3;
      this.aboutColums[1] = 9;
      this.aboutWidth = "80%";
      this.aboutRowHeight = "200px"
    }
  }

}

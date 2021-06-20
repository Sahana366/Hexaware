import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from '../skills/skills.component';
import { AboutComponent } from '../about/about.component';
import { EducationComponent } from '../education/education.component';
import { ContactComponent } from '../contact/contact.component';



@NgModule({
  declarations: [
    SkillsComponent,
    AboutComponent,
    EducationComponent,
    ContactComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeaderModule { }

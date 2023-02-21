import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  })

  updateName(){
  }
}

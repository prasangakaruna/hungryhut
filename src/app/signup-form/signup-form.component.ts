import { Component, OnInit } from '@angular/core';
import { Hero }    from '../hero';
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {


  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero();

  submitted = true;

  onSubmit() { console.log(this.model); }

  // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }


}

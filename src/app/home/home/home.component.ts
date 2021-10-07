import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../../core/Services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  foods: any[] = [];
  formData: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private loginService: LoginService
  ) {

    // form Data
    this.formData = this._fb.group(
      {
        food: new FormControl()
      }
    );

    // set foods value

    var foods = JSON.parse(localStorage.getItem('Foods') || '[]');
    this.foods = foods;
    console.log(this.foods);


    // localStorage.getItem('Foods');
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.foods.push(this.formData.value['food']);
    localStorage.setItem('Foods', JSON.stringify(this.foods));
    this.formData.reset();
  }

}

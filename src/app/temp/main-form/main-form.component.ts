import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {
  formsElements = [
    {key: 'name', display: 'Név'},
    {key: 'email', display: 'E-mail'},
    {key: 'address', display: 'Cím'},
  ];

  profileForm = new FormGroup({});

  mainData: any ={};
   
  constructor() { }

  ngOnInit() {
    for (let i = 0; i < this.formsElements.length; i++) {
      this.profileForm.addControl(this.formsElements[i].key, new FormControl('', Validators.required));
    }  
  }

  submitForm(){
    for (let i = 0; i < this.formsElements.length; i++) {
      this.mainData[this.formsElements[i].key] = this.profileForm.get(this.formsElements[i].key)?.value;
    }

    if(this.profileForm.valid){
      this.profileForm.reset();

    }
    console.log(this.mainData);
    
    /* for (const key in this.profileForm.value) {
      console.log(key);
      this.profileForm.get(key)?.setValue("");
    } */
    
  }
}

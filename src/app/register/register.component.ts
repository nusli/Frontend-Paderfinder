import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  hide = true;
  public myVar:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  registerClicked(): void{
    this.myVar = true;
   }
}

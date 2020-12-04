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

  name = "";
  passwort = "";
  passwort_confirm = "";
  email = "";
  adresse = "";
  vorstand = "";

  registerClicked(): void{
    console.log("registrierungsanfrage")
    if (this.name == "") {
      /* TODO
      Implement some kind of error handling
      */
     console.log("kein name angegeben")
     return;
    }
    else if (this.passwort !== this.passwort_confirm) {
      /* TODO
      Implement some kind of error handling
      */
     console.log("passwort nicht gleich")
      return;
    } else {
      // TODO get url dynamically
      fetch('http://localhost:3000/register', {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
          name: this.name,
          passwort: this.passwort,
          email: this.email,
          ansprechpartner: this.vorstand
        })
      })
      .then( (response) => {
          // TODO
          // route to homepage
          this.myVar = true;
          return response.text();
      }).then( data => console.log(data))
    }

   }
}

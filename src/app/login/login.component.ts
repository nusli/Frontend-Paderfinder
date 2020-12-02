import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;

  constructor() { }

  ngOnInit(): void {
  }

  benutzerName = "";
  passwort = "";

  submitLogin(): void {
    if (this.benutzerName == "") {
      /* TODO
      Implement some kind of error handling
      */
     console.log("kein name angegeben")
     return;
    }
    else if (this.passwort == "") {
      /* TODO
      Implement some kind of error handling
      */
     console.log("passwort nicht angegeben")
      return;
    } else {
      // TODO get url dynamically
      fetch('http://localhost:3000/login', {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          stammName: this.benutzerName,
          password: this.passwort
        })
      })
      .then( (response) => {
          // TODO
          // route to homepage
          console.log((response.body))
      })
    }
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {DataService} from '../data.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
 

  constructor(private _data: DataService) {
    

   }

   ngOnInit(){
   
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
        credentials: 'include',
        body: JSON.stringify({
          stammName: this.benutzerName,
          password: this.passwort
        })
      }).then(response => {
        
        return response.text() 
      })
      .then (data => {
        this._data.loggedIn();
        this._data.getStamm();
        this._data.getStammName();
      })
      .catch((error) => {
        console.error('Error:', error);
      }); 

    
    }
  }

}

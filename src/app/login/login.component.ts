import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {DataService} from '../data.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
 

  constructor(private _data: DataService, private router: Router) {
    

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
        if(data == "Unauthorized"){
          alert("Ungültige Kombination aus Stammname und Passwort")
        }else{
        
        this._data.loggedIn();
        this._data.getStamm();
        this._data.getStammName();
        this.router.navigate(['/'])
        }
      })
      .catch((error) => {
        console.error('Error Happend:', error);
      }); 

    
    }
  }

}

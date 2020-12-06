import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../app/data.service';


function getCookie(name) {
  var dc = document.cookie;
  var prefix = name + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin == -1) {
      begin = dc.indexOf(prefix);
      if (begin != 0) return null;
  }
  else
  {
      begin += 2;
      var end = document.cookie.indexOf(";", begin);
      if (end == -1) {
      end = dc.length;
      }
  }
  // because unescape has been deprecated, replaced with decodeURI
  //return unescape(dc.substring(begin + prefix.length, end));
  return decodeURI(dc.substring(begin + prefix.length, end));
} 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Paderfinder';
  value = 'Clear me';
  loggedIn = false;
  logged ;
 

  constructor(private route:Router, private _data: DataService){

    
  }

  ngOnInit(){
    this._data.currentLogged.subscribe(logged => {
      if(logged == "eingeloggt"){
        
        this.loggedIn = true;
      }else{
        
        this.loggedIn = false;
      }
    })
  }


  cookie = getCookie("session_id")

  login() : void {
    this._data.loggedIn();
  }
 
  logout(): void {
    // check if user session exists
    if (getCookie("session_id") === null) {
      
      return;
    }
    // TODO get url dynamically
    fetch('http://localhost:3000/logout', {
      method: "delete",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }).then(response => {
      
      return response.text() 
    })
    .then (data => {
      this._data.loggedIn();
      this.route.navigate(['/login']);
      
     
    })
    .catch((error) => {
      console.error('Error:', error);
    }); 
  }

}

import { Component } from '@angular/core';

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

 
  logout(): void {
    // check if user session exists
    if (getCookie("session_id") === null) {
      console.log("no user to logout");
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
      console.log(document.cookie)
      console.log(data)
    })
    .catch((error) => {
      console.error('Error:', error);
    }); 
  }

}

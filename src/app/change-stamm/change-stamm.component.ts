import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-change-stamm',
  templateUrl: './change-stamm.component.html',
  styleUrls: ['./change-stamm.component.scss']
})
export class ChangeStammComponent implements OnInit {

  constructor(private http: HttpClient) { 
    this.getInfo();
  }

  stammesname ="";
  email="";
  ort="";
  telefon="";
  mitglieder="";
  beschreibung="";
  stammesvorstand="";
  Mitglieder ="";

  getInfo(){
    //Hier muss die Stammes-Id der Session rein
    this.http.get('http://localhost:3000/staemme/' + this.getCookie("session_id")).toPromise().then(

      data => this.addInfo(data)
    );
  }

  addInfo(newData){
    console.log(newData)
    this.stammesvorstand = newData.ansprechpartner;
    this.ort = newData.ort;
    this.telefon = newData.telefon;
    this.Mitglieder = newData.mitglieder;
    this.email = newData.email;
    this.beschreibung = newData.beschreibung;
    this.stammesname = newData.name;
  }

  sendChanges(){
    var data = {
      name : this.stammesname,
      email: this.email,
      mitglieder: this.Mitglieder,
      telefon: this.telefon,
      ansprechpartner:  this.stammesvorstand,
      beschreibung: this.beschreibung
    }

    console.log(data)
    this.http.patch('http://localhost:3000/staemme/' + this.getCookie("session_id"),data).toPromise().then( res => console.log(res))
  }

  ngOnInit(): void {
  }

  getCookie(name):string {
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

}

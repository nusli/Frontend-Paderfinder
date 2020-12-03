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
    this.http.get('http://localhost:3000/staemme/5fc7721870652d1f4c5f8bc6').toPromise().then(

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
    //sendet die Änderungen an den Server
  }

  ngOnInit(): void {
  }

}

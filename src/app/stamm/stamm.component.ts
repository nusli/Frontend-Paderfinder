import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-stamm',
  templateUrl: './stamm.component.html',
  styleUrls: ['./stamm.component.scss']
})
export class StammComponent implements OnInit {



  data = []

  stammesvorstand=""
  ort=""
  telefon=""
  Mitglieder=""
  email=""
  beschreibung=""


  constructor(private http: HttpClient) { 
    this.getInfo();
    this.getPosts();
  }

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
  }

  ngOnInit(): void {
  }

  getPosts(){
    //Hier muss Abfrage der Posts abhängig von der session-stammnummer
    this.http.get('http://localhost:3000/posts').toPromise().then(

      
      data => {
        this.addData(data)
      }
    );
  }

  addData(newdata){
    this.data = [];
     newdata.forEach(element => {
      var post = {
        //Hier jeweilig angemeldeten usernamen
        user: "DPSG Heilige Maria",
        content: element.inhalt,
        title: element.titel,
        typ: "News",
        publish_date : element.änderungsdatum,
        //Hier muss das ausgewählte bild hin 
        bild: "https://pfadfinder-meschede.de/wp-content/uploads/2018/10/Schweden.jpg"
      }
      
      this.data.push(post)
      
    });
    this.data.reverse();
  }
}


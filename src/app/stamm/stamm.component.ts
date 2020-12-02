import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-stamm',
  templateUrl: './stamm.component.html',
  styleUrls: ['./stamm.component.scss']
})
export class StammComponent implements OnInit {



  data = [
    {
      user: "DPSG St. Josef Rentfort",
      title: "Weihnachtsmarkt",
      content: "Weihnachtsmarkt am 20.12.2020",
      typ: "Event",
      publish_date : "05.11.2020",
      bild: "https://bilder.t-online.de/b/86/83/25/74/id_86832574/tid_da/weihnachtsmarkt-in-frankfurt-schon-seit-1393-ist-er-urkundlich-belegt-.jpg"
    },
    {
      user: "DPSG Heilige Maria",
      content: "Sommerlager findet nächstes Jahr am 06.06.2020 statt",
      title: "Sommerlager",
      typ: "Lager",
      publish_date : "06.11.2020",
      bild: "https://pfadfinder-meschede.de/wp-content/uploads/2018/10/Schweden.jpg"
    }
  ]

  stammesvorstand=""
  ort=""
  telefon=""
  Mitglieder=""
  email=""
  beschreibung=""


  constructor(private http: HttpClient) { 
    this.getInfo();
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

}

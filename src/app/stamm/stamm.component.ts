import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import {DataService} from '../data.service';

@Component({
  selector: 'app-stamm',
  templateUrl: './stamm.component.html',
  styleUrls: ['./stamm.component.scss']
})
export class StammComponent implements OnInit {

  getCookie(name) {
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

  data = []

  stammesname=""
  stammesvorstand=""
  ort=""
  telefon=""
  Mitglieder=""
  email=""
  beschreibung=""


  constructor(private http: HttpClient,  private _data: DataService) { 
    this.getInfo();

    _data.getPersonalPosts();

    //this.getPosts();


  }

  getInfo(){
    this.http.get('http://localhost:3000/staemme/' + this.getCookie("session_id")).toPromise().then(
      
      
      data => {
        console.log(data)
        this.addInfo(data)}
      
    );
  }

  addInfo(newData){
    console.log(newData)
    this.stammesname = newData.name;
    this.stammesvorstand = newData.ansprechpartner;
    this.ort = newData.ort;
    this.telefon = newData.telefon;
    this.Mitglieder = newData.mitglieder;
    this.email = newData.email;
    this.beschreibung = newData.beschreibung;
  }

  ngOnInit(): void {

    this._data.currentPersonalPosts.subscribe(posts => {
      console.log(posts)
      this.data = posts
    })
  }

  delete(post_id){
    this.http.delete('http://localhost:3000/posts/' + post_id).toPromise().then(
      
      
      data => {
        console.log(data)
        this._data.getPersonalPosts();
      }
    );
  }
  
}


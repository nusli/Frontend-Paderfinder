import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class DataService {

  private loggedSource = new BehaviorSubject<string>("default");
  currentLogged = this.loggedSource.asObservable();

  private cookieSource = new BehaviorSubject<string>("");
  cookieLogged = this.cookieSource.asObservable();

  private allpostSource = new BehaviorSubject<any[]>([]);
  currentAllPosts = this.allpostSource.asObservable();

  private personalpostSource = new BehaviorSubject<any>([]);
  cuurrentPersonalPosts = this.personalpostSource.asObservable();

  private stammSource = new BehaviorSubject<string>("");
  currentStammName = this.stammSource.asObservable();

  constructor(private http: HttpClient) { }

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

  getAllPosts(){
    this.http.get('http://localhost:3000/posts').toPromise().then(
      
      data => {
        
        this.allpostSource.next(this.addData(data));
      }
    );
  }

  getPersonalPosts(){
    this.http.get('http://localhost:3000/posts/'  + this.getCookie("session_id")).toPromise().then(
      
      data => {
        
        this.personalpostSource.next(this.addData(data));
      }
    );
  }

  getStammName(){
    this.http.get('http://localhost:3000/staemme/' + this.getCookie("session_id")).toPromise().then(
      
      data => {
        

        var result = [];
        for(var i in data)
          result.push([i, data [i]]);
        console.log(result)
        this.stammSource.next(result[1][1]);
      }
    );
  }

  getStamm(){
        console.log(this.getCookie("session_id"))
        this.cookieSource.next(this.getCookie("session_id"));    
    ;
  }

  addData(newdata){
    var data = [];
     
     newdata.forEach(element => {
      
      var post = {   
        user: element.stamm_name,
        content: element.inhalt,
        title: element.titel,
        typ: "News",
        publish_date : element.änderungsdatum,
        //Hier muss das ausgewählte bild hin 
        bild: "https://pfadfinder-meschede.de/wp-content/uploads/2018/10/Schweden.jpg"
      }
      
      data.push(post)
      
    });
    data.reverse();
    return data;
  }

  loggedIn(){
    if(this.getCookie("session_id") === null){
      
      this.loggedSource.next("ausgeloggt");
    }else{
      
      this.loggedSource.next("eingeloggt");
    }
  }
}

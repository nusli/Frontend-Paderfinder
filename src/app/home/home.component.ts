import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { fromEventPattern } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { title } from 'process';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  

  data = [
    
  ]

  constructor(private http: HttpClient) { 
    this.getPosts();

    console.log("Aktueller Cookie: " + this.getCookie("session_id"))
    /*
    this.input.addEventListener('change', function(e){
      console.log(this.input.files)
    }, false)
    */
    //console.log(this.getCookie("session_id"))
  }

  getPosts(){
    
    this.http.get('http://localhost:3000/posts').toPromise().then(

      data => this.addData(data)
    );
    
    
  }


  titel="";
  stammid="";
  art="";
  inhalt="";
  bild;
  fileEnding = "jpg";
  

  onSelectedFile(event){
    if(event.target.files.length > 0 ){
      // file notwendig?
      const file = event.target.files[0];
      this.bild = file;
      console.log(file);


    }
  }

  newPost(){
    var formData = new FormData();
    formData.append("stamm_id", this.stammid)
    formData.append("titel", this.titel)
    formData.append("inhalt", this.inhalt)
    formData.append("tags", this.art)
    formData.append("image", this.bild)
/*
    var postData = {
      titel: this.titel,
      //Hier kommt id der session
      stamm_id : "5fc6045785e1b12f3ce8a4ca",
      art: this.art,
      inhalt : this.inhalt,
      image: this.bild,
      fileEnding: this.fileEnding,
      } */

    console.log(formData.get("image"))
    
    this.http.post('http://localhost:3000/posts',formData).toPromise().then(
      data => console.log(formData)
    ).then(data => this.getPosts())
    .catch(err => {
      return console.log(err);
    })
    
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

  ngOnInit(): void {
  }


  //FilePicker
  onFileChanged(event) {
    const file = event.target.files[0]
  
      console.log(file);

      this.bild = file;
  }

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

}

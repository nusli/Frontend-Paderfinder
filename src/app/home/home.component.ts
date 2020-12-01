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

  newPost(){
    var postData = {
      titel: this.titel,
      //Hier kommt id der session
      stammid : "5fc6045785e1b12f3ce8a4ca",
      art: this.art,
      inhalt : this.inhalt
      } 

    
    this.http.post('http://localhost:3000/posts',postData).toPromise().then(
      data => console.log(postData)
    ).then(data => this.getPosts())
    
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
  }

}

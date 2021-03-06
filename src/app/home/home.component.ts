import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../data.service';
import {Router} from '@angular/router'

import { fromEventPattern } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { title } from 'process';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data = []

  stammname;

  titel="";
  stamm_id="";
  art="";
  inhalt="";
  bild;
  fileEnding = "jpg";

  constructor(private http: HttpClient, private _data: DataService, private router: Router) { 

    _data.getAllPosts();
  }

  

  /*
  newPost(){
    
    var postData = {
      titel: this.titel,
      stamm_name: this.stammname,
      stamm_id : this.stamm_id,
      art: this.art,
      inhalt : this.inhalt,
      image: this.bild,
      fileEnding: this.fileEnding,
      } 

    
    
    this.http.post('http://localhost:3000/posts',postData).toPromise().then(data => this._data.getAllPosts())
    
  }

  */
  newPost(){
    var formData = new FormData();
    formData.append("stamm_id", this.stamm_id)
    formData.append("stamm_name", this.stammname)
    formData.append("titel", this.titel)
    formData.append("inhalt", this.inhalt)
    formData.append("art", this.art)
    formData.append("image", this.bild)

    console.log(formData.get("art"))
    console.log(formData.get("image"))
    
    this.http.post('http://localhost:3000/posts/upload',formData).toPromise().then(data => this._data.getAllPosts())
    
  }
  
  ngOnInit(): void {
    this._data.currentAllPosts.subscribe(posts => {
      this.data = posts;
    });

    this._data.cookieLogged.subscribe(id => {
      this.stamm_id = id;
    })

    this._data.currentStammName.subscribe(name => {
      this.stammname = name;
    })

  }
    
  //FilePicker
  onFileChanged(event) {
    const file = event.target.files[0]


      this.bild = file;
  }

  onSelect(id){
    this.router.navigate(['/andererStamm', id])
  }

}

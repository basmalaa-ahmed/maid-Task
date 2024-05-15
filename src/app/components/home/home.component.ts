import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../core/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent implements OnInit{
  pages:number[]=[1,2];
  pageNumber:number=0;
  totalPages:number=0;
  allUsers:any[]=[];
  term:string=''
  constructor (private _HttpService:HttpService){}
  getUser(page:number){
    console.log(page)
    this.pageNumber=page
    return this._HttpService.getUser(page).subscribe({
      next:(response)=>{
        
        this.allUsers=response.data;
        console.log(this.allUsers);
        this.totalPages=response.total_pages
      }
    })
  }
  next(){
    if(this.pageNumber===this.totalPages){
      this.pageNumber=this.totalPages
    }
    else{
      this.pageNumber++;

    }
    
    this.getUser(this.pageNumber)
  }
  previous(){
    if(this.pageNumber===1){
      this.pageNumber=1
    }
    else{this.pageNumber--;}
    this.getUser(this.pageNumber)
  }
ngOnInit(): void {
  this.getUser(1)
}
}

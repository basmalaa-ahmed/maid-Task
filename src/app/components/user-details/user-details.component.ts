import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../core/services/http.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.sass'
})
export class UserDetailsComponent implements OnInit{
  userId:Number=1;
  allUsers:any={};
constructor(private _ActivatedRoute:ActivatedRoute, private _HttpService:HttpService){
  this._ActivatedRoute.paramMap.subscribe((response:any)=>{
    console.log(response.params.id);
    this.userId=response.params.id;
    console.log(this.userId)
     
      
    
  })
  
}
getDeatails(){
  this._HttpService.getUserDetails(this.userId).subscribe({
    next:(response)=>{
      console.log(response.data)
      this.allUsers=response.data;
      console.log(this.allUsers)
    }
  })
}
ngOnInit(): void {
  this.getDeatails()
}
}

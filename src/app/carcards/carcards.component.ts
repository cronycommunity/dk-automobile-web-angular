import { Component, OnInit } from '@angular/core';
import { CarsService } from '../services/cars.service';

@Component({
  selector: 'app-carcards',
  templateUrl: './carcards.component.html',
  styleUrls: ['./carcards.component.css']
})  

export class CarcardsComponent implements OnInit {
  
  constructor(
    private carservice: CarsService
    ) { }

  constData:any;

  ngOnInit(): void {
    this.getConstData();
  }

  getConstData(){
    this.carservice.getConstData().subscribe(data =>{
      this.constData = data;
    })
  }

  // gives shadow when mouseover
  hardShadow(id:any){
   let autocard = document.getElementById(id);
   autocard?.classList.add("shadow", "p-3", "mb-2", "bg-white", "rounded");

  }

  //reduce shadow when mouseleave
  lightShadow(id:any){
   let autocard = document.getElementById(id);
   autocard?.classList.remove("shadow", "p-3", "mb-2", "bg-white", "rounded");
   autocard?.classList.add("p-3", "mb-2", "bg-white", "rounded");

  }
}

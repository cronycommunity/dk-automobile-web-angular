import { Component, OnInit } from '@angular/core';
import { CarsService } from '../services/cars.service';

@Component({
  selector: 'app-carcards',
  templateUrl: './carcards.component.html',
  styleUrls: ['./carcards.component.css']
})
export class CarcardsComponent implements OnInit {

  constructor(private carservice: CarsService) { }

  constData:any;

  ngOnInit(): void {
    this.getConstCarPhotos();
  }

  getConstCarPhotos(){
    this.carservice.getConstData().subscribe(data =>{
      this.constData = data;
      console.log(this.constData)

    })
  }

}

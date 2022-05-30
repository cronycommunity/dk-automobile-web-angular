import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CarsService } from '../services/cars.service';

@Component({
  selector: 'app-carmodels',
  templateUrl: './carmodels.component.html',
  styleUrls: ['./carmodels.component.css']
})
export class CarmodelsComponent implements OnInit {

  constructor(public fb: FormBuilder, private carsservice:CarsService) { }

  carsForm = this.fb.group({
    carMark: ['', [Validators.required]],
  });
  markCode:number= 0;

  ngOnInit(): void {
  }

  getMark(e:any){   
    this.markCode = e.target.value;    
  }

  getModel(){
    this.carsservice.getCarMarks(this.markCode).subscribe(data=>{
      console.log("Mark Code: " + this.markCode)
      console.log(data)
    })
  }
}

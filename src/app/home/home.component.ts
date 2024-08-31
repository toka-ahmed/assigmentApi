import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Products } from '../products';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit  {
  constructor(private _DataService:DataService){

  }

  dataRes:Products[]=[]
  
  ngOnInit(): void {
    this._DataService.getData().subscribe({
      next: (res) => this.dataRes=res,
      error: (err) => console.error(err),
    })
  } 
  
 
}

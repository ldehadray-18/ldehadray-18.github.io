import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  food: any;


  constructor(private foodService: FoodService, private rout: ActivatedRoute) { }
  ngOnInit(): void {
    this.rout.params.subscribe(params => {
      if (params['searchItem']) {
        this.food = this.foodService.getAll().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()))
      }
      else {
        this.food = this.foodService.getAll();
      }


    })
  }


}

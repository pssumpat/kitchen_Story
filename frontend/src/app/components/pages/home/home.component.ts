import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  foods:Food[] = [];
   constructor(private foodService:FoodService, activateRoute:ActivatedRoute){
    let observableFood:Observable<Food[]>;
    activateRoute.params.subscribe((params) => {
      if(params['searchTerm'])
      {
        observableFood = this.foodService.getAllFoodsBySearchTerm(params['searchTerm']);
      }
      else if(params['tag'])
      {
        observableFood = this.foodService.getAllFoodByTag(params['tag']);
      }
      else
      {
        observableFood = foodService.getAll();
      }
      observableFood.subscribe((serverFoods) => {
        this.foods = serverFoods ;
      })
    })
   }
}

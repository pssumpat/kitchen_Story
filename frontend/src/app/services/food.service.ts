import { Injectable } from '@angular/core';
import { sample_food, sample_tags } from 'src/data';
import { Food } from '../shared/models/Food';
import { Tag } from '../shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() {  }

  getAll(): Food[]
  {
    return sample_food;
  }

  getAllFoodsBySearchTerm(searchTerm:String)
  {
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getAllTags(): Tag[]
  {
    return sample_tags;
  }

  getAllFoodByTag(tag:string):Food[]
  {
    return tag == "All"?
    this.getAll() :
    this.getAll().filter(food => food.tags?.includes(tag));
  }

  getFoodById(foodId:string):Food
  {
    return this.getAll().find(food => food.id == foodId) ?? new Food();
  }

}

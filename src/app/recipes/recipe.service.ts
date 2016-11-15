import { Injectable } from '@angular/core';
import { Recipe } from './recipe'
import { Ingredient } from '../shared/ingredient'

@Injectable()
export class RecipeService {
	private recipes: Recipe[] = [
		new Recipe('Ramen','THE BEST', 'http://greatist.com/sites/default/files/SlowCooker-Pork-Ramen_0.jpg', [
			new Ingredient('Noodles', 5),
			new Ingredient('Pork',4)
			]),
		new Recipe('Sushi','A-OK', 'http://wtop.com/wp-content/uploads/2015/10/ThinkstockPhotos-174709526-1880x1254.jpg', [
			new Ingredient("Fish",10),
			new Ingredient('Wasabi',1)

			])
	];

  constructor() {}

  getRecipes(){
  	return this.recipes;
  }

}

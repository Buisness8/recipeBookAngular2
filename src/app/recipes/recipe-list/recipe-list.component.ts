import { Component, OnInit, EventEmitter,Output } from '@angular/core';

import { Recipe } from '../recipe'

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [
		new Recipe('Ramen','THE BEST', 'http://greatist.com/sites/default/files/SlowCooker-Pork-Ramen_0.jpg', []),
		new Recipe('Sushi','A-OK', 'http://wtop.com/wp-content/uploads/2015/10/ThinkstockPhotos-174709526-1880x1254.jpg', [])
	];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe:Recipe){
  	this.recipeSelected.emit(recipe)
  }

}

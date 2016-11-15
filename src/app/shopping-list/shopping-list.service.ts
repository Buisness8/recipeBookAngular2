import { Ingredient } from '../shared/ingredient'

export class ShoppingListService {
	private items: Ingredient[] = []

  constructor() { }

  getItems(){
  	return this.items;
  }

  addItems(items: Ingredient[]){
  	console.log("this.items",this.items, "items",items)
  	//default push mthod on all the items passed to the addItems
  	//push multiple items in one code line. 
  	Array.prototype.push.apply(this.items, items);
  }

}

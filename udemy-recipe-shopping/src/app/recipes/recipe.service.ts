import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{

    private recipes: Recipe[]=[
        new Recipe('A Test Recipe1',
        'This is simply a test', 
        'https://www.cookingclassy.com/wp-content/uploads/2019/09/meatballs-21-600x900.jpg',
        [
            new Ingredient('Meat',1),
            new Ingredient('French Fries',20)
        ]),
        new Recipe('A Test Recipe2',
        'This is simply a test', 
        'https://www.cookingclassy.com/wp-content/uploads/2019/09/meatballs-21-600x900.jpg',
        [new Ingredient('Meat',1),
        new Ingredient('Buns',2)])
      ];

constructor(private slService: ShoppingListService){

}
      getRecipes()
      {
          return this.recipes.slice();
      }
      getRecipe(index:number)
      {
          return this.recipes[index];
      }

      addIngredientToShoppingList(ingredients: Ingredient[])
      {
this.slService.addIngredients(ingredients);
      }
}
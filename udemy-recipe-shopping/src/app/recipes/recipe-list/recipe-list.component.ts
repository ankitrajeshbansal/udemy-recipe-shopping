import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]=[
    new Recipe('A Test Recipe1','This is simply a test', 'https://www.cookingclassy.com/wp-content/uploads/2019/09/meatballs-21-600x900.jpg'),
    new Recipe('A Test Recipe2','This is simply a test', 'https://www.cookingclassy.com/wp-content/uploads/2019/09/meatballs-21-600x900.jpg')
  ];
  
  @Output() recipeClicked = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }
  OnRecipeClicked(recipe: Recipe)
  {
    this.recipeClicked.emit(recipe);

  }
}

import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }
  recipeDetail: Recipe;
  id: number;
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = + params['id'];
      this.recipeDetail = this.recipeService.getRecipe(this.id);
    });
  }
  OnAddToShoppingList() {
    this.recipeService.addIngredientToShoppingList(this.recipeDetail.ingredients);
  }
  OnEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
    //this.router.navigate(['../', this.id,'edit'], {relativeTo: this.route});
  }
}

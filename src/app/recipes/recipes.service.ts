import { EventEmitter, Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipesService {
  // recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png',
      [
        new Ingredient("Buns", 2),
        new Ingredient("Meat", 1)
      ])
  ];
  constructor(private slService: ShoppingListService) {}

  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(recipe: Recipe) {
    this.slService.addIngredients(recipe.ingredients);
  }
}

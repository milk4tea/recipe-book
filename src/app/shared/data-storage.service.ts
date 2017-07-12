import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


import { RecipesService } from '../recipes/recipes.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(
    private http: Http,
    private recipesService: RecipesService,
    private authService: AuthService) {}

  storeRecipes() {
    let token = this.authService.getToken();
    return this.http.put('https://jf-ng-recipe-book.firebaseio.com/recipes.json?auth=' + token,
           this.recipesService.getRecipes());
  }

  fetchRecipes() {
    let token = this.authService.getToken();
    this.http.get('https://jf-ng-recipe-book.firebaseio.com/recipes.json?auth='+token)
    .map(
      (response: Response) => {
        const recipes: Recipe[] = response.json();
        for(let recipe of recipes) {
          if(!recipe['ingredients']) {
            // console.log(recipe);
            recipe['ingredients'] = [];
          }

        }
        return recipes;
      }
    )
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipesService.setRecipes(recipes);
      }
    )

  }

}

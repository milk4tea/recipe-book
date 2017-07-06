import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Recipe } from '../../recipe.model';
import { RecipesService} from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;

  constructor(private recipesService: RecipesService, private route: ActivatedRoute) { }

  ngOnInit() {

  }

}

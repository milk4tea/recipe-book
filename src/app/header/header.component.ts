import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { DataStorageService } from '../shared/data-storage.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private dsService: DataStorageService,
              private authService: AuthService) {}

  onSaveData(){
    this.dsService.storeRecipes().subscribe(
      (response: Response) => console.log(response.json()),
      (error) => console.log(error)
    );
  }

  onFetchData() {
    this.dsService.fetchRecipes();
  }

  onLogout() {
    this.authService.logout();
  }

}

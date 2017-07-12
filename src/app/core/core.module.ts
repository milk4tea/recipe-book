import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

import { ShoppingListService} from '../shopping-list/shopping-list.service';
import { RecipesService } from '../recipes/recipes.service';
import { RecipeResolver } from '../recipes/recipe-resolver.service';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
  ],
  providers: [
    ShoppingListService,
    RecipeResolver,
    RecipesService,
    DataStorageService,
    AuthService,
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ]
})
export class CoreModule {}

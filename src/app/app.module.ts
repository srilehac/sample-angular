import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './Recipes/Recipes.component';
import { RecipedetailsComponent } from './Recipes/recipedetails/recipedetails.component';
import { ShoppinglstComponent } from './shoppinglst/shoppinglst.component';
import { ShoppinglsteditComponent } from './shoppinglst/shoppinglstedit/shoppinglstedit.component';
import { RecipeslistComponent } from './Recipes/recipeslist/recipeslist.component';
import { RecipeitemComponent } from '/home/rpqb-desk-005/shoppinglist/src/app/Recipes/recipeslist/recipeitem/recipeitem.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipedetailsComponent,
    ShoppinglstComponent,
    ShoppinglsteditComponent,
    RecipeslistComponent,
    RecipeitemComponent,
    ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

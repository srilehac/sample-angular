import { Component, OnInit } from '@angular/core';
import { Recipe } from '../Recipes.model';
@Component({
  selector: 'app-recipeslist',
  templateUrl: './recipeslist.component.html',
  styleUrls: ['./recipeslist.component.css']
})
export class RecipeslistComponent implements OnInit {
recipes: Recipe[] = [
new Recipe ('la la land', 'forget', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
];

  constructor() { }

  ngOnInit() {
  }

}

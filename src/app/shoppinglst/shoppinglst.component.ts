import { Component, OnInit } from '@angular/core';
import {Ingrediants} from '../shared/ingrediants.model';

@Component({
  selector: 'app-shoppinglst',
  templateUrl: './shoppinglst.component.html',
  styleUrls: ['./shoppinglst.component.css']
})
export class ShoppinglstComponent implements OnInit {
  ingrediants: Ingrediants  [] = [
  new  Ingrediants ('Apple' , 10),
  new Ingrediants ('banana', 5),
  ];

  constructor() { }

  ngOnInit() {
  }

}

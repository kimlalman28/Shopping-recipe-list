import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipes.model';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
	recipes: Recipes[] = [
		new Recipes('Pie', 'Dessert', 'http://www.stock-free.org/images/Thanksgiving-Stock-Free-Image-08112015-image-133.jpg'),
		new Recipes('Pie', 'Dessert', 'http://www.stock-free.org/images/Thanksgiving-Stock-Free-Image-08112015-image-133.jpg'),
		new Recipes('Pie', 'Dessert', 'http://www.stock-free.org/images/Thanksgiving-Stock-Free-Image-08112015-image-133.jpg'),
		new Recipes('Pie', 'Dessert', 'http://www.stock-free.org/images/Thanksgiving-Stock-Free-Image-08112015-image-133.jpg'),

	];

  constructor() { }

  ngOnInit() {
  }

}

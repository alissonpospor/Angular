import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsService } from './resteurants.service';

@Component({
  selector: 'mt-resteurants',
  templateUrl: './resteurants.component.html'
})
export class ResteurantsComponent implements OnInit {

  restaurants: Restaurant[];

  constructor(private restaurantService: RestaurantsService) { }

  ngOnInit() {
    this.restaurantService.restaurants().subscribe(restaurants => this.restaurants = restaurants);
  }


}

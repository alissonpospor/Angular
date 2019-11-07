import { Injectable, ErrorHandler } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Restaurant } from './restaurant/restaurant.model';


import { MEAT_API } from '../app.api';
import { ErrorHandle } from 'app/app.error-handle';
import { MenuItem } from 'app/restaurant-detail/menu-item/menu-item.model';

@Injectable()
export class RestaurantsService {

    constructor(private http: Http) { }

    /* Aqui são os metodos de pesquisa no "BANCO DE DADOS" que no caso é meu arquivo db.json */

    restaurants(): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`)
            .map(response => response.json())
            .catch(ErrorHandle.handleError);
    }

    restaurantById(id: string): Observable<Restaurant> {
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
            .map(response => response.json())
            .catch(ErrorHandle.handleError);
    }

    reviewsOfRestaurant(id: string): Observable<any> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
            .map(response => response.json())
            .catch(ErrorHandle.handleError);
    }

    menuOfRestaurant(id: string): Observable<MenuItem[]> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
            .map(response => response.json())
            .catch(ErrorHandle.handleError);
    }
}
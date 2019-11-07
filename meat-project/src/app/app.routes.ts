import { Routes } from '@angular/router';//Lembrar de importar a classe ROUTES que é padrão do angular: tem o @
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ResteurantsComponent } from './restaurants/resteurants.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { OrderComponent } from './order/order.component';

//Não esquecer de importar os components --

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'resteurants', component: ResteurantsComponent },
    {
        path: 'restaurants/:id', component: RestaurantDetailComponent,
        children: [
            { path: '', redirectTo: 'menu', pathMatch: 'full' },
            { path: 'menu', component: MenuComponent },
            { path: 'reviews', component: ReviewsComponent }
        ]
    },
    { path: 'order', component: OrderComponent },
    { path: 'about', component: AboutComponent }
]
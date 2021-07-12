import { isNgTemplate } from '@angular/compiler';
import { Component, Pipe } from '@angular/core';
import { Observable } from 'rxjs';
import {MenuItem} from './menuItem';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chirpus Pizza';

  menu: MenuItem[] = [
    {name: "Large Pizza", category: "Dinner", price: 15.99},
    {name: "Cheese Bread", category: "Sides", price: 5.99},
    {name:"Garlic Knots", category: "Sides", price: 3.99},
    {name:"2 Liter of Pepsi", category: "Drinks", price: 2.99},
    {name:"Red Bull", category: "Drinks", price: 3.99},
    {name:"Personal Pizza", category:"Dinner", price: 5.99},
    {name:"Chicken Wings", category: "Dinner", price: 7.99}
  ]
 

  
}



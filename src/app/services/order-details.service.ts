import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }


  foodDetails = [
    {
      id: 1,
      foodName: 'Chicken',
      foodPrice: 100,
      foodDetails: 'Chicken is the most common .',
      foodImg:"/assets/img/food/1.jpg"
    },
    {
      id: 2,
      foodName: 'Beef',
      foodPrice: 200, 
      foodDetails: 'Beef is the second most common .',  
      foodImg:"/assets/img/food/2.jpg"
    },
    {
      id: 3,
      foodName: 'Pork',
      foodPrice: 300,
      foodDetails: 'Pork is the third most common .',
      foodImg:"/assets/img/food/3.jpg"
    },
    {
      id: 4,
      foodName: 'Fish',
      foodPrice: 400,
      foodDetails: 'Fish is the fourth most common .',
      foodImg:"/assets/img/food/4.jpg"
    },
    {
      id: 5,
      foodName: 'Lamb',
      foodPrice: 500,
      foodDetails: 'Lamb is the fifth most common .',
      foodImg:"/assets/img/food/5.jpg"
    },
    {
      id: 6,
      foodName: 'Turkey',
      foodPrice: 600,
      foodDetails: 'Turkey is the sixth most common .',
      foodImg:"/assets/img/food/6.jpg"
    },
  ];
}

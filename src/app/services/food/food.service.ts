import { Injectable } from '@angular/core';
import { foods } from 'src/app/shared/model/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAllTags(tag: string): foods[] {
    return tag == 'All' ? this.getAll() : this.getAll().filter(food => food.tags.includes('tag'));
  }
  getTag() {
    return [
      { name: 'all' },
      { name: 'soup' },
      { name: 'pizza' },
      { name: 'lunch' },
      { name: 'fastFood' },
      { name: 'chay' }];

  }

  getAll() {
    return [
      {
        id: 1,
        price: 100,
        name: 'cut burgar',
        favoirate: true,
        star: 4.0,
        tags: ['burgar', 'fastFood'],
        imageUrl: '/assets/food1.jpg',
        cookTime: '20-25',
        origins: ['indian', 'rushian', 'french', 'uk', 'ostraliya']
      },
      {
        id: 2,
        price: 100,
        name: 'vegg roll',
        favoirate: false,
        star: 4.0,
        tags: ['burgar', 'fastFood'],
        imageUrl: '/assets/food2.jpg',
        cookTime: '20-25',
        origins: ['indian', 'rushian']
      },
      {
        id: 3,
        price: 100,
        name: 'burgar combo',
        favoirate: true,
        star: 4.0,
        tags: ['burgar', 'fast'],
        imageUrl: '/assets/food3.jpg',
        cookTime: '20-25',
        origins: ['indian', 'rushian']
      },
      {
        id: 4,
        price: 100,
        name: 'chinies bhel',
        favoirate: true,
        star: 4.0,
        tags: ['burga'],
        imageUrl: '/assets/food4.jpg',
        cookTime: '20-25',
        origins: ['indian', 'rushian']
      },
      {
        id: 5,
        price: 100,
        name: 'vada pav',
        favoirate: false,
        star: 4.0,
        tags: ['burgar'],
        imageUrl: '/assets/food5.jpg',
        cookTime: '20-25',
        origins: ['indian', 'rushian']
      },
      {
        id: 6,
        price: 100,
        name: 'french fries',
        favoirate: false,
        star: 3.9,
        tags: ['burgar'],
        imageUrl: '/assets/food6.webp',
        cookTime: '20-25',
        origins: ['indian', 'rushian']
      },
      {
        id: 7,
        price: 100,
        name: 'burgar',
        favoirate: true,
        star: 2.0,
        tags: ['burgar', 'fastFood'],
        imageUrl: '/assets/food7.jpg',
        cookTime: '20-25',
        origins: ['indian', 'rushian']
      },
      {
        id: 8,
        price: 100,
        name: 'non-veg roll',
        favoirate: false,
        star: 3.4,
        tags: ['burgar', 'fastFood'],
        imageUrl: '/assets/food8.webp',
        cookTime: '20-25',
        origins: ['indian', 'rushian']
      },
      {
        id: 9,
        price: 100,
        name: 'pizza',
        favoirate: true,
        star: 4.5,
        tags: ['burgar', 'fastFood'],
        imageUrl: '/assets/food9.jpg',
        cookTime: '20-25',
        origins: ['indian', 'rushian']
      }
    ];

  }
}

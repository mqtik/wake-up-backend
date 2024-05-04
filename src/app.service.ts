import { Injectable } from '@nestjs/common';
import { foodList, Food, Restaurant, restaurantList } from './utils/dummy';

@Injectable()
export class AppService {
  getRoot(): string {
    return 'Hello Wake Up Lab!';
  }

  getRestaurants(pageNumber: number): Restaurant[] {
    const pageSize = 4;
    return restaurantList.slice(
      (pageNumber - 1) * pageSize,
      pageNumber * pageSize,
    );
  }

  getFoodList(): Food[] {
    return foodList;
  }
}

import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Food, Restaurant } from './utils/dummy';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getRoot(): string {
    return this.appService.getRoot();
  }

  @Get('/restaurants')
  getRestaurants(@Query() { page }): Restaurant[] {
    return this.appService.getRestaurants(page);
  }

  @Get('/menu')
  getFoodList(): Food[] {
    return this.appService.getFoodList();
  }
}

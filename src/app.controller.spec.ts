import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { foodList, restaurantList } from './utils/dummy';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello Wake Up Lab!"', () => {
      expect(appController.getRoot()).toBe('Hello Wake Up Lab!');
    });
    it('should return Restaurant List', () => {
      expect(appController.getRestaurants({ page: 1 })).toBe(
        restaurantList.slice(0, 4),
      );
    });
    it('should return Menu List', () => {
      expect(appController.getFoodList()).toBe(foodList);
    });
  });
});

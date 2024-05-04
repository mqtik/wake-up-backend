import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { foodList, restaurantList } from 'src/utils/dummy';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello Wake Up Lab!');
  });

  it('/restaurants (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect(restaurantList);
  });

  it('/menu (GET)', () => {
    return request(app.getHttpServer()).get('/').expect(200).expect(foodList);
  });
});

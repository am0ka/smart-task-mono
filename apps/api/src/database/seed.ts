import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { UserService } from '../user/user.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const userService = app.get(UserService);

  console.log('Seeding database...');

  // Create a demo user
  await userService.create({
    fullName: 'Demo User',
    email: 'demo@example.com',
    password: 'password123',
  });

  console.log('Seeding complete!');

  await app.close();
}

bootstrap();

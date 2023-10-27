import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesController } from './coffes/coffes.controller';

@Module({
  imports: [],
  controllers: [AppController, CoffeesController],
  providers: [AppService],
})
export class AppModule {}
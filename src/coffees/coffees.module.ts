import { Module } from '@nestjs/common';
import { CoffeesController } from './coffes.controller';
import { CoffeesService } from './coffees.service';

@Module({ 
  controllers: [CoffeesController],
  providers: [CoffeesService] 
})
export class CoffeesModule {}
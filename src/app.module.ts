import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose'
import { ResturantModel, ResturantSchema } from './models/resturant.schema';
import { MenuModel, MenuSchema } from './models/menu.schema';
import { ResturantController } from './controller/resturant.controller';
import { ResturantService } from './service/resturant.service';
import { MenuController } from './controller/menu.controller';
import { MenuService } from './service/menu.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://sumitverma:omsairam786@cluster0.dhy3h4y.mongodb.net/?retryWrites=true&w=majority'),
    MongooseModule.forFeature(
      [
        {name:ResturantModel.name, schema:ResturantSchema},
        {name:MenuModel.name, schema:MenuSchema}
      ]
    )
  ],
  controllers: [AppController, ResturantController, MenuController],
  providers: [AppService, ResturantService, MenuService],
})
export class AppModule {}

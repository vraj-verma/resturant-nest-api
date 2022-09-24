import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { MenuItems } from './items.schema';

export type MenuDocument = MenuModel & Document;
@Schema()
export class MenuModel {

    @Prop({ required: true })
    items: MenuItems[];

}

export const MenuSchema = SchemaFactory.createForClass(MenuModel)
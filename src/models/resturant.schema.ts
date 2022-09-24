import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'

export type ResturantDocument = ResturantModel & Document;
@Schema()
export class ResturantModel{

    @Prop({required:true})
    name:string;

    @Prop()
    address:string;

    @Prop()
    street:string;

    @Prop()
    postalCode:number;
}

export const ResturantSchema = SchemaFactory.createForClass(ResturantModel)
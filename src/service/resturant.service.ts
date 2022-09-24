import { Injectable } from "@nestjs/common";
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose'
import { ResturantDocument, ResturantModel } from "../models/resturant.schema";

@Injectable()
export class ResturantService{
    constructor(@InjectModel(ResturantModel.name) private resturantModel:Model<ResturantDocument>){}

    async addResturant(restData:ResturantModel){
        return await this.resturantModel.create(restData);
    }

    async getAll(){
        return this.resturantModel.find();
    }

    async delete(id:string){
        return await this.resturantModel.findByIdAndDelete(id);
    }
}

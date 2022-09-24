import { Injectable } from "@nestjs/common";
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose'
import { MenuDocument, MenuModel } from "../models/menu.schema";


@Injectable()
export class MenuService{
    constructor(@InjectModel(MenuModel.name) private MenuModel:Model<MenuDocument>){}

    async addMenu(menuData:MenuModel){
        return this.MenuModel.create(menuData);
    }

    async getMenu(){
        return await this.MenuModel.find();
    }

    async delete(id:string){
        return await this.MenuModel.deleteOne({_id: id});
    }
    
}

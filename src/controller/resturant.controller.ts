import { Controller, Post, Body, Get, Delete, Param } from "@nestjs/common";
import { ResturantModel } from "../models/resturant.schema";
import { ResturantService } from "src/service/resturant.service";

@Controller('resturant')
export class ResturantController {
    constructor(private resturant: ResturantService) { }

    @Post()
    async addResturant(@Body() restData: ResturantModel) {
        const response = await this.resturant.addResturant(restData);
        return response;
    }

    @Get()
    async getAll() {
        const response = await this.resturant.getAll();
        return response ? response : 'Empty';
    }

    @Delete(':id')
    async delete(@Param('id') id:string){
        const response = await this.resturant.delete(id);
        return response;
    }
}

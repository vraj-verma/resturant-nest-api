import { Controller, Post, Body, Get, Delete, Param } from "@nestjs/common";
import { MenuModel } from "../models/menu.schema";
import { MenuService } from "../service/menu.service";

@Controller('menu')
export class MenuController {
    constructor(private menuService: MenuService) { }

    @Post()
    async addMenu(@Body() menuData: MenuModel) {
        const response = await this.menuService.addMenu(menuData);
        return response;
    }

    @Get()
    async getAll() {
        const response = await this.menuService.getMenu();
        return response ? response : 'Empty';
    }

    @Delete(':id')
    async delete(@Param('id') id:string){
        const response = await this.menuService.delete(id);
        return response;
    }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BreedService } from './breed.service';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';

@Controller('breed')
export class BreedController {
  constructor(private readonly breedService: BreedService) {}

  @Post()
  async create(@Body('name') name: string) {
    return await this.breedService.create(name);
  }

  @Get()
  async findAll() {
    return await this.breedService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.breedService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body('name') name: string) {
    return await this.breedService.update(id, name);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.breedService.remove(id);
  }
}

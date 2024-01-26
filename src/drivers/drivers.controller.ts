import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';

@Controller('drivers')
export class DriversController {
  constructor(private readonly driversService: DriversService) {}

  @Post()
  create(@Body() createDriverDto: CreateDriverDto) {
    return this.driversService.create(createDriverDto);
  }

  @Get()
  findAll() {
    return this.driversService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try{
      return await this.driversService.findOne(+id);
    }
    catch{
      throw new NotFoundException("Nincs ilyen ID!")
    }

  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateDriverDto: UpdateDriverDto) {
    try{
      return await this.driversService.update(+id, updateDriverDto);
    }
    catch{
      throw new NotFoundException("Nincs ilyen ID!")
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try{
    return await this.driversService.remove(+id);
  }catch{
    throw new NotFoundException("Nincs ilyen ID!")
  }
  }
}

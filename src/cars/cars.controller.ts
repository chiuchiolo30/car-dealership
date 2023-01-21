import { CreateCarDto } from './dto/create-car.dto';
import { CarsService } from './cars.service';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {

  constructor(
    private readonly carsServices: CarsService 
  ){}

  @Get()
  getAllCars() {
    return this.carsServices.findAll();
  }

  @Get(':id')
  getCarById( @Param('id', ParseUUIDPipe ) id: string ) {
    console.log({id});
    return this.carsServices.findOneById(id);
  }

  @Post()  
  createCar( @Body() createCarDto: CreateCarDto ) {
    return this.carsServices.create(createCarDto);
  }

  @Patch(':id')
  updateCar(
    @Param('id', ParseUUIDPipe) id: string, 
    @Body() updateCarDto: UpdateCarDto
    ) {
    return this.carsServices.update(id, updateCarDto);
  }

  @Delete(':id')
  deleteCar( @Param('id', ParseUUIDPipe) id: string ) {
    return this.carsServices.delete(id)
  }

}

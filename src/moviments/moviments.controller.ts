import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MovimentsService } from './moviments.service';
import { CreateMovimentDto } from './dto/create-moviment.dto';
import { UpdateMovimentDto } from './dto/update-moviment.dto';

@Controller('moviments')
export class MovimentsController {
  constructor(private readonly movimentsService: MovimentsService) {}

  @Post()
  create(@Body() createMovimentDto: CreateMovimentDto) {
    return this.movimentsService.create(createMovimentDto);
  }

  @Get()
  findAll() {
    return this.movimentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.movimentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMovimentDto: UpdateMovimentDto) {
    return this.movimentsService.update(+id, updateMovimentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.movimentsService.remove(+id);
  }
}

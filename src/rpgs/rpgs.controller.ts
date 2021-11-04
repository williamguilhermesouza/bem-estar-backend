import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RpgsService } from './rpgs.service';
import { CreateRpgDto } from './dto/create-rpg.dto';
import { UpdateRpgDto } from './dto/update-rpg.dto';

@Controller('rpgs')
export class RpgsController {
  constructor(private readonly rpgsService: RpgsService) {}

  @Post()
  create(@Body() createRpgDto: CreateRpgDto) {
    return this.rpgsService.create(createRpgDto);
  }

  @Get()
  findAll() {
    return this.rpgsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rpgsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRpgDto: UpdateRpgDto) {
    return this.rpgsService.update(+id, updateRpgDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rpgsService.remove(+id);
  }
}

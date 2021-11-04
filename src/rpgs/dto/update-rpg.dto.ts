import { PartialType } from '@nestjs/mapped-types';
import { CreateRpgDto } from './create-rpg.dto';

export class UpdateRpgDto extends PartialType(CreateRpgDto) {}

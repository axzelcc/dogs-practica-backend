import {
  IsString,
  IsInt,
  IsOptional,
  IsDateString,
  MinLength,
  MaxLength,
} from 'class-validator';
import { Breed } from 'src/breed/entities/breed.entity';

export class CreateDogDto {
  
  @IsString()
  @MinLength(1)
  name: string;

  @IsInt()
  @MinLength(1)
  age: number;

  @IsString()
  @MinLength(1)
  breed: number;

  @IsOptional()
  @MinLength(1)
  @MaxLength(250) // Opcional si no siempre es requerido
  @IsString()
  consultation: string;

  @IsDateString() // Valida que sea una fecha en formato ISO 8601
  date: string;
}

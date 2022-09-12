import {
  IsMobilePhone,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class ProgrammerCreateDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(50)
  username: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(18)
  age: number;

  @IsString()
  @IsNotEmpty()
  language: string;

  @IsString()
  @IsNotEmpty()
  location: string;
}

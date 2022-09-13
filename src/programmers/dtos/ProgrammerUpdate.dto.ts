import {
	IsBoolean,
	IsMobilePhone,
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsString,
	MaxLength,
	Min,
	MinLength,
} from 'class-validator';

export class ProgrammerUpdateDTO {
	@IsOptional()
	@IsString()
	@IsNotEmpty()
	@MinLength(5)
	@MaxLength(50)
	username: string;

	@IsOptional()
	@IsNotEmpty()
	@IsNumber()
	@Min(18)
	age: number;

	@IsOptional()
	@IsString()
	@IsNotEmpty()
	language: string;

	@IsOptional()
	@IsString()
	@IsNotEmpty()
	location: string;

	@IsOptional()
	@IsNotEmpty()
	@IsBoolean()
	isEmployed: boolean;
}

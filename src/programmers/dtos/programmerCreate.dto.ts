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

export class ProgrammerCreateDTO {
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

	@IsOptional()
	@IsNotEmpty()
	@IsBoolean()
	isEmployed: boolean;
}

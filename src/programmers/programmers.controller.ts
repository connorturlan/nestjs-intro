import {
	Body,
	Controller,
	Get,
	Param,
	ParseIntPipe,
	Post,
} from '@nestjs/common';
import { ProgrammerCreateDto } from './dtos/programmerCreate.dto';
import { Programmer } from './programmer.entity';
import { ProgrammerService } from './programmers.service';

@Controller('/programmers')
export class ProgrammerController {
	constructor(private readonly service: ProgrammerService) {}

	@Get()
	async findAll(): Promise<Programmer[]> {
		return await this.service.findAll();
	}

	@Get('/:id')
	async findById(@Param('id', ParseIntPipe) id: number): Promise<Programmer> {
		return await this.service.findById(id);
	}

	@Post()
	async create(@Body() data: ProgrammerCreateDto): Promise<Programmer> {
		return await this.service.create(data);
	}
}

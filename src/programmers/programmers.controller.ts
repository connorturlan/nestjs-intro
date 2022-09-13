import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	ParseIntPipe,
	Patch,
	Post,
	UseFilters,
} from '@nestjs/common';
import { ProgrammerCreateDTO } from './dtos/ProgrammerCreate.dto';
import { ProgrammerUpdateDTO } from './dtos/ProgrammerUpdate.dto';
import { EntityNotFoundFilter } from './filters/EntityNotFoundFilter';
import { QueryErrorFilter } from './filters/QueryErrorFilter';
import { Programmer } from './programmer.entity';
import { ProgrammerService } from './programmers.service';

@Controller('/programmers')
@UseFilters(QueryErrorFilter, EntityNotFoundFilter)
export class ProgrammerController {
	constructor(private readonly service: ProgrammerService) {}

	@Get()
	@HttpCode(200)
	async findAll(): Promise<Programmer[]> {
		return await this.service.findAll();
	}

	@Get('/:id')
	@HttpCode(200)
	async findById(@Param('id', ParseIntPipe) id: number): Promise<Programmer> {
		return await this.service.findById(id);
	}

	@Patch('/:id')
	@HttpCode(201)
	async update(
		@Body() data: ProgrammerUpdateDTO,
		@Param('id', ParseIntPipe) id: number,
	) {
		return await this.service.update(data, id);
	}

	@Post()
	@HttpCode(201)
	async create(@Body() data: ProgrammerCreateDTO): Promise<Programmer> {
		return await this.service.create(data);
	}

	@Delete('/:id')
	@HttpCode(204)
	async delete(@Param('id', ParseIntPipe) id: number) {
		return await this.service.delete(id);
	}
}

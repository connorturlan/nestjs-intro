import {
	BadRequestException,
	Body,
	Controller,
	Get,
	HttpException,
	InternalServerErrorException,
	NotFoundException,
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
	async findAll(): Promise<Programmer[]> {
		return await this.service.findAll();
	}

	@Get('/:id')
	async findById(@Param('id', ParseIntPipe) id: number): Promise<Programmer> {
		return await this.service.findById(id);
	}

	@Patch('/:id')
	async update(
		@Body() data: ProgrammerUpdateDTO,
		@Param('id', ParseIntPipe) id: number,
	) {
		return await this.service.update(data, id);
	}

	@Post()
	async create(@Body() data: ProgrammerCreateDTO): Promise<Programmer> {
		return await this.service.create(data);
	}
}

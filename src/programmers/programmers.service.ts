import { HttpCode, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';
import { ProgrammerCreateDTO } from './dtos/ProgrammerCreate.dto';
import { ProgrammerUpdateDTO } from './dtos/ProgrammerUpdate.dto';
import { Programmer } from './programmer.entity';
import { sanitizeProgrammer } from './utils';

@Injectable()
export class ProgrammerService {
	constructor(
		@InjectRepository(Programmer)
		private repository: Repository<Programmer>,
	) {}

	async findAll(): Promise<Programmer[]> {
		return await this.repository.find();
	}
	async findById(id: number): Promise<Programmer> {
		return await this.repository.findOneOrFail({ where: { id } });
	}

	async create(data: ProgrammerCreateDTO): Promise<Programmer> {
		// data sanitization - make username lowercase
		const sanitizedData = sanitizeProgrammer(<Programmer>data);
		const programmer = plainToClass(Programmer, sanitizedData);
		return await this.repository.save(programmer);
	}

	async update(data: ProgrammerUpdateDTO, id: number) {
		const programmer = await this.findById(id);
		const sanitizedData = sanitizeProgrammer({ ...programmer, ...data });
		return await this.repository.save(sanitizedData);
	}

	async delete(id: number) {
		return await this.repository.delete({ id });
	}
}

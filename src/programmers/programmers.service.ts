import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';
import { ProgrammerCreateDto } from './dtos/programmerCreate.dto';
import { Programmer } from './programmer.entity';

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
    return await this.repository.findOne({ where: { id } });
  }

  async create(data: ProgrammerCreateDto): Promise<Programmer> {
    // data sanitization - make username lowercase
    const sanitisedData = { ...data, username: data.username.toLowerCase() };
    const programmer = plainToClass(Programmer, sanitisedData);

    return await this.repository.save(programmer);
  }
}

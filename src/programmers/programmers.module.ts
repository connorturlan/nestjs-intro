import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Programmer } from './programmer.entity';
import { ProgrammerController } from './programmers.controller';
import { ProgrammerService } from './programmers.service';

@Module({
	imports: [TypeOrmModule.forFeature([Programmer])],
	controllers: [ProgrammerController],
	providers: [ProgrammerService],
})
export class ProgrammerModule {}

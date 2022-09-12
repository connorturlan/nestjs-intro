import { Module } from '@nestjs/common';
import { ProgrammersController } from './programmers.controller';
import { ProgrammersService } from './programmers.service';

@Module({
	imports: [],
	controllers: [ProgrammersController],
	providers: [ProgrammersService],
})
export class ProgrammerModule {}

import { Controller, Get } from '@nestjs/common';
import { ProgrammersService } from './programmers.service';

@Controller('/programmers')
export class ProgrammersController {
	constructor(private readonly service: ProgrammersService) {}

	@Get('')
	get(): string[] {
		return this.service.findAll();
	}
}

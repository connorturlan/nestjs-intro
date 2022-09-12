import { Injectable } from '@nestjs/common';

@Injectable()
export class ProgrammersService {
	findAll(): string[] {
		return ['Alice', 'Bob', 'Charlie'];
	}
}

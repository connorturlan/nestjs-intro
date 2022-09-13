import { ProgrammerCreateDTO } from '../dtos/ProgrammerCreate.dto';
import { ProgrammerUpdateDTO } from '../dtos/ProgrammerUpdate.dto';
import { Programmer } from '../programmer.entity';

export function sanitizeProgrammer(
	data: ProgrammerCreateDTO | ProgrammerUpdateDTO,
): ProgrammerCreateDTO {
	return {
		...data,
		username: data.username.toLowerCase(),
	};
}

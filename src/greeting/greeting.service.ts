import { Injectable } from '@nestjs/common';

@Injectable()
export class GreetingService {
	greeting(): string {
		return 'Hello there!';
	}
}

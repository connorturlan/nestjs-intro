import { Controller, Get } from '@nestjs/common';
import { GreetingService } from './greeting.service';

@Controller('/greeting')
export class GreetingController {
  constructor(private readonly service: GreetingService) {}

  @Get('')
  greeting(): string {
    return this.service.greeting();
  }
}

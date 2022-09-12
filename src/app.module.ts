import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProgrammerModule } from './programmers/programmers.module';

@Module({
	imports: [ProgrammerModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}

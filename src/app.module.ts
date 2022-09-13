import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Programmer } from './programmers/programmer.entity';
import { ProgrammerModule } from './programmers/programmers.module';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: 'localhost',
			port: 3306,
			username: 'root',
			password: 'MyPass',
			database: 'nest_programmers',
			entities: [Programmer],
			synchronize: false,
			migrationsRun: true,
			migrations: ['../dist/migration/*.js'],
		}),
		ProgrammerModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}

import {
	ExceptionFilter,
	Catch,
	ArgumentsHost,
	HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { EntityNotFoundError, QueryFailedError } from 'typeorm';

@Catch(EntityNotFoundError)
export class EntityNotFoundFilter implements ExceptionFilter {
	catch(exception: EntityNotFoundError, host: ArgumentsHost) {
		const ctx = host.switchToHttp();
		const response = ctx.getResponse<Response>();
		const request = ctx.getRequest<Request>();
		const name = exception.name;

		response.status(404).json({
			name,
			message: exception.message,
			timestamp: new Date().toISOString(),
			path: request.url,
			method: request.method,
		});
	}
}

import {
	ExceptionFilter,
	Catch,
	ArgumentsHost,
	HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { EntityNotFoundError, QueryFailedError } from 'typeorm';

@Catch(QueryFailedError)
export class QueryErrorFilter implements ExceptionFilter {
	catch(exception: QueryFailedError, host: ArgumentsHost) {
		const ctx = host.switchToHttp();
		const response = ctx.getResponse<Response>();
		const request = ctx.getRequest<Request>();
		const driverError = exception.driverError;

		response.status(400).json({
			driverError: driverError,
			message: exception.message,
			timestamp: new Date().toISOString(),
			path: request.url,
			method: request.method,
		});
	}
}

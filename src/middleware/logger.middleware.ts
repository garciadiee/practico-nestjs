import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl } = req;
    const start = Date.now();

    res.on('finish', () => {
      const { statusCode } = res;
      const delay = Date.now() - start;
      console.log(`[${new Date().toISOString()}] ${method} ${originalUrl} ${statusCode} - ${delay}ms`);
    });

    next();
  }
}

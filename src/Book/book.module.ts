import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { booksController } from './book.controller';
import { bookService } from './book.service';
import { LoggerMiddleware } from 'src/logger.middleware';
@Module({
  imports: [],
  providers: [bookService],
  controllers: [booksController],
})
export class booksModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('book');
  }
}

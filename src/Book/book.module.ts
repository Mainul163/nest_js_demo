import { Module } from '@nestjs/common';
import { booksController } from './book.controller';
import { bookService } from './book.service';
@Module({
  imports: [],
  providers: [bookService],
  controllers: [booksController],
})
export class booksModule {}

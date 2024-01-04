import { Controller, Get } from '@nestjs/common';
import { bookService } from './book.service';
@Controller('book')
export class booksController {
  constructor(private readonly bookService: bookService) {}

  @Get()
  getBook() {
    return this.bookService.getBook();
  }
}

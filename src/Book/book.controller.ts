import { Controller, Get, Post, Body } from '@nestjs/common';
import { bookService } from './book.service';
import { createDto } from './dtos/create.dto';
@Controller('book')
export class booksController {
  constructor(private readonly bookService: bookService) {}

  @Get()
  getBook() {
    return this.bookService.getBook();
  }
  @Post()
  saveBook(@Body() body: createDto) {
    return this.bookService.saveBook(body);
  }
}

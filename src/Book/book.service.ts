import { Injectable } from '@nestjs/common';
@Injectable()
export class bookService {
  getBook() {
    return 'take service';
  }
}

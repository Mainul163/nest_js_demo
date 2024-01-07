import { Injectable } from '@nestjs/common';
@Injectable()
export class bookService {
  getBook() {
    return 'take service';
  }
  saveBook(data) {
    console.log(data, 'hare');
    return data;
  }
}

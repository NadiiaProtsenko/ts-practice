import { Book } from './book';
import { ElectronicBook } from './electronicBook'; 

const book = new Book('1984', 'George Orwell', 1949);
console.log(book.getSummary()); 
const eBook = new ElectronicBook('Brave New World', 'Aldous Huxley', 1932, 'EPUB');
console.log(eBook.getSummary());
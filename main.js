"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var book_1 = require("./book");
var electronicBook_1 = require("./electronicBook");
var book = new book_1.Book('1984', 'George Orwell', 1949);
console.log(book.getSummary());
var eBook = new electronicBook_1.ElectronicBook('Brave New World', 'Aldous Huxley', 1932, 'EPUB');
console.log(eBook.getSummary());

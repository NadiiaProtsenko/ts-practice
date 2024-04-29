"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    Book.prototype.getSummary = function () {
        return "".concat(this.title, " by ").concat(this.author, ", published in ").concat(this.year);
    };
    return Book;
}());
exports.Book = Book;

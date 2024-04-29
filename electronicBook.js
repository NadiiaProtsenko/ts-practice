"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectronicBook = void 0;
var book_1 = require("./book");
var ElectronicBook = /** @class */ (function (_super) {
    __extends(ElectronicBook, _super);
    function ElectronicBook(title, author, year, format) {
        var _this = _super.call(this, title, author, year) || this;
        _this.format = format;
        return _this;
    }
    ElectronicBook.prototype.getSummary = function () {
        return "".concat(_super.prototype.getSummary.call(this), " in ").concat(this.format, " format");
    };
    ElectronicBook.prototype.getFormat = function () {
        return this.format;
    };
    return ElectronicBook;
}(book_1.Book));
exports.ElectronicBook = ElectronicBook;

import { Book } from './book';

export class ElectronicBook extends Book {
    private format: string;

    public constructor(title: string, author: string, year: number, format: string) {
        super(title, author, year);
        this.format = format;
    }

    public getSummary(): string {
        return `${super.getSummary()} in ${this.format} format`;
    }

    public getFormat(): string {
        return this.format;
    }
}
import { csvToJson } from "../src/csvToJson";
import path from "path";
import fs from "fs";

test('main test', () => {
    const fullPath1 = path.join(__dirname, '..', '__fixtures__', 'books.csv');
    const fullPath2 = path.join(__dirname, '..', '__fixtures__', 'books.json');

    const data2 = fs.readFileSync(fullPath2, 'utf-8');
    expect(csvToJson(fullPath1)).toEqual(data2);
});

test('wrong extname', () => {
    const fullPath1 = path.join(__dirname, '..', '__fixtures__', 'books.json');
    expect(() => csvToJson(fullPath1)).toThrow('Unexpected file');
});

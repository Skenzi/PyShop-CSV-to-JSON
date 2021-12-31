import { CsvToJson } from "../src/CsvToJson";
import path from "path";
import fs from "fs";

test('main test', () => {
    const fullPath1 = path.join(__dirname, '..', '__fixtures__', 'books.csv');
    const fullPath2 = path.join(__dirname, '..', '__fixtures__', 'books.json');

    const data2 = fs.readFileSync(fullPath2, 'utf-8');
    expect(CsvToJson(fullPath1)).toEqual(data2);
})

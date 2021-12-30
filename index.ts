const path = require("path");
const fs = require("fs");
const { parserCsv } = require("./src/parserCsv");
const genTree = require("./src/genTree");

const CsvToJson = (pathToCsv) => {
    const fullPath = path.resolve(process.cwd(), pathToCsv);
    const ext = path.extname(fullPath).slice(1);
    const dateFromCsv = parserCsv(fs.readFileSync(fullPath, "utf-8"), ext);
    return dateFromCsv;
};

console.log(CsvToJson("./__fixtures__/books.csv"));
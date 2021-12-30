var path = require("path");
var fs = require("fs");
var parserCsv = require("./src/parserCsv").parserCsv;
var genTree = require("./src/genTree");
var CsvToJson = function (pathToCsv) {
    var fullPath = path.resolve(process.cwd(), pathToCsv);
    var ext = path.extname(fullPath).slice(1);
    var dateFromCsv = parserCsv(fs.readFileSync(fullPath, "utf-8"), ext);
    return dateFromCsv;
};
console.log(CsvToJson("./__fixtures__/books.csv"));

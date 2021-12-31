const path = require("path");
const fs = require("fs");
const { parserCsv } = require("./parserCsv");
const { genTree } = require("./genTree");
const { genJson } = require("./genJson");

export const csvToJson = (pathToCsv) => {
    const ext = path.extname(pathToCsv).slice(1);
    const dataFromCsv = parserCsv(fs.readFileSync(pathToCsv, "utf-8"), ext);
    const tree = genTree(dataFromCsv);
    const dataJson = genJson(tree);
    return dataJson;
};

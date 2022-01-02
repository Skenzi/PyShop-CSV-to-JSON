const path = require("path");
const fs = require("fs");
const { csvToJson } = require("./src/csvToJson");

export const writeJson = (pathToCsv: string, pathToJson: string) => {
    fs.writeFileSync(pathToJson, csvToJson(pathToCsv));
};

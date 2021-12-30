"use strict";
exports.__esModule = true;
exports.parserCsv = void 0;
var parserCsv = function (dateCsv, extname) {
    if (extname !== 'csv') {
        throw new Error('Unexpected file');
    }
    ;
    var items = dateCsv.split('\n');
    return items.map(function (item) {
        var _a = item.split(';'), title = _a[0], author = _a[1], description = _a[2];
        return { title: title, author: author, description: description };
    });
};
exports.parserCsv = parserCsv;

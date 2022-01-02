#!/usr/bin/env node

const program = require('commander');
const { writeJson } = require('../built/index.js');

program
  .arguments('<filepathCsv> <filepathResult>')
  .action((filepathCsv, filepathResult) => {
    writeJson(filepathCsv, filepathResult);
    console.log('file created');
  });

program.parse(process.argv);

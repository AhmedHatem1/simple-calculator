#!/usr/bin/env node
const parsers = require('./parsers');
const operations = require('./operations');

if (process.argv[2] === '--help') {
    console.log(`you can specify the parser using: 
    --parser=parserName where parserName [flag | simple]`);
    return;
}
const getParser = (argv) =>{
    const params = argv.slice(2);
    if(params.find(e => e.startsWith('--')))
    {
        return "flag";
    }
    else
    {
        return "flag2";
    }
}
const parser = parsers[getParser(process.argv)];


const { operation, operands } = parser(process.argv);

const mathematicOperation = operations[operation];

const result = mathematicOperation(...operands);

console.log(result);
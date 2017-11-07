#!/usr/bin/env node
import program from 'commander';
import genDiff from '..';

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .arguments('<firstArgument> <secondArgument>')
  .action((firstFile, secondFile) => {
    console.log(genDiff(firstFile, secondFile));
  })
  .parse(process.argv);

var Parser = require('parse-xl'),
    sample = new Parser('sample.xlsx');
 
// get values in a column 
console.log(
  '\nValues in column `XYZ` of `Transcript`:', 
  sample.values('Sydney set', 'Test set'), 
  '\n'
);
 
// stream parsed records as line-delimited JSON 
sample.recordStream('Sydney set').pipe(process.stdout);
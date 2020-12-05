const csv = require('fast-csv');
const { writeToPath } = require('@fast-csv/format');
const path  = require('path');

const listings = [
  ['id', 'agentID', 'homePrice', 'location', 'propertyTax', 'thirtyYearAPR', 'fifteenYearAPR', 'sevenOneARMAPR', 'fiveOneARMAPR', 'VA30YearAPR', 'Jumbo30YearAPR'],
  ['1', '1', 400000, 'San Francisco', 1, 2.80, 2.57, 3.02, 2.97, 2.51, 2.98],
];
writeToPath(path.resolve(__dirname, 'seed.csv'), listings)
  .on('error', err => console.error(err))
  .on('finish', () => console.log('Done writing.'));


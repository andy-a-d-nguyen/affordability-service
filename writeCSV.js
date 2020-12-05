const csv = require('fast-csv');
const { writeToPath } = require('@fast-csv/format');
const path  = require('path');
const faker = require('faker');
// const {addListings} = require('./addListings.js');

const generateRandomAPRUpTo4 = () => {
  return parseFloat(((Math.random() * 4) + 1).toFixed(2));
}

const generateRandomAPRUpTo3 = () => {
  return parseFloat(((Math.random() * 3) + 1).toFixed(2));
}

const generatePropertyTax = () => {
  return parseFloat((Math.random() * 1).toFixed(2));
}

const generateLocation = () => {
  return faker.address.streetAddress() + faker.address.city() + faker.address.state();
}

const addListings = (listings, counter) => {
  let i = 1;

  while (i <= counter) {
    let listing = [
      i,
      Math.floor(Math.random() * (counter / 2)),
      Math.floor((Math.random() * 2000000) + 400000),
      generateLocation(),
      generatePropertyTax(),
      generateRandomAPRUpTo4(),
      generateRandomAPRUpTo3(),
      generateRandomAPRUpTo4(),
      generateRandomAPRUpTo4(),
      generateRandomAPRUpTo3(),
      generateRandomAPRUpTo3(),
    ];

    listings.push(listing);
    i++;
  }
};


const data = [
  ['id', 'agentID', 'homePrice', 'location', 'propertyTax', 'thirtyYearAPR', 'fifteenYearAPR', 'sevenOneARMAPR', 'fiveOneARMAPR', 'VA30YearAPR', 'Jumbo30YearAPR'],
];

async function wait(listings, counter) {
  await addListings(listings, counter);
}

wait(data, 1000000);

writeToPath(path.resolve(__dirname, 'seed.csv'), data)
  .on('error', err => console.error(err))
  .on('finish', () => console.log('Done writing.'));



const faker = require('faker');

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

module.exports = {
  addListings,
}
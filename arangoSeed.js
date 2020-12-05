const { Database, aql } = require("arangojs");

const db = new Database({
  url: "http://localhost:8529",
  databaseName: "sdc",
  auth: { username: "root", password: "password" },
});

collection = db.collection('listings');

listing = {
  id: 1,
  agentID: 'agents/1',
  homePrice: 400000,
  location: 'San Francisco',
  propertyTax: 1,
  thirtyYearAPR: 2.80,
  fifteenYearAPR: 2.57,
  sevenOneARMAPR: 3.02,
  fiveOneARMAPR: 2.97,
  VA30YearAPR: 2.51,
  Jumbo30YearAPR: 2.98,
};

collection.save(listing).then(
  meta => console.log('Document saved:', meta._rev),
  err => console.error('Failed to save document:', err)
);

collection = db.collection('agents');

agent = {
  _key: "1",
  id: 1,
  name: 'House Seller',
  age: 24,
  rating: 4.3,
  quantitySold: 20,
  totalSales: 750000,
  gender: 'male',
  email: 'houseseller@house.com'
}

collection.save(agent).then(
  meta => console.log('Document saved:', meta._rev),
  err => console.error('Failed to save document:', err)
);
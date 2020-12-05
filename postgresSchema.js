const { Pool, Client } = require('pg')
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'sdc',
//   password: 'postgres',
//   // port: 3211,
// })
// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })


const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'sdc',
  password: 'postgres',
  // port: 3211,
})
client.connect();

const agents = `
  CREATE TABLE agents (
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    age INTEGER,
    rating REAL,
    quantitySold INTEGER,
    totalSales INTEGER,
    gender VARCHAR(40),
    email VARCHAR(60)
  )
`;

const listings = `
  CREATE TABLE listings (
    id SERIAL PRIMARY KEY,
    agentID INTEGER,
    homePrice INTEGER,
    location VARCHAR(60),
    propertyTax REAL,
    thirtyYearAPR REAL,
    fifteenYearAPR REAL,
    sevenOneARMAPR REAL,
    fiveOneARMAPR REAL,
    VA30YearAPR REAL,
    Jumbo30YearAPR REAL
  )
`;

// client.query(agents, (err, res) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('Table is successfully created');
//   client.end();
// });

// client.query(listings, (err, res) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('Table is successfully created');
//   client.end();
// });

async function createTable() {
  await client.query('DROP TABLE IF EXISTS agents, listings CASCADE', (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('dropped all tables');
  });
  await client.query(agents, (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Table is successfully created');
  });
  await client.query(listings, (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Table is successfully created');
    client.end();
  });
}

createTable()
  .then()
  .catch(err => console.log(err));
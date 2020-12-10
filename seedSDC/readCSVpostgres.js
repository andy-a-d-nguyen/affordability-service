const {Pool, Client} = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  database: "sdc",
  password: "postgres",
  // port: 5432
});

client.connect();

const insertListings = "COPY listings FROM '/home/andy/Desktop/HRSF_SDC/affordability-service/seedSDC/postgresListings.csv' DELIMITER ',' CSV HEADER";

const insertAgents = "COPY agents FROM '/home/andy/Desktop/HRSF_SDC/affordability-service/seedSDC/postgresAgents.csv' DELIMITER ',' CSV HEADER";

const createListingSeq = "CREATE SEQUENCE listings_id_seq OWNED BY listings.id";

const setListingSeq = "ALTER TABLE listings ALTER COLUMN id SET DEFAULT NEXTVAL('listings_id_seq')";

const resetListingSeq = "SELECT setval('listings_id_seq', (SELECT MAX (id) FROM listings) + 1)";

const createAgentSeq = "CREATE SEQUENCE agents_id_seq OWNED BY agents.id";

const setAgentSeq = "ALTER TABLE agents ALTER COLUMN id SET DEFAULT NEXTVAL('agents_id_seq')";

async function insert() {
  await client.query(insertListings, (err, res) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log('success inserting listings');
    }
  });
  await client.query(insertAgents, (err, res) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log('success inserting agents');
    }
  });
  await client.query(createListingSeq, (err, res) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log('success creating listing sequence');
    }
  });
  await client.query(setListingSeq, (err, res) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log('success setting listing sequence');
    }
  });
  await client.query(resetListingSeq, (err, res) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log('success resetting listing sequence');
    }
  });
  await client.query(createAgentSeq, (err, res) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log('success creating agent sequence');
    }
  });
  await client.query(setAgentSeq, (err, res) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log('success setting agent sequence');
      client.end();
    }
  });
}

insert()
  .then()
  .catch(err => console.log(err));
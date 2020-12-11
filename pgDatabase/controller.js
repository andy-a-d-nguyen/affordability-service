const {Pool} = require("pg");

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sdc',
  password: 'postgres',
});

module.exports = {
  get: (req, res) => {
    const {id} = req.params;
    pool.query(`SELECT * FROM listings WHERE id = ${id}`, (err, data) => {
      if (err) {
        console.log(err.stack);
        res.sendStatus(404);
      } else {
        res.json(data.rows[0]);
        res.status(200);
      }
    })
  },
  post: (req, res) => {
    const {agentid, homeprice, location, propertytax, thirtyyearapr, fifteenyearapr, sevenonearmapr, fiveonearmapr, va30yearapr, jumbo30yearapr} = req.body;
    pool.query(`INSERT INTO listings (agentid, homeprice, location, propertytax, thirtyyearapr, fifteenyearapr, sevenonearmapr, fiveonearmapr, va30yearapr, jumbo30yearapr) VALUES (${agentid},${homeprice},'${location}',${propertytax},${thirtyyearapr},${fifteenyearapr},${sevenonearmapr},${fiveonearmapr},${va30yearapr},${jumbo30yearapr})`, (err, data) => {
      if (err) {
        console.log(err.stack);
        res.sendStatus(406);
      } else {
        res.sendStatus(200);
      }
    })
  }
}
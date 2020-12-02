/* eslint-disable array-callback-return */
const schema = require('../DataBase/schema.js');
const {Price} = require('../DataBase/schema.js');
const mongo = require('../DataBase/mongo');

module.exports = {
  get: (req, res) => {
    mongo.connect();
    Price.find({id: req.params.id}, (err, data) => {
      if (err) {
        res.sendStatus(404);
        mongo.db.close();
      } else {
        res.status(200).send(data);
        mongo.db.close();
      }
    });
  },
  getAll: (req, res) => {
    mongo.connect();
    schema.Price.find((err, data) => {
      if (err) {
        res.status(404);
      } else {
        res.status(200).send(data);
        mongo.db.close();
      }
    });
  },
  post: async (req, res) => {
    const {body} = req;
    mongo.connect();
    const result = await Price.exists({id: body.id});
    if (result) {
      res.sendStatus(406);
    } else {
      Price.create(body, (err, data) => {
        if (err) {
          res.sendStatus(406);
          mongo.db.close();
        } else {
          mongo.db.close();
        }
      })
      res.send('POST request success to server');
    }
  },
  put: async (req, res) => {
    const {body} = req;
    mongo.connect();
    const result = await Price.exists({id: body.id});
    if (!result) {
      res.sendStatus(404);
    } else {
      await Price.update({id: body.id}, {homePrice: body.homePrice}, (err, data) => {
        if (err) {
          res.sendStatus(404);
          mongo.db.close();
        } else {
          mongo.db.close();
        }
      })
    }
    res.send('PUT request success to server');
  },
  delete: async (req, res) => {
    const {body} = req;
    mongo.connect();
    const result = await Price.exists({id: body.id});
    if (!result) {
      res.sendStatus(404);
    } else {
      Price.deleteOne({id: body.id}, (err, data) => {
        if (err) {
          res.sendStatus(404);
          mongo.db.close();
        } else  {
          mongo.db.close();
        }
      })
      res.send('DELETE request success to server');
    }
  }
};

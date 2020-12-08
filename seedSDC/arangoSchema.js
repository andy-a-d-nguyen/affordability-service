const { Database, aql } = require("arangojs");

const db = new Database({
  url: "http://localhost:8529",
  databaseName: "sdc",
  auth: { username: "root", password: "password" },
});

listingSchema = {
  "rule" : {
    "type" : "object",
    "properties": {
      "id": {
        "type": "number",
      },
      "agentID": {
        "type": "string",
      },
      "homePrice": {
        "type": "number",
      },
      "location": {
        "type": "number",
      },
      "propertyTax": {
        "type": "number",
      },
      "thirtyYearAPR": {
        "type": "number",
      },
      "fifteenYearAPR": {
        "type": "number",
      },
      "sevenOneARMAPR": {
        "type": "number",
      },
      "fiveOneARMAPR": {
        "type": "number",
      },
      "VA30YearAPR": {
        "type": "number",
      },
      "Jumbo30YearAPR": {
        "type": "number",
      }
    },
    "required" : ["id", "agentID", "homePrice", "location", "propertyTax", "thirtyYearAPR", "fifteenYearAPR", "sevenOneARMAPR", "fiveOneARMAPR", "VA30YearAPR", "Jumbo30YearAPR"],
  },
  "level": "moderate",
  "message": "Listing Schema Validation Failed."
}
// collection = db.createCollection(
//   name = "listings",
//   schema = listingSchema
// ).then(
//   () => console.log('Collection "listings" created'),
//   err => console.error('Failed to create collection:', err)
// );

collection = db.createCollection(
  name = "listings",
  {
    keyOptions: {
      type: "autoincrement",
    },
  }
).then(
  () => console.log('Collection "listings" created')
).catch(
  err => console.error('Failed to create collection:', err)
)

agentSchema = {
  "rule" : {
    "type" : "object",
    "properties": {
      "id": {
        "type": "number",
      },
      "name": {
        "type": "string",
      },
      "age": {
        "type": "number",
      },
      "rating": {
        "type": "number",
      },
      "quantitySold": {
        "type": "number",
      },
      "totalSales": {
        "type": "number",
      },
      "gender": {
        "type": "number",
      },
      "email": {
        "type": "string",
      }
    },
    "required" : ["id", "name", "age", "rating", "quantitySold", "totalSales", "gender", "email"],
  },
  "level": "moderate",
  "message": "Agent Schema Validation Failed."
}
collection = db.createCollection(
  name = "agents",
  {
    keyOptions: {
      type: "autoincrement",
    },
  }
).then(
  () => console.log('Collection "agents" created')
).catch(
  err => console.error('Failed to create collection:', err)
)

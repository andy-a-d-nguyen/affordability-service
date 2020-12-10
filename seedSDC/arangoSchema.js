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
      "agentID": {
        "type": "string",
      },
      "homePrice": {
        "type": "number",
      },
      "location": {
        "type": "string",
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
    "required" : ["homePrice", "location", "propertyTax", "thirtyYearAPR", "fifteenYearAPR", "sevenOneARMAPR", "fiveOneARMAPR", "VA30YearAPR", "Jumbo30YearAPR"],
  },
  "level": "moderate",
  "message": "Listing Schema Validation Failed."
}

collection = db.createCollection(
  name = "test",
  {
    keyOptions: {
      type: "autoincrement",
    },
    schema: listingSchema
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
    "required" : ["name", "age", "rating", "quantitySold", "totalSales", "gender", "email"],
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
    schema: agentSchema
  }
).then(
  () => console.log('Collection "agents" created')
).catch(
  err => console.error('Failed to create collection:', err)
)

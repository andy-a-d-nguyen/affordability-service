const util = require('util');
const exec = util.promisify(require('child_process').exec);
const colors = require('colors');

const importCSVarango = async (filepath, collectionName) => {
  console.log('Importing...'.bold);
  try {
    const { stdout, stderr } = await exec(`arangoimport --file "${filepath}" --type csv --collection "${collectionName}" --server.database sdc --server.password password`);
    console.log(`stdout:, ${stdout}`.green);
    if (stderr) console.log(`stderr:, ${stderr}`.red);
  } catch (err) {
    console.error(`${err}`.red);
  };
};

// importCSVarango('/home/andy/Desktop/HRSF_SDC/affordability-service/seedSDC/arangoListings.csv', 'listings');

// importCSVarango('/home/andy/Desktop/HRSF_SDC/affordability-service/seedSDC/arangoAgents.csv', 'agents');

// importCSVarango('/home/andy/Desktop/HRSF_SDC/affordability-service/seedSDC/test.csv', 'test');

const importAll = async () => {
  await importCSVarango('/home/andy/Desktop/HRSF_SDC/affordability-service/seedSDC/arangoListings.csv', 'listings');
  await importCSVarango('/home/andy/Desktop/HRSF_SDC/affordability-service/seedSDC/arangoAgents.csv', 'agents');
}

// importAll();

// ADD SCHEMA VALIDATION AFTER CSV FILES ARE LOADED INTO ARANGO. OTHERWISE STDOUT ERROR.
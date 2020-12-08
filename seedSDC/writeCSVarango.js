const faker = require('faker');
const fs = require('fs');

const writeListings = fs.createWriteStream('test.csv');
// writeListings.write('_key,id,agentID,homePrice,location,propertyTax,thirtyYearAPR,fifteenYearAPR,sevenOneARMAPR,fiveOneARMAPR,VA30YearAPR,Jumbo30YearAPR\n', 'utf-8');
writeListings.write('id,agentID,homePrice,location,propertyTax,thirtyYearAPR,fifteenYearAPR,sevenOneARMAPR,fiveOneARMAPR,VA30YearAPR,Jumbo30YearAPR\n', 'utf-8');

const writeTenMillionListings = (writer, encoding, callback) => {
  let i = 100;
  let id = 0;
  const write = () => {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const agentID = Math.floor(Math.random() * (i / 2));
      const homePrice = Math.floor((Math.random() * 2000000) + 400000);
      const location = `${faker.address.streetAddress()} ${faker.address.city()} ${faker.address.state()}`;
      const propertyTax = parseFloat((Math.random() * 1).toFixed(2));
      const thirtyYearAPR = parseFloat(((Math.random() * 4) + 1).toFixed(2));
      const fifteenYearAPR = parseFloat(((Math.random() * 3) + 1).toFixed(2));
      const sevenOneARMAPR = parseFloat(((Math.random() * 4) + 1).toFixed(2));
      const fiveOneARMAPR = parseFloat(((Math.random() * 4) + 1).toFixed(2));
      const VA30YearAPR = parseFloat(((Math.random() * 3) + 1).toFixed(2));
      const Jumbo30YearAPR = parseFloat(((Math.random() * 3) + 1).toFixed(2));
      // const listing = `${id},${id},agents/${agentID},${homePrice},${location},${propertyTax},${thirtyYearAPR},${fifteenYearAPR},${sevenOneARMAPR},${fiveOneARMAPR},${VA30YearAPR},${Jumbo30YearAPR}\n`;
      const listing = `${id},agents/${agentID},${homePrice},${location},${propertyTax},${thirtyYearAPR},${fifteenYearAPR},${sevenOneARMAPR},${fiveOneARMAPR},${VA30YearAPR},${Jumbo30YearAPR}\n`;
      if (i === 0) {
        writer.write(listing, encoding, callback);
      } else {
        ok = writer.write(listing, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

writeTenMillionListings(writeListings, 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log('success writing listings');
    writeListings.end();
  }
})

// const writeAgents = fs.createWriteStream('arangoAgents.csv');
// writeAgents.write('_key,id,name,age,rating,quantitySold,totalSales,gender,email\n', 'utf-8');

// const writeFiveMillionAgents = (writer, encoding, callback) => {
//   let i = 5000000;
//   let id = 0;
//   const write = () => {
//     let ok = true;
//     do {
//       i -= 1;
//       id += 1;
//       const name = faker.name.findName();
//       const age = Math.floor((Math.random() * 50) + 20);
//       const rating = parseFloat((Math.random() * 5).toFixed(2));
//       const quantitySold = Math.floor(Math.random() * 100);
//       const totalSales = Math.floor((Math.random() * 4000000) + 400000);
//       const gender = faker.commerce.productName();
//       const email = faker.internet.email();
//       const agent = `${id},${id},${name},${age},${rating},${quantitySold},${totalSales},${gender},${email}\n`;
//       if (i === 0) {
//         writer.write(agent, encoding, callback);
//       } else {
//         ok = writer.write(agent, encoding);
//       }
//     } while (i > 0 && ok);
//     if (i > 0) {
//       writer.once('drain', write);
//     }
//   }
//   write();
// }

// writeFiveMillionAgents(writeAgents, 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('success writing agents');
//     writeAgents.end();
//   }
// })
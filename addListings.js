const addListings = (listings, counter) {
  let i = 1;

  let listing = [
    i,
    Math.floor(Math.random() * (counter / 2)),
    Math.floor((Math.random() * 2000000) + 400000),
    
  ];

  while (i <= counter) {
    listings.push(listing);
    i++;
  }
};
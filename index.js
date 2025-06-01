const express = require("express");
const app = express();

const cinemasArray = [
  { id: 1, name: "Shaw Theatres Lido",      location: "Orchard"       },
  { id: 2, name: "Shaw Theatres Balestier", location: "Balestier Road"},
  { id: 3, name: "Shaw Theatres Jewel",     location: "Changi Airport"},
  { id: 4, name: "Shaw Theatres Nex",       location: "Serangoon"     },
  { id: 5, name: "Shaw Theatres Lot One",   location: "Chua Chu Kang" }
];

app.get("/cinemas", (req, res) => {
  res.json(cinemasArray);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Cinema mock listening on port ${port}`);
});

require("dotenv").config();
const express = require("express");
const cors = require("cors");


const app = express();

app.use( express.static( `${__dirname}/../build` ) );
app.use(cors());

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require('path')


const app = express();

app.use( express.static( `${__dirname}/../build` ) );
app.use(cors());

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
  })

const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});

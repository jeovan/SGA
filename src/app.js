const express = require('express');
const consign = require('consign');
const config  = require('./config/env')[process.env.NODE_ENV]; 
const app = express();

app.use(express.static('./src/public'));

consign()
  .include('src/controllers')
  .then('src/config/routes.js')
  .into(app);

app.listen(config.PORT,()=>{
  console.log(`server running in port ${config.PORT}` );
});
//access point

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const { dbConnection ,createDB } = require('./db')
dotenv.config();

const api = express();
apiPort = 3001 || process.env["APP_ENV"];

api.use(cors());
api.use(express.json());
api.use(morgan("dev"));
api.use(express.urlencoded({extended: false}));
api.listen(apiPort, ()=>{
    console.log('API RUNNING ON PORT', apiPort)
    createDB().then(() => {
        console.log('DB INITIALIZED :)');
      });
 
});


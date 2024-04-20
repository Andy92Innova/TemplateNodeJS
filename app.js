require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.SERVER_PORT || 3001

//middlewares
app.use(express.json());
app.use(cors())
app.use('/api', require('./src/routes'));

//startup
app.listen(port, ()=>{
    console.log(`server is running on http://localhost:${port}`)
});


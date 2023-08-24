const express = require('express')
const mongoose = require('mongoose')
const connectDB = require('./config/database')
const cors = require('cors')
const cookieParser = require('cookie-parser');


const app = express();
const port = 3000;

connectDB()

app.use(express.json())
app.use(cors());
app.use(cookieParser());
app.use('/api/auth', require('./routes/api/auth'))

mongoose.connection.once('open', ()=>{
  console.log('DB connected')
  app.listen(port, () => { console.log(`Listening on port ${port}`) })
})
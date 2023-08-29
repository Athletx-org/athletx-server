const mongoose = require('mongoose');

const connectionString = process.env.mongodb_connection_string

async function connect(){
  try {
    await mongoose.connect(connectionString, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
  } catch (error) {
    console.log(error)
  }
}

module.exports = connect
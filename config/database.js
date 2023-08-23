const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://athletx:athletx@athletx.ipgocbt.mongodb.net/AthletX?retryWrites=true&w=majority'

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
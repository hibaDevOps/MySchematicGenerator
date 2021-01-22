const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//monggose

// Define collection and schema
let SD_USER = new Schema({
  emailAddress: {
    type: String
  },
  password:{
    type:String
  },
  firstname:{
    type:String
  },
  lastname:{
      type:String
  }
}, {
  collection: 'SD_USER'
})
module.exports = mongoose.model('SD_USER', SD_USER);
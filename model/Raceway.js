const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//monggose
 
let SD_RACEWAY_SCHEDULE = new Schema({
    ID: { type: String, default: '' },
    REF_SIZE: { type: String, default: '' },
    ESTIMATED_LENGTH: { type: String, default: '' },
    ACTUAL_LENGTH: { type: String, default: '' },
    REMARKS: { type: String, default: '' }


}, {
    collection: 'SD_RACEWAY_SCHEDULE'
})

 
module.exports = mongoose.model('SD_RACEWAY_SCHEDULE', SD_RACEWAY_SCHEDULE);
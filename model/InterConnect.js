const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//monggose
 

let SD_INTERCONNECT_SCHEDULE = new Schema({
    ID: { type: String, default: '' },
    ITEM: { type: String, default: '' },
    SUPPLIER_PART_NO: { type: String, default: '' },
    MANUFACTURER: { type: String, default: '' },
    MANUFACTURER_PRT_NO: { type: String, default: '' },
    WORKING_VOLTAGE: { type: String, default: '' },
    FLA: { type: String, default: '' },
    OC_SIZE: { type: String, default: '' },
    LUG_TEMP_RATING: { type: String, default: '' },
    FROM: { type: String, default: '' },
    FROM_TERM_NO: { type: String, default: '' },
    TO: { type: String, default: '' },
    TO_TERM_NO: { type: String, default: '' },
    LENGHT: { type: String, default: '' },
    SIZE_AWG: { type: String, default: '' },
    NO_OF_COND: { type: String, default: '' },
    NEC_CLASS: { type: String, default: '' },
    INSULATION_TYPE: { type: String, default: '' },
    JACKET_TYPE: { type: String, default: '' },
    INSULATION_RATING: { type: String, default: '' },
    TEMP_RATING: { type: String, default: '' },
    DIAMETER: { type: String, default: '' },
    BEND_RADIUS: { type: String, default: '' },
    CONNECTION_SIZE: { type: String, default: '' },
    SERVICE_REF: { type: String, default: '' },
    DESCRIPTION: { type: String, default: '' }


}, {
    collection: 'SD_INTERCONNECT_SCHEDULE'
});
 
 
module.exports = mongoose.model('SD_INTERCONNECT_SCHEDULE', SD_INTERCONNECT_SCHEDULE); 
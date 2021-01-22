const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//monggose
 

let SD_CIRCUIT_SCHEDULE = new Schema({
    ID: { type: String, default: '' },
    SERVICE_REF_NO: { type: String, default: '' },
    DEVICE_LOCATION_S: { type: String, default: '' },
    DEVICE_TYPE_S: { type: String, default: '' },
    DEVICE_LABEL_S: { type: String, default: '' },
    MANUFACTURER_S: { type: String, default: '' },
    MANUFACTURER_MODEL_NO_S: { type: String, default: '' },
    AMPERE_RATING_S: { type: String, default: '' },
    TRIP_UNIT_SETTING_S: { type: String, default: '' },
    SHORT_CURCUIT_S: { type: String, default: '' },
    INSTALLED_LUG_KIT_PART_NO_S: { type: String, default: '' },
    LUG_WIRE_RANGE_S: { type: String, default: '' },
    TERMINAL_TORGUE_S: { type: String, default: '' },
    TERMINAL_TEMP_RATING_S: { type: String, default: '' },

    DEVICE_LOCATION_L: { type: String, default: '' },
    DEVICE_TYPE_L: { type: String, default: '' },
    DEVICE_LABEL_L: { type: String, default: '' },
    MANUFACTURER_L: { type: String, default: '' },
    MANUFACTURER_MODEL_NO_L: { type: String, default: '' },
    AMPERE_RATING_L: { type: String, default: '' },
    TRIP_UNIT_SETTING_L: { type: String, default: '' },
    SHORT_CURCUIT_L: { type: String, default: '' },
    INSTALLED_LUG_KIT_PART_NO_L: { type: String, default: '' },
    LUG_WIRE_RANGE_L: { type: String, default: '' },
    TERMINAL_TORGUE_L: { type: String, default: '' },
    TERMINAL_TEMP_RATING_L: { type: String, default: '' }


}, {
    collection: 'SD_CIRCUIT_SCHEDULE'
});

  
module.exports = mongoose.model('SD_CIRCUIT_SCHEDULE', SD_CIRCUIT_SCHEDULE); 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//monggose

// Define collection and schema
let SD_SERVICE_DATA_SCHEDULE = new Schema({
    ID: {
        type: String
    },
    REF_NO: {
        type: String
    },
    FROM_SETTPOC: {
        type: String
    },
    TO_SETTPOC: {
        type: String
    },
    FROM_LEVEL: {
        type: Number
    },
    TO_LEVEL: {
        type: Number
    },
    FROM_COMPONENT_ID: {
        type: String,
        ref: 'SD_COMPONENT'
    },
    TO_COMPONENT_ID: {
        type: String,
        ref: 'SD_COMPONENT'
    },
    VOLTAGE: {
        type: String,
        default: ''
    },
    FLA: {
        type: String,
        default: ''
    },
    CB_FRAME: {
        type: String,
        default: ''
    },
    CB_TRIP_UNIT: {
        type: String,
        default: ''
    },
    CB_TRIP_SET: {
        type: String,
        default: ''
    },
    PH: {
        type: String,
        default: ''
    },
    WIRING_CONFIG: {
        type: String,
        default: ''
    },
    CABLE_TYPE: {
        type: String,
        default: ''
    },
    CABLE_SIZE: {
        type: String,
        default: ''
    },
    CABLE_GND: {
        type: String,
        default: ''
    },
    RACEWAY_1: {
        type: String,
        default: ''
    },
    RACEWAY_2: {
        type: String,
        default: ''
    },
    RACEWAY_3: {
        type: String,
        default: ''
    },
    POWER_TYPE: {
        type: String,
        default: ''
    },
    PANEL_REF: {
        type: String,
        default: ''
    },
    CIRCUIT_NO: {
        type: String,
        default: ''
    },
    OPE: {
        type: String,
        default: ''
    },
    CABLE_TAG: {
        type: String,
        default: ''
    },
}, {
    collection: 'SD_SERVICE_DATA_SCHEDULE'
});
 

module.exports = mongoose.model('SD_SERVICE_DATA_SCHEDULE', SD_SERVICE_DATA_SCHEDULE); 
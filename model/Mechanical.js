const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//monggose

// Define collection and schema
let SD_MECH_SCHEDULE = new Schema({
    ID: {
        type: String
    },

    COMPONENT_ID: {
        type: String,
        ref: 'SD_COMPONENT'
    },
    SETTPOC: {
        type: String
    },
    REF_NO: {
        type: Number
    },
    LEVEL: {
        type: Number
    },
    SERVICE_DESCRIPTION: {
        type: String,
        ref: 'SD_SERVICES'
    },
    SERVICE_SIZE: {
        type: String
    },
    PIPE_CLASS: {
        type: String,
        ref: 'SD_PIPE'
    },
    CONNECTION_TYPE_SIZE: {
        type: String,
        default:""
    },
    CONNECTION_SIZE:{
        type:String,
        default:""
    },
    UM_TEMP_MIN: {
        type: String,
        default:""
    },
    UM_TEMP_MAX: {
        type: String,
        default:""
    },
    UM_TEMP_UNIT: {
        type: String,
        default:""
    },
    UM_PRES_MIN: {
        type: String,
        default:""
    },
    UM_PRES_MAX: {
        type: String,
        default:""
    },
    UM_PRES_UNIT: {
        type: String,
        default:""
    },
    UM_FLOW_MIN: {
        type: String,
        default:""
    },
    UM_FLOW_MAX: {
        type: String,
        default:""
    },
    UM_FLOW_UNIT: {
        type: String,
        default:""
    },
    SERVICE_CONN: {
        type: String,
        default:""
    },
    END_REF_NO: {
        type: String,
        default:""
    },
    OPE: {
        type: String,
        default:""
    },
    NOTES: {
        type: String,
        default:""
    }



}, {
    collection: 'SD_MECH_SCHEDULE'
})
module.exports = mongoose.model('SD_MECH_SCHEDULE', SD_MECH_SCHEDULE);
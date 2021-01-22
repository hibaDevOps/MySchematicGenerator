export class SD_SERVICE_DATA_SCHEDULE {
    _id: String;
    ID: String;
    REF_NO: String;
    FROM_SETTPOC: String;
    TO_SETTPOC: String;
    FROM_LEVEL: Number;
    TO_LEVEL: Number;
    FROM_COMPONENT_ID: String;
    TO_COMPONENT_ID: String;
    FROM_COMPONENT_NAME: String;
    TO_COMPONENT_NAME: String;
    VOLTAGE: String;
    FLA: String;
    CB_FRAME: String;
    CB_TRIP_UNIT: String;
    CB_TRIP_SET: String;
    PH: String;
    WIRING_CONFIG: String;
    CABLE_TYPE: String;
    CABLE_SIZE: String;
    CABLE_GND: String;
    RACEWAY_1: String;
    RACEWAY_2: String;
    RACEWAY_3: String;
    POWER_TYPE: String;
    PANEL_REF: String;
    CIRCUIT_NO: String;
    OPE: String;
    CABLE_TAG: String;
}

export class SD_INTERCONNECT_SCHEDULE {
    _id: String;
    ID: String;
    ITEM: String;
    SUPPLIER_PART_NO: String;
    MANUFACTURER: String;
    MANUFACTURER_PRT_NO: String;
    WORKING_VOLTAGE: String;
    FLA: String;
    OC_SIZE: String;
    LUG_TEMP_RATING: String;
    FROM: String;
    FROM_TERM_NO: String;
    TO: String;
    TO_TERM_NO: String;
    LENGHT: String;
    SIZE_AWG: String;
    NO_OF_COND: String;
    NEC_CLASS: String;
    INSULATION_TYPE: String;
    JACKET_TYPE: String;
    INSULATION_RATING: String;
    TEMP_RATING: String;
    DIAMETER: String;
    BEND_RADIUS: String;
    CONNECTION_SIZE: String;
    SERVICE_REF: String;
    DESCRIPTION: String;
}



export class SD_CIRCUIT_SCHEDULE {
    _id: String;
    ID: String;
    SERVICE_REF_NO: String;
    DEVICE_LOCATION_S: String;
    DEVICE_TYPE_S: String;
    DEVICE_LABEL_S: String;
    MANUFACTURER_S: String;
    MANUFACTURER_MODEL_NO_S: String;
    AMPERE_RATING_S: String;
    TRIP_UNIT_SETTING_S: String;
    SHORT_CURCUIT_S: String;
    INSTALLED_LUG_KIT_PART_NO_S: String;
    LUG_WIRE_RANGE_S: String;
    TERMINAL_TORGUE_S: String;
    TERMINAL_TEMP_RATING_S: String;

    DEVICE_LOCATION_L: String;
    DEVICE_TYPE_L: String;
    DEVICE_LABEL_L: String;
    MANUFACTURER_L: String;
    MANUFACTURER_MODEL_NO_L: String;
    AMPERE_RATING_L: String;
    TRIP_UNIT_SETTING_L: String;
    SHORT_CURCUIT_L: String;
    INSTALLED_LUG_KIT_PART_NO_L: String;
    LUG_WIRE_RANGE_L: String;
    TERMINAL_TORGUE_L: String;
    TERMINAL_TEMP_RATING_L: String;
}

export class SD_RACEWAY_SCHEDULE {
    _id: String;
    ID: String;
    REF_SIZE: String;
    ESTIMATED_LENGTH: String;
    ACTUAL_LENGTH: String;
    REMARKS: String;
}




import { Component, OnInit, ViewChild, NgZone, ElementRef } from '@angular/core';
import { SD_SERVICE_DATA_SCHEDULE, SD_INTERCONNECT_SCHEDULE, SD_CIRCUIT_SCHEDULE,SD_RACEWAY_SCHEDULE } from '../../models/Electrical';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner'; `
import { MatPaginator } from '@angular/material/paginator';`
import { ApiService } from '../../shared/api.service';
import * as _ from 'lodash';
import * as XLSX from 'xlsx';
import { MessageService } from "../../shared/messageService";
import { FormBuilder, FormGroup, FormArray, Validators, Form, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-project-service-data',
  templateUrl: './project-service-data.component.html',
  styleUrls: ['./project-service-data.component.css']
})
export class ProjectServiceDataComponent implements OnInit {


  serviceDataList = [];
  interconnectList = [];
  circuitList = [];
  racewayList = [];

  serviceDataHeader = [];
  interconnectHeader = [];
  circuitHeader = [];
  racewayHeader = [];

  serviceCols = [];
  interconnectCols = [];
  circuitCols = [];
  racewayCols = [];

  projectName: any;
  config = {
    itemsPerPage: 5,
    currentPage: 1,
    totalItems: 0
  };
  isEditable = false;


  @ViewChild('UploadFileInput', { static: false }) uploadFileInput: ElementRef;
  @ViewChild('UploadFileInput2', { static: false }) uploadFileInput2: ElementRef;
  @ViewChild('UploadFileInput3', { static: false }) uploadFileInput3: ElementRef;
  @ViewChild('UploadFileInput4', { static: false }) uploadFileInput4: ElementRef;
  projectId: string;
  UploadFileInput: any;
  UploadFileInput2: any;
  UploadFileInput3: any;
  UploadFileInput4: any;

  constructor(private ngZone: NgZone, private actRoute: ActivatedRoute, private router: Router, private fb: FormBuilder, private commonSevice: ApiService, private loader: Ng4LoadingSpinnerService, private ms: MessageService) {

    this.projectId = this.actRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.initHeaders();   
    this.openTab('SERVICE_DATA');
    this.isEditable = false; 
  }

  initHeaders() {
    this.serviceDataHeader = ["REF. NO", "FROM SETTPOC","TO SETTPOC", "FROM COMPONENT","TO COMPONENT", "FROM LEVEL", "TO LEVEL", "VOLTAGE", "FLA", "FRAME", "TRIP UNIT",
      "TRIP SET", "PH", "WIRING CONFIG", "TYPE", "SIZE", "GND", "RACEWAY", "POWER TYPE", "PANEL REF.", "CIRCUIT NO.", "OPE", "CABLE TAG"]
    this.serviceCols = ["REF_NO", "FROM_SETTPOC","TO_SETTPOC","FROM_COMPONENT_NAME", "TO_COMPONENT_NAME", "FROM_LEVEL", "TO_LEVEL", "VOLTAGE", "FLA",
      "CB_FRAME", "CB_TRIP_UNIT", "CB_TRIP_SET", "PH", "WIRING_CONFIG", "CABLE_TYPE", "CABLE_SIZE", "CABLE_GND", "RACEWAY_1", "POWER_TYPE", "PANEL_REF", "CIRCUIT_NO", "OPE", "CABLE_TAG"];

      this.interconnectHeader = ["ITEM", "SUPPLIER PART NO.", "MANUFACTURER", "MANUFACTURER PRT NO.", "WORKING VOLTAGE", "FLA", "O.C.SIZE", "LUG TEMP.RATING", "FROM",  "TERM.NO.", "TO", "TERM.NO.", "LENGHT", "SIZE(AWG)", "# OF COND.", "NEC CLASS", "INSULATION TYPE", "JACKET TYPE", "INSULATION  RATING (V)", "TEMP. RATING", "DIAMETER", "BEND RADIUS", "CONNECTION SIZE", "SERVICE REF.", "DESCRIPTION"];
      this. interconnectCols = ["ITEM", "SUPPLIER_PART_NO", "MANUFACTURER", "MANUFACTURER_PRT_NO", "WORKING_VOLTAGE", "FLA", "OC_SIZE", "LUG_TEMP_RATING", "FROM", "FROM_TERM_NO", "TO", "TO_TERM_NO", "LENGHT", "SIZE_AWG", "NO_OF_COND", "NEC_CLASS", "INSULATION_TYPE", "JACKET_TYPE", "INSULATION_RATING", "TEMP_RATING", "DIAMETER", "BEND_RADIUS", "CONNECTION_SIZE", "SERVICE_REF", "DESCRIPTION"];
      
      this.circuitHeader = ["SERVICE REF. NO","DEVICE LOCATION","DEVICE TYPE","DEVICE LABEL","MANUFACTURER","MANUFACTURER MODEL NO.","AMPERE RATING(AMPS)","TRIP UNIT/SETTING(AMPS)","SHORT CURCUIT OR INTERRUPT. RATING AT APPLIED VOLTAGE(AMPS)","INSTALLED LUG KIT PART NO.","LUG WIRE RANGE(AWG)","TERMINAL TORGUE (lbs)","TERMINAL TEMP.RATING","DEVICE LOCATION", "DEVICE TYPE","DEVICE LABEL","MANUFACTURER","MANUFACTURER MODEL NO.","AMPERE RATING(AMPS)","TRIP UNIT/SETTING(AMPS)","SHORT CURCUIT OR INTERRUPT. RATING AT APPLIED VOLTAGE(AMPS)","INSTALLED LUG KIT PART NO.","LUG WIRE RANGE(AWG)","TERMINAL TORGUE (lbs)","TERMINAL TEMP. RATING"];
      this.circuitCols = ["SERVICE_REF_NO", "DEVICE_LOCATION_S", "DEVICE_TYPE_S", "DEVICE_LABEL_S", "MANUFACTURER_S", "MANUFACTURER_MODEL_NO_S", "AMPERE_RATING_S", "TRIP_UNIT_SETTING_S", "SHORT_CURCUIT_S", "INSTALLED_LUG_KIT_PART_NO_S", "LUG_WIRE_RANGE_S", "TERMINAL_TORGUE_S", "TERMINAL_TEMP_RATING_S", "DEVICE_LOCATION_L", "DEVICE_TYPE_L", "DEVICE_LABEL_L", "MANUFACTURER_L", "MANUFACTURER_MODEL_NO_L", "AMPERE_RATING_L", "TRIP_UNIT_SETTING_L", "SHORT_CURCUIT_L", "INSTALLED_LUG_KIT_PART_NO_L", "LUG_WIRE_RANGE_L", "TERMINAL_TORGUE_L", "TERMINAL_TEMP_RATING_L"];
      
      this.racewayHeader = ["REF SIZE","ESTIMATED LENGTH", "ACTUAL LENGTH", "REMARKS"];
      this.racewayCols = ["REF_SIZE", "ESTIMATED_LENGTH", "ACTUAL_LENGTH", "REMARKS"];


  }

  openTab( name) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(name).style.display = "block";
    document.getElementById('BTN_' + name).className += " active";

  if(name =="SERVICE_DATA")  this.getServiceData();
  else if(name =="INTERCONNECT_SCHEDULE")  this.getServiceData();
  else if(name =="CIRCUIT_TERMINATION_DATA")  this.getServiceData();
  else if(name =="INTERCONNECT_RACEWAY_SECTIONBOX_SCHEDULE")  this.getServiceData();

  }



  getServiceData() {
    var URL1 = "project_electrical/service_data/getAll";
    var URL2 = 'project/read-project';

    this.loader.show();

    let promise = new Promise((resolve, reject) => {
      let promiseArray = [];
      promiseArray.push(this.commonSevice.promisify(URL1, this.projectId));
      promiseArray.push(this.commonSevice.promisify(URL2, this.projectId));

      Promise.all(promiseArray).then(result => {

        if (result[0].code == 200) {
          this.serviceDataList = result[0].data;
          for (let index = 0; index < this.serviceDataList.length; index++) {
            const element = this.serviceDataList[index];
            element.FROM_COMPONENT_NAME = element.FROM_COMPONENT_ID.COMPONENT_NAME;
            element.TO_COMPONENT_NAME = element.TO_COMPONENT_ID.COMPONENT_NAME;
          }
          this.config.totalItems = this.serviceDataList.length;
        }

        this.projectName = result[1].PROJECT_NAME;

        this.loader.hide();


      }).catch(err => {
        console.log(err);
        this.loader.hide();
      })
    });

  }

  
  getInterconnectData() {
    var URL1 = "project_electrical/interconnect/getAll"; 

    this.loader.show();

    let promise = new Promise((resolve, reject) => {
      let promiseArray = [];
      promiseArray.push(this.commonSevice.promisify(URL1, this.projectId)); 

      Promise.all(promiseArray).then(result => {

        if (result[0].code == 200) {
          this.interconnectList = result[0].data;          
          this.config.totalItems = this.serviceDataList.length;
        }
 

        this.loader.hide();


      }).catch(err => {
        console.log(err);
        this.loader.hide();
      })
    });

  }

  
  getCircuitData() {
    var URL1 = "project_electrical/circuit/getAll"; 

    this.loader.show();

    let promise = new Promise((resolve, reject) => {
      let promiseArray = [];
      promiseArray.push(this.commonSevice.promisify(URL1, this.projectId)); 

      Promise.all(promiseArray).then(result => {

        if (result[0].code == 200) {
          this.circuitList = result[0].data; 
          this.config.totalItems = this.serviceDataList.length;
        } 

        this.loader.hide();


      }).catch(err => {
        console.log(err);
        this.loader.hide();
      })
    });

  }

  
  getRacewayData() {
    var URL1 = "project_electrical/raceway/getAll"; 

    this.loader.show();

    let promise = new Promise((resolve, reject) => {
      let promiseArray = [];
      promiseArray.push(this.commonSevice.promisify(URL1, this.projectId)); 

      Promise.all(promiseArray).then(result => {

        if (result[0].code == 200) {
          this.racewayList = result[0].data; 
          this.config.totalItems = this.serviceDataList.length;
        }  
        this.loader.hide();


      }).catch(err => {
        console.log(err);
        this.loader.hide();
      })
    });

  }




  uploadServiceData(event) {
    //let af = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel']
    if (event.target.files.length > 0) {
      const file = event.target.files[0];

      let workBook = null;
      let jsonData = null;
      const reader = new FileReader();
      //const file = ev.target.files[0];
      reader.onload = (event) => {
        const data = reader.result;
        workBook = XLSX.read(data, { type: 'binary' });
        jsonData = workBook.SheetNames.reduce((initial, name) => {
          const sheet = workBook.Sheets[name];
          initial[name] = XLSX.utils.sheet_to_json(sheet);
          return initial;
        }, {});


        const dataString = JSON.stringify(jsonData);
        var excelArray = JSON.parse(dataString).Sheet1;
        var colName = "__EMPTY_";
        var elecInputArray = [];


        console.log('excelArray[row] :', excelArray[row])
        for (var row = 3; row < excelArray.length; row++) {

          if (!this.isPresent(excelArray[row]["ELECTRICAL SERVICE DATA"]) ||
            !this.isPresent(excelArray[row]["__EMPTY"]) ||
            !this.isPresent(excelArray[row][colName + "1"]) ||
            !this.isPresent(excelArray[row][colName + "2"]) ||
            !this.isPresent(excelArray[row][colName + "3"]) ||
            !this.isPresent(excelArray[row][colName + "4"]) ||
            !this.isPresent(excelArray[row][colName + "5"]) ||
            !this.isPresent(excelArray[row][colName + "16"])) {
            alert('Ref. No, Settopc, Component names, levels , raceway are required');
            this.UploadFileInput = "";
            return;
          }

          if (!this.is_Numeric(excelArray[row][colName + "4"]) ||
            !this.is_Numeric(excelArray[row][colName + "5"])) {
            alert('Level must be numeric');
            this.UploadFileInput = "";
            return;
          }

          var elecObj = new SD_SERVICE_DATA_SCHEDULE();
          elecObj.ID = this.projectId;
          elecObj.REF_NO = excelArray[row]["ELECTRICAL SERVICE DATA"];
          elecObj.FROM_SETTPOC = excelArray[row]["__EMPTY"];
          elecObj.TO_SETTPOC = excelArray[row][colName + "1"];
          elecObj.FROM_COMPONENT_ID = excelArray[row][colName + "2"];
          elecObj.TO_COMPONENT_ID = excelArray[row][colName + "3"];
          elecObj.FROM_LEVEL = excelArray[row][colName + "4"];
          elecObj.TO_LEVEL = excelArray[row][colName + "5"];
          elecObj.VOLTAGE = excelArray[row][colName + "6"];
          elecObj.FLA = excelArray[row][colName + "7"];
          elecObj.CB_FRAME = excelArray[row][colName + "8"];
          elecObj.CB_TRIP_UNIT = excelArray[row][colName + "9"];
          elecObj.CB_TRIP_SET = excelArray[row][colName + "10"];
          elecObj.PH = excelArray[row][colName + "11"];
          elecObj.WIRING_CONFIG = excelArray[row][colName + "12"];
          elecObj.CABLE_TYPE = excelArray[row][colName + "13"];
          elecObj.CABLE_SIZE = excelArray[row][colName + "14"];
          elecObj.CABLE_GND = excelArray[row][colName + "15"];
          elecObj.RACEWAY_1 = excelArray[row][colName + "16"];
          elecObj.RACEWAY_2 = excelArray[row][colName + "17"];
          elecObj.RACEWAY_3 = excelArray[row][colName + "18"];
          elecObj.POWER_TYPE = excelArray[row][colName + "19"];
          elecObj.PANEL_REF = excelArray[row][colName + "20"];
          elecObj.CIRCUIT_NO = excelArray[row][colName + "21"];
          elecObj.OPE = excelArray[row][colName + "22"];
          elecObj.CABLE_TAG = excelArray[row][colName + "23"]


          if (elecObj.FROM_LEVEL > 2) elecObj.FROM_LEVEL = 2;
          else if (elecObj.FROM_LEVEL < 0) elecObj.FROM_LEVEL = 0;

          if (elecObj.TO_LEVEL > 2) elecObj.TO_LEVEL = 2;
          else if (elecObj.TO_LEVEL < 0) elecObj.TO_LEVEL = 0;

          elecInputArray.push(elecObj);

        }
        var URL = "project_electrical/upload_service_data";
        this.UploadFileInput = "";

        this.loader.show();
        this.commonSevice.Add(elecInputArray, URL).subscribe(res => {
 
          this.getServiceData();
          if (res.code == 200)
            this.ms.openSnackBar("Data imported successfully");
          else
            this.ms.openSnackBar("Error loading data");


        }, error => {
          console.log(error);
          this.loader.hide();
        });


      }
      reader.readAsBinaryString(file);
    }
  }


  
  uploadInterconnectData(event) {
    //let af = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel']
    if (event.target.files.length > 0) {
      const file = event.target.files[0];

      let workBook = null;
      let jsonData = null;
      const reader = new FileReader();
      //const file = ev.target.files[0];
      reader.onload = (event) => {
        const data = reader.result;
        workBook = XLSX.read(data, { type: 'binary' });
        jsonData = workBook.SheetNames.reduce((initial, name) => {
          const sheet = workBook.Sheets[name];
          initial[name] = XLSX.utils.sheet_to_json(sheet);
          return initial;
        }, {});


        const dataString = JSON.stringify(jsonData);
        var excelArray = JSON.parse(dataString).Sheet1;
        var colName = "__EMPTY_";
        var elecInputArray = [];


        console.log('excelArray[row] :', excelArray[row])
        for (var row = 1; row < excelArray.length; row++) {
 
          var elecObj = new SD_INTERCONNECT_SCHEDULE();
          elecObj.ID = this.projectId;
          elecObj.ITEM = excelArray[row]["INTERCONNECT SCHEDULE"];
          elecObj.SUPPLIER_PART_NO = excelArray[row]["__EMPTY"];
          elecObj.MANUFACTURER = excelArray[row][colName + "1"];
          elecObj.MANUFACTURER_PRT_NO = excelArray[row][colName + "2"];
          elecObj.WORKING_VOLTAGE = excelArray[row][colName + "3"];
          elecObj.FLA = excelArray[row][colName + "4"];
          elecObj.OC_SIZE = excelArray[row][colName + "5"];
          elecObj.LUG_TEMP_RATING = excelArray[row][colName + "6"];
          elecObj.FROM = excelArray[row][colName + "7"];
          elecObj.FROM_TERM_NO   = excelArray[row][colName + "8"];
          elecObj.TO = excelArray[row][colName + "9"];
          elecObj.TO_TERM_NO = excelArray[row][colName + "10"];
          elecObj.LENGHT = excelArray[row][colName + "11"];
          elecObj.SIZE_AWG = excelArray[row][colName + "12"];
          elecObj.NO_OF_COND = excelArray[row][colName + "13"];
          elecObj.NEC_CLASS = excelArray[row][colName + "14"];
          elecObj.INSULATION_TYPE = excelArray[row][colName + "15"];
          elecObj.JACKET_TYPE = excelArray[row][colName + "16"];
          elecObj.INSULATION_RATING = excelArray[row][colName + "17"];
          elecObj.TEMP_RATING = excelArray[row][colName + "18"];
          elecObj.DIAMETER = excelArray[row][colName + "19"];
          elecObj.BEND_RADIUS = excelArray[row][colName + "20"];
          elecObj.CONNECTION_SIZE = excelArray[row][colName + "21"]
          elecObj.SERVICE_REF = excelArray[row][colName + "22"]
          elecObj.DESCRIPTION = excelArray[row][colName + "23"]
 
          elecInputArray.push(elecObj);

        }
        var URL = "project_electrical/upload_interconnect";
        this.UploadFileInput2 = "";

        this.loader.show();
        this.commonSevice.Add(elecInputArray, URL).subscribe(res => {
 
          this.getInterconnectData();
          if (res.code == 200)
            this.ms.openSnackBar("Data imported successfully");
          else
            this.ms.openSnackBar("Error loading data");


        }, error => {
          console.log(error);
          this.loader.hide();
        });


      }
      reader.readAsBinaryString(file);
    }
  }



  
  uploadCircuitData(event) {
    //let af = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel']
    if (event.target.files.length > 0) {
      const file = event.target.files[0];

      let workBook = null;
      let jsonData = null;
      const reader = new FileReader();
      //const file = ev.target.files[0];
      reader.onload = (event) => {
        const data = reader.result;
        workBook = XLSX.read(data, { type: 'binary' });
        jsonData = workBook.SheetNames.reduce((initial, name) => {
          const sheet = workBook.Sheets[name];
          initial[name] = XLSX.utils.sheet_to_json(sheet);
          return initial;
        }, {});


        const dataString = JSON.stringify(jsonData);
        var excelArray = JSON.parse(dataString).Sheet1;
        var colName = "__EMPTY_";
        var elecInputArray = [];


        console.log('excelArray[row] :', excelArray[row])
        for (var row = 2; row < excelArray.length; row++) {
 
          var elecObj = new SD_CIRCUIT_SCHEDULE();
          elecObj.ID = this.projectId;
          elecObj.SERVICE_REF_NO = excelArray[row]["CIRCUIT TERMINATION DATA"];
          elecObj.DEVICE_LOCATION_S = excelArray[row]["__EMPTY"];
          elecObj.DEVICE_TYPE_S = excelArray[row][colName + "1"];
          elecObj.DEVICE_LABEL_S = excelArray[row][colName + "2"];
          elecObj.MANUFACTURER_S = excelArray[row][colName + "3"];
          elecObj.MANUFACTURER_MODEL_NO_S = excelArray[row][colName + "4"];
          elecObj.AMPERE_RATING_S = excelArray[row][colName + "5"];
          elecObj.TRIP_UNIT_SETTING_S = excelArray[row][colName + "6"];
          elecObj.SHORT_CURCUIT_S = excelArray[row][colName + "7"];
          elecObj.INSTALLED_LUG_KIT_PART_NO_S   = excelArray[row][colName + "8"];
          elecObj.LUG_WIRE_RANGE_S = excelArray[row][colName + "9"];
          elecObj.TERMINAL_TORGUE_S = excelArray[row][colName + "10"];
          elecObj.TERMINAL_TEMP_RATING_S = excelArray[row][colName + "11"];

          elecObj.DEVICE_LOCATION_L = excelArray[row][colName + "12"];
          elecObj.DEVICE_TYPE_L = excelArray[row][colName + "13"];
          elecObj.DEVICE_LABEL_L = excelArray[row][colName + "14"];
          elecObj.MANUFACTURER_L = excelArray[row][colName + "15"];
          elecObj.MANUFACTURER_MODEL_NO_L = excelArray[row][colName + "16"];
          elecObj.AMPERE_RATING_L = excelArray[row][colName + "17"];
          elecObj.TRIP_UNIT_SETTING_L = excelArray[row][colName + "18"];
          elecObj.SHORT_CURCUIT_L = excelArray[row][colName + "19"];
          elecObj.INSTALLED_LUG_KIT_PART_NO_L = excelArray[row][colName + "20"];
          elecObj.LUG_WIRE_RANGE_L = excelArray[row][colName + "21"]
          elecObj.TERMINAL_TORGUE_L = excelArray[row][colName + "22"]
          elecObj.TERMINAL_TEMP_RATING_L = excelArray[row][colName + "23"]
 
          elecInputArray.push(elecObj);

        }
        var URL = "project_electrical/upload_circuit";
        this.UploadFileInput3 = "";

        this.loader.show();
        this.commonSevice.Add(elecInputArray, URL).subscribe(res => {
 
          this.getCircuitData();
          if (res.code == 200)
            this.ms.openSnackBar("Data imported successfully");
          else
            this.ms.openSnackBar("Error loading data");


        }, error => {
          console.log(error);
          this.loader.hide();
        });


      }
      reader.readAsBinaryString(file);
    }
  }



  uploadRacewayData(event) {
    //let af = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel']
    if (event.target.files.length > 0) {
      const file = event.target.files[0];

      let workBook = null;
      let jsonData = null;
      const reader = new FileReader();
      //const file = ev.target.files[0];
      reader.onload = (event) => {
        const data = reader.result;
        workBook = XLSX.read(data, { type: 'binary' });
        jsonData = workBook.SheetNames.reduce((initial, name) => {
          const sheet = workBook.Sheets[name];
          initial[name] = XLSX.utils.sheet_to_json(sheet);
          return initial;
        }, {});


        const dataString = JSON.stringify(jsonData);
        var excelArray = JSON.parse(dataString).Sheet1;
        var colName = "__EMPTY_";
        var elecInputArray = [];


        console.log('excelArray[row] :', excelArray[row])
        for (var row = 1; row < excelArray.length; row++) {
 
          var elecObj = new SD_RACEWAY_SCHEDULE();
          elecObj.ID = this.projectId;
          elecObj.REF_SIZE = excelArray[row]["INTERCONNECT RACEWAY SECTION/BOX SCHEDULE"];
          elecObj.ESTIMATED_LENGTH = excelArray[row]["__EMPTY"];
          elecObj.ACTUAL_LENGTH = excelArray[row][colName + "1"];
          elecObj.REMARKS = excelArray[row][colName + "2"]; 
 
          elecInputArray.push(elecObj);

        }
        var URL = "project_electrical/upload_raceway";
        this.UploadFileInput4 = "";

        this.loader.show();
        this.commonSevice.Add(elecInputArray, URL).subscribe(res => {
 
          this.getRacewayData();
          if (res.code == 200)
            this.ms.openSnackBar("Data imported successfully");
          else
            this.ms.openSnackBar("Error loading data");


        }, error => {
          console.log(error);
          this.loader.hide();
        });


      }
      reader.readAsBinaryString(file);
    }
  }


  isPresent(value) {

    if (typeof (value) == "string") {
      if (value == undefined || value == null || value.trim() == "")
        return false;
    } else {
      if (value == undefined || value == null)
        return false;
    }
    return true;
  }

  is_Numeric(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  }


  editItem(x){
    this.editIndex = x;
    this.isEditable = true;
  }

  cancelEdit(type){
    this.isEditable = false;
    if(type=="SERVICE_DATA"){
      this.getServiceData();
    }else if(type=="INTERCONNECT_SCHEDULE"){
      this.getInterconnectData();
    }else if(type=="CIRCUIT_TERMINATION_DATA"){
      this.getCircuitData();
    }else if(type=="INTERCONNECT_RACEWAY_SECTIONBOX_SCHEDULE"){
      this.getRacewayData();
    }
  }

  editIndex = -1;
saveItem(type, row){
  

  var URL = "project_electrical/edit-service-data"; 

  this.loader.show();

  let promise = new Promise((resolve, reject) => {
    let promiseArray = [];
    promiseArray.push(this.commonSevice.promisifyPost(URL,type, row)); 

    Promise.all(promiseArray).then(result => {

    //  if (result[0].code == 200) {
        this.isEditable = false;
        this.editIndex = -1; 
        
        if(type=="SERVICE_DATA"){
          this.getServiceData();
        }else if(type=="INTERCONNECT_SCHEDULE"){
          this.getInterconnectData();
        }else if(type=="CIRCUIT_TERMINATION_DATA"){
          this.getCircuitData();
        }else if(type=="INTERCONNECT_RACEWAY_SECTIONBOX_SCHEDULE"){
          this.getRacewayData();
        }
    //  }

      this.loader.hide();


    }).catch(err => {
      console.log(err);
      this.loader.hide();
    })
  });



}

deleteItem(type, row){
  
  var URL = "project_electrical/delete-service-data"; 
 

  this.loader.show();

  let promise = new Promise((resolve, reject) => {
    let promiseArray = [];
    promiseArray.push(this.commonSevice.promisifyPost(URL, type, row)); 

    Promise.all(promiseArray).then(result => {

     // if (result[0].code == 200) {
        this.isEditable = false;
        
        if(type=="SERVICE_DATA"){
          this.getServiceData();
        }else if(type=="INTERCONNECT_SCHEDULE"){
          this.getInterconnectData();
        }else if(type=="CIRCUIT_TERMINATION_DATA"){
          this.getCircuitData();
        }else if(type=="INTERCONNECT_RACEWAY_SECTIONBOX_SCHEDULE"){
          this.getRacewayData();
        }
   //   }

      this.loader.hide();


    }).catch(err => {
      console.log(err);
      this.loader.hide();
    })
  });
}

}

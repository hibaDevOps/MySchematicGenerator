import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ApiService } from '../../../shared/api.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { MessageService } from '../../../shared/messageService';
import { Router, ActivatedRoute } from '@angular/router';
//import domtoimage from 'dom-to-image';
import htmlToImage from 'html-to-image';
import { PDFDocument, PageSizes, StandardFonts, grayscale, rgb, degrees, PDFPage } from 'pdf-lib';
//import { Font, FontNames, Encodings } from '@pdf-lib/standard-fonts';
//import fs from 'fs';
import fontkit from '@pdf-lib/fontkit';

//import {download} from 'downloadjs';
//import {FileSaverService} from 'ngx-filesaver';
import { saveAs } from 'file-saver';
import * as mxClient from 'mxgraph';
import * as svg from 'save-svg-as-png';
// import * as jQuery from 'jquery';
import { clone, clonedeep } from 'lodash';
// const clone = require('lodash.clone')
// const clonedeep = require('lodash.clonedeep')

declare var mxClient: any;
declare var mxGraph: any;
declare var mxCodec: any;
declare var mxUtils: any;
declare var DiagramEditor: any;
declare var mxEvent: any;
declare var mxConstants: any;
declare var mxRubberband: any;
declare var mxEdgeStyle: any;
declare var mxPoint: any;
declare var mxLine: any;
declare var mxCylinder: any;
declare var mxCellRenderer: any;

@Component({
  selector: 'app-generate-pdf',
  templateUrl: './generate-pdf.component.html',
  styleUrls: ['./generate-pdf.component.css']
})
export class GeneratePdfComponent implements OnInit {

  @ViewChild('graphContainer', { static: false }) graphContainer: ElementRef;
  @ViewChild('eqpContainer', { static: false }) eqpContainer: ElementRef;

  projectId: string = '';
  zeroPad = (num, places) => String(num).padStart(places, '0');

  main_component = []
  sub_component = []
  link = []
  label = []
  init = 0
  temp = 0
  cell = []
  spans = []
  inputs = []
  rowtemp = ''
  hosts = []
  index = 0
  tempinput = null
  portIndex = 0
  port = []
  portConn = []
  portlinks = []
  portLabel = []
  tempIndex = 0
  temLabel = []

  main_table = [];
  electrical_service_data = [];
  interconnect_data = [];
  circuit_data = [];
  raceway_data = [];
  graphData = {};
  graph_width = 5000;
  graph_height = 5000;
  page_margin = 150;
  hasLevel1 = false;
  graph: any;
  eqpgraph: any;
  //graph: any;
  finalGraph: any;
  electricalGraph: any;
  pageSize = 'a3';
  orientation = 'landscape';
  parent: any;
  registerSheet = [];
  projNotes = [];
  projRevisions = [];
  projectName = '';
  genPageCount = 0;
  mechPageCount = 0;
  electricalPageCount = 0;

  constructor(private commonSevice: ApiService, private actRoute: ActivatedRoute, private loader: Ng4LoadingSpinnerService,
    private ms: MessageService, private datePipe: DatePipe) {
    // /,private FileSaver: FileSaverService
    this.projectId = this.actRoute.snapshot.paramMap.get('id');

  }

  ACShape() { mxCylinder.call(this); };

  ngOnInit() {
    //this.graph = new mxGraph(this.graphContainer.nativeElement);

    var url = 'project/read-project';
    this.commonSevice.GetById(this.projectId, url).subscribe(data => {
      this.projectName = data.PROJECT_NAME;

    });


    mxUtils.extend(this.ACShape, mxCylinder);

    this.ACShape.prototype.redrawPath = function (path, x, y, w, h, isForeground) {

      console.log('re draw');
      var thickness = w / 4;

      if (isForeground) {
        //path.begin();
        path.moveTo(0, 0);
        path.lineTo(0, h);
        path.lineTo(w, h);
        path.lineTo(w, 0);

        path.moveTo(0 + thickness, 0);
        path.lineTo(0 + thickness, h - thickness);
        path.lineTo(w - thickness, h - thickness);
        path.lineTo(w - thickness, 0);


        path.moveTo(0, 0);
        path.lineTo(thickness, 0);
        path.moveTo(w, 0);
        path.lineTo(w - thickness, 0);

        for (var i = 6; i < h; i = i + 35) {
          path.moveTo(0, i);
          path.lineTo(0 + thickness, i - 4);
        }

        for (var i = 6; i < h; i = i + 35) {
          path.moveTo(w - thickness, i);
          path.lineTo(w, i - 4);
        }

        for (var i = 0 + thickness; i < w - thickness - 4; i = i + 35) {
          path.moveTo(i, h);
          path.lineTo(i + 6, h - thickness);
        }


      }
    };

    mxCellRenderer.registerShape('ac', this.ACShape);
  }



  GetPDFData() {

    this.ResetGraphVars();

    this.loader.show();
    var url1 = 'project_mech/get-project-graph-data';
    var url2 = 'project_sheet/getAll';
    var url3 = 'project/read-project';
    var url4 = 'project_notes/getAll';
    var url5 = 'project_rev/getAll';
    var url6 = 'project_electrical/get-project-graph-data';

    let promise = new Promise((resolve, reject) => {
      let promiseArray = [];
      promiseArray.push(this.commonSevice.promisify(url1, this.projectId));
      promiseArray.push(this.commonSevice.promisify(url2, this.projectId));
      promiseArray.push(this.commonSevice.promisify(url3, this.projectId));
      promiseArray.push(this.commonSevice.promisify(url4, this.projectId));
      promiseArray.push(this.commonSevice.promisify(url5, this.projectId));
      promiseArray.push(this.commonSevice.promisify(url6, this.projectId));

      Promise.all(promiseArray).then(result => {
        if (result.length > 0) {

          this.registerSheet = result[1];
          this.projNotes = result[3];
          this.projRevisions = result[4];

          var data = result[0];
          if (data.code == 200) {
            console.log(data);
            this.main_table = data.data; //deep copy 
          } else {
            alert('Error getting project data');
            this.loader.hide();
          }

          var data = result[5];
          if (data.code == 200) {
            console.log(data);
            this.electrical_service_data = data.data.service; //deep copy 
            this.interconnect_data = data.data.interconnect;
            this.circuit_data = data.data.circuit;
            this.raceway_data = data.data.raceway;
          } else {
            alert('Error getting electrical_service_data');
            this.loader.hide();
          }

          var gentitle = this.registerSheet.filter(x => x.SECTION == 'General');
          var mechtitle = this.registerSheet.filter(x => x.SECTION == 'Mechanical');
          var electricaltitle = this.registerSheet.filter(x => x.SECTION == 'Electrical');

          if (this.registerSheet.length == 0) {
            alert('Sections not defined in register sheet');
          } else if (this.projRevisions.length == 0) {
            alert('Revisions are not specified for the project');
          } else if (mechtitle.length == 0 || electricaltitle.length == 0|| gentitle.length == 0) {
            alert('All sections not defined in register sheet');
          } else {
            this.projectName = result[2].PROJECT_NAME;

            this.parseElectrical();
            this.parseMechanical(this.main_table);
            this.downloadPDF();
            this.loader.hide();




          }


        }
        resolve('done');

      }).catch(err => {
        console.log(err);
        this.loader.hide();
      })
    });

    // this.commonSevice.GetById(this.projectId, url).subscribe(data => {
    //   if (data.code == 200) {
    //     console.log(data);
    //     this.parse(data.data);
    //     this.loader.hide();
    //   } else {
    //     alert('Erroge getting project data');
    //     this.loader.hide();
    //   }


    //   //this.ms.openSnackBar("Project is deleted successfully");

    // }, error => {
    //   this.loader.hide();
    // });

  }




  ///////////////////////////////////////////////
  ResetGraphVars() {
    this.main_component = []
    this.sub_component = []
    this.link = []
    this.label = []
    this.init = 0
    this.temp = 0
    this.cell = []
    this.spans = []
    this.inputs = []
    this.rowtemp = ''
    this.hosts = []
    this.index = 0
    this.tempinput = null
    this.portIndex = 0
    this.port = []
    this.portConn = []
    this.portlinks = []
    this.portLabel = []
    this.tempIndex = 0
    this.temLabel = []

    this.main_table = [];
    this.graphData = {};
    this.graph_width = 5000;
    this.graph_height = 5000;
    this.page_margin = 50;
    this.hasLevel1 = false;
    this.graph = {};
    this.eqpgraph = {};
    this.finalGraph = {};
    this.electricalGraph = {};
    this.graph = {};
    // this.pageSize = 'a3';
    // this.orientation = 'portrait';
    this.parent = {};
    this.registerSheet = [];
    this.projNotes = [];
    //this.projectName = '';
    this.projRevisions = [];
    this.genPageCount = 0;
    this.mechPageCount = 0;
    this.electricalPageCount = 0;


    this.electricalComps = [];
  }

  ExportDrawing() {


    if (document.getElementById('graphContainer').children.length == 0 || document.getElementById('serviceDataContainer').children.length == 0) {
      alert('Generate PDF to export');
      return;
    }

    var graphs = [this.finalGraph, this.electricalGraph];
    var filenames = ["MechanicalDrawing.drawio", "ElectricalDrawing.drawio"];

    for (var m = 0; m < graphs.length; m++) {

      var graph = graphs[m];
      //var graph = new mxGraph(document.getElementById("graphContainer"));
      var encoder = new mxCodec();
      var node = encoder.encode(graph.getModel());
      var xmls = mxUtils.getXml(node);

      var parser, xmlDoc;

      parser = new DOMParser();
      xmlDoc = parser.parseFromString(xmls, "text/xml");
      var removedList = [];

      var xmlNodes = xmlDoc.documentElement.childNodes[0].childNodes;
      for (var i = 0; i < xmlNodes.length; i++) {
        if (xmlNodes[i].outerHTML.indexOf('style="sub-comp"') > -1) {
          removedList.push(xmlNodes[i]);
          xmlNodes[i].remove();
          i--;
        }
      }

      //insert removed rhombus to the end of list
      for (var i = 0; i < removedList.length; i++) {
        xmlDoc.documentElement.childNodes[0].appendChild(removedList[i]);
      }


      xmls = new XMLSerializer().serializeToString(xmlDoc.documentElement);


      xmls = this.replaceAll(xmls, 'sub-comp', 'shape=rhombus;whiteSpace=wrap;fontSize=25;');
      xmls = this.replaceAll(xmls, 'comp', 'shape=rectangle;whiteSpace=wrap;fontSize=40;');
      xmls = this.replaceAll(xmls, 'tempedge', 'fontSize=40;edgeStyle=orthogonalEdgeStyle;jumpStyle=arc;jumpSize=12;rounded=1');
      xmls = this.replaceAll(xmls, 'label', 'fontSize=40;');
      xmls = this.replaceAll(xmls, 'portLink', 'edgeStyle=orthogonalEdgeStyle;jumpStyle=arc;jumpSize=12;rounded=1');//edgeStyle=orthogonalEdgeStyle edgeStyle=segmentEdgeStyle
      xmls = this.replaceAll(xmls, 'portstring', 'fontSize=30;');
      xmls = this.replaceAll(xmls, 'portlabel', 'fontSize=25;fillColor=#FFFFFF;');

      var mxFile = '<mxfile  agent="5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36" etag="sEEbHfcBTBvih8vJ942l" version="13.6.5"><diagram id="fF-txageuDChEoQ_S1e-" name="Page-1">' + xmls + '</diagram></mxfile>';

      var drawBytes = this.str2ab(mxFile);
      this.download(mxFile, filenames[m], "application/x-drawio");
    }
  }

  replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
  }

  str2ab(str) {
    var buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
    var bufView = new Uint16Array(buf);
    for (var i = 0, strLen = str.length; i < strLen; i++) {
      bufView[i] = str.charCodeAt(i);
    }
    return buf;
  }


  setPaperSize() {


    if (this.pageSize == 'a3') {
      this.graph_width = 4831;
      this.graph_height = 3379;
    } else {
      this.graph_width = 3100;
      this.graph_height = 4900;
    }

    if (this.orientation == 'landscape') {
      var width = this.graph_width;
      var height = this.graph_height;

      this.graph_height = width;
      this.graph_width = height;

    }


  }



  updateGraphData(refid, type, x, y, width, height, level) {
    if (type == 'comp') {
      if (level == 0) {
        if (this.graphData["clevel0"] == undefined) this.graphData["level0"] = [];
        this.graphData["level0"].push({
          refID: refid,
          type: type,
          x: x,
          y: y,
          width: width,
          height: height,
          level: level
        })
      } else if (level == 1) {
        if (this.graphData["level1"] == undefined) this.graphData["level1"] = [];
        this.graphData["level1"].push({
          refID: refid,
          type: type,
          x: x,
          y: y,
          width: width,
          height: height,
          level: level
        })
      } else if (level == 2) {
        if (this.graphData["level2"] == undefined) this.graphData["level2"] = [];
        this.graphData["level2"].push({
          refID: refid,
          type: type,
          x: x,
          y: y,
          width: width,
          height: height,
          level: level
        })
      }
    } else if (type == 'port') {
      if (this.graphData["port"] == undefined) this.graphData["port"] = [];
      this.graphData["port"].push({
        refID: refid,
        type: type,
        x: x,
        y: y,
        width: width,
        height: height,
        level: level
      })
    } else if (type == 'link') {
      if (level == 0) {
        if (this.graphData["llevel0"] == undefined) this.graphData["llevel0"] = [];
        this.graphData["llevel0"].push({
          refID: refid,
          type: type,
          x: x,
          y: y,
          width: width,
          height: height,
          level: level
        })
      } else if (level == 1) {
        if (this.graphData["llevel1"] == undefined) this.graphData["llevel1"] = [];
        this.graphData["llevel1"].push({
          refID: refid,
          type: type,
          x: x,
          y: y,
          width: width,
          height: height,
          level: level
        })
      } else if (level == 2) {
        if (this.graphData["llevel2"] == undefined) this.graphData["llevel2"] = [];
        this.graphData["llevel2"].push({
          refID: refid,
          type: type,
          x: x,
          y: y,
          width: width,
          height: height,
          level: level
        })
      } else if (level == 3) {
        if (this.graphData["llevel3"] == undefined) this.graphData["llevel3"] = [];
        this.graphData["llevel3"].push({
          refID: refid,
          type: type,
          x: x,
          y: y,
          width: width,
          height: height,
          level: level
        })
      } else if (level == 4) {
        if (this.graphData["llevel4"] == undefined) this.graphData["llevel4"] = [];
        this.graphData["llevel4"].push({
          refID: refid,
          type: type,
          x: x,
          y: y,
          width: width,
          height: height,
          level: level
        })
      }
    }
  }

  getGraphData(refid, type, level) {
    var retVal;
    if (type == 'comp') {
      if (level == 0) retVal = this.graphData["level0"];
      else if (level == 1) retVal = this.graphData["level1"];
      else if (level == 2) retVal = this.graphData["level2"];
    } else if (type == 'port') {
      retVal = this.graphData["port"];
    } else if (type == 'link') {
      if (level == 0) retVal = this.graphData["llevel0"];
      else if (level == 1) retVal = this.graphData["llevel1"];
      else if (level == 2) retVal = this.graphData["llevel2"];
      else if (level == 3) retVal = this.graphData["llevel3"];
      else if (level == 4) retVal = this.graphData["llevel4"];
    }

    if (retVal == undefined) return [];
    else return retVal;
  }

  // addmc() {
  // 	temp = table.rows.length - 1
  // 	spans[init] = temp
  // 	init++
  // 	newRow = table.insertRow(temp);
  // 	for (let i = 0; i < 9; i++) {
  // 		cell[i] = newRow.insertCell(i)
  // 		cell[i].appendChild(document.createElement("input"));

  // 	}
  // }

  arrangeServices() {
    var a1 = 0
    var x = 0
    var i1 = 0, j1 = 0;

    for (let i = 0; i < this.hosts.length; i++) {
      var element = this.hosts[i];
      for (let j = 0; j < element.length; j++) {
        var el = element[j];
        if (el.toolRef != null && el.toolRef != "" && el.toolRef != '') {
          for (let a = 0; a < this.hosts.length; a++) {
            var comp = this.hosts[a];
            if (comp == undefined) continue;
            for (let b = 0; b < comp.length; b++) {
              var ele = comp[b];
              if (ele.refID == el.toolRef) {
                if (x == 0 || i == i1) {
                  if (a < a1) {
                    var tempEl = this.hosts[i][j];
                    this.hosts[i][j] = this.hosts[i1][j1];
                    this.hosts[i1][j1] = tempEl;

                  }
                  a1 = a
                  i1 = i
                  j1 = j
                  x++
                }
              }
            }
          }
        }
      }
    }
  }


  arrangeComps() {
    var a1 = 0
    var x = 0

    //set level
    for (let i = 0; i < this.hosts.length; i++) {
      var element = this.hosts[i];
      for (let j = 0; j < element.length; j++) {
        var el = element[j];
        if (el.toolRef !== null && el.toolRef !== "" && el.toolRef !== '') {
          for (let a = 0; a < this.hosts.length; a++) {
            var comp = this.hosts[a];
            if (comp == undefined) continue;
            for (let b = 0; b < comp.length; b++) {
              var ele = comp[b];

              //update level
              if (el.toolRef == ele.refID && (ele.level == -1 || el.level == -1)) { //we have not yet set the level

                if (i < a) {
                  for (let lj = 0; lj < element.length; lj++) {
                    if (element[lj].level == - 1) element[lj].level = 2;
                  }
                  for (let lj = 0; lj < comp.length; lj++) {
                    if (comp[lj].level == -1) comp[lj].level = 0;
                  }
                  // el.level = 1;
                  // ele.level = 0;
                } else if (i > a) {
                  for (let lj = 0; lj < element.length; lj++) {
                    if (element[lj].level == - 1) element[lj].level = 0;
                  }
                  for (let lj = 0; lj < comp.length; lj++) {
                    if (comp[lj].level == -1) comp[lj].level = 2;
                  }
                  // el.level = 0;
                  // ele.level = 1;
                }

              }
            }
          }
        }
      }
    }


    for (let i = 0; i < this.hosts.length; i++) {
      element = this.hosts[i];
      for (let j = 0; j < element.length; j++) {
        el = element[j];
        if (el.toolRef !== null && el.toolRef !== "" && el.toolRef !== '') {
          for (let a = i; a < this.hosts.length; a++) {
            comp = this.hosts[a];
            if (comp == undefined) continue;
            for (let b = 0; b < comp.length; b++) {
              ele = comp[b];

              if (el.toolRef == ele.refID) {
                if (this.hosts[i + j + 1] != undefined) {
                  var tempComp = this.hosts[a];
                  this.hosts[a] = this.hosts[i + j + 1];
                  this.hosts[i + j + 1] = tempComp;
                } else {

                }
              }

            }
          }


        }
      }

    }
    for (let i = 0; i < this.hosts.length; i++) {
      if (this.hosts[i] == undefined) this.hosts.splice(i, 1);
    }

  }



  parseMechanical(inputs) {
    var temp = null
    var valid = false
    var tempinput = null
    var index = 0, level = -1;

    console.log('parse the input data ');

    //clear the container before we begin
    document.getElementById("graphContainer").innerHTML = '';
    this.setPaperSize();

    //sort by main component
    //   inputs.sort(function(a, b) {
    //     if(a.mainComponent < b.mainComponent) { return -1; }
    //     if(a.mainComponent > b.mainComponent) { return 1; }
    //     return 0;
    // });

    for (let i = 0; i < inputs.length; i++) {
      const obj = inputs[i];

      if (obj == undefined) continue;

      level = obj.level;
      if (level == 1) {
        this.hasLevel1 = true;
        this.graph_height = 8000;
      }

      if (obj.level > 2) obj.level = 2;
      else if (obj.level < 0) obj.level = 0;

      if (obj.mainComponent !== tempinput) {
        this.hosts[index] = new Array
        index++
      }
      this.hosts[index - 1].push(obj);
      tempinput = obj.mainComponent;

    }

    console.log('parse complete ');
    this.arrangeComps();
    console.log('components arranged');
    this.arrangeServices();
    console.log('services arranged');
    this.drawEqupiment(document.getElementById("eqpContainer"), 'MECHANICAL');
    this.main(document.getElementById("graphContainer"));


    this.hasLevel1 = false;
    if (valid) {

    }
  }


  async downloadPDF() {

    var uriData = {
      mechURI: '',
      mechEqpURI: '',
      electricalURI: '',
      elecEqpURI: ''
    }
    svg.svgAsPngUri(document.getElementById('graphContainer').childNodes[0], {}, (uri) => {
      console.log('converted svg to image');
      uriData.mechURI = uri;
      svg.svgAsPngUri(document.getElementById('eqpContainer').childNodes[0], {}, (eqpuri) => {
        console.log('converted svg to image');
        uriData.mechEqpURI = eqpuri;
        svg.svgAsPngUri(document.getElementById('serviceDataContainer').childNodes[0], {}, (elecuri) => {
          uriData.electricalURI = elecuri;
          console.log('converted svg to image : ', uriData);
          svg.svgAsPngUri(document.getElementById('elecEqpContainer').childNodes[0], {}, (elecuri) => {
            uriData.elecEqpURI = elecuri;
            console.log('converted svg to image : ', uriData);
            this.GeneratePDF("png", uriData);//, uri, eqpuri);
          });
        });
      });

    });

  }




  main(container) {

    console.log('in main fn ');
    // Checks if the browser is supported
    if (!mxClient.isBrowserSupported()) {
      // Displays an error message if the browser is not supported.
      mxUtils.error('Browser is not supported!', 200, false);
    }
    else {


      // document.getElementById("graphContainer").style.display = "block"
      // Disables the built-in context menu
      mxEvent.disableContextMenu(container);

      // Creates the graph inside the given container
      this.graph = new mxGraph(container);

      // Enables rubberband selection
      new mxRubberband(this.graph);

      // Gets the default parent for inserting new cells. This
      // is normally the first child of the root (ie. layer 0).
      this.parent = this.graph.getDefaultParent();


      // Adds cells to the model in a single step
      this.graph.getModel().beginUpdate();
      try {

        this.setGraphStyle(this.graph);
        console.log('style settings complete');

        this.newComponent();
        console.log('added components and services to  graph');
        this.createPorts();
        console.log('added ports to  graph');
        this.createInterLinks();
        console.log('added links to  graph');
        this.createLevels();
        console.log('added levels to  graph');
      }
      finally {
        this.graph.getModel().endUpdate();
        this.finalGraph = this.graph;
        //ExportDrawing(graph);
        console.log('svg complete');

        // var enc = new mxCodec(mxUtils.createXmlDocument());
        // var node = enc.encode(graph.getModel());
        // var xmlString = mxUtils.getXml(node);
      }

    }

    this.inputs = []
    this.rowtemp = ''
    //this.hosts = []
    this.index = 0
    this.tempinput = null
  };


  drawEqupiment(container, section) {

    console.log('in main fn ');
    // Checks if the browser is supported
    if (!mxClient.isBrowserSupported()) {
      // Displays an error message if the browser is not supported.
      mxUtils.error('Browser is not supported!', 200, false);
    }
    else {

      // document.getElementById("graphContainer").style.display = "block"
      // Disables the built-in context menu
      container.innerHTML = '';
      mxEvent.disableContextMenu(container);

      // Creates the graph inside the given container
      this.eqpgraph = new mxGraph(container);

      // Enables rubberband selection
      new mxRubberband(this.eqpgraph);

      // Gets the default parent for inserting new cells. This
      // is normally the first child of the root (ie. layer 0).
      this.parent = this.eqpgraph.getDefaultParent();

      // Adds cells to the model in a single step
      this.eqpgraph.getModel().beginUpdate();
      try {

        this.setGraphStyle(this.eqpgraph);
        console.log('style settings complete');

        if (section == 'MECHANICAL') this.equipmentbox();
        else if (section == 'ELECTRICAL') this.electricalEquipmentbox();
        console.log('added equipments to graph');

      }
      finally {
        this.eqpgraph.getModel().endUpdate();
        console.log('equipment svg complete');

      }

    }

    this.inputs = []
    this.rowtemp = ''
    //this.hosts = []
    this.index = 0
    this.tempinput = null
  };


  equipmentbox() {
    var space = 70
    var offX = 0
    var offY = 0
    var tempX1 = 0
    var tempX2 = 0
    var level0Count = 1;
    var level1Count = 1;
    //var diff = tempX2 - tempX1

    var padding = 40
    var margin = 40
    var sub_width = 160
    var sub_height = 160
    //page_margin = 200
    var width = 0
    var x = 0;
    var row = 1;
    var addedEqp = [];


    for (let i = 0; i < this.hosts.length; i++) {

      var children = this.hosts[i].length;

      width = children * (margin + sub_width) + 2 * padding - margin
      var altwidth = this.hosts[i][0].mainComponent.length * 40 + 2 * padding


      if (addedEqp.length == 0) {
        offY = 220 + this.page_margin;
        offX = this.page_margin;
      } else {
        var lastEqp = addedEqp[addedEqp.length - 1];
        if (addedEqp.length % 2 == 0) {
          offY = lastEqp.geometry.y + lastEqp.geometry.height + 200;
          offX = this.page_margin;
        } else {
          offY = lastEqp.geometry.y;
          offX = lastEqp.geometry.x + lastEqp.geometry.width + 200;
        }
      }



      for (let j = 0; j < children; j++) {
        x = i + 1

        var sub_offX = margin * j + offX + padding + sub_width * j
        var sub_label = this.hosts[i][j].refID
        var sub_offY = 0;

        //if (x % 2 !== 0) {
        //ramya changed
        if (this.hosts[i][0].level == 2) {
          sub_offY = offY + padding * 7
        } else if (this.hosts[i][0].level == 1) {

          sub_offY = offY + padding * 7

        } else {
          sub_offY = offY
        }
        var col = i.toString() + j.toString();
        this.sub_component[col] = this.eqpgraph.insertVertex(this.parent, null, sub_label, sub_offX, sub_offY, sub_width, sub_height, 'sub-comp')

      }



      if (width < altwidth) {
        width = altwidth
      }


      var height = 440;//2 * sub_height + 3 * padding
      var label_offX = offX + width / 2
      var label_offY = offY + height / 4

      //ramya changed
      if (this.hosts[i][0].level == 0) {
        //if (x % 2 == 0) {
        label_offY = offY + 3 * height / 4
      }


      this.main_component[x] = this.eqpgraph.insertVertex(this.parent, null, '', offX, offY, width, height, 'comp')
      this.label[x] = this.eqpgraph.insertVertex(this.parent, null, this.hosts[i][0].mainComponent, label_offX, label_offY, 0, 0, 'label')

      addedEqp.push(this.main_component[x]);
    }

  }

  electricalEquipmentbox() {
    var space = 70
    var offX = 0
    var offY = 0
    var tempX1 = 0
    var tempX2 = 0
    var level0Count = 1;
    var level1Count = 1;
    //var diff = tempX2 - tempX1

    var padding = 40
    var margin = 40
    var sub_width = 160
    var sub_height = 160
    //page_margin = 200
    var width = 0
    var x = 0;
    var row = 1;
    var addedEqp = [];


    for (let i = 0; i < this.electricalComps.length; i++) {
      var currComp = this.electricalComps[i];
      var children = currComp.length;

      width = children * (margin + sub_width) + 2 * padding - margin
      var altwidth = currComp.COMPONENT_NAME.length * 40 + 2 * padding


      if (addedEqp.length == 0) {
        offY = 220 + this.page_margin;
        offX = this.page_margin;
      } else {
        var lastEqp = addedEqp[addedEqp.length - 1];
        if (addedEqp.length % 2 == 0) {
          offY = lastEqp.geometry.y + lastEqp.geometry.height + 200;
          offX = this.page_margin;
        } else {
          offY = lastEqp.geometry.y;
          offX = lastEqp.geometry.x + lastEqp.geometry.width + 200;
        }
      }



      for (let j = 0; j < currComp.Refs.length; j++) {
        //   x = i + 1

        //   var sub_offX = margin * j + offX + padding + sub_width * j
        //   var sub_label = currComp.Refs[j]
        //   var sub_offY = 0;

        //   if (currComp.level == 2) {
        //     sub_offY = offY + padding * 7
        //   } else if (currComp.level == 1) {

        //     sub_offY = offY + padding * 7

        //   } else {
        //     sub_offY = offY
        //   }
        //   var col = i.toString() + j.toString();
        //   this.sub_component[col] = this.eqpgraph.insertVertex(this.parent, null, sub_label, sub_offX, sub_offY, sub_width, sub_height, 'sub-comp')

        // }


        // if (width < altwidth) {
        //   width = altwidth
        // } 

        // var height = 440;//2 * sub_height + 3 * padding
        // var label_offX = offX + width / 2
        // var label_offY = offY + height / 4

        // //ramya changed
        // if (currComp.level == 0) {
        //   //if (x % 2 == 0) {
        //   label_offY = offY + 3 * height / 4
        // }


        // this.main_component[x] = this.eqpgraph.insertVertex(this.parent, null, '', offX, offY, width, height, 'comp')
        // this.label[x] = this.eqpgraph.insertVertex(this.parent, null, currComp.COMPONENT_NAME, label_offX, label_offY, 0, 0, 'label')


        var height = 440;
        var sub_width = 100, sub_height = 100;
        var refwidth = 60 + (currComp.Refs.length * sub_width) + (space * currComp.Refs.length);
        var textwidth = 60 + (currComp.COMPONENT_NAME.length * 15) + (space * 5);
        width = refwidth > textwidth ? refwidth : textwidth;

        var sub_offX = offX + this.page_margin, sub_offY = offY + height - sub_height;
        var label_offX = offX + width / 2, label_offY = sub_offY - 50;

        if(currComp.settpoc.toLowerCase() == "top") {
          sub_offY = offY;
          label_offY = offY + 3 * height / 4
        }else{
          label_offY = offY + 1 * height / 4
        }

        var sub;
        var refobjs = [];
        for (var m = 0; m < currComp.Refs.length; m++) {
          sub = this.eqpgraph.insertVertex(this.parent, null, currComp.Refs[m], sub_offX, sub_offY, sub_width, sub_height, 'sub-comp');
          refobjs.push(sub);
          sub_offX = sub_offX + (sub_width + space);
        }

        var comp = this.eqpgraph.insertVertex(this.parent, null, '', offX, offY, width, height, 'comp')
        this.eqpgraph.insertVertex(this.parent, null, currComp.COMPONENT_NAME, label_offX, label_offY, 0, 0, 'label')

        addedEqp.push(comp);
      }

    }

  }


  setGraphStyle(graph) {

    var fontsize = '45';
    // default styles
    var style = graph.getStylesheet().getDefaultVertexStyle();
    // default vertex styles
    //style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_SWIMLANE;
    style['fillColor'] = 'none';
    style['strokeColor'] = '#000000';
    style['strokeWidth'] = '6';
    style['fontColor'] = '#000000';
    style[mxConstants.STYLE_FONTFAMILY] = 'Arial';
    style[mxConstants.STYLE_FONTSTYLE] = '1';
    style[mxConstants.STYLE_FONTSIZE] = fontsize;
    style['perimeter'] = 'rectanglePerimeter';
    // default edge styles
    style = graph.getStylesheet().getDefaultEdgeStyle();
    style['strokeColor'] = '#000000';
    style['strokeWidth'] = '8';
    style['fontColor'] = '#000000';
    style[mxConstants.STYLE_EDGE] = mxEdgeStyle.TopToBottom;
    style[mxConstants.STYLE_ENDARROW] = mxConstants.ARROW_THIN;

    var tempLabelh = new Object();
    tempLabelh[mxConstants.STYLE_FONTSIZE] = fontsize;
    tempLabelh[mxConstants.STYLE_ROTATION] = '0';
    tempLabelh[mxConstants.STYLE_FILLCOLOR] = 'white';
    graph.getStylesheet().putCellStyle('templabelh', tempLabelh);


    // styles for label
    var tempLabel = new Object();
    tempLabel[mxConstants.STYLE_FONTSIZE] = fontsize;
    tempLabel[mxConstants.STYLE_ROTATION] = '-90';
    tempLabel[mxConstants.STYLE_FILLCOLOR] = 'white';
    graph.getStylesheet().putCellStyle('templabel', tempLabel);


    var tempedge = new Object();
    tempedge[mxConstants.STYLE_EDGE] = mxConstants.EDGESTYLE_TOPTOBOTTOM;
    graph.getStylesheet().putCellStyle('tempedge', tempedge);
    // styles for label**			


    var component = new Object();
    component[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_RECTANGLE;
    graph.getStylesheet().putCellStyle('comp', component);
    var label = new Object();
    label[mxConstants.STYLE_FONTSIZE] = fontsize;
    graph.getStylesheet().putCellStyle('label', label);

    var subComponent = new Object();
    subComponent[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_RHOMBUS;
    subComponent[mxConstants.STYLE_FONTSIZE] = fontsize;
    subComponent[mxConstants.STYLE_PERIMETER] = mxConstants.PERIMETER_RHOMBUS;
    graph.getStylesheet().putCellStyle('sub-comp', subComponent);


    var levelline = new Object();
    levelline[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_LINE;
    levelline[mxConstants.STYLE_FONTSIZE] = fontsize;
    levelline[mxConstants.STYLE_DASHED] = "1";
    graph.getStylesheet().putCellStyle('level-line', levelline);



    var portLink = new Object();
    portLink[mxConstants.STYLE_EDGE] = mxConstants.EDGESTYLE_SIDETOSIDE;// mxEdgeStyle.OrthoConnector;mxEdgeStyle.SegmentConnector;     
    graph.getStylesheet().putCellStyle('portLink', portLink);


    var portLink1 = new Object();
    portLink1[mxConstants.STYLE_EDGE] = mxConstants.EDGESTYLE_ORTHOGONAL;// mxEdgeStyle.OrthoConnector;mxEdgeStyle.SegmentConnector;
    portLink1[mxConstants.STYLE_EXIT_X] = 0.5;
    portLink1[mxConstants.STYLE_EXIT_Y] = 1;
    graph.getStylesheet().putCellStyle('portLink1', portLink1);


    var portstring = new Object();
    portstring[mxConstants.STYLE_FONTSIZE] = fontsize;
    // portstring[mxConstants.STYLE_ROTATION]= '-90';
    portstring[mxConstants.STYLE_FONTSIZE] = '30';
    graph.getStylesheet().putCellStyle('portstring', portstring);

    var portlabel = new Object();
    portlabel[mxConstants.STYLE_FONTSIZE] = fontsize;
    portlabel[mxConstants.STYLE_FILLCOLOR] = 'white';
    graph.getStylesheet().putCellStyle('portlabel', portlabel);
  }



  newComponent() {
    var space = 70
    var offX = 0
    var offY = 0
    var tempX1 = 0
    var tempX2 = 0
    var level0Count = 1;
    var level1Count = 1;
    var diff = tempX2 - tempX1

    var padding = 40
    var margin = 40
    var sub_width = 160
    var sub_height = 160
    //page_margin = 200
    var width = 0
    var x = 0;
    var height = 440;//2 * sub_height + 3 * padding


    for (let i = 0; i < this.hosts.length; i++) {

      var children = this.hosts[i].length;

      width = children * (margin + sub_width) + 2 * padding - margin
      var altwidth = this.hosts[i][0].mainComponent.length * 40 + 2 * padding

      var addedItems = this.getGraphData('', 'comp', this.hosts[i][0].level);
      var lastitem;
      if (addedItems && addedItems.length > 0) lastitem = addedItems[addedItems.length - 1];
      if (this.hosts[i][0].level == 2) {

        offY = 220 + this.page_margin;
        if (addedItems.length == 0 && this.hasLevel1) offX = 1500 + this.page_margin
        else if (addedItems.length == 0) offX = this.page_margin
        else offX = lastitem.x + lastitem.width + space; //offX + tempX2 - tempX1 + space
        //else offX = altwidth * addedItems.length; //offX + tempX2 - tempX1 + space
        tempX1 = tempX1 + width
        level1Count++;


      } else if (this.hosts[i][0].level == 1) {

        offY = (this.graph_height * 2 / 4);// - page_margin - sub_height;
        if (addedItems.length == 0 && this.hasLevel1) offX = 1500 + this.page_margin
        else if (addedItems.length == 0) offX = this.page_margin
        else offX = lastitem.x + lastitem.width + space; //offX + tempX2 - tempX1 + space
        //else offX = altwidth * addedItems.length; //offX + tempX2 - tempX1 + space
        tempX1 = tempX1 + width
        level1Count++;

        // if (addedItems.length == 0)
        //   new mxLine(new mxPoint(0, offX + height), new mxPoint(this.graph_width, offX + height));

      } else {
        offY = this.graph_height - this.page_margin - sub_height;
        if (addedItems.length == 0 && this.hasLevel1) offX = 1500 + this.page_margin
        else if (addedItems.length == 0) offX = this.page_margin
        else offX = lastitem.x + lastitem.width + space;
        //else offX = (altwidth * addedItems.length) + page_margin + space;
        if (x == 1) {
          //offX = offX + tempX1
          tempX2 = tempX2 + space
        } else {
          //offX = offX + tempX1 - tempX2 + space
        }
        tempX2 = tempX2 + width
        level0Count++;

        // if (addedItems.length == 0)
        //   new mxLine(new mxPoint(0, offX + height), new mxPoint(this.graph_width, offX + height));
      }

      for (let j = 0; j < children; j++) {
        x = i + 1

        var sub_offX = margin * j + offX + padding + sub_width * j
        var sub_label = this.hosts[i][j].refID
        var sub_offY = 0;

        //if (x % 2 !== 0) {
        //ramya changed
        // if (this.hosts[i][0].level == 2) {
        //   sub_offY = offY + padding * 7
        // } else if (this.hosts[i][0].level == 1) {

        //   sub_offY = offY + padding * 7

        // } else {
        //   sub_offY = offY
        // }

        if (this.hosts[i][0].SETTPOC.toUpperCase() == "TOP") {
          sub_offY = offY
        } else {
          sub_offY = offY + padding * 7
        }

        var col = i.toString() + j.toString();
        this.sub_component[col] = this.graph.insertVertex(this.parent, null, sub_label, sub_offX, sub_offY, sub_width, sub_height, 'sub-comp')

      }

      if (width < altwidth) {
        width = altwidth
      }


      var label_offX = offX + width / 2
      var label_offY = offY + height / 2

      //ramya changed
      // if (this.hosts[i][0].level == 0) {
      //   //if (x % 2 == 0) {
      //   label_offY = offY + 3 * height / 4
      // }

      this.updateGraphData(this.hosts[i][0].refID, 'comp', offX, offY, width, height, this.hosts[i][0].level);

      this.main_component[x] = this.graph.insertVertex(this.parent, null, '', offX, offY, width, height, 'comp')
      this.label[x] = this.graph.insertVertex(this.parent, null, this.hosts[i][0].mainComponent, label_offX, label_offY, 0, 0, 'label')


    }

  }

  //connectors between equipments - OPE
  createLink(row1, terminal1, row2, terminal2, labell, linkCount, level) {
    var col1 = row1.toString() + terminal1.toString();
    var col2 = row2.toString() + terminal2.toString();
    //var linkID = [[row1] + [terminal1] + [row2] + [terminal2]]
    var startPoint = this.sub_component[col1]
    var endPoint = this.sub_component[col2]

    var space = 30
    var offX = 0
    var offY = 0
    var tempX1 = 0
    var tempX2 = 0
    var newLabelX = 0

    var padding = 40
    var margin = 40
    var sub_width = 160
    var sub_height = 160

    var diff = tempX2 - tempX1
    for (let i = 0; i < this.hosts.length; i++) {
      var children = this.hosts[i].length

      //ramya-level
      if (linkCount == 1) {
        offX = this.page_margin;
      } else offX = this.page_margin + ((linkCount - 1) * sub_width) + margin + space;
      if (this.hosts[i][0].level == 2) {
        offY = this.page_margin
        //	offX = offX + tempX2 - tempX1 + space
        //	tempX1 = tempX1 + width

      } else if (this.hosts[i][0].level == 1) {
        offY = this.graph_height / 3
        //	offX = offX + tempX2 - tempX1 + space
        //	tempX1 = tempX1 + width

      } else {
        offY = this.graph_height * 3 / 4;
      }

      for (let j = 0; j < children; j++) {
        var x = i + 1

        //ramya
        var sub_offX = offX + padding + margin + space;//margin * j + offX + padding + sub_width * j
        var sub_offY = 0, p1 = 0, p2 = 0, p3 = 0, p4 = 0;
        if (x % 2 !== 0) {
          //if (this.hosts[i][0].level == 1) {
          sub_offY = offY + padding * 7
        } else {
          sub_offY = offY
        }
        if (i == row1 && j == terminal1) {
          p1 = sub_offX
          p2 = sub_offY
        }
        if (i == row2 && j == terminal2) {
          p3 = sub_offX
          p4 = sub_offY
        }

      }

      var width = children * (margin + sub_width) + 2 * padding - margin
      var height = 2 * sub_height + 3 * padding
      var label_offX = offX + width / 2
      var label_offY = offY + height / 4

      if (x % 2 == 0) {
        label_offY = offY + 3 * height / 4
      }

      //ramya commented
      // if (x % 2 == 0) {

      // 	offY = 0
      // 	offX = offX + tempX2 - tempX1 + space
      // 	tempX1 = tempX1 + width

      // } else {
      // 	offY = 4000
      // 	if (x == 1) {
      // 		offX = offX + tempX1
      // 		tempX2 = tempX2 + space
      // 	} else {
      // 		offX = offX + tempX1 - tempX2 + space
      // 	}
      // 	tempX2 = tempX2 + width

      // }
    }

    var labelspan = 45
    //ramya - modified
    newLabelX = sub_offX;//(p1 + p3) / 2 - labell.length * labelspan / 2 + 80
    //just one level now
    var newLabelY = 1200 + ((linkCount - 1) * 50);//(p2 + p4) * 3 / 8 + 25 

    var level2Comps = this.getGraphData('', 'comp', 2);
    var level1Comps = this.getGraphData('', 'comp', 1);
    var level0Comps = this.getGraphData('', 'comp', 0);

    var space1 = 70;
    var addedItems = this.getGraphData('', 'link', level);
    var lastitem;
    if (addedItems && addedItems.length > 0) {
      lastitem = addedItems[addedItems.length - 1];
      if (level == 0 || level == 1 || level == 2)
        newLabelX = lastitem.x + lastitem.width + space;
      else
        newLabelX = lastitem.x + lastitem.height + space1;
      newLabelY = lastitem.y + space1;

    } else {
      if (level1Comps && level1Comps.length > 0) {
        lastitem = level1Comps[level1Comps.length - 1];
        newLabelX = lastitem.x + lastitem.width + space;
      } else
        newLabelX = this.page_margin + space;

      if (level == 3 && this.hasLevel1) newLabelX = 3500;
      else if (level == 4) newLabelX = 500;

      if (level == 0)
        newLabelY = level0Comps[level0Comps.length - 1].y + level0Comps[level0Comps.length - 1].height + 500;
      else if (level == 1)
        newLabelY = level1Comps[level1Comps.length - 1].y - level1Comps[level1Comps.length - 1].height - 200;
      else if (level == 2)
        newLabelY = 0;//level2Comps[level2Comps.length - 1].y - level2Comps[level2Comps.length - 1].height - 40; 
      else if (level == 4)
        newLabelY = level2Comps[level2Comps.length - 1].y + level2Comps[level2Comps.length - 1].height + 800;
      else if (level == 3)
        newLabelY = level0Comps[level0Comps.length - 1].y - level0Comps[level0Comps.length - 1].height - 600;

    }



    if (level == 0 || level == 1 || level == 2) {

      if (level == 2) {
        //move the rhombus connector to top
        startPoint.geometry.y = startPoint.geometry.y - 280;
        endPoint.geometry.y = endPoint.geometry.y - 280;
      } else if (level == 0) {
        //move the rhombus connector to bottom
        startPoint.geometry.y = startPoint.geometry.y + 280;
        endPoint.geometry.y = endPoint.geometry.y + 280;
      }

      // startPoint.geometry.x = startPoint.geometry.x - 20;
      // endPoint.geometry.x = endPoint.geometry.x - 20;


      var temLabel = this.graph.insertVertex(this.parent, null, labell, newLabelX, newLabelY, (labell.length) * labelspan, 120, "templabelh")
      var edge2 = this.graph.insertEdge(this.parent, null, '', startPoint, temLabel, 'tempedge')
      var edge1 = this.graph.insertEdge(this.parent, null, '', temLabel, endPoint, 'tempedge')
    } else {

      temLabel = this.graph.insertVertex(this.parent, null, labell, newLabelX, newLabelY, (labell.length) * labelspan, 120, "templabel")
      edge2 = this.graph.insertEdge(this.parent, null, '', startPoint, temLabel, 'tempedge')
      edge1 = this.graph.insertEdge(this.parent, null, '', temLabel, endPoint, 'tempedge')
    }


    this.updateGraphData('', 'link', newLabelX, newLabelY, (labell.length) * labelspan, 120, level);

  }

  //connection point - which is drawn towards right side
  createPort(row, service, tag, val) {

    var space = 30
    var offX = 0, offY = 0, tempX1 = 0, tempX2 = 0
    var diff = tempX2 - tempX1
    for (let i = 0; i < this.hosts.length; i++) {
      var children = this.hosts[i].length
      for (let j = 0; j < children; j++) {
        var x = i + 1
        var padding = 40
        var margin = 40
        var sub_width = 160
        var sub_height = 160
        var sub_offX = margin * j + offX + padding + sub_width * j
        var sub_offY = 0
        var p1, p2;
        if (x % 2 !== 0) {
          sub_offY = offY + padding * 7
        } else {
          sub_offY = offY
        }
        if (x == row && j == service) {
          p1 = sub_offX
          p2 = sub_offY
        }

      }

      var width = children * (margin + sub_width) + 2 * padding - margin
      var height = 2 * sub_height + 3 * padding
      var label_offX = offX + width / 2
      var label_offY = offY + height / 4

      if (x % 2 == 0) {
        label_offY = offY + 3 * height / 4
      }

      if (x % 2 == 0) {

        offY = 0
        offX = offX + tempX2 - tempX1 + space
        tempX1 = tempX1 + width

      } else {
        offY = 2400
        if (x == 1) {
          offX = offX + tempX1
          tempX2 = tempX2 + space
        } else {
          offX = offX + tempX1 - tempX2 + space
        }
        tempX2 = tempX2 + width

      }
    }

    var lastitem1, lastitem2;
    var lastXPos = 0;
    var portHeight = this.page_margin + 500;
    var addedItems = this.getGraphData('', 'port', this.hosts[row][0].level);
    var bound = 0;
    var spacegap = 50;

    if (addedItems.length == 0) {
      //no ports yet,  position relative to component
      addedItems = this.getGraphData('', 'comp', 2);
      if (addedItems.length > 0) {
        lastitem1 = addedItems[addedItems.length - 1];
        lastXPos = lastitem1.x + lastitem1.width + 1200;
        portHeight = lastitem1.y + lastitem1.height + 500;
      } else {
        lastXPos = this.graph_width - 1500;
        portHeight = this.page_margin + 500;
      }

      // addedItems = getGraphData('', 'comp', 1);
      // if (addedItems.length > 0) {
      // 	lastitem1 = addedItems[addedItems.length - 1];
      // 	lastXPos = lastitem1.x + lastitem1.width;
      // 	portHeight = lastitem1.y + lastitem1.height + space;
      // }


      // addedItems = getGraphData('', 'comp', 2);
      // if (addedItems.length > 0) {
      // 	lastitem2 = addedItems[addedItems.length - 1];
      // 	lastitem1 = addedItems[addedItems.length - 1];
      // 	if (lastXPos < lastitem1.x + lastitem1.width)
      // 		lastXPos = lastitem1.x + lastitem1.width;
      // 		portHeight = lastitem1.y + lastitem1.height + space;
      // }

      bound = lastXPos;

    } else {
      //port present, position relative to llast port
      lastitem1 = addedItems[addedItems.length - 1];
      lastXPos = lastitem1.x + spacegap + 50;
      portHeight = lastitem1.y + lastitem1.height + spacegap;

      bound = lastXPos;
    }



    this.portIndex = row.toString() + service.toString()
    //portHeight = height + 80 + 150 * (temp)
    this.port[this.portIndex] = this.graph.insertVertex(this.parent, null, val, bound, portHeight, val.length * 45, 100, 'portstring')

    var portSrc = this.sub_component[this.portIndex]




    var portLabelX = bound - 200 - (tag.length) * 30
    var portLabelY = portHeight + 10
    this.portLabel[this.portIndex] = this.graph.insertVertex(this.parent, null, tag, portLabelX, portLabelY, (tag.length) * 30, 80, "portlabel")

    this.portlinks[this.portIndex] = this.graph.insertEdge(this.parent, null, '', portSrc, this.portLabel[this.portIndex], 'portLink1')
    this.graph.insertEdge(this.parent, null, '', this.portLabel[this.portIndex], this.port[this.portIndex], 'portLink')

    //temp++

    this.updateGraphData('', 'port', bound, portHeight, val.length * 45, 100, 0);

  }
  createPorts() {
    for (let cpi = 0; cpi < this.hosts.length; cpi++) {
      var cpchildren = this.hosts[cpi].length
      for (let cpj = 0; cpj < cpchildren; cpj++) {
        var services = this.hosts[cpi][cpj]
        if (services.connPoint !== null && services.connPoint !== '') {
          var tempTag = services.size + ' ' + services.Service + ' ' + services.class
          this.createPort(cpi, cpj, tempTag, services.connPoint);
        }

      }
    }
  }

  createLevels() {

    var addedPorts = this.getGraphData('', 'port', 2);
    var maxWidth = this.graph_width;
    if (addedPorts.length > 0)
      maxWidth = addedPorts[addedPorts.length - 1].x + addedPorts[addedPorts.length - 1].width + 50;
    var vertex;

    var addedItems = this.getGraphData('', 'comp', 2);
    if (addedItems.length > 0) {
      var comp = addedItems[addedItems.length - 1];
      vertex = this.graph.insertVertex(this.parent, null, "", 0, comp.y + comp.height + 150, maxWidth, 2, 'level-line');
      this.graph.insertVertex(this.parent, null, "Level 2", 150, comp.y + comp.height + 100, 0, 0, 'label')
    }


    addedItems = this.getGraphData('', 'comp', 1);
    if (addedItems.length > 0) {
      var comp = addedItems[addedItems.length - 1];
      vertex = this.graph.insertVertex(this.parent, null, "", 0, comp.y + comp.height + 150, maxWidth, 2, 'level-line');
      this.graph.insertVertex(this.parent, null, "Level 1", 150, comp.y + comp.height + 100, 0, 0, 'label')
    }

    addedItems = this.getGraphData('', 'comp', 0);
    if (addedItems.length > 0) {
      var comp = addedItems[addedItems.length - 1];
      vertex = this.graph.insertVertex(this.parent, null, "", 0, comp.y + comp.height + 150, maxWidth, 2, 'level-line');
      this.graph.insertVertex(this.parent, null, "Level 0", 150, comp.y + comp.height + 100, 0, 0, 'label')
    }

    //new mxLine(new mxPoint(0, offX + height), new mxPoint(this.graph_width, offX + height));
    //   this.graph.insert.insertEdge(this.parent, null, '', new mxPoint(0, offX + height), new mxPoint(this.graph_width, offX + height), 'tempedge')

  }

  createInterLinks() {

    //remove circular refrnce first
    for (let i = 0; i < this.hosts.length; i++) {
      var children = this.hosts[i].length
      for (let j = 0; j < children; j++) {
        var service = this.hosts[i][j]
        if (service.toolRef !== null && service.toolRef !== '') {
          for (let a = 0; a < this.hosts.length; a++) {
            var source = this.hosts[a].length
            for (let b = 0; b < source; b++) {
              var terminal = this.hosts[a][b];
              if (service.toolRef == terminal.refID) {
                if (terminal.toolRef == service.refID) { //circular
                  if (a > i) {
                    service.toolRef = ''; //clear one
                    service.isTerminal = false;
                  }
                }
              }
            }
          }

        }
      }
    }

    console.log('after clearing circular ref :', this.hosts);
    var selectedItem = this.hosts.filter(row => {
      if (row.toolRef != '')
        return true;
      else
        return false;
    });
    console.log(selectedItem)
    if (false)
      for (let i = 0; i < this.hosts.length; i++) {
        children = this.hosts[i].length
        for (let j = 0; j < children; j++) {
          service = this.hosts[i][j]
          //	if (service.toolRef !== null && service.toolRef !== '') {

          for (let a = 0; a < this.hosts.length; a++) {
            source = this.hosts[a].length
            for (let b = 0; b < source; b++) {
              terminal = this.hosts[a][b];

              if (service.toolRef == null || service.toolRef == '') continue;

              selectedItem = terminal.filter(row => {
                if (row.refID == service.toolRef)
                  return true;
                else
                  return false;
              });



              if (service.toolRef.indexOf(terminal.refID) > -1) {
                //	if (a > i) {
                //service.toolRef = null;

                if (service.isTerminal == false) continue; //circular ref was removed, cant re add

                //there can be more than one input to a terminal
                if (terminal.toolRef.indexOf(service.refID) == -1) //{
                  terminal.toolRef = terminal.toolRef + "," + service.refID

                //store details of teh multiple refrences
                if (terminal.toolRefs == undefined) terminal.toolRefs = [];

                selectedItem = terminal.toolRefs.filter(row => {
                  if (row.toolRef == service.refID)
                    return true;
                  else
                    return false;
                });

                if (selectedItem.length == 0) {
                  terminal.toolRefs.push({
                    toolRef: service.refID,
                    size: service.size,
                    Service: service.Service,
                    class: service.class
                  });
                }


              }
            }
          }
          //}
        }
      }

    if (false)
      for (let i = 0; i < this.hosts.length; i++) {
        children = this.hosts[i].length
        for (let j = 0; j < children; j++) {
          service = this.hosts[i][j]
          //	if (service.toolRef !== null && service.toolRef !== '') {

          for (let a = 0; a < this.hosts.length; a++) {
            source = this.hosts[a].length
            for (let b = 0; b < source; b++) {
              terminal = this.hosts[a][b];

              if (service.toolRef == null || service.toolRef == '') continue;

              if (service.toolRef.indexOf(terminal.refID) > -1) {
                //	if (a > i) {
                //service.toolRef = null;

                if (service.isTerminal == false) continue; //circular ref was removed, cant re add

                //there can be more than one input to a terminal
                if (terminal.toolRef.indexOf(service.refID) == -1) //{
                  terminal.toolRef = terminal.toolRef + "," + service.refID

                //store details of teh multiple refrences
                if (terminal.toolRefs == undefined) terminal.toolRefs = [];

                selectedItem = terminal.toolRefs.filter(row => {
                  if (row.toolRef == service.refID)
                    return true;
                  else
                    return false;
                });

                if (selectedItem.length == 0) {
                  terminal.toolRefs.push({
                    toolRef: service.refID,
                    size: service.size,
                    Service: service.Service,
                    class: service.class
                  });
                }

                //	}


                //service.toolRef = null;
                // terminal.size = service.size
                // terminal.Service = service.Service
                // terminal.class = service.class

                //service.toolRef = service.toolRef.replace(service.refID, '');

                //	}
              }
            }
          }
          //}
        }
      }

    var linkCount = 1;
    for (let ili = 0; ili < this.hosts.length; ili++) {
      var ilchildren = this.hosts[ili].length
      for (let ilj = 0; ilj < ilchildren; ilj++) {
        var service = this.hosts[ili][ilj]
        if (service.toolRef !== null && service.toolRef !== '') {
          for (let a = 0; a < this.hosts.length; a++) {
            var source = this.hosts[a].length
            for (let b = 0; b < source; b++) {
              var terminal = this.hosts[a][b];

              var level = 0;
              if (service.toolRef == terminal.refID) {
                var tempTag = service.size + ' ' + service.Service + ' ' + service.class
                if (service.level == terminal.level && service.level == 0) level = 0;
                else if (service.level == terminal.level && service.level == 1) level = 1;
                else if (service.level == terminal.level && service.level == 2) level = 2;

                else if (service.level == 2 && terminal.level == 1) level = 4;//4;
                else if (service.level == 0 && terminal.level == 1) level = 3;
                else if (service.level == 2 && terminal.level == 0) level = 3;
                else if (service.level == 1 && terminal.level == 0) level = 3;
                else if (service.level == 1 && terminal.level == 2) level = 4;//4;
                else if (service.level == 0 && terminal.level == 2) level = 3;
                else level = 3;

                console.log('connect : ', service.refID, ' and ', terminal.refID);
                this.createLink(ili, ilj, a, b, tempTag, linkCount, level);
                linkCount++;
              }

              // if (false)
              //   if (service.toolRef.indexOf(terminal.refID) > -1) {

              //     var selectedItem = [];
              //     if (terminal.toolRefs != undefined)
              //       selectedItem = terminal.toolRefs.filter(row => {
              //         if (row.toolRef == terminal.refID)
              //           return true;
              //         else
              //           return false;
              //       });
              //     selectedItem.forEach(element => {
              //       tempTag = element.size + ' ' + element.Service + ' ' + element.class
              //       this.createLink(ili, ilj, a, b, tempTag, linkCount);
              //       linkCount++;
              //     });
              //   }
            }
          }
        }
      }
    }
  }



  ///////////////////////////////////


  fontSize = "";
  fontType: any;
  initPosition = 10;
  blockFontSize = 10;
  blockTotalHeight = 0;
  pdfDoc: PDFDocument;

  async CreateBasePDF() {

    // Create a new PDFDocument
    this.pdfDoc = await PDFDocument.create();

    //const url = 'fonts/arial.ttf';
    //  const fontBytes = await fetch(url).then(res => res.arrayBuffer());
    //  console.log('fontBytes : ', fontBytes)
    //this.pdfDoc.registerFontkit(fontkit);    
    //  console.log('registered');
    //this.fontType = await this.pdfDoc.embedFont(fontBytes);//await this.pdfDoc.embedFont(fontBytes);
    this.fontType = await this.pdfDoc.embedFont(StandardFonts.Helvetica);

    return this.pdfDoc;

  }

  CreatePDFPage(pdfDoc, pageType) {
    // Add a blank page to the document

    var page: PDFPage;
    if (this.pageSize == 'a3') {
      page = pdfDoc.addPage(PageSizes.A3);
    } else {
      page = pdfDoc.addPage([1056, 1632]);
    }

    if (this.orientation == 'landscape') {
      var width = page.getWidth();
      var height = page.getHeight();
      page.setWidth(height);
      page.setHeight(width);
    }


    var outerBorderWidth = page.getWidth() - 20;
    var innerBorderWidth = page.getWidth() - 30;
    var outerBorderHeight = page.getHeight() - 20;
    var innerBorderHeight = page.getHeight() - 30;

    //outer border
    page.drawRectangle({
      x: this.initPosition,
      y: this.initPosition,
      width: outerBorderWidth,
      height: outerBorderHeight,
      borderWidth: 1,
      borderColor: grayscale(0),
      color: rgb(1, 1, 1),
      opacity: 0,
      borderOpacity: 0.75,
    });

    this.insertTitleBlock(page, pageType);
    return page;
  }

  insertTitleBlock(page, pageType) {

    var firstsection = 20;
    var secondsection = 120;
    var thirdsection = 70;
    var startPosX = page.getWidth() - this.initPosition;
    var startPosY = this.initPosition + 5;
    var lineHeight = this.fontType.heightAtSize(this.blockFontSize) + 10;
    var sheettitle = "";

    var title = this.registerSheet.filter(x => x.SECTION == 'General');;

    this.projRevisions.sort(function (a, b) {
      if (a.REV_NO < b.REV_NO) { return -1; }
      if (a.REV_NO > b.REV_NO) { return 1; }
      return 0;
    });

    

    console.log('page count : ', this.zeroPad(this.genPageCount.toString(), 2));
    if (pageType == "GENERAL") {
      title = this.registerSheet.filter(x => x.SECTION == 'General');
      sheettitle = "General - G" + this.zeroPad(this.genPageCount.toString(), 2);
      this.genPageCount++;
    } else if (pageType == "MECHANICAL") {
      title = this.registerSheet.filter(x => x.SECTION == 'Mechanical');
      sheettitle = "Mechanical - M" + this.zeroPad(this.mechPageCount.toString(), 2);
      this.mechPageCount++;
    } else if (pageType == "ELECTRICAL") {
      title = this.registerSheet.filter(x => x.SECTION == 'Electrical');
      sheettitle = "ELECTRICAL - E" + this.zeroPad(this.electricalPageCount.toString(), 2);
      this.electricalPageCount++;
 
    }

    var itemname = title[0].ITEM_NAME;
    var section = title[0].SECTION;
    var desca = title[0].DESCRIPTION_A;
    var descb = title[0].DESCRIPTION_B;
    var descc = title[0].DESCRIPTION_C;



    //rev + sheet title
    this.drawRectangle(page, startPosX - thirdsection - 5, startPosY, thirdsection, lineHeight);
    this.writeText(page, startPosX - thirdsection, startPosY + 5, "REV - " + this.projRevisions[this.projRevisions.length - 1].REV_NO, this.blockFontSize)
    this.drawRectangle(page, startPosX - (firstsection + secondsection + thirdsection) - 5, startPosY, firstsection + secondsection, lineHeight);
    this.writeText(page, startPosX - (firstsection + secondsection + thirdsection), startPosY + 5, sheettitle, this.blockFontSize);

    //item name section
    this.drawRectangle(page, startPosX - (firstsection + secondsection + thirdsection) - 5, startPosY + lineHeight, firstsection + secondsection + thirdsection, lineHeight * 5);
    this.writeText(page, startPosX - (firstsection + secondsection + thirdsection), startPosY + lineHeight + 5, descc, this.blockFontSize);
    this.writeText(page, startPosX - (firstsection + secondsection + thirdsection), startPosY + (lineHeight * 2) + 5, descb, this.blockFontSize);
    this.writeText(page, startPosX - (firstsection + secondsection + thirdsection), startPosY + (lineHeight * 3) + 5, desca, this.blockFontSize);
    this.writeText(page, startPosX - (firstsection + secondsection + thirdsection), startPosY + (lineHeight * 4) + 5, section, this.blockFontSize);
    this.writeText(page, startPosX - (firstsection + secondsection + thirdsection), startPosY + (lineHeight * 5) + 5, itemname, this.blockFontSize);

    //project Name
    this.drawRectangle(page, startPosX - (firstsection + secondsection + thirdsection) - 5, startPosY + (lineHeight * 6), firstsection + secondsection + thirdsection, lineHeight);
    this.writeText(page, startPosX - (firstsection + secondsection + thirdsection), startPosY + (lineHeight * 6) + 5, this.projectName, this.blockFontSize);


    //revision box
    for (var irev = 0; irev < this.projRevisions.length; irev++) {
      var rowno = (irev + 7);
      this.drawRectangle(page, startPosX - (firstsection + secondsection + thirdsection) - 5, startPosY + (lineHeight * rowno), firstsection, lineHeight);
      this.writeText(page, startPosX - (firstsection + secondsection + thirdsection), startPosY + (lineHeight * rowno) + 5, this.projRevisions[irev].REV_NO, this.blockFontSize);
      this.drawRectangle(page, startPosX - (secondsection + thirdsection) - 5, startPosY + (lineHeight * rowno), secondsection, lineHeight);
      this.writeText(page, startPosX - (secondsection + thirdsection), startPosY + (lineHeight * rowno) + 5, this.projRevisions[irev].REV_NAME, this.blockFontSize);
      this.drawRectangle(page, startPosX - (thirdsection) - 5, startPosY + (lineHeight * rowno), thirdsection, lineHeight);
      this.writeText(page, startPosX - (thirdsection), startPosY + (lineHeight * rowno) + 5, this.formatDate(this.projRevisions[irev].DATE_REV), this.blockFontSize);
    }


    this.blockTotalHeight = lineHeight * (7 + this.projRevisions.length);


    return page;
  }

  drawRectangle(page, x, y, width, height) {

    // const textWidth = customFont.widthOfTextAtSize(text, textSize)
    // const textHeight = customFont.heightAtSize(textSize)

    var options = {
      x: x,
      y: y,
      width: width,
      height: height,
      borderWidth: 1,
      borderColor: grayscale(0),
      color: rgb(1, 1, 1),
      opacity: 0,
      borderOpacity: 0.75,
    };
    page.drawRectangle(options);


  }

  writeText(page, x, y, text, textSize, wrap = false) {
    if (text != "" && text != undefined) {

      if (!wrap) {

        var txtOptions = {
          x: x,
          y: y,
          size: textSize,
          font: this.fontType,
          color: rgb(0, 0, 0)
        };
        page.drawText(text, txtOptions);

      } else {
        var testlines = text.split(' ');
        for (var i = 0; i < testlines.length; i++) {

          if (testlines[i].trim == "") continue;
          var txtOptions1 = {
            x: x,
            y: y - (i * 10),
            size: textSize,
            font: this.fontType,
            color: rgb(0, 0, 0)
          };
          page.drawText(testlines[i], txtOptions1);
        }
      }
    }
  }

  async GeneratePDF(imgType, uriData) {

    var pdfDoc = await this.CreateBasePDF();
    console.log('generating PDF');

    //insert register page
    this.insertRegisterSheet();

    //insert equipment sheet
    this.insertEquipmentSheet("GENERAL", uriData.mechEqpURI, "MECHANICAL");
    this.insertEquipmentSheet("GENERAL", uriData.elecEqpURI, "ELECTRICAL");


    //insert notes  this.projNotes
    this.addNotesPage(pdfDoc, "Mechanical");
    console.log('added mech notes page');

    this.insertInputData(pdfDoc, "MECHANICAL");
    console.log('added data table');

    //add blank page - for image
    var page = this.CreatePDFPage(pdfDoc, "MECHANICAL");
    this.AddImagetoPDF(pdfDoc, page, imgType, uriData.mechURI);
    console.log('image inserted');

    this.addNotesPage(pdfDoc, "Electrical");
    console.log('added electrical notes page');

    this.insertInputData(pdfDoc, "SERVICEDATA");
    this.insertInputData(pdfDoc, "INTERCONNECT");
    this.insertInputData(pdfDoc, "CIRCUIT");
    this.insertInputData(pdfDoc, "RACEWAY");
    console.log('added data table');

    var page = this.CreatePDFPage(pdfDoc, "ELECTRICAL");
    this.AddImagetoPDF(pdfDoc, page, imgType, uriData.electricalURI);
    console.log('image inserted');


    // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save()
    console.log('document saved');

    // Trigger the browser to download the PDF document
    this.download(pdfBytes, "2DSchematic.pdf", "application/pdf");
    console.log('document downloaded');

  }

  addNotesPage(pdfDoc, section) {
    var page = null;
    var lineHeight = 20;
    var startPosX = this.initPosition + 10;

    var notes = this.projNotes.filter(x => x.NOTE_CATEGORY == section);

    if (notes.length > 0) {
      page = this.CreatePDFPage(pdfDoc, section.toUpperCase());
      var topPos = page.getHeight() - 40;

      for (var i = 0; i < notes.length; i++) {
        console.log('notes[i].NOTE_TEXT : ', notes[i].NOTE_TEXT)
        this.writeText(page, startPosX, topPos - (i * lineHeight), notes[i].NOTE_TEXT, this.blockFontSize);
      }
    }

  }



  async AddImagetoPDF(pdfDoc, page, imgType, ingBuffer) {

    padding = 20;
    if (imgType == "png") {
      var factor = 0.5;
      const pngImage = await pdfDoc.embedPng(ingBuffer);

      var padding = 50;


      var imgSize = pngImage.size();
      var imgWidth = imgSize.width / 2;
      var imgHeight = imgSize.height / 2;
      var drawingWidth = page.getWidth() - padding;
      var drawingHeight = page.getHeight() - padding - this.blockTotalHeight;

      if (this.orientation == 'landscape')
        drawingHeight = page.getHeight() - padding;



      if (drawingWidth < imgSize.width || drawingHeight < imgSize.height) {
        var diff = 0;
        var wdiff = imgSize.width / drawingWidth;
        var hdiff = imgSize.height / drawingHeight;
        diff = (wdiff > hdiff) ? wdiff : hdiff;
        factor = 1 / diff;
        var imgSize = pngImage.scale(factor);
        imgWidth = imgSize.width;
        imgHeight = imgSize.height;
      }

      // if (drawingWidth < imgSize.width || drawingHeight < imgSize.height) {

      //   var aspectRatio = imgSize.width / imgSize.height; 

      //   var diff = 0;
      //   var wdiff = imgSize.width - drawingWidth;
      //   var hdiff = imgSize.height - drawingHeight;
      //   if (wdiff > hdiff) {
      //     var expectedWith = drawingWidth ;
      //     imgWidth = expectedWith;
      //     imgHeight = expectedWith / aspectRatio;
      //   } else {
      //     var expectedHeight = drawingHeight ;
      //     imgWidth = expectedHeight / aspectRatio;
      //     imgHeight = expectedHeight;        
      //   }
      // }



      var xPos = this.initPosition + 10;
      var yPos = page.getHeight() - imgHeight - 20;

      // Draw the PNG image near the lower right corner of the JPG image
      page.drawImage(pngImage, {
        x: xPos,
        y: yPos,
        width: imgWidth,
        height: imgHeight,
      })
    } else {
      // // Embed the JPG image bytes and PNG image bytes
      // const jpgImage = await pdfDoc.embedJpg(ingBuffer)
      // // Get the width/height of the JPG image scaled down to 25% of its original size
      // const jpgDims = jpgImage.scale(0.25)

      // // Draw the JPG image in the center of the page
      // page.drawImage(jpgImage, {
      // 	x: innerBorderWidth / 2 - jpgDims.width / 2,
      // 	y: innerBorderHeight / 2 - jpgDims.height / 2,
      // 	width: jpgDims.width,
      // 	height: jpgDims.height,
      // })
    }

  }

  padding = 0;
  insertInputData(pdfDoc, section) {

    // var table = document.getElementById("inputtatble");
    var pageblock = section == "MECHANICAL" ? "MECHANICAL" : "ELECTRICAL";
    var page = this.CreatePDFPage(pdfDoc, pageblock);
    var rowCount = 0;
    var rowHeight = 30;
    var rowY = 0;
    var padding = 80;
    var headrows = 0;
    var datarows = 0;
    var charsPerLine = 7;
    var wrapHeadingText = false;
    var wrapDataText = false;
    var data_table = this.main_table;

    var startPosX = this.initPosition + 10;
    var startPosY = page.getHeight() - 70;
    var pageRow = 0;
    var drawingHeight = 0; //page.getHeight() - padding - this.blockTotalHeight;

    var headings = ["Component", "Ref. ID", "Level", "Service", "Service Size", "Pipe Class", "Conn Size", "Conn Type", "Min Temp", "Max Temp", "Unit Temp", "Min Pressure", "Max Pressure", "Unit Pressure", "Min Flow", "Max Flow", "Unit Flow", "Tool Ref", "OPE", "Note"]
    var colheads = ["mainComponent", "refID", "level", "Service", "size", "class", "CONNECTION_SIZE", "CONNECTION_TYPE_SIZE", "UM_TEMP_MIN", "UM_TEMP_MAX", "UM_TEMP_UNIT", "UM_PRES_MIN", "UM_PRES_MAX", "UM_PRES_UNIT", "UM_FLOW_MIN", "UM_FLOW_MAX", "UM_FLOW_UNIT", "toolRef", "ope", "NOTES"]

    if (section == "SERVICEDATA") {
      headings = ["REF. NO", "FROM COMP", "TO COMP", "FROM LEVEL", "TO LEVEL", "VOLTAGE", "FLA", "FRAME", "TRIP UNIT",
        "TRIP SET", "PH", "WIRING CONFIG", "TYPE", "SIZE", "GND", "RACEWAY", "POWER TYPE", "PANEL REF.", "CIRCUIT NO.", "OPE", "CABLE TAG"];
      colheads = ["REF_NO", "FROM_COMPONENT_NAME", "TO_COMPONENT_NAME", "FROM_LEVEL", "TO_LEVEL", "VOLTAGE", "FLA",
        "CB_FRAME", "CB_TRIP_UNIT", "CB_TRIP_SET", "PH", "WIRING_CONFIG", "CABLE_TYPE", "CABLE_SIZE", "CABLE_GND", "RACEWAY_1", "POWER_TYPE", "PANEL_REF", "CIRCUIT_NO", "OPE", "CABLE_TAG"];
      data_table = this.electrical_service_data;

    } else if (section == "INTERCONNECT") {
      headings = ["ITEM", "SUPP PART NO.", "MFG.", "MFG. PRT NO.", "WRKNG VOLT", "FLA", "O.C.SIZE", "LUG TEMP. RATING", "FROM", "TERM. NO.", "TO", "TERM. NO.", "LEN", "SIZE (AWG)", "# OF COND.", "NEC CLASS", "INSUL. TYPE", "JACKET TYPE", "INSUL. RATING (V)", "TEMP. RATING", "DIA.", "BEND RADIUS", "CONN SIZE", "SERVICE REF.", "DESC"];
      colheads = ["ITEM", "SUPPLIER_PART_NO", "MANUFACTURER", "MANUFACTURER_PRT_NO", "WORKING_VOLTAGE", "FLA", "OC_SIZE", "LUG_TEMP_RATING", "FROM", "FROM_TERM_NO", "TO", "TO_TERM_NO", "LENGHT", "SIZE_AWG", "NO_OF_COND", "NEC_CLASS", "INSULATION_TYPE", "JACKET_TYPE", "INSULATION_RATING", "TEMP_RATING", "DIAMETER", "BEND_RADIUS", "CONNECTION_SIZE", "SERVICE_REF", "DESCRIPTION"];
      data_table = this.interconnect_data;

    } else if (section == "CIRCUIT") {
      headings = ["SVC REF. NO", "DEVICE LOC", "DEVICE TYPE", "DEVICE LABEL", "MFG.", "MFG. MODEL NO.", "AMPERE RATING (AMPS)", "TRIP UNIT/ SETTING", "SHORT CIRCUIT/ IRAAV", "INST LUGKIT PARTNO", "LUG WIRE RANGE", "TERM TORGUE", "TERM TEMP. RATING", "DEVICE LOC", "DEVICE TYPE", "DEVICE LBL", "MFG.", "MFG. MODEL NO.", "AMPERE RATING (AMPS)", "TRIP UNIT/ SETTING", "SHORT CIRCUIT/ IRAAV", "INST LUGKIT PARTNO", "LUG WIRE RANGE", "TERM TORGUE", "TERM TEMP. RATING"];
      colheads = ["SERVICE_REF_NO", "DEVICE_LOCATION_S", "DEVICE_TYPE_S", "DEVICE_LABEL_S", "MANUFACTURER_S", "MANUFACTURER_MODEL_NO_S", "AMPERE_RATING_S", "TRIP_UNIT_SETTING_S", "SHORT_CURCUIT_S", "INSTALLED_LUG_KIT_PART_NO_S", "LUG_WIRE_RANGE_S", "TERMINAL_TORGUE_S", "TERMINAL_TEMP_RATING_S", "DEVICE_LOCATION_L", "DEVICE_TYPE_L", "DEVICE_LABEL_L", "MANUFACTURER_L", "MANUFACTURER_MODEL_NO_L", "AMPERE_RATING_L", "TRIP_UNIT_SETTING_L", "SHORT_CURCUIT_L", "INSTALLED_LUG_KIT_PART_NO_L", "LUG_WIRE_RANGE_L", "TERMINAL_TORGUE_L", "TERMINAL_TEMP_RATING_L"];
      data_table = this.circuit_data;

    } else if (section == "RACEWAY") {
      headings = ["REF SIZE", "ESTIMATED LENGTH", "ACTUAL LENGTH", "REMARKS"];
      colheads = ["REF_SIZE", "ESTIMATED_LENGTH", "ACTUAL_LENGTH", "REMARKS"];
      data_table = this.raceway_data;
    }

    var colCount = headings.length;
    var colWidth = (page.getWidth() - 50) / colCount;

    //check if text wrap, if yes increarse rowheight
    wrapHeadingText = false;
    headrows = 0;
    for (colCount = 0; colCount < headings.length; colCount++) {
      var cellValue = headings[colCount];
      if (cellValue.length * charsPerLine > colWidth) {
        wrapHeadingText = true;
        if (headrows < (cellValue.length * charsPerLine) / colWidth)
          headrows = (cellValue.length * charsPerLine) / colWidth;
      }
    }


    if (wrapHeadingText) rowHeight = headrows * 20;
    else rowHeight = 30;
    rowY = startPosY - 15;

    for (colCount = 0; colCount < headings.length; colCount++) {
      var cellValue = headings[colCount];
      this.drawRectangle(page, startPosX + (colWidth * colCount), rowY, colWidth, rowHeight);
      this.writeText(page, startPosX + (colWidth * colCount) + 5, rowY + rowHeight - 15, cellValue, this.blockFontSize, wrapHeadingText);
    }
    pageRow++;

    //for (rowCount = 0; rowCount < this.hosts.length; rowCount++) {

    for (var i = 0; i < data_table.length; i++) {


      drawingHeight = this.blockTotalHeight ;
      // if ((rowHeight * (pageRow + 2)) >= drawingHeight) {
      //   console.log('rowY , rowHeight , drawingHeight, rowY + rowHeight : ', rowY , rowHeight , drawingHeight, rowY + rowHeight)
      if (rowY  - padding <= drawingHeight) {
        page = this.CreatePDFPage(this.pdfDoc, pageblock); //got to next page
        startPosY = page.getHeight() - 70;
        pageRow = 1;

        if (wrapHeadingText) rowHeight = headrows * 20;
        else rowHeight = 30;
        rowY = startPosY - 15;

        for (colCount = 0; colCount < headings.length; colCount++) {
          var cellValue = headings[colCount];
          this.drawRectangle(page, startPosX + (colWidth * colCount), rowY, colWidth, rowHeight);
          this.writeText(page, startPosX + (colWidth * colCount) + 5, rowY + rowHeight - 15, cellValue, this.blockFontSize, wrapHeadingText);
        }
        pageRow++;
      }

      //check if text wrap, if yes increarse rowheight
      var comp = data_table[i];
      wrapDataText = false;
      datarows = 0;
      for (colCount = 0; colCount < headings.length; colCount++) {
        var cell = comp[colheads[colCount]];
        cellValue = cell == undefined ? "" : cell.toString();
        if (cellValue.length * charsPerLine > colWidth) {
          wrapDataText = true;
          if (datarows < (cellValue.length * charsPerLine) / colWidth)
            datarows = (cellValue.length * charsPerLine) / colWidth;
        }
      }

      console.log('section , rowY  , rowHeight : ', section, rowY, rowHeight)

      if (wrapDataText) rowHeight = datarows * 20;
      else rowHeight = 30;
      rowY = rowY - rowHeight;
      for (colCount = 0; colCount < headings.length; colCount++) {

        var cell = comp[colheads[colCount]];
        cellValue = cell == undefined ? "" : cell.toString();


        this.drawRectangle(page, startPosX + (colWidth * colCount), rowY, colWidth, rowHeight);
        this.writeText(page, startPosX + (colWidth * colCount) + 5, rowY + rowHeight - 15, cellValue, this.blockFontSize, wrapDataText);

      }
      pageRow++;
      // }
    }

  }

  insertRegisterSheet() {

    var page = this.CreatePDFPage(this.pdfDoc, "GENERAL"); //got to next page

    // var table = document.getElementById("inputtatble");
    var rowCount = 0;
    var colCount = 8;
    var rowHeight = 30;
    var padding = 10;
    var colWidth = (page.getWidth() - 50) / colCount;
    var startPosX = this.initPosition + 10;
    var startPosY = page.getHeight() - 70;
    var pageRow = 0;
    var drawingHeight = page.getHeight() - padding - this.blockTotalHeight;

    var headings = ["Item Name", "Description A", "Description B", "Description C", "Section", "Item No", "Date Issued", "Rev Issued"];
    var colheads = ["ITEM_NAME", "DESCRIPTION_A", "DESCRIPTION_B", "DESCRIPTION_C", "SECTION", "ITEM_NO", "DATE_ISSUED", "REV_ISSUED"];
    for (colCount = 0; colCount < headings.length; colCount++) {
      var cellValue = headings[colCount];
      this.drawRectangle(page, startPosX + (colWidth * colCount), startPosY - (rowHeight * pageRow), colWidth, rowHeight);
      this.writeText(page, startPosX + (colWidth * colCount) + 5, startPosY - (rowHeight * pageRow) + rowHeight - 15, cellValue, this.blockFontSize);
    }
    pageRow++;

    //for (rowCount = 0; rowCount < this.hosts.length; rowCount++) {

    for (var i = 0; i < this.registerSheet.length; i++) {
      //  for (var j = 0; j < this.hosts[i].length; j++) {

      drawingHeight = page.getHeight() - padding - this.blockTotalHeight;
      if ((rowHeight * (pageRow + 2)) >= drawingHeight) {
        page = this.CreatePDFPage(this.pdfDoc, "GENERAL"); //got to next page
        startPosY = page.getHeight() - 70;
        pageRow = 1;

        for (colCount = 0; colCount < headings.length; colCount++) {
          var cellValue = headings[colCount];
          this.drawRectangle(page, startPosX + (colWidth * colCount), startPosY - (rowHeight * pageRow), colWidth, rowHeight);
          this.writeText(page, startPosX + (colWidth * colCount) + 5, startPosY - (rowHeight * pageRow) + rowHeight - 15, cellValue, this.blockFontSize);
        }
        pageRow++;
      }

      var comp = this.registerSheet[i];
      for (colCount = 0; colCount < headings.length; colCount++) {

        var cell = comp[colheads[colCount]];
        cellValue = (cell == undefined) ? "" : cell.toString();

        if (colheads[colCount] == "DATE_ISSUED") {
          if (cellValue != "")
            cellValue = this.datePipe.transform(cellValue, "MM-dd-yy");
        }


        this.drawRectangle(page, startPosX + (colWidth * colCount), startPosY - (rowHeight * pageRow), colWidth, rowHeight);
        this.writeText(page, startPosX + (colWidth * colCount) + 5, startPosY - (rowHeight * pageRow) + rowHeight - 15, cellValue, this.blockFontSize);

      }
      pageRow++;
      // }
    }

  }


  async insertEquipmentSheet(section, eqpImgBuffer, actualsection) {

    var page = this.CreatePDFPage(this.pdfDoc, section);
    var firstPage = page;
    var headings = [], colheads = [];
    var main_data_table = [];
    var rowCount = 0;
    var colCount = 5;
    var rowHeight = 30;
    var padding = 10;
    var colWidth = (page.getWidth() / 2 - 50) / colCount;
    var startPosX = this.initPosition + 10;
    var startPosY = page.getHeight() - 70;
    var pageRow = 0;
    var drawingHeight = page.getHeight() - padding - this.blockTotalHeight;

    if (actualsection == "MECHANICAL") {
      headings = ["Component", "Ref. ID", "Level", "Service", "Service Size"];
      colheads = ["mainComponent", "refID", "level", "Service", "size"];
      main_data_table = this.main_table;
    } else if (actualsection == "ELECTRICAL") {
      headings = ["COMPONENT NAME", "Level"];
      colheads = ["COMPONENT_NAME", "level"];
      main_data_table = this.electricalComps;
    }

    for (colCount = 0; colCount < headings.length; colCount++) {
      var cellValue = headings[colCount];
      this.drawRectangle(page, startPosX + (colWidth * colCount), startPosY - (rowHeight * pageRow), colWidth, rowHeight);
      this.writeText(page, startPosX + (colWidth * colCount) + 5, startPosY - (rowHeight * pageRow) + rowHeight - 15, cellValue, this.blockFontSize);
    }
    pageRow++;


    for (var i = 0; i < main_data_table.length; i++) {

      drawingHeight = page.getHeight() - padding - this.blockTotalHeight;
      if ((rowHeight * (pageRow + 2)) >= drawingHeight) {
        page = this.CreatePDFPage(this.pdfDoc, section); //got to next page
        startPosY = page.getHeight() - 70;
        pageRow = 1;

        for (colCount = 0; colCount < headings.length; colCount++) {
          var cellValue = headings[colCount];
          this.drawRectangle(page, startPosX + (colWidth * colCount), startPosY - (rowHeight * pageRow), colWidth, rowHeight);
          this.writeText(page, startPosX + (colWidth * colCount) + 5, startPosY - (rowHeight * pageRow) + rowHeight - 15, cellValue, this.blockFontSize);
        }
        pageRow++;
      }

      var comp = main_data_table[i];
      for (colCount = 0; colCount < headings.length; colCount++) {

        var cell = comp[colheads[colCount]];
        cellValue = cell == undefined ? "" : cell.toString();


        this.drawRectangle(page, startPosX + (colWidth * colCount), startPosY - (rowHeight * pageRow), colWidth, rowHeight);
        this.writeText(page, startPosX + (colWidth * colCount) + 5, startPosY - (rowHeight * pageRow) + rowHeight - 15, cellValue, this.blockFontSize);

      }
      pageRow++;
    }


    //var page = this.CreatePDFPage(this.pdfDoc, "MECHANICAL");
    //insert equipment diagrams 
    var factor = 0.5;
    const pngImage = await this.pdfDoc.embedPng(eqpImgBuffer);

    var padding = 50;

    var imgSize = pngImage.size();
    var imgWidth = imgSize.width / 2;
    var imgHeight = imgSize.height / 2;
    var drawingWidth = page.getWidth();
    var drawingHeight = page.getHeight();



    // if (drawingWidth < imgSize.width || drawingHeight < imgSize.height) {
    //   var diff = 0;
    //   var wdiff = imgSize.width / drawingWidth;
    //   var hdiff = imgSize.height / drawingHeight;
    //   diff = (wdiff > hdiff) ? wdiff : hdiff;
    //   factor = 1 / diff;
    //   //factor = 0.8;
    //   var imgSize = pngImage.scale(factor);
    //   imgWidth = imgSize.width;
    //   imgHeight = imgSize.height;
    // }

    if (drawingWidth < imgSize.width || drawingHeight < imgSize.height) {

      var aspectRatio = imgSize.width / imgSize.height;
      var expectedWith = drawingWidth / 2 - 300;
      imgWidth = expectedWith;
      imgHeight = expectedWith / aspectRatio;;

      // var diff = 0;
      // var wdiff = imgSize.width - drawingWidth;
      // var hdiff = imgSize.height - drawingHeight;
      // if (wdiff > hdiff) {
      //   imgWidth = drawingWidth;
      //   imgHeight = drawingWidth / aspectRatio;
      // } else {
      //   imgWidth = drawingHeight / aspectRatio;
      //   imgHeight = drawingHeight;        
      // }
    }


    var xPos = page.getWidth() / 2 - 10;
    var yPos = page.getHeight() - imgHeight - 20;

    // Draw the PNG image near the lower right corner of the JPG image
    firstPage.drawImage(pngImage, {
      x: xPos,
      y: yPos,
      width: imgWidth,
      height: imgHeight,
    })

  }


  formatDate(date = "") {


    var today = new Date();

    if (date != "") {
      today = new Date(date);
    }


    var dd = today.getDate();

    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear().toString();
    var yy = yyyy.substring(yyyy.length - 2, yyyy.length);

    var strdd = strdd = dd.toString(), strmm = strmm = mm.toString(), strtoday = '';

    // if (dd.toString().length == 1) {
    //   strdd = '0' + dd.toString();
    // } else strdd = dd.toString();

    // if (mm.toString().length == 1) {
    //   strmm = '0' + mm.toString();
    // } else strmm = mm.toString();

    if (this.pageSize == 'a3')
      strtoday = this.zeroPad(strmm, 2) + '.' + this.zeroPad(strdd, 2) + '.' + yy;
    else
      strtoday = this.zeroPad(strdd, 2) + '.' + this.zeroPad(strmm, 2) + '.' + yy;

    return strtoday;
  }


  download(data, fileName, mimeType) {
    //vm.download = function(text) {
    var blobData: Blob;
    blobData = new Blob([data], { type: mimeType });
    saveAs(blobData, fileName);
    //};
  }



  electricalComps = [];
  parseElectrical() {

    console.log('parse the input data ');

    //clear the container before we begin
    var container = document.getElementById("serviceDataContainer");
    container.innerHTML = '';
    this.setPaperSize();

    mxEvent.disableContextMenu(container);
    this.graph = new mxGraph(container);
    new mxRubberband(this.graph);
    this.parent = this.graph.getDefaultParent();
    this.graph.getModel().beginUpdate();
    try {

      this.setGraphStyle(this.graph);
      console.log('style settings complete');

      this.createElectricalComponents();
      console.log('added electrical components and services to  graph');
      this.createConnectors();
      console.log('added connectors to  graph');
      // this.createInterLinks();
      console.log('added links to  graph');
      this.createElectricalLevels();
      console.log('added levels to  graph');

      this.drawEqupiment(document.getElementById("elecEqpContainer"), 'ELECTRICAL');
    }
    finally {
      this.graph.getModel().endUpdate();
      this.electricalGraph = this.graph;
      //ExportDrawing(graph);
      console.log('svg complete');


    }


  }




  createElectricalComponents() {

    //get unique list of comps with refs set
    for (var i = 0; i < this.electrical_service_data.length; i++) {
      this.checkCompandUpdate(this.electrical_service_data[i].FROM_COMPONENT_ID, this.electrical_service_data[i].FROM_LEVEL, this.electrical_service_data[i].REF_NO, this.electrical_service_data[i].FROM_SETTPOC);
      this.checkCompandUpdate(this.electrical_service_data[i].TO_COMPONENT_ID, this.electrical_service_data[i].TO_LEVEL, this.electrical_service_data[i].REF_NO, this.electrical_service_data[i].TO_SETTPOC);
      this.electrical_service_data[i].FROM_COMPONENT_NAME = this.electrical_service_data[i].FROM_COMPONENT_ID.COMPONENT_NAME;
      this.electrical_service_data[i].TO_COMPONENT_NAME = this.electrical_service_data[i].TO_COMPONENT_ID.COMPONENT_NAME;
    }

    console.log('constructed elec components :', this.electricalComps);

    var width = 0, height = 0, offY = 0, offX = 0, space = 30, servicegap = 70, compgap = 50;

    //draw comps
    for (var i = 0; i < this.electricalComps.length; i++) {

      var currComp = this.electricalComps[i];

      var addedItems = this.getGraphData('', 'comp', currComp.level);
      var lastitem;
      if (addedItems && addedItems.length > 0) lastitem = addedItems[addedItems.length - 1];

      if (currComp.level == 2) {

        offY = 220 + this.page_margin;
        if (addedItems.length == 0 && this.hasLevel1) offX = 1500 + this.page_margin
        else if (addedItems.length == 0) offX = this.page_margin
        else offX = lastitem.x + lastitem.width + compgap;

      } else if (currComp.level == 1) {

        offY = (this.graph_height * 2 / 4) - space;// - page_margin - sub_height;
        if (addedItems.length == 0 && this.hasLevel1) offX = 1500 + this.page_margin
        else if (addedItems.length == 0) offX = this.page_margin
        else offX = lastitem.x + lastitem.width + compgap;

      } else {
        offY = this.graph_height - this.page_margin - space;
        if (addedItems.length == 0 && this.hasLevel1) offX = 1500 + this.page_margin
        else if (addedItems.length == 0) offX = this.page_margin
        else offX = lastitem.x + lastitem.width + compgap;

      }

      //calculate  height and width
      height = 440;
      var sub_width = 100, sub_height = 100;
      var refwidth = 60 + (currComp.Refs.length * sub_width) + (servicegap * currComp.Refs.length);
      var textwidth = 60 + (currComp.COMPONENT_NAME.length * 15) + (space * 5);
      width = refwidth > textwidth ? refwidth : textwidth;

      var sub_offX = offX + this.page_margin, sub_offY = 0;
      var label_offX = offX + width / 2, label_offY = offY + height / 2;

      if (currComp.settpoc.toUpperCase() == 'TOP') {
        sub_offY = offY;
      } else {
        sub_offY = offY + height - sub_height;
      }

      var sub;
      var refobjs = [];
      for (var j = 0; j < currComp.Refs.length; j++) {
        sub = this.graph.insertVertex(this.parent, null, currComp.Refs[j], sub_offX, sub_offY, sub_width, sub_height, 'sub-comp');
        refobjs.push(sub);
        sub_offX = sub_offX + ((sub_width + servicegap));
      }

      console.log('offX, offY, label_offX, label_offY : ', offX, offY, label_offX, label_offY)
      console.log('currComp.COMPONENT_NAME :', currComp.COMPONENT_NAME);

      this.graph.insertVertex(this.parent, null, '', offX, offY, width, height, 'comp')
      this.graph.insertVertex(this.parent, null, currComp.COMPONENT_NAME, label_offX, label_offY, 0, 0, 'label')
      currComp.x = offX;
      currComp.y = offY;
      currComp.refObjs = refobjs;

      this.updateGraphData(currComp._id, 'comp', offX, offY, width, height, currComp.level);
    }


  }

  checkCompandUpdate(comp, level, refno, settpoc) {

    var compObj;
    var found = false;
    for (var i = 0; i < this.electricalComps.length; i++) {
      if (comp._id == this.electricalComps[i]._id) {
        if (this.electricalComps[i].Refs.join(",").indexOf(refno == -1))
          this.electricalComps[i].Refs.push(refno);
        found = true;
      }
    }
    if (!found) {
      compObj = comp;
      compObj.level = level;
      compObj.settpoc = settpoc;
      compObj.Refs = [];
      compObj.Refs.push(refno);
      this.electricalComps.push(compObj);
    }
  }

  createConnectors() {

    for (var k = 0; k < this.electrical_service_data.length; k++) {
      var serviceRow = this.electrical_service_data[k];

      var startComp = this.electricalComps.filter(x => x._id == serviceRow.FROM_COMPONENT_ID._id)[0];
      var endComp = this.electricalComps.filter(x => x._id == serviceRow.TO_COMPONENT_ID._id)[0];
      var startPoint, endPoint;

      for (var i = 0; i < startComp.Refs.length; i++) {
        if (startComp.Refs[i] == serviceRow.REF_NO) {
          startPoint = startComp.refObjs[i];
        }
      }

      for (var i = 0; i < endComp.Refs.length; i++) {
        if (endComp.Refs[i] == serviceRow.REF_NO) {
          endPoint = endComp.refObjs[i];
        }
      }



      //  var temLabel = this.graph.insertVertex(this.parent, null, labell, newLabelX, newLabelY, (labell.length) * labelspan, 120, "templabelh")
      var raceway = serviceRow.RACEWAY_1.split(">");
      var raceway_1 = raceway.length > 0 ? raceway[0] : "";

      console.log('serviceRow.RACEWAY_1 : raceway_1 :', serviceRow.RACEWAY_1, raceway_1)

      if (raceway_1.toUpperCase().indexOf("AC") > -1) {
        var x = startPoint.geometry.x;
        var y = startPoint.geometry.y + 120;
        var width = endPoint.geometry.x - startPoint.geometry.x + 120;
        var height = 500;

        if (startPoint.geometry.x > endPoint.geometry.x) {
          x = endPoint.geometry.x;
          width = startPoint.geometry.x - endPoint.geometry.x + 120;
        }
        var edge2 = this.graph.insertVertex(this.parent, null, raceway_1, x, y, width, height, "shape=ac;whiteSpace=wrap;html=1;rounded=0;")
      } else if (raceway_1.toUpperCase().indexOf("CABLE LADDER") > -1 || raceway_1.toUpperCase().indexOf("CABLE TRAY") > -1) {
        var x1 = endPoint.geometry.x + 100;
        var y1 = endPoint.geometry.y - 280;
        var width = 500, height = 200;


        var addedItems = this.getGraphData('', 'port', 0);
        var lastitem;
        if (addedItems && addedItems.length > 0) {
          lastitem = addedItems[addedItems.length - 1];
          x1 = lastitem.x + width + 20;
          y1 = lastitem.y + 20;
        }else  if (startPoint.geometry.y > endPoint.geometry.y) {
          x1 = startPoint.geometry.x - 80;
          y1 = startPoint.geometry.y - 420;
        }

        var cable = this.graph.insertVertex(this.parent, null, raceway_1, x1, y1, width, height, 'comp');
        var edge1 = this.graph.insertEdge(this.parent, null, '', startPoint, cable, 'tempedge')
        var edge1 = this.graph.insertEdge(this.parent, null, '', cable, endPoint, 'tempedge')

        this.updateGraphData(cable.id, 'port', x1, y1, width, height, 0);

      } else
        var edge2 = this.graph.insertEdge(this.parent, null, raceway_1, startPoint, endPoint, 'tempedge')
      //var edge1 = this.graph.insertEdge(this.parent, null, '', temLabel, endPoint, 'tempedge')




    }


  }


  createElectricalLevels() {

    var addedPorts = this.getGraphData('', 'port', 2);
    var maxWidth = this.graph_width;
    if (addedPorts.length > 0)
      maxWidth = addedPorts[addedPorts.length - 1].x + addedPorts[addedPorts.length - 1].width + 50;
    var vertex;

    var addedItems = this.getGraphData('', 'comp', 2);
    if (addedItems.length > 0) {
      var comp = addedItems[addedItems.length - 1];
      vertex = this.graph.insertVertex(this.parent, null, "", 0, comp.y + comp.height + 150, maxWidth, 2, 'level-line');
      this.graph.insertVertex(this.parent, null, "Level 2", 150, comp.y + comp.height + 100, 0, 0, 'label')
    }


    addedItems = this.getGraphData('', 'comp', 1);
    if (addedItems.length > 0) {
      var comp = addedItems[addedItems.length - 1];
      vertex = this.graph.insertVertex(this.parent, null, "", 0, comp.y + comp.height + 150, maxWidth, 2, 'level-line');
      this.graph.insertVertex(this.parent, null, "Level 1", 150, comp.y + comp.height + 100, 0, 0, 'label')
    }

    addedItems = this.getGraphData('', 'comp', 0);
    if (addedItems.length > 0) {
      var comp = addedItems[addedItems.length - 1];
      vertex = this.graph.insertVertex(this.parent, null, "", 0, comp.y + comp.height + 150, maxWidth, 2, 'level-line');
      this.graph.insertVertex(this.parent, null, "Level 0", 150, comp.y + comp.height + 100, 0, 0, 'label')
    }

    //new mxLine(new mxPoint(0, offX + height), new mxPoint(this.graph_width, offX + height));
    //   this.graph.insert.insertEdge(this.parent, null, '', new mxPoint(0, offX + height), new mxPoint(this.graph_width, offX + height), 'tempedge')

  }




}




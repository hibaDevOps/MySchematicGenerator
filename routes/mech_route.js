const express = require('express');
const app = express();

const SD_PROJECT_MECH_route = express.Router();

let SD_PROJECT_MECH = require('../model/Mechanical');
const SD_COMP_route = require('./component_route');

let SD_COMPONENT = require('../model/Component');
let SD_SERVICES = require('../model/Services');
let SD_PIPE = require('../model/Pipe');

// Add Services size
SD_PROJECT_MECH_route.route('/project_mech/add-project_mech').post((req, res, next) => {
  SD_PROJECT_MECH.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
SD_PROJECT_MECH_route.route('/project_mech/add-project_mech/:id').post((req, res, next) => {
  SD_PROJECT_MECH.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

SD_PROJECT_MECH_route.route('/project_mech/getAll').get((req, res) => {
  SD_PROJECT_MECH.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

SD_PROJECT_MECH_route.route('/project_mech/getAll/:id').get((req, res) => {
  SD_PROJECT_MECH.find({ 'ID': req.params.id }, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

SD_PROJECT_MECH_route.route('/project_mech/read-project_mech/:id').get((req, res) => {
  SD_PROJECT_MECH.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get all student
SD_PROJECT_MECH_route.route('/').get((req, res) => {
  SD_PROJECT_MECH.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
SD_PROJECT_MECH_route.route('/project_mech/delete-project_mech/:id/:id1').delete((req, res, next) => {
  SD_PROJECT_MECH.findByIdAndRemove(req.params.id1, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
SD_PROJECT_MECH_route.route('/project_mech/edit-project_mech/:id/:id1').put((req, res, next) => {
  SD_PROJECT_MECH.findByIdAndUpdate(req.params.id1, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('Mechanical Schedule successfully updated!')
    }
  })
})


SD_PROJECT_MECH_route.route('/project_mech/get-project-graph-data/:id').get(async (req, res, next) => {

  try {
    var inputs = [];
    var result = await SD_PROJECT_MECH.find({ 'ID': req.params.id })
      .populate({ path: 'COMPONENT_ID', select: 'COMPONENT_NAME' })
      .populate({ path: 'SERVICE_DESCRIPTION', select: 'SERVICE_NAME' })
      .populate({ path: 'PIPE_CLASS', select: 'PIPE_NAME' })

    //console.log(result);
    for (var i = 0; i < result.length; i++) {
      var item = result[i];
      inputs[i] = {
        mainComponent: item.COMPONENT_ID.COMPONENT_NAME,
        refID: item.REF_NO,
        item1:item.SETTPOC,
        level: item.LEVEL,
        Service: item.SERVICE_DESCRIPTION.SERVICE_NAME,
        size: item.SERVICE_SIZE,
        class: item.PIPE_CLASS.PIPE_NAME,
        connPoint: item.SERVICE_CONN,
        toolRef: item.END_REF_NO,
        ope: item.OPE,
        CONNECTION_TYPE_SIZE:item.CONNECTION_TYPE_SIZE,
        CONNECTION_SIZE:item.CONNECTION_SIZE,
        UM_TEMP_MIN:item.UM_TEMP_MIN,
        UM_TEMP_MAX : item.UM_TEMP_MAX,
        UM_TEMP_UNIT : item.UM_TEMP_UNIT,
        UM_PRES_MIN : item.UM_PRES_MIN,
        UM_PRES_MAX : item.UM_PRES_MAX,
        UM_PRES_UNIT : item.UM_PRES_UNIT,
        UM_FLOW_MIN : item.UM_FLOW_MIN,
        UM_FLOW_MAX : item.UM_FLOW_MAX,
        UM_FLOW_UNIT : item.UM_FLOW_UNIT,
        NOTES : item.NOTES,
        SETTPOC : item.SETTPOC
      }
    }


    res.send({
      "code": 200,
      "data": inputs
    });


  } catch (err) {
    console.error(err);
    res.send({
      "code": 500,
      "message": 'Error getting project data'
    });

  }
})


// async function getComponentID(componentName){
//   await SD_COMPONENT.findOne({COMPONENT_NAME: componentName}, {
//     $set: req.body
//   }, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       console.log('find compoenent response : ', data);
//       res.json(data) 
//     }
//   })
// }


SD_PROJECT_MECH_route.route('/project_mech/upload_excel-project_mech').post(async (req, res, next) => {

  var inputArray = req.body;

  try {
    for (var i = 0; i < inputArray.length; i++) {
      //check and create or get component, service pipe id

      var rowComp = await (SD_COMPONENT.findOne({ COMPONENT_NAME: inputArray[i].COMPONENT_ID }).exec());
      //await getComponentID(inputArray[i].COMPONENT_ID);
      if (rowComp == null) {
        var compo = new SD_COMPONENT({ COMPONENT_NAME: inputArray[i].COMPONENT_ID, SERVICE: [] })
        var rowComp = await compo.save();
      }
      inputArray[i].COMPONENT_ID = rowComp._id;


      var rowCSer = await (SD_SERVICES.findOne({ SERVICE_NAME: inputArray[i].SERVICE_DESCRIPTION }).exec());
      //await getComponentID(inputArray[i].COMPONENT_ID);
      if (rowCSer == null) {
        var service = new SD_SERVICES({ SERVICE_NAME: inputArray[i].SERVICE_DESCRIPTION, PIPE: [] })
        var rowCSer = await service.save();
      }
      inputArray[i].SERVICE_DESCRIPTION = rowCSer._id;


      var rowPipe = await (SD_PIPE.findOne({ PIPE_NAME: inputArray[i].PIPE_CLASS }).exec());
      //await getComponentID(inputArray[i].COMPONENT_ID);
      if (rowPipe == null) {
        var pipe = new SD_PIPE({ PIPE_NAME: inputArray[i].PIPE_CLASS, SERVICES: [] })
        var rowPipe = await pipe.save();
      }
      inputArray[i].PIPE_CLASS = rowPipe._id;
    }


    for (var i = 0; i < inputArray.length; i++) {
      console.log('inserting mech : ',inputArray[i]); 
      var mech = SD_PROJECT_MECH(inputArray[i]);      
      await mech.save();
      

    }

    console.log("insert complete.");
    res.send({
      "code": 200,
      "message": "success"
    });

  } catch (err) {
    console.error(err);
    res.send({
      "code": 500,
      "message": 'Error'
    });

  }

  // SD_PROJECT_MECH.create(inputArray, (error, data) => {
  //   if (error) {
  //     return next(error)
  //   } else {
  //     res.json(data)
  //   }
  // })
});



// Get single student

module.exports = SD_PROJECT_MECH_route;
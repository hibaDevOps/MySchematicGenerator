const express = require('express');
const app = express();

const SD_PROJECT_ELECTRICAL_route = express.Router();
let SD_COMPONENT = require('../model/Component');

let SD_SERVICE_DATA_SCHEDULE = require('../model/ServiceData');
let SD_INTERCONNECT_SCHEDULE = require('../model/InterConnect');
let SD_CIRCUIT_SCHEDULE = require('../model/Circuit');
let SD_RACEWAY_SCHEDULE = require('../model/Raceway');

SD_PROJECT_ELECTRICAL_route.route('/project_electrical/add-project_electrical').post((req, res, next) => {
  SD_SERVICE_DATA_SCHEDULE.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});



SD_PROJECT_ELECTRICAL_route.route('/project_electrical/service_data/getAll').get(async (req, res, next) => {

  try {
    console.log('project id : ', req.params.id)
    var result = await SD_SERVICE_DATA_SCHEDULE.find();
    console.log(result);
    res.send({
      "code": 200,
      "data": result
    });

  } catch (err) {
    console.error(err);
    res.send({
      "code": 500,
      "message": 'Error getting project data'
    });

  }
})

SD_PROJECT_ELECTRICAL_route.route('/project_electrical/service_data/getAll/:id').get(async (req, res, next) => {

  try {
    console.log('project id : ', req.params.id)
    var result = await SD_SERVICE_DATA_SCHEDULE.find({ 'ID': req.params.id })
      .populate({ path: 'FROM_COMPONENT_ID', select: 'COMPONENT_NAME' })
      .populate({ path: 'TO_COMPONENT_ID', select: 'COMPONENT_NAME' });
    console.log(result);
    res.send({
      "code": 200,
      "data": result
    });

  } catch (err) {
    console.error(err);
    res.send({
      "code": 500,
      "message": 'Error getting project data'
    });

  }
})

SD_PROJECT_ELECTRICAL_route.route('/project_electrical/interconnect/getAll/:id').get(async (req, res, next) => {

  try {
    var result = await SD_INTERCONNECT_SCHEDULE.find({ 'ID': req.params.id });
    console.log(result);
    res.send({
      "code": 200,
      "data": result
    });

  } catch (err) {
    console.error(err);
    res.send({
      "code": 500,
      "message": 'Error getting project data'
    });

  }
})

SD_PROJECT_ELECTRICAL_route.route('/project_electrical/circuit/getAll/:id').get(async (req, res, next) => {

  try {
    var result = await SD_CIRCUIT_SCHEDULE.find({ 'ID': req.params.id });
    console.log(result);
    res.send({
      "code": 200,
      "data": result
    });

  } catch (err) {
    console.error(err);
    res.send({
      "code": 500,
      "message": 'Error getting project data'
    });

  }
})

SD_PROJECT_ELECTRICAL_route.route('/project_electrical/raceway/getAll/:id').get(async (req, res, next) => {

  try {
    var result = await SD_RACEWAY_SCHEDULE.find({ 'ID': req.params.id });
    console.log(result);
    res.send({
      "code": 200,
      "data": result
    });

  } catch (err) {
    console.error(err);
    res.send({
      "code": 500,
      "message": 'Error getting project data'
    });
  }
})



SD_PROJECT_ELECTRICAL_route.route('/project_electrical/upload_service_data').post(async (req, res, next) => {

  var inputArray = req.body;

  try {
    for (var i = 0; i < inputArray.length; i++) {
      //check and create or get component, service pipe id

      var rowComp = await (SD_COMPONENT.findOne({ COMPONENT_NAME: inputArray[i].FROM_COMPONENT_ID }).exec());
      if (rowComp == null) {
        var compo = new SD_COMPONENT({ COMPONENT_NAME: inputArray[i].FROM_COMPONENT_ID, SERVICE: [] })
        var rowComp = await compo.save();
      }
      inputArray[i].FROM_COMPONENT_ID = rowComp._id;


      var rowComp = await (SD_COMPONENT.findOne({ COMPONENT_NAME: inputArray[i].TO_COMPONENT_ID }).exec());
      if (rowComp == null) {
        var compo = new SD_COMPONENT({ COMPONENT_NAME: inputArray[i].TO_COMPONENT_ID, SERVICE: [] })
        var rowComp = await compo.save();
      }
      inputArray[i].TO_COMPONENT_ID = rowComp._id;


    }


    for (var i = 0; i < inputArray.length; i++) {
      console.log('inserting service data : ', inputArray[i]);
      var electrical = SD_SERVICE_DATA_SCHEDULE(inputArray[i]);
      await electrical.save();


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

});



SD_PROJECT_ELECTRICAL_route.route('/project_electrical/upload_interconnect').post(async (req, res, next) => {

  var inputArray = req.body;

  try {

    for (var i = 0; i < inputArray.length; i++) {
      console.log('inserting interconnect : ', inputArray[i]);
      var electrical = SD_INTERCONNECT_SCHEDULE(inputArray[i]);
      await electrical.save();

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

});

SD_PROJECT_ELECTRICAL_route.route('/project_electrical/upload_circuit').post(async (req, res, next) => {

  var inputArray = req.body;

  try {

    for (var i = 0; i < inputArray.length; i++) {
      console.log('inserting circuit : ', inputArray[i]);
      var electrical = SD_CIRCUIT_SCHEDULE(inputArray[i]);
      await electrical.save();

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

});



SD_PROJECT_ELECTRICAL_route.route('/project_electrical/upload_raceway').post(async (req, res, next) => {

  var inputArray = req.body;

  try {

    for (var i = 0; i < inputArray.length; i++) {
      console.log('inserting raceway : ', inputArray[i]);
      var electrical = SD_RACEWAY_SCHEDULE(inputArray[i]);
      await electrical.save();

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

});



SD_PROJECT_ELECTRICAL_route.route('/project_electrical/get-project-graph-data/:id').get(async (req, res, next) => {

  try {
    var inputs = [];
    var service = await SD_SERVICE_DATA_SCHEDULE.find({ 'ID': req.params.id })
      .populate({ path: 'FROM_COMPONENT_ID', select: 'COMPONENT_NAME' })
      .populate({ path: 'TO_COMPONENT_ID', select: 'COMPONENT_NAME' })

    var interconnect = await SD_INTERCONNECT_SCHEDULE.find({ 'ID': req.params.id })
    var circuit = await SD_CIRCUIT_SCHEDULE.find({ 'ID': req.params.id })
    var raceway = await SD_RACEWAY_SCHEDULE.find({ 'ID': req.params.id })

    var result = {
      "service": service,
      "interconnect": interconnect,
      "circuit": circuit,
      "raceway": raceway
    }
    console.log(result);


    res.send({
      "code": 200,
      "data": result
    });


  } catch (err) {
    console.error(err);
    res.send({
      "code": 500,
      "message": 'Error getting project data'
    });

  }
})

SD_PROJECT_ELECTRICAL_route.route('/project_electrical/edit-service-data/:type').post((req, res, next) => {

  var model = SD_SERVICE_DATA_SCHEDULE;

  if (req.params.type == "INTERCONNECT_SCHEDULE") {
    model = SD_INTERCONNECT_SCHEDULE;
  } else if (req.params.type == "CIRCUIT_TERMINATION_DATA") {
    model = SD_CIRCUIT_SCHEDULE;
  } else if (req.params.type == "INTERCONNECT_RACEWAY_SECTIONBOX_SCHEDULE") {
    model = SD_RACEWAY_SCHEDULE;
  }

  model.findByIdAndUpdate(req.body._id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log(' Data successfully updated!')
    }
  })
})

SD_PROJECT_ELECTRICAL_route.route('/project_electrical/delete-service-data/:type').post((req, res, next) => {

  var model = SD_SERVICE_DATA_SCHEDULE;

  if (req.params.type == "INTERCONNECT_SCHEDULE") {
    model = SD_INTERCONNECT_SCHEDULE;
  } else if (req.params.type == "CIRCUIT_TERMINATION_DATA") {
    model = SD_CIRCUIT_SCHEDULE;
  } else if (req.params.type == "INTERCONNECT_RACEWAY_SECTIONBOX_SCHEDULE") {
    model = SD_RACEWAY_SCHEDULE;
  }

  model.findByIdAndRemove(req.body._id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log(' Data successfully updated!')
    }
  })
})



module.exports = SD_PROJECT_ELECTRICAL_route;
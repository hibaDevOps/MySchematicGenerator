const express = require('express');
const app = express();

const SD_PROJECT_NOTES_route = express.Router();

let SD_PROJECT_NOTES = require('../model/Notes');

// Add Services size
SD_PROJECT_NOTES_route.route('/project_notes/add-project_notes').post((req, res, next) => {
    SD_PROJECT_NOTES.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
SD_PROJECT_NOTES_route.route('/project_notes/add-project_notes/:id').post((req, res, next) => {
    SD_PROJECT_NOTES.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
SD_PROJECT_NOTES_route.route('/project_notes/getAll').get((req, res) => {
    SD_PROJECT_NOTES.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

  SD_PROJECT_NOTES_route.route('/project_notes/getAll/:id').get((req, res) => {
    SD_PROJECT_NOTES.find({'ID':req.params.id},(error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

  SD_PROJECT_NOTES_route.route('/project_notes/read-project_notes/:id').get((req, res) => {
    SD_PROJECT_NOTES.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })
 
  // Get all student
  SD_PROJECT_NOTES_route.route('/').get((req, res) => {
    SD_PROJECT_NOTES.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })
  SD_PROJECT_NOTES_route.route('/project_notes/delete-project_notes/:id/:id1').delete((req, res, next) => {
    SD_PROJECT_NOTES.findByIdAndRemove(req.params.id1, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  })
  SD_PROJECT_NOTES_route.route('/project_notes/edit-project_notes/:id/:id1').put((req, res, next) => {
    SD_PROJECT_NOTES.findByIdAndUpdate(req.params.id1,  (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data)
        console.log('Service Data successfully updated!')
      }
    })
  })


  
  SD_PROJECT_NOTES_route.route('/project_notes/upload_notes').post(async (req, res, next) => {

    var inputArray = req.body;
  
    try { 
  
      for (var i = 0; i < inputArray.length; i++) {
        console.log('inserting notes : ',inputArray[i]); 
        var sheet = SD_PROJECT_NOTES(inputArray[i]);      
        await sheet.save(); 
  
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
  // Get single student
  
module.exports = SD_PROJECT_NOTES_route;
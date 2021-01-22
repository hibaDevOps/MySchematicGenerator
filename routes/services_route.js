const express = require('express');
const app = express();

const SD_SERVICES_route = express.Router();

// Student model
let SD_SERVICES = require('../model/Services');
let SD_MECH= require('../model/Mechanical');
let SD_OBJECT=require('../model/Object');
let SD_COMPONENT=require('../model/Component');

// Add Services size
SD_SERVICES_route.route('/service/add-service').post((req, res, next) => {
    SD_SERVICES.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
SD_SERVICES_route.route('/services/getAll').get((req, res) => {
    SD_SERVICES.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

  SD_SERVICES_route.route('/service/read-service/:id').get((req, res) => {
    SD_SERVICES.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })
 
  // Get all student
  SD_SERVICES_route.route('/').get((req, res) => {
    SD_SERVICES.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })
  SD_SERVICES_route.route('/service/delete-service/:id').delete((req, res, next) => {
    SD_SERVICES.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        var isExists=0;
        SD_MECH.find({SERVICE_DESCRIPTION:req.params.id}, (error, doc) => { 
          if (error){ 
              console.log(error) 
          }else{ 
           if(!doc.length){
            SD_OBJECT.find({SERVICE_ID:req.params.id}, (error, doc) => { 
              if (error){ 
                  console.log(error) 
              }else{ 
               if(!doc.length){
                   
                SD_SERVICES.deleteOne({_id:req.params.id}).exec();
                res.status(200).json({
                 msg: "success"
               })
               }
               else{
                res.status(200).json({
                  msg: "This Component is included in  project objects and cannot be deleted."
                })
               
               }
              }
            });

            
          
           }else{
            res.status(200).json({
              msg: "This Service is included in mechanical schedule and cannot be deleted."
            })
           }
            
          } 
        })
      
      
      }
    })
  })
  SD_SERVICES_route.route('/service/edit-service/:id').put((req, res, next) => {
    SD_SERVICES.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data)
        console.log('Service successfully updated!')
      }
    })
  })
  // Get single student
  
module.exports = SD_SERVICES_route;
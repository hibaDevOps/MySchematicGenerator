const express = require('express');
const app = express();

const SD_COMP_route = express.Router();

let SD_COMPONENT = require('../model/Component');
let SD_MECH= require('../model/Mechanical');
let SD_OBJECT=require('../model/Object');

// Add Services size
SD_COMP_route.route('/component/add-component').post((req, res, next) => {
    SD_COMPONENT.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
SD_COMP_route.route('/component/getAll').get((req, res) => {
    SD_COMPONENT.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

  SD_COMP_route.route('/component/read-component/:id').get((req, res) => {
    SD_COMPONENT.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })
 
  // Get all student
  SD_COMP_route.route('/').get((req, res) => {
    SD_COMPONENT.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })
  SD_COMP_route.route('/component/delete-component/:id').delete((req, res, next) => {
    SD_COMPONENT.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        var isExists=0;
        SD_MECH.find({COMPONENT_ID:req.params.id}, (error, doc) => { 
          if (error){ 
              console.log(error) 
          }else{ 
           if(!doc.length){

            SD_OBJECT.find({COMPONENT_ID:req.params.id}, (error, doc) => { 
              if (error){ 
                  console.log(error) 
              }else{ 
               if(!doc.length){
                SD_COMPONENT.deleteOne({_id:req.params.id}).exec();
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
              msg: "This Component is included in mechanical schedule and cannot be deleted."
            })
           }
            
          } 
        })
      
      
      }
    })
  })
  SD_COMP_route.route('/component/edit-component/:id').put((req, res, next) => {
    SD_COMPONENT.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data)
        console.log('Component successfully updated!')
      }
    })
  })
  // Get single student
  
module.exports = SD_COMP_route;
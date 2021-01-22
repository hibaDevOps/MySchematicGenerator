const express = require('express');
let jwt = require('jsonwebtoken');
const config = require('../config.js');


const app = express();

const SD_USER_route = express.Router();

let SD_USER = require('../model/User');

var login = function(req, res,data) {
    let username = req.body.username;
    let password = req.body.password;
    // For the given username fetch user from DB
       let token = jwt.sign({username: username},
          config.secret,
          { expiresIn: '24h' // expires in 24 hours
          }
        );
        // return the JWT token for the future API calls
        if(token){
          console.log(data);
        res.json({
          success: true,
          message: 'Authentication successful!',
          token: token,
          emailAddress:data.emailAddress,
          firstname:data.firstname,
          lastname:data.lastname
        });
        }
     else {
      res.send(400).json({
        success: false,
        message: 'Authentication failed! Please check the request'
      });
    }
  }
  var login_init = function(req, res,data) {
    let username = req.body.username;
    let password = req.body.password;
    // For the given username fetch user from DB
       let token = jwt.sign({username: username},
          config.secret,
          { expiresIn: '24h' // expires in 24 hours
          }
        );
        // return the JWT token for the future API calls
        if(token){
          console.log(data);
        res.json({
          success: true,
          message: 'Authentication successful!',
          token: token,
          email:data.email,
          firstname:data.email,
          lastname:data.email
        });
        }
     else {
      res.send(400).json({
        success: false,
        message: 'Authentication failed! Please check the request'
      });
    }
  }
SD_USER_route.route('/auth/register').post((req, res, next) => {
    
    SD_USER.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
SD_USER_route.route('/change-password').post((req, res, next) => {
  console.log(req.body.email);
  console.log(req.body.currentPassword);
  console.log(req.body.newPassword);


  SD_USER.updateOne({ emailAddress: req.body.email,password:req.body.currentPassword}, 
    { $set:
        {
            
            password: req.body.newPassword
        }
     },  (err, user) =>{
    if (err) {
      return next(err);
    }else{
      res.json(user);
    }
  })
});
SD_USER_route.route('/users/getToken').post((req, res, next) => {
  dat={
    email:req.body.email,
    password:req.body.password
  }
  login_init(req,res,dat);

});
SD_USER_route.route('/users/authenticate').post((req, res, next) => {
    dat={
      emailAddress:req.body.username,
      password:req.body.password
    }
    SD_USER.findOne(dat ,(error, data) => {
    if (error) {
      return next(error)
    } else {
      if(!data){
       return res.json({
        success: false,
        message: 'Authentication failed!'
      });
      }else{
      login(req,res,data);
      }
    }
  })
});
SD_USER_route.route('/users/getAll').get((req, res) => {
  SD_USER.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

/*SD_PROJECT_NOTES_route.route('/project_notes/add-project_notes/:id').post((req, res, next) => {
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
    SD_PROJECT_NOTES.findByIdAndUpdate(req.params.id1, {
        $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data)
        console.log('Project Notes successfully updated!')
      }
    })
  })
  // Get single student
  */
module.exports = SD_USER_route;
  const express = require('express');
  const app = express();
  let {google} = require('googleapis'),
  fs = require('fs'),
  creds = require('../client_secret.json');
  const { promisify } = require('util');
  const router = express.Router();
  const client = new google.auth.JWT(
    creds.client_email,
    null,
    creds.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
 );
 router.route('/project-mech/google-sheet').get((req, res) => {
  client.authorize((err, data) => {
      if(err){
        console.log(err);
        return;
      }else{
        gsrun(client,res);
        console.log('Connected')
      }
  });
});
 
  async function gsrun(cl,res){
    const gsapi= google.sheets({version:'v4',auth:cl});
    const opt = {
         spreadsheetId: '1y8Jwj969K2u8bz_TR-waRsiMAeDb2sRwlrUqtNf1Ggg',
         range: 'A5:T30'
    };
 
    let data= await gsapi.spreadsheets.values.get(opt);
    res.send(JSON.stringify(data.data.values));
  }

  

    

  

module.exports = router
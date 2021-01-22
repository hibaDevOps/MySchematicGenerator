var createError = require('http-errors');
const express = require('express'),
  path = require('path'),
  mongoose = require('mongoose'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  dataBaseConfig = require('./database/db'),
  {google} = require('googleapis'),
  fs = require('fs'),
  creds = require('./client_secret.json');
  const { promisify } = require('util'); 
  const client = new google.auth.JWT(
    creds.client_email,
    null,
    creds.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
 );
 
  client.authorize(function(err,tokens){
      if(err){
        console.log(err);
        return;
      }else{
        gsrun(client);
        console.log('Connected')
      }
  });
 
  async function gsrun(cl){
    const gsapi= google.sheets({version:'v4',auth:cl});
    const opt = {
         spreadsheetId: '1y8Jwj969K2u8bz_TR-waRsiMAeDb2sRwlrUqtNf1Ggg',
         range: 'A5:T30'
    };
 
    let data= await gsapi.spreadsheets.values.get(opt);
    console.log(data.data.values);
  }
 

// Connecting mongoDB
mongoose.Promise = global.Promise;
const uri = "mongodb+srv://admin:admin123!@clusterschematicproject.yuwsa.mongodb.net/<SchematicProject_db>?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});




// Set up express js port
const SD_SERVICES_SIZE = require('./routes/services_Size.route')
const SD_SERVICES = require('./routes/services_route')
const SD_PIPES = require('./routes/pipes_route');
const SD_COMPONENTS = require('./routes/component_route');
const SD_PROJECTS = require('./routes/projects_route');
const SD_PROJECTS_REV = require('./routes/project_rev_route');
const SD_PROJECTS_OBJ = require('./routes/project_object_route');
const SD_PROJECTS_NOTES = require('./routes/notes_route');
const SD_PROJECTS_SHEET = require('./routes/sheet_route');
const SD_PROJECTS_MECH = require('./routes/mech_route');
const SD_PROJECTS_ELECTRICAL = require('./routes/electrical_route');
const SD_google_sheet = require('./routes/google-sheet_route');
const SD_billing = require('./routes/billing_route');
const SD_USER = require('./routes/user_route');
const SD_EMAIL = require('./routes/SendEmail');





const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors()); 


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Setting up static directory
app.use(express.static(path.join(__dirname, 'dist/2dschematics')));


// RESTful API root
app.use('/api', SD_SERVICES_SIZE)
app.use('/api',SD_SERVICES);
app.use('/api',SD_PIPES);
app.use('/api',SD_COMPONENTS);
app.use('/api',SD_PROJECTS);
app.use('/api',SD_PROJECTS_REV);
app.use('/api',SD_PROJECTS_OBJ);
app.use('/api',SD_PROJECTS_NOTES);
app.use('/api',SD_PROJECTS_SHEET);
app.use('/api',SD_PROJECTS_MECH);
app.use('/api',SD_PROJECTS_ELECTRICAL);
app.use('/api',SD_google_sheet);
app.use('/api',SD_billing);
app.use('/api',SD_USER);
app.use('/api',SD_EMAIL);


app.get('/*', (req, res,next) => {
  res.sendFile(path.join(__dirname, 'dist/2dschematics/index.html'));
 //var filename  =__dirname+ '/dist/2dschematics/index.html';
 //res.download(filename);
//  res.sendFile(__dirname+ '/dist/2dschematics/index.html', function (err) { 
//   if (err) { 
//     console.log('Error sending:', err); 
//       next(err); 
//   } else { 
//       console.log('Sent:'); 
//       next(); 
//   } 
// });
});

// // Find 404 and hand over to error handler
// app.use((req, res, next) => {
//   next(createError(404));
// });

// Index Route
// app.get('/', (req, res) => {
//   res.send('invaild endpoint');
// });



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
console.log('123:',err)
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
// app.use(function (err, req, res, next) {
//   console.error(err.message);
//   if (!err.statusCode) err.statusCode = 500;
//   res.status(err.statusCode).send(err.message);
// });

// PORT
const port = process.env.PORT || 8000;

const server = app.listen(port, () => {  
  console.log('Connected to port ' + port)
})



const express = require('express');
const bodyParser = require('body-parser');
var Contact = require('./models/contact');
var mongoose = require('mongoose');
var cors = require('cors');
var multer = require('multer');
var upload = multer();

var async = require('async');

var mongoDB = 'mongodb+srv://kk91225:kundan1997@cluster1-xggky.mongodb.net/test?retryWrites=true';
mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Create a new instance of express
const app = express()

app.use(cors());

// Tell express to use the body-parser middleware and to not parse extended bodies
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// for parsing multipart/form-data
app.use(upload.array()); 


  app.get('/contacts', function(req, res) {
    Contact.find({}, 'name')
    .exec(function (err, list_contacts) {
      if (err) { return next(err); }
      //Successful, so render
      res.end(JSON.stringify(list_contacts));
    });
  });



  app.get('/contact/:id',function(req, res) { 
    var id = mongoose.Types.ObjectId(req.params.id);

    async.parallel({
        contact: function(callback) {
            Contact.findById(id)
            .exec(callback);
        },

    }, function(err, results) {
        if(err) { return next(err); }
        if(results.contact == null) {
            var err = new Error('Contact not found');
            err.status = 404;
            return next(err);
        }
        res.end(JSON.stringify(results.contact));
    });

}
  );


  app.post('/contact/create', function (req, res,next) {

    
    var contact = new Contact(
        { 
            name: req.body.name,
          number: req.body.number,
          email: req.body.email,
         });

         
         contact.save(function (err) {
            if (err) { return next(err); }
             res.end(JSON.stringify(contact));
     
                 });
      
  });

  app.post('/contact/:id/delete', function(req, res, next) {

    var id = mongoose.Types.ObjectId(req.params.id);

    Contact.findByIdAndDelete(id, function deleteAuthor(err) {
        if (err) { return next(err); }
        // Success - go to author list
       
    })

  })
   

  
  // Tell our app to listen on port 3000
  app.listen(8080, function (err) {
    if (err) {
      throw err
    }
  
    console.log('Server started on port 8080')
  })
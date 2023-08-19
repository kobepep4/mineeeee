var express = require("express") 
var app = express()
var port = process.env.port || 3000;
require('./dbConnection');
let router = require('./routers/router');
//const { MongoClient, ServerApiVersion } = require('mongodb');
//const uri = "mongodb+srv://van20persies:ganstasunit@cluster0.nl5ppte.mongodb.net/?retryWrites=true&w=majority";
//let collection;

app.use(express.static(__dirname + '/'))
app.use(express.json());
app.use(express.urlencoded({
   extended: false
}));
app.use('/api/cat',router);

app.listen(port, () => {
   console.log("App listening to: " + port)
   //runDBConnection();
})
/*app.get('/public', function (req, res) {
    res.render('index.html');
});*/

// app.get('/api/cats', (req, res) => {
      //  getAllCats((err,result)=>{
      //          if(!err){
      //              res.json({statusCode: 200, data: result, message:'get all cats successful'});
      //          }
      //  });
  // });

// app.post('/api/cat', (req,res)=>{
      //  let cat = req.body;
      //  postCat(cat,(err, result)=>{
      //      if(err){
      //          res.json({statusCode:201, data:result, message:'success'})
      //      }

      // });

// });


/*function postCat(cat, callback){
    collection.insertOne(cat,callback);
}

function getAllCats(callback){
    collection.find({}).toArray(callback);

}*/


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
/*const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});*/



/*async function runDBConnection() {
  try {
    
   // await client.connect();
      // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    collection = client.db().collection('Cat');
    console.log(collection);
  } catch(ex){
    console.error(ex);
  }
}
*/




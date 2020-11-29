import express from 'express';
import mongoose from 'mongoose';
import data from './data.js';
import Cors from 'cors';

// App Config
const app = express();
const port = process.env.PORT || 3001;
const connection__url = 'mongodb+srv://khoafunny1:JJsga2XJfsPSXMka@cluster0.ykhed.mongodb.net/todoDB?retryWrites=true&w=majority';

// Middlewares
app.use(express.json());
app.use(Cors());
// DB Config
mongoose.connect(connection__url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});

// API Endpoints
app.get('/', (req, res) => {res.status(200).send('heelo')});

app.post('/todolist', (req, res) => {
   const db = req.body;
   data.create(db, (err, data) => {
        if (err)
            res.status(500).send(err);
        else
            res.status(201).send(data);
   });
});
app.get('/todolist', (req, res) => {
    data.find((err, data) => {
         if (err)
             res.status(500).send(err);
         else
             res.status(201).send(data);
    });
 });
app.get('/todolist/:id', (req, res) => {
    const _id = req.params.id;
    data.findById({ 
        _id
    }, (err, doc) => {
       if(err){
           console.log(`Error: ` + err)
       } else{
         if(!doc){
             res.status(404).send(`Not Found`);
             console.log("NOT FOUND!");

         } else{
            res.status(200).send(doc);
         }
       }
    });
});
app.get('/todolist/delete/:id', (req, res) => {
    const _id = req.params.id;
    data.findOneAndDelete({ 
        _id: _id
    }, (err, doc) => {
       if(err){
           console.log(`Error: ` + err)
       } else{
         if(!doc){
            res.status(404).send(`Not Found`);
            console.log("NOT FOUND!");
         } else{
             res.status(200).send(`Deleted!`);
           console.log("Delete Succeeded!");
         }
       }
    });
})

// Listener

app.listen(port, () => {console.log('Listening on ' + port)});
const express = require('express');
const app = express();
const port = 3000;

var clients = require('./modules/clients');
var events = require('./modules/events');
var appservices = require('./modules/appservices');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });


app.use(express.static('public'));
  
app.get('/', (req, res) => res.send('Hello World!'));



app.post('/userCreate', (req, res) => {
    clients.createUser(req,res);
});

app.post('/userAuth', (req, res) => {
  clients.login(req,res);
});

app.get('/userInfo',(req, res) => {
  clients.userInfo(req,res);
});

app.get('/eventsList',(req, res) => {
  events.eventsList(req,res);
});

app.get('/eventsLocations',(req, res) => {
  events.eventsLocations(req,res);
});


app.get('/allEventsLocations',(req, res) => {
  events.allEventsLocations(req,res);
});






app.get('/eventsMusic',(req, res) => {
  events.eventsMusic(req,res);
});


app.get('/EventsPhotography',(req, res) => {
  events.EventsPhotography(req,res);
});

app.get('/EventsBeauty',(req, res) => {
  events.EventsBeautyList(req,res);
});

app.get('/EventsWearing',(req, res) => {
  events.EventsWearingsList(req,res);
});


app.post('/eventCreate',(req,res)=>{
  events.createEvent(req,res);
});


app.get('/myEventsList',(req,res)=>{
  events.myEventsList(req,res);
});
app.get('/myEventDetails',(req,res)=>{
  events.myEventDetails(req,res);
});

app.get('/confirmEvent',(req,res)=>{
  events.confirmEvent(req,res);
});

app.get('/deleteEvent',(req,res)=>{
  events.deleteEvent(req,res);
});


app.post('/newmessage',(req,res)=>{
  appservices.addMessage(req,res);
});













app.listen(port, () => console.log(`CelebraEvents is listening at http://localhost:${port}`))
var mongo = require('mongodb');


exports.eventsList = function (req, res) {
    var method = req.method;
    var headers = req.headers;
    if (method === "GET") {
        if (headers['content-type'] === "application/json") {
            if (headers['authorization']) {

                var MongoClient = require('mongodb').MongoClient;
                var url = "mongodb://localhost:27017/";
                var uid = headers['authorization'];
                MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
                    if (err) throw err;
                    var dbo = db.db("celebraevents");
                    dbo.collection("eventsTypes").find({}).toArray(function (err, result) {
                        if (err) throw err;
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.write(JSON.stringify({ code: 200, success: true, events: result }));
                        res.end();

                        db.close();
                    });
                });


            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.write(JSON.stringify({ code: 200, message: "access denied.", success: false }));
                res.end();
            }

        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify({ code: 200, message: "access denied.", success: false }));
            res.end();
        }
    } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ code: 200, message: "access denied.", success: false }));
        res.end();
    }


}



exports.eventsLocations = function (req, res) {
    var url = require('url');
    var method = req.method;
    var headers = req.headers;

    var q = url.parse(req.url, true);
    var idEvent = q.query.idEvent;




    if (method === "GET") {
        if (headers['content-type'] === "application/json") {
            if (headers['authorization']) {

                var MongoClient = require('mongodb').MongoClient;
                var url = "mongodb://localhost:27017/";
                var uid = headers['authorization'];
                MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
                    if (err) throw err;
                    var dbo = db.db("celebraevents");
                    var query;
                    if (idEvent=='notset') {
                        query= {};
                    }else{
                        query = { eventType: idEvent }
                    }
                    dbo.collection("eventsLocations").find(query).toArray(function (err, result) {
                        if (err) throw err;
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.write(JSON.stringify({ code: 200, success: true, locations: result }));
                        res.end();

                        db.close();
                    });
                });


            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.write(JSON.stringify({ code: 200, message: "access denied.", success: false }));
                res.end();
            }

        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify({ code: 200, message: "access denied.", success: false }));
            res.end();
        }
    } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ code: 200, message: "access denied.", success: false }));
        res.end();
    }


}


exports.eventsMusic = function (req, res) {
    var url = require('url');
    var method = req.method;
    var headers = req.headers;

    var q = url.parse(req.url, true);
    var idEvent = q.query.idEvent;




    if (method === "GET") {
        if (headers['content-type'] === "application/json") {
            if (headers['authorization']) {

                var MongoClient = require('mongodb').MongoClient;
                var url = "mongodb://localhost:27017/";
                var uid = headers['authorization'];
                MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
                    if (err) throw err;
                    var dbo = db.db("celebraevents");
                    var query;
                    if (idEvent=='notset') {
                        query= {};
                    }else{
                        query = { eventType: idEvent }
                    }
                    dbo.collection("eventMusic").find(query).toArray(function (err, result) {
                        if (err) throw err;
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.write(JSON.stringify({ code: 200, success: true, music: result }));
                        res.end();

                        db.close();
                    });
                });


            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.write(JSON.stringify({ code: 200, message: "access denied.", success: false }));
                res.end();
            }

        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify({ code: 200, message: "access denied.", success: false }));
            res.end();
        }
    } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ code: 200, message: "access denied.", success: false }));
        res.end();
    }


}


exports.EventsPhotography = function (req, res) {
    var url = require('url');
    var method = req.method;
    var headers = req.headers;

    var q = url.parse(req.url, true);
    var idEvent = q.query.idEvent;




    if (method === "GET") {
        if (headers['content-type'] === "application/json") {
            if (headers['authorization']) {

                var MongoClient = require('mongodb').MongoClient;
                var url = "mongodb://localhost:27017/";
                var uid = headers['authorization'];
                MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
                    if (err) throw err;
                    var dbo = db.db("celebraevents");
                    var query;
                    if (idEvent=='notset') {
                        query= {};
                    }else{
                        query = { eventType: idEvent }
                    }
                    dbo.collection("eventPhotography").find(query).toArray(function (err, result) {
                        if (err) throw err;
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.write(JSON.stringify({ code: 200, success: true, photographs: result }));
                        res.end();

                        db.close();
                    });
                });


            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.write(JSON.stringify({ code: 200, message: "access denied.", success: false }));
                res.end();
            }

        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify({ code: 200, message: "access denied.", success: false }));
            res.end();
        }
    } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ code: 200, message: "access denied.", success: false }));
        res.end();
    }


}


exports.EventsBeautyList = function (req, res) {
    var url = require('url');
    var method = req.method;
    var headers = req.headers;

    var q = url.parse(req.url, true);
    var idEvent = q.query.idEvent;




    if (method === "GET") {
        if (headers['content-type'] === "application/json") {
            if (headers['authorization']) {

                var MongoClient = require('mongodb').MongoClient;
                var url = "mongodb://localhost:27017/";
                var uid = headers['authorization'];
                MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
                    if (err) throw err;
                    var dbo = db.db("celebraevents");
                    var query;
                    if (idEvent=='notset') {
                        query= {};
                    }else{
                        query = { eventType: idEvent }
                    }
                    dbo.collection("eventBeauty").find(query).toArray(function (err, result) {
                        if (err) throw err;
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.write(JSON.stringify({ code: 200, success: true, beautys: result }));
                        res.end();

                        db.close();
                    });
                });


            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.write(JSON.stringify({ code: 200, message: "access denied.", success: false }));
                res.end();
            }

        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify({ code: 200, message: "access denied.", success: false }));
            res.end();
        }
    } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ code: 200, message: "access denied.", success: false }));
        res.end();
    }


}



exports.EventsWearingsList = function (req, res) {
    var url = require('url');
    var method = req.method;
    var headers = req.headers;

    var q = url.parse(req.url, true);
    var idEvent = q.query.idEvent;




    if (method === "GET") {
        if (headers['content-type'] === "application/json") {
            if (headers['authorization']) {

                var MongoClient = require('mongodb').MongoClient;
                var url = "mongodb://localhost:27017/";
                var uid = headers['authorization'];
                MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
                    if (err) throw err;
                    var dbo = db.db("celebraevents");
                    var query;
                    if (idEvent=='notset') {
                        query= {};
                    }else{
                        query = { eventType: idEvent }
                    }
                    dbo.collection("eventsWearing").find(query).toArray(function (err, result) {
                        if (err) throw err;
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.write(JSON.stringify({ code: 200, success: true, wearing: result }));
                        res.end();

                        db.close();
                    });
                });


            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.write(JSON.stringify({ code: 200, message: "access denied.", success: false }));
                res.end();
            }

        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify({ code: 200, message: "access denied.", success: false }));
            res.end();
        }
    } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ code: 200, message: "access denied.", success: false }));
        res.end();
    }


}

exports.createEvent = function (req, res) {
    var url = require('url');
    var method = req.method;
    var headers = req.headers;

    var q = url.parse(req.url, true);
    var idEvent = q.query.idEvent;




    if (method === "POST") {
        if (headers['content-type'] === "application/json") {
            if (headers['authorization']) {

                var MongoClient = require('mongodb').MongoClient;
                var url = "mongodb://localhost:27017/";
                var uid = headers['authorization'];


                let body = [];
                let requestBody = {};

                req.on('data', (chunk) => {
                    body.push(chunk);
                }).on('end', () => {
                    body = Buffer.concat(body).toString();
                    try {
                        requestBody = JSON.parse(body);
                    } catch (err) {

                    }
                    console.log(requestBody);
                    MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
                        if (err) throw err;
                        var dbo = db.db("celebraevents");
                        var query = { eventType: idEvent }
                        dbo.collection("events").insertOne(requestBody, function (err, result) {
                            if (err) throw err;
                            res.writeHead(200, { 'Content-Type': 'application/json' });
                            res.write(JSON.stringify({ code: 200, success: true }));
                            res.end();

                            db.close();
                        });
                    });

                });



            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.write(JSON.stringify({ code: 200, message: "access denied.", success: false }));
                res.end();
            }

        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify({ code: 200, message: "access denied.", success: false }));
            res.end();
        }
    } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ code: 200, message: "access denied.", success: false }));
        res.end();
    }


}


exports.myEventsList = function (req, res) {
    var method = req.method;
    var headers = req.headers;

    if (method === "GET") {
        if (headers['content-type'] === "application/json") {
            if (headers['authorization']) {

                var MongoClient = require('mongodb').MongoClient;
                var url = "mongodb://localhost:27017/";
                var uid = headers['authorization'];

                MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
                    if (err) throw err;
                    var dbo = db.db("celebraevents");
                    dbo.collection('events').aggregate([
                        { $match: { uid: { $eq: uid } } },
                        
                          {
                            $lookup:
                            {
                                from: 'eventsTypes',
                                localField: 'evnetTypeId',
                                foreignField: 'key' ,
                                as: 'evnetTypeDeatils'
                            },
                        },{
                            $lookup:
                            {
                                from: 'eventMusic',
                                localField: 'eventMusicId',
                                foreignField: 'key' ,
                                as: 'eventMusicDeatils'
                            },
                        },{
                            $lookup:
                            {
                                from: 'eventBeauty',
                                localField: 'eventBeautyId',
                                foreignField: 'key',
                                as: 'beautyDeatils'
                            }
                        }, {
                            $lookup:
                            {
                                from: 'eventPhotography',
                                localField: 'eventPhotographId',
                                foreignField: 'key',
                                as: 'photographerDeatils'
                            }
                        }, {
                            $lookup:
                            {
                                from: 'eventsLocations',
                                localField: 'eventLocationId',
                                foreignField: 'key',
                                as: 'locationDeatils'
                            }
                        }, {
                            $lookup:
                            {
                                from: 'eventsWearing',
                                localField: 'eventWearingId',
                                foreignField: 'key',
                                as: 'eventWearingDetails'
                            }

                        }
                    ]).toArray(function (err, result) {
                        if (err) throw err;
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.write(JSON.stringify({ code: 200, success: true, events: result }));
                        res.end();

                        db.close();
                    });
                });


            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.write(JSON.stringify({ code: 200, message: "access denied.", success: false }));
                res.end();
            }

        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify({ code: 200, message: "access denied.", success: false }));
            res.end();
        }
    } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ code: 200, message: "access denied.", success: false }));
        res.end();
    }


}


exports.myEventDetails = function (req, res) {
    var url = require('url');
    var method = req.method;
    var headers = req.headers;

    var q = url.parse(req.url, true);
    var idEvent = q.query.idEvent;


    if (method === "GET") {
        if (headers['content-type'] === "application/json") {
            if (headers['authorization']) {

                var MongoClient = require('mongodb').MongoClient;
                var url = "mongodb://localhost:27017/";
                var uid = headers['authorization'];

                MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
                    if (err) throw err;
                    var dbo = db.db("celebraevents");
                    dbo.collection('events').aggregate([
                        { $match: { uid: { $eq: uid } } },
                        { $match: { '_id': { $eq: new mongo.ObjectID(idEvent) } } },
                        
                        
                          {
                            $lookup:
                            {
                                from: 'eventsTypes',
                                localField: 'evnetTypeId',
                                foreignField: 'key' ,
                                as: 'evnetTypeDeatils'
                            },
                        },{
                            $lookup:
                            {
                                from: 'eventMusic',
                                localField: 'eventMusicId',
                                foreignField: 'key' ,
                                as: 'eventMusicDeatils'
                            },
                        },{
                            $lookup:
                            {
                                from: 'eventBeauty',
                                localField: 'eventBeautyId',
                                foreignField: 'key',
                                as: 'beautyDeatils'
                            }
                        }, {
                            $lookup:
                            {
                                from: 'eventPhotography',
                                localField: 'eventPhotographId',
                                foreignField: 'key',
                                as: 'photographerDeatils'
                            }
                        }, {
                            $lookup:
                            {
                                from: 'eventsLocations',
                                localField: 'eventLocationId',
                                foreignField: 'key',
                                as: 'locationDeatils'
                            }
                        }, {
                            $lookup:
                            {
                                from: 'eventsWearing',
                                localField: 'eventWearingId',
                                foreignField: 'key',
                                as: 'eventWearingDetails'
                            }

                        }
                    ]).toArray(function (err, result) {
                        if (err) throw err;
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.write(JSON.stringify({ code: 200, success: true, event: result }));
                        res.end();

                        db.close();
                    });
                });


            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.write(JSON.stringify({ code: 200, message: "access denied.", success: false }));
                res.end();
            }

        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify({ code: 200, message: "access denied.", success: false }));
            res.end();
        }
    } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ code: 200, message: "access denied.", success: false }));
        res.end();
    }


}


exports.confirmEvent = function (req, res) {
    var url = require('url');
    var method = req.method;
    var headers = req.headers;

    var q = url.parse(req.url, true);
    var idEvent = q.query.idEvent;

    if (method === "GET") {
        if (headers['content-type'] === "application/json") {
            if (headers['authorization']) {

                var MongoClient = require('mongodb').MongoClient;
                var url = "mongodb://localhost:27017/";
                var uid = headers['authorization'];

                
                MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
                    if (err) throw err;
                    var query = { _id: new mongo.ObjectID(idEvent) };
                    var newData= { $set : {stat:1} }
                    var dbo = db.db("celebraevents");

                    dbo.collection("events").updateOne(query,newData, function (err, result) {
                        if (err) throw err;
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.write(JSON.stringify({ code: 200, success: true }));
                        res.end();

                        db.close();
                    });
                });


            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.write(JSON.stringify({ code: 200, message: "access denied.", success: false }));
                res.end();
            }

        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify({ code: 200, message: "access denied.", success: false }));
            res.end();
        }
    } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ code: 200, message: "access denied.", success: false }));
        res.end();
    }


}


exports.deleteEvent =  function (req, res) {
    var url = require('url');
    var method = req.method;
    var headers = req.headers;

    var q = url.parse(req.url, true);
    var idEvent = q.query.idEvent;

    if (method === "GET") {
        if (headers['content-type'] === "application/json") {
            if (headers['authorization']) {

                var MongoClient = require('mongodb').MongoClient;
                var url = "mongodb://localhost:27017/";
                var uid = headers['authorization'];

                
                MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
                    if (err) throw err;
                    var query = { _id: new mongo.ObjectID(idEvent) };
                    var dbo = db.db("celebraevents");

                    dbo.collection("events").deleteOne(query, function (err, result) {
                        if (err) throw err;
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.write(JSON.stringify({ code: 200, success: true, locations: result }));
                        res.end();

                        db.close();
                    });
                });


            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.write(JSON.stringify({ code: 200, message: "access denied.", success: false }));
                res.end();
            }

        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify({ code: 200, message: "access denied.", success: false }));
            res.end();
        }
    } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ code: 200, message: "access denied.", success: false }));
        res.end();
    }


}

var mongo = require('mongodb');

exports.createUser = function(req,res){

    var method = req.method;
    var headers = req.headers;

    if (method === "POST") {
        if (headers['content-type'] === "application/json") {
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
                    
                  var MongoClient = require('mongodb').MongoClient;
                    var url = "mongodb://localhost:27017/";

                    MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
                    if (err) throw err;
                    var dbo = db.db("celebraevents");
                    var query = { email: requestBody.email };
                    
                    dbo.collection("users").find(query).toArray(function(err, result) {
                    if (err) throw err;
                    if ( result.length==0 ) {
                        dbo.collection("users").insertOne(requestBody, function(err, resp) {
                            if (err) throw err;
                            res.writeHead(200, { 'Content-Type': 'application/json' });
                            res.write(JSON.stringify( { code:200 , success:true} ));
                            db.close();
                            res.end();  
                          });
                    } else {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.write(JSON.stringify({ code:200 , success:false,message:"This email is already used by another user."}));
                        db.close();
                        res.end();        
                    }
                    
                });



                    });



            });
        }else{
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify({ code: 200, message: "access denied.", success: false }));
            res.end();
        }
    }else{
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ code: 200, message: "access denied.", success: false }));
        res.end();
    }

}




exports.login = function (req,res){
    var method = req.method;
    var headers = req.headers;

    if (method === "POST") {
        if (headers['content-type'] === "application/json") {
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
                    
                    var MongoClient = require('mongodb').MongoClient;
                    var url = "mongodb://localhost:27017/";

                    MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
                    if (err) throw err;
                    var dbo = db.db("celebraevents");
                    var query = { email: requestBody.email, password:requestBody.password };
                    
                    dbo.collection("users").find(query).toArray(function(err, result) {
                        console.log(result);
                        
                    if (err) throw err;
                    if ( result.length==1 ) {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.write(JSON.stringify({ code:200 , success:true, token:result[0]._id }));
                        db.close();
                        res.end();   
                    } else {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.write(JSON.stringify({ code:200 , success:false,message:"Sorry, wrong email or password."}));
                        db.close();
                        res.end();        
                    }
                    
                });



                    });



            });
        }else{
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify({ code: 200, message: "access denied.", success: false }));
            res.end();
        }
    }else{
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ code: 200, message: "access denied.", success: false }));
        res.end();
    }

}

exports.userInfo = function(req,res) {
    var method = req.method;
    var headers = req.headers;
    if (method === "GET") {
        if (headers['content-type'] === "application/json") {
            if (headers['authorization']) {

                var MongoClient = require('mongodb').MongoClient;
                var url = "mongodb://localhost:27017/";
                var uid=headers['authorization'];
                MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
                if (err) throw err;
                var dbo = db.db("celebraevents");
                dbo.collection("users").findOne({"_id":new mongo.ObjectID(uid)},function(err, result) {
                    if (err) throw err;
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.write(JSON.stringify({ code: 200, success: true , user: {
                        email: result.email,
                        fullname: result.fullname,

                    } }));
                    res.end();    
                    
                    db.close();
                });
                });

                 
            }else{
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.write(JSON.stringify({ code: 200, message: "access denied.", success: false }));
                res.end();                
            }

        }else{
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify({ code: 200, message: "access denied.", success: false }));
            res.end();
        }
    }else{
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ code: 200, message: "access denied.", success: false }));
        res.end();
    }

 
}
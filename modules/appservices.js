
exports.addMessage = function (req, res) {
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

                var MongoClient = require('mongodb').MongoClient;
                var url = "mongodb://localhost:27017/";

                MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
                    if (err) throw err;
                    var dbo = db.db("celebraevents");
                    dbo.collection("messages").insertOne(requestBody,function(err, result) {
                    if (err) throw err;
                    
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.write(JSON.stringify({ code:200 , success:true}));
                        db.close();
                        res.end();   
                    
                    
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

}
const mongoose = require('mongoose');


const dbConnect = async () => { 
    
    const DB_URI = process.env.URI; 
    mongoose.set("strictQuery", false);
    mongoose.connect(DB_URI, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }, (err, res) => { 
        if(!err){ 
            console.log("*** CONNECTIONS SUCCESSFULLY ***");
        }else{
            console.log("*** CONNECTION ERROR ***");
        }
    });
};


module.exports = dbConnect; 
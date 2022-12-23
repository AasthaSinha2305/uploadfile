var mongoose  =  require('mongoose');

var csvSchema = new mongoose.Schema({
    FirstName:{
        type:String
    },
    LastName:{
        type:String
    },
    Email:{
        type:String
    },
    PhoneNumber:{
        type:Number
    },
    LinkedinProfile:{
        type:String
    }
});

module.exports = mongoose.model('userRecords',csvSchema);
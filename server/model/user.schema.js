var mongoose = require('mongoose');
var schema= mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
});

module.exports=mongoose.model('user',schema);
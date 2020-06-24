var mongoose = require('mongoose');
var schema= mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    pageurl:{
        type:String,
        require:true
    },
    meta_title:{
        type:String,
        require:true
    },
    meta_desc:{
        type:String,
        require:true
    }
},
{timestamps:true}
);

module.exports=mongoose.model('category',schema);
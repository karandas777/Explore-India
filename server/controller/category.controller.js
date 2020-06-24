var sc = require('../model/category.schema');

function insert (req,res){
    var record = new sc({
        name:req.body.name,
        pageurl:req.body.pageurl,
        image:req.body.image,
        meta_title:req.body.meta_title,
        meta_desc:req.body.meta_desc
    });
    record.save()
    .then(()=>{
        res.json({
            status:'OK',
            message:'record inserted succesfully'
        });
    })
    .catch((err)=>{
        res.json({
            status:'NOK',
            message:err
        });
    })
};

function select (req,res){
    sc.find()
    .then((data)=>{
        res.json({
            status:'OK',
            message:data
        });
    })
    .catch((err)=>{
        res.json({
            status:'NOK',
            message:err
        })
    })
}

function details (req,res){
    sc.findOne({ _id: req.body._id })
    .then((data)=>{
        res.json({
            status:'OK',
            message:data
        });
    })
    .catch((err)=>{
        res.json({
            status:'NOK',
            message:err
        })
    })
}

function edit(req,res){
    sc.updateOne({ _id: req.body._id },
        { 
            name:req.body.name,
            pageurl:req.body.pageurl,
            image:req.body.image,
            meta_title: req.body.meta_title, 
            meta_desc:req.body.meta_desc
        })
    .then(()=>{
        res.json({
            status:'OK',
            message:'Record Updated'
        });
    })
    .catch((err)=>{
        res.json({
            status:'NOK',
            message:err
        })
    })
}

function remove(req,res){
    sc.deleteOne({_id:req.body._id })
    .then(()=>{
        res.json({
            status:'OK',
            message:'Record Deleted'
        });
    })
    .catch((err)=>{
        res.json({
            status:'NOK',
            message:err
        })
    })
}

module.exports.insert=insert;
module.exports.select=select;
module.exports.details=details;
module.exports.edit=edit;
module.exports.remove=remove;

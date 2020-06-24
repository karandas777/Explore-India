var Post = require('../model/post.schema');

function insert(req,res){

    var postdata= new Post({
        cat_id:req.body.cat_id,
        cat_name:req.body.cat_name,
        title:req.body.title,
        summary:req.body.summary,
        post_image:req.body.post_image,
        pageurl:req.body.pageurl,
        meta_title:req.body.meta_title,
        meta_desc:req.body.meta_desc
    });

    postdata.save()
    .then(()=>{
        res.json({
            status:"OK",
            message:"Record Inserted Succesfully"
        });
    })
    .catch((err)=>{
        res.json({
            status:"NOK",
            message:err
        });
    })
}

function select(req,res){
    Post.find()
    .then((data)=>{
        res.json({
            status:"OK",
            message:data
        });
    })
    .catch((err)=>{
        res.json({
            status:"NOK",
            message:err
        });
    })
}


function edit(req,res){
    Post.updateOne({_id:req.body._id},{
        cat_id:req.body.cat_id,
        cat_name:req.body.cat_name,
        title:req.body.title,
        summary:req.body.summary,
        post_image:req.body.post_image,
        pageurl:req.body.pageurl,
        meta_title:req.body.meta_title,
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
    Post.deleteOne({_id:req.body._id })
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

function sort(req,res){
    Post.find(req.body.query)
    .then((data)=>{
        res.json({
            status:"OK",
            message:data
        });
    })
    .catch((err)=>{
        res.json({
            status:"NOK",
            message:err
        });
    })
}


module.exports.insert=insert;
module.exports.select=select;
module.exports.edit=edit;
module.exports.remove=remove;
module.exports.sort=sort;
var User = require('../model/user.schema');
var jwt = require ('jsonwebtoken');


function insertUser(req,res){
    var userdata = new User({
        username:req.body.username,
        password:req.body.password
    });
    userdata.save()
    .then(()=>{
        res.json({
            status:'OK',
            message:'User inserted succesfully'
        });
    })
    .catch((err)=>{
        res.json({
            status:'NOK',
            message:err
        });
    })
}

function findUser (req,res){
    var user = {
        username:req.body.username,
        password:req.body.password
    };
    User.findOne(user)
    .then((data)=>{

        if(data === ""|| data === null || data === undefined){
            res.json({
                status:'NOK',
                message:'User not Found'
            });
        }
        else{
            var token = jwt.sign({data:data},"1234",{expiresIn:30000});
            res.json({
                status:'OK',
                message:'Login Successful',
                token:token
            });
        }
    })
    .catch((err)=>{
        res.json({
            status:'NOK',
            message:err
        });
    })
}

module.exports.insertUser=insertUser;
module.exports.findUser=findUser;
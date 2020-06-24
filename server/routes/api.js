var express = require ('express');
var router = express.Router();
var category = require('../controller/category.controller');
var post = require ('../controller/post.controller');
var user = require('../controller/user.controller');
var jwt = require('jsonwebtoken');
var uploadController = require('../controller/upload.controller');

const multer = require ('multer');

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"../user/src/assets/uploads");
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
})

const upload = multer({storage:storage});

router.post('/upload-file',upload.single('img'),uploadController.uploadfile);



router.post('/insert-category',verification,category.insert);
router.get('/select-category',verification,category.select);
router.post('/edit-category',verification,category.edit);
router.post('/remove-category',verification,category.remove);
router.post('/get-category-details',verification,category.details);


router.post('/insert-post',verification,post.insert);
router.get('/select-post',verification,post.select);
router.post('/edit-post',verification,post.edit);
router.post('/remove-post',verification,post.remove);
router.post('/sort-post',verification,post.sort);

router.post('/insert-user',user.insertUser);
router.post('/find-user',user.findUser);

router.get('/get-all-category',category.select);
router.get('/get-all-post',post.select);
router.post('/get-sorted-post',post.sort);

function verification(req,res,next){

    var bearerToken = req.headers['auth'];
    if(typeof (bearerToken) !== undefined ){
        jwt.verify(bearerToken ,"1234",(err,data)=>{
            if(err){
                res.json({
                    status:'NOK',
                    message:err
                })
            }
            else{
                next();
            }
        } )
    }

}

module.exports=router;
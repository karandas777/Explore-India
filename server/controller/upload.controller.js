
function uploadfile(req,res){
    const fileObj = req.file.originalname;
    res.end(fileObj);
}

module.exports.uploadfile=uploadfile;
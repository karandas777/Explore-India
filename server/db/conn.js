const mongoose = require('mongoose');
var conn = mongoose.connect('mongodb+srv://karan:connectme@cluster0-4nom2.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true})

.then(()=>{
    console.log('mongo connected');
})
.catch(()=>{
    console.log('mongo failed');
})

module.exports=conn;

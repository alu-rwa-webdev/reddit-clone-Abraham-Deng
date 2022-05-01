const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentsSchema= new Schema({
    post_id:{
        type:Schema.Types.ObjectId,
        ref:'posts',
        required:true

    },
    content:{
        type:String,
        required:true


    },
    user_id:{
        type:Schema.Types.ObjectId,
        ref:'user',
        required:true
        
    }

})
module.exports=mongoose.model('comments',commentsSchema)


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postsSchema= new Schema({
    title:{
        type:String,
        required:true

    },
    body:{
        type:String,
        required:true
    },
    vote_property:{
        type:Number,
        default:0,
    },
    user_id:{
    type:Schema.Types.ObjectId,
    ref:'users'
    }

    
})
module.exports=mongoose.model('posts',postsSchema)

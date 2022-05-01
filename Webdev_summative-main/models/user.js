const mongoose=require('mongoose')
const posts = require('./posts')
const Schema = mongoose.Schema;


const usersSchema= new Schema({
    username:{
        type:String,
        required:true

    },
    password:{
        type:String,
        required:true


    },
    comments:{
        type:Schema.Types.ObjectId,
        ref:'comments',
        required:false

    },
    upvoting_posts:{
        type:Schema.Types.ObjectId,
        ref:'posts',

    },
    downvoting:{
        type:Schema.Types.ObjectId,
        ref:'posts',
    },
    token:{
        type:String
    }

})
module.exports=mongoose.model('users',usersSchema)


const express =require('express')
const post=require('../models/posts')
const db=require('../db/db_connection')
const auth=require('../routes/auth_middleware')
const router=express.Router()
db


/**
 * @swagger
 * /post:
 *  Post:
 *    summary: Post the comments using port local host.
 *    tags: [post]
 *    parameters:
 *      - in: path
 *        name: String
 *        schema:
 *          type: string
 *        required: true
 *        description: Post comment to mongo db
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/post'
 *    responses:
 *      400:
 *        description: The comment updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Post'
 *      400:
 *        description: No post identified
 *      500:
 *        description:  Error occurred
 */
const pst=async(req,res,next)=>{
    let Post;
    try{
        Post=await post.findById(req.params.id)
        if(Post==null){
            return res.status(404).json({message:"The id has a post"})
        }
        
    }catch (err){
        return res.status(500).json({message:err.message})
        
    }
    res.Post=Post
    next()

}

/**
 * @swagger
 * /Get/get:
 *  Get:
 *    summary: All the comments are retreived using port local host.
 *    tags: [get]
 *    parameters:
 *      - in: path
 *        name: String
 *        schema:
 *          type: string
 *        required: true
 *        description: Retrieved the comments back from mongo db
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Get'
 *    responses:
 *      400:
 *        description: The comments updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Get'
 *      600:
 *        description: comments found
 *
 */
router.get("/get",auth,async(req,res)=> {
    try{
        const posts= await post.find()
        res.send(posts)
        
    }catch(err){
        res.status(500).json({message:err.message})   
    }
})

/**
 * @swagger
 * /Get/id:
 *  Get:
 *    summary: Retrieved the comments using id.
 *    tags: [Get]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Retrieved the comments from mongo db
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/post'
 *    responses:
 *      400:
 *        description: The comments seen
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Post'
 *      600:
 *        description: Id not found
 *      500:
 *        description:  Error occurred
 */

router.get("/id",auth,async(req,res)=> {
    try{
        const posts= await post.find()
        res.send(posts)
        
    }catch(err){
        res.status(500).json({message:err.message})   
    }
})

/**
 * @swagger
 * /post:
 *  Post:
 *    summary: Post the comments using port local host.
 *    tags: [post]
 *    parameters:
 *      - in: path
 *        name: String
 *        schema:
 *          type: string
 *        required: true
 *        description: Post comment to mongo db
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/post'
 *    responses:
 *      400:
 *        description: The comment updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Post'
 *      400:
 *        description: No post identified
 *      500:
 *        description:  Error occurred
 */

router.post("/create",auth,async(req,res)=> {
    const posts= new post({
        title:req.body.title,
        body:req.body.body,
        vote_property:req.body.vote_property,
        user_id:auth.user_id
        
    })
    try {
        newpost=await posts.save()
        res.status(201).json(newpost._id)
        
    } catch (err) {
        res.status(400).json({message:err.message})

    }
})


/**
 * @swagger
 * /Deleted/id:
 *  Deleted:
 *    summary: The comments are deleted using id.
 *    tags: [Get]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The comments are deleted from mongo db using id.
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/delete'
 *    responses:
 *      400:
 *        description: The comment deleted using id.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Delete'
 *      304:
 *        description: Id successfully work.
 *      
 */

router.delete('/:id',auth, async(req,res)=> {
    try {
        await res.Post.remove()
        res.status(204).json()
    } catch (err) {
        res.status(500).json({message:err.message})
    }

})


/**
 * @swagger
 * /Patch/id:
 *  Patch:
 *    summary: comments updated with some information using id.
 *    tags: [Get]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Some comments updated from mongo db using id.
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/patcgh'
 *    responses:
 *      400:
 *        description: The comments updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Patch'
 *      207:
 *        description: Id not found
 *      700:
 *        description:  Error occurred
 */

router.patch('/:id',pst,async(req,res)=> {
    if(req.body.title!=null){
        res.Post.title=req.body.title


    }
    if(req.body.body!=null){
        res.Post.body=req.body.body


    }
    try {
        const updatedPost=await res.Post.save()
        res.status(204).json()
        
    } catch (err) {
        res.status(400).json({message:err.message})
        
    }
})

module.exports=router

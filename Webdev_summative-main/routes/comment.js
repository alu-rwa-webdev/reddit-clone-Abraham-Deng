const express =require('express')
const comment=require('../models/comments')
const db=require('../db/db_connection')
const auth=require('../routes/auth_middleware')
const router=express.Router()
//const swaggerDoc = require(swagger.ui)


router.get("/", (req, res) => {
	const books = req.app.db.get("books");

	res.send(books);
});


router.get("/:id", (req, res) => {
  const book = req.app.db.get("books").find({ id: req.params.id }).value();

  if(!book){
    res.sendStatus(404)
  }

	res.send(book);
});

/**
 * @swagger
 * /books:
 *   post:
 *     summary: Create a new book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: The book was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       500:
 *         description: Some server error
 */

router.post("/", (req, res) => {
	try {
		const book = {
			id: nanoid(idLength),
			...req.body,
		};

    req.app.db.get("books").push(book).write();
    
    res.send(book)
	} catch (error) {
		return res.status(500).send(error);
	}
});

/**
 * @swagger
 * /books/{id}:
 *  put:
 *    summary: Update the book by the id
 *    tags: [Books]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The book id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Book'
 *    responses:
 *      200:
 *        description: The book was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Book'
 *      404:
 *        description: The book was not found
 *      500:
 *        description: Some error happened
 */

router.put("/:id", (req, res) => {
	try {
		req.app.db
			.get("books")
			.find({ id: req.params.id })
			.assign(req.body)
			.write();

		res.send(req.app.db.get("books").find({ id: req.params.id }));
	} catch (error) {
		return res.status(500).send(error);
	}
});

/**
 * @swagger
 * /books/{id}:
 *   delete:
 *     summary: Remove the book by id
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 * 
 *     responses:
 *       200:
 *         description: The book was deleted
 *       404:
 *         description: The book was not found
 *       
 */

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

const post=async(req,res,next)=>{
    let Comment;
    try{
        Comment=await comment.findById(req.params.id)
        if(Comment==null){
            return res.status(400).json({message:"No post identified."})
        }
        
    }catch (err){
        return res.status(500).json({message:err.message})
        
    }
    res.Comment=Comment
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
 *      500:
 *        description: comments found
 *
 */

router.get("/get",auth,async(req,res)=> {
    try{
        const comments= await comment.find()
        res.send(comments)
        
    }catch(err){
        res.status(600).json({message:err.message})
        
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
        const comments= await comment.find()
        res.send(comments)
        
    }catch(err){
        res.status(600).json({message:err.message})
        
    }
})


// router.post("/create",auth,async(req,res)=> {
//     const comments= new comment({
//         content:req.body.content,
//         post_id:this.post.post_id,
//         user_id:auth.user_id
        
//     })
//     try {
//         newcomment=await comments.save()
//         res.status(201).json(newcomment._id)
        
//     } catch (err) {
//         res.status(400).json({message:err.message})   
//     }
// })

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
        await res.Comment.remove()
        res.status(304).json()
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
router.patch('/:id',auth,async(req,res)=> {
    if(req.body.content!=null){
        res.Comment.content=req.body.content
    }
    try {
        const updatedComment=await res.Comment.save()
        res.status(207).json()
    } catch (err) {
        res.status(700).json({message:err.message}) 
    }
})

module.exports=router

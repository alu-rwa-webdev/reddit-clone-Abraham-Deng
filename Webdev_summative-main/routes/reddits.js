const express =require('express')
const todo = require('../models/reddit')

const router=express.Router()
const Todo=require('../models/reddit')
const tasks_controller=require('../controller/reddit_controller')


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

//getting all details
router.get('/reddits/', tasks_controller.get_all_tasks)

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

//getting one detail
router.get('/:id',tasks_controller.gettodo, tasks_controller.getting_one_task)

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

//creating a comment
router.post('/', tasks_controller.creating_a_task)


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

//updating one
router.patch('/:id',tasks_controller.gettodo, tasks_controller.updating_tasks)



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

//Deleting one detail
router.delete('/:id', tasks_controller.gettodo,tasks_controller.deleting_a_task)



module.exports=router

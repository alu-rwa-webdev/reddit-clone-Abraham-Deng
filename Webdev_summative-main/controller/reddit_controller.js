const Todo=require('../models/reddit')

exports.get_all_tasks=async(req,res)=> {
    try{
        const todos= await Todo.find()
        res.send(todos)
        
    }catch(err){
        res.status(500).json({message:err.message})
        
    }

 
}

exports.creating_a_task=async(req,res)=> {
    const todo= new Todo({
        title:req.body.title,
        is_completed:req.body.is_completed
    })
    try {
        newtodo=await todo.save()
        res.status(201).json(newtodo._id)
        
    } catch (err) {
        res.status(400).json({message:err.message})
        
    }



}

exports.getting_one_task=(req,res)=> {
    res.json(res.todo)


}

exports.updating_tasks=async(req,res)=> {
    if(req.body.title!=null){
        res.todo.title=req.body.title


    }
    if(req.body.is_completed!=null){
        res.todo.is_completed=req.body.is_completed


    }
    try {
        const updatedTodo=await res.todo.save()
        res.status(204).json()
        
    } catch (err) {
        res.status(400).json({message:err.message})
        
    }



}

exports.deleting_a_task=async(req,res)=> {
    try {
        await res.todo.remove()
        res.status(204).json()
    } catch (err) {
        res.status(500).json({message:err.message})

        
    }

}









exports.gettodo=async(req,res,next)=>{
    let todo;
    try{
        todo=await Todo.findById(req.params.id)
        if(todo==null){
            return res.status(404).json({message:"No task in the id"})
        }
        
    }catch (err){
        return res.status(500).json({message:err.message})
        
    }
    res.todo=todo
    next()

}
exports.gettodo=async(req,res,next)=>{
    let todo;
    try{
        todo=await Todo.findById(req.params.id)
        if(todo==null){
            return res.status(404).json({message:"No task in the id"})
        }
        
    }catch (err){
        return res.status(500).json({message:err.message})
        
    }
    res.todo=todo
    next()

}

exports.gettodo=async(req,res,next)=>{
    let todo;
    try{
        todo=await Todo.findById(req.params.id)
        if(todo==null){
            return res.status(404).json({message:"No task in the id"})
        }
        
    }catch (err){
        return res.status(500).json({message:err.message})
        
    }
    res.todo=todo
    next()

}
const pst=async(req,res,next)=>{
    let todo;
    try{
        todo=await Todo.findById(req.params.id)
        if(todo==null){
            return res.status(404).json({message:"No task in the id"})
        }
        
    }catch (err){
        return res.status(500).json({message:err.message})
        
    }
    res.todo=todo
    next()

}





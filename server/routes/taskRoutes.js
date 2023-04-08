
const express = require('express')
const Todo = require('../models/todoModels')
const router = express.Router()



router.get('/gettodos', async (req,res) => {
    const todos = await Todo.find();

    res.json(todos)
});

router.post('/create', async (req,res) => {
    try{
        const todo = await new Todo({
            text: req.body.text
        });
    
        todo.save();
        res.json(todo)
    
        
        res.status(200).send({
            success: true,
            message: "New Todo Created",
            todo,
        });
    }catch(e){
        console.log(e.message);
    }
})


router.patch('/update/:id', async(req,res) => {

    
    try{
        const todo = await Todo.findByIdAndUpdate({_id:req.params.id},{text:req.body.text});

        console.log("from server ====>",todo);
    
            await todo.save();

        return res.status(200).json(todo);

    }catch(e){
        console.log(e.message);
    }
})




router.delete('/delete/:id', async (req,res) => {
    const result = await Todo.findByIdAndDelete(req.params.id)

    res.json(result);
})


module.exports = router;




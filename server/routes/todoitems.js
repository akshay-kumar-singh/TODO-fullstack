const router = require('express').Router();

const todoItemModal = require('../models/todoitems');

router.post('/api/item', async(req, res)=> {
    try{
        const newItem = new todoItemModal({
            item: req.body.item
        })
        const saveItem = await newItem.save()
        res.status(200).json(saveItem);
    }catch(err){
        res.json(err);
    }
})

router.get('/api/items', async(req, res)=> {
    try{
        const allTodoItems = await todoItemModal.find({});
        res.status(200).json(allTodoItems);
    }catch(err){
        res.json(err);
    }
})

router.put('/api/item/:id', async(req, res)=> {
    try{
        const updateItem = await todoItemModal.findByIdAndUpdate(req.params.id, {$set: req.body});
        res.status(200).json('item updated');
    }catch(err){
        res.json(err);
    }
})

router.delete('/api/item/:id', async(req, res)=> {
    try{
        const deleteItem = await todoItemModal.findByIdAndDelete(req.params.id, {$set: req.body});
        res.status(200).json('item deleted');
    }catch(err){
        res.json(err);
    }
})




module.exports = router;
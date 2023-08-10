const express = require('express');
const router = express.Router();
const listModel = require('./model');
const check = require('./test_status');
const errors = require('./error_h');
// const { query } = require('express-validator');

router.get('/', async (req, res) => {
    const data = await listModel.find({});
    res.status(200).send(data);
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const query = listModel.where({ _id: id});
    const findData = await query.findOne();
    res.status(200).send(findData); 
})

router.post('/', async (req, res, next) => {
    const {Title, Status} = req.body;
    if (check(Status)) {
        const sendData = await listModel.create({
            Title,
            Status
        });
        res.status(200).send(sendData); 
    } else {
       next(errors(res));
    }
});

router.patch('/edit/:id', async (req, res, next) => {
    const {id} = req.params;
    const {Title, Status} = req.body;
    if (check(Status)) {
        const editData = await listModel.findByIdAndUpdate(id,{
            Title,
            Status
        });
        res.status(200).send("edit succefully"); 
    } else {
       next(errors(res));
    }
});

router.delete('/delete/:id', async (req, res) => {
    const {id} = req.params;
    await listModel.deleteOne({ _id: id });
    res.status(200).send("Delete  succefully"); 
});

module.exports = router;
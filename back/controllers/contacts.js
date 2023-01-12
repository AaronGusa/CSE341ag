const mongodb = require('../db/dbConnect');
const ObjectId = require('mongodb').ObjectId;

const getDb = async (req, res, next) => {
    const result = await mongodb.getDb().db('341_contacts').collection('contacts').find();
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts); 
    });
}

const getOne = async (req, res, next) => {
    const id = new ObjectId(req.params.id);
    //console.log(id);
    const result = await mongodb.getDb().db('341_contacts').collection('contacts').findOne({_id: id})
    // console.log(result);
    .then((contact) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contact);
    });
}

module.exports = { getDb, getOne };
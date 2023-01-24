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

const postContact = async (req, res, next) => {
    const contactNew = {
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const result = await mongodb.getDb().db('341_contacts').collection('contacts').insertOne(contactNew)
    .then((result)=> {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result);
    })
}

const putContact = async (req, res, next) => {
    const id = new ObjectId(req.params.id);
    const contactUpdated = {
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const result = await mongodb.getDb().db('341_contacts').collection('contacts').replaceOne({_id: id }, contactUpdated)
    .then((result) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result);
    });
}

const deleteContact = async (req, res, next) => {
    const id = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db('341_contacts').collection('contacts').deleteOne({_id: id})
    .then((result) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result);
    });
}


module.exports = { getDb, getOne, postContact, putContact, deleteContact };

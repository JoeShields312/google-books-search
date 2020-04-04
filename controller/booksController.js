require("dotenv").config();
const axios = require('axios');

const db = require("../models");

module.exports = {
    findAll: function(req,res) {
        db.Books
        .find(req.query)
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        console.log("BOOKS CONTROLLER", req.body)
        db.Books
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        console.log("FLAG",req.params._id )
        db.Books
        .findById({_id: req.params._id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    getGoogleBooks: function(req, res) {
        const {query: params} = req
        // console.log(req)
        const secret = process.env.API_KEY
        const url = `https://www.googleapis.com/books/v1/volumes`;

        axios.get(url, {params})
        .then((data) => {
            // console.log(result.data)
             console.log(data.data.items.length)
        res.json(data.data.items)
        

        }).catch(err => console.log(err));
    }
};
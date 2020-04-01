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
        .then(dbModel => res.json(dbModel));
        // .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Books
        .findById({_id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    getGoogleBooks: function(req, res) {
        require("dotenv").config();
        const book = req.params.input
        const secret = process.env.API_KEY
        const url = `https://www.googleapis.com/books/v1/volumes?
        q=${book}&key=${secret}`
        axios.get(url)
        .then((respond) => {
            response.json(respond.data)
        });
    }
};
const mongoose = require('mongoose');

// creates Schema
const Schema = mongoose.Schema;

const userSchemaMolecule = new Schema({

      name: require('../atoms/name')
    // , email: require('../atoms/email')
    // , password: require('../atoms/password')

});


module.exports = userSchemaMolecule;

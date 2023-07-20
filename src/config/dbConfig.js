const mongoose = require('mongoose')

 

mongoose.connect('mongodb://root:example@mongodb:27017/')
mongoose.Promise = global.Promise

 

module.exports = mongoose
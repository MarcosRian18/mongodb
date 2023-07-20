const mongoose = require('mongoose')

 

mongoose.connect('mongodb://root:example@172.20.0.3:27017/')
mongoose.Promise = global.Promise

 

module.exports = mongoose
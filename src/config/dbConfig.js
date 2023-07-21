const mongoose = require('mongoose')

mongoose.connect('mongodb://root:example@192.168.48.3:27017/')
mongoose.Promise = global.Promise

 

module.exports = mongoose
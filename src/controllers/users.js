const User = require('../models/users');

// Controller function to create a new user
module.exports = {
  createUser : async (req, res) => {
    try {
      console.log(req.body)
      const resultado = await User.create(req.body);
      return res.status(201).json(resultado);
    } catch (err) {
      console.log("o erro é esse: ",err.message)
      return res.status(500).json({message: 'Erro no servidor!'})
    }
  }
};

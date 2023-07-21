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
  },

  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      return res.json(users);
    } catch (err) {
      console.log("o erro é esse: ", err.message);
      return res.status(500).json({ message: 'Erro no servidor!' });
    }
  },

  putUsers: async (req,res)=> {
    try {
      const userId = req.params.id
      const updateUser = await User.findByIdAndUpdate(userId, req.body, {
        new: true
      })
      if (!updateUser) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }
      return res.status(200).json("Dados do Usuário alterados: " + updateUser);
    } catch (error) {
      console.log("o erro é esse: ", error.message);
      return res.status(500).json({ message: 'Erro no servidor!' });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const userId = req.params.id;
      const deletedUser = await User.findByIdAndRemove(userId);
      if (!deletedUser) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }
      return res.status(200).json("O Usuário "+deletedUser+ " foi deletado com sucesso!");
    } catch (err) {
      console.log("o erro é esse: ", err.message);
      return res.status(500).json({ message: 'Erro no servidor!' });
    }
  },
};

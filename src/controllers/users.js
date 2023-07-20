const User = require('../models/users');

// Controller function to create a new user
exports.createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();

    return res.status(201).json(user);
  } catch (err) {
    console.log("o erro é esse: ",err)
    return res.status(500).json({message: 'Erro no servidor!'})
  }
};

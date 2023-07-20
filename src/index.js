const express = require('express');
const cors = require("cors");
const app = express();
const userRoute = require('./routers/users');

app.use(express.json());

// User route
app.use(cors())
app.use(userRoute);
// Start the server
app.listen(3000, () => {
  console.log(`Servidor rodando...`);
});

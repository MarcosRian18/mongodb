const express = require('express');
const app = express();
const userRoute = require('./routers/users');

app.use(express.json());

// User route
app.use(userRoute);
// Start the server
app.listen(3009, () => {
  console.log(`Servidor rodando...}`);
});

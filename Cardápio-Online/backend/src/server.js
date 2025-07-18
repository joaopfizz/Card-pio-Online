const express = require('express');
const cors = require('cors');
const pratoRoutes = require('./routes/pratos');
require('./database/db'); // Inicializa o banco de dados

const app = express();

app.use(cors());
app.use(express.json());
app.use('/pratos', pratoRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});

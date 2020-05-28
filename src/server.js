const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());


//conexao com o banco de dados
mongoose.connect(
  'mongodb://localhost:27017/nodeapi', 
  { useNewUrlParser: true}
);
require('./Models/Product');


const Product = mongoose.model('Product');

app.use('/api', require('./Routes/routes'));


app.listen(3001, () => {
  console.log('server started!');
})
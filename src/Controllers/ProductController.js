const mongoose = require('mongoose');


const Product = mongoose.model('Product');

module.exports = {
  async index(request, response) {
    const products = await Product.find();

    return response.json(products);
  },

  async createProduct( request, response ){
    const { title, description, url } = request.body;
    const product = await Product.create({title, description, url});

    return response.json(product);
  },

  async show(request, response){
    const {id} = request.params;
    const product = await Product.findById(id);

    return response.json(product);
  },

  async delete(request, response){
    const {id} = request.params;

    const product = await Product.findByIdAndDelete(id);

    return response.json(product);
  },

  async update(request, response){
    const {id} = request.params;
    const {title, description, url} = request.body;
    const product = await Product.findByIdAndUpdate(id, {title, description, url}, { new: true });

    return response.json(product);
  }
}
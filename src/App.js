import React, { Component } from 'react';
import './App.css';
import ProductItem from './products-items';
import AddProduct from './add-products';

const products = [
{
   name : 'ipad',
   price : 200
 },
 {
   name : 'iphone',
   price : 540
 }
];
localStorage.setItem('products',JSON.stringify(products));

class App extends Component {

constructor(props){
  super(props);
  this.state = {
    products : JSON.parse(localStorage.getItem('products'))
  };
  this.onDelete = this.onDelete.bind(this);
}

  componentWillMount(){
   const products = this.getProducts();
    this.setState({products});
  }

getProducts(){
   return this.state.products;
}

onDelete(name){
  const products=this.get200Products();

  const filteredProducts = products.filter(product =>{
    return product.name!=name;
  });
  this.setState({products: filteredProducts});
}
  render() {
    return (
      <div className="App">
       <h1>Products  List </h1>

       <AddProduct
       />
       { this.state.products.map(product =>{
           return (
             <ProductItem
             key={product.name}
            {...product}
            onDelete={this.onDelete}
             />
           )
         })
       }
      </div>
    );
  }
}

export default App;

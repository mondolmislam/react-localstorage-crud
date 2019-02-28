import React, { Component } from 'react';
import './App.css';
import ProductItem from './products-items';

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
    products : []
  };
  this.onDelete = this.onDelete.bind(this);
}

  componentWillMount(){
   const products = this.getProducts();
    this.setState({products});
  }

getProducts(){
   return JSON.parse(localStorage.getItem('products'));
}

onDelete(name){
  console.log(name);
  
}
  render() {
    return (
      <div className="App">
       <h1>Products  List </h1>
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

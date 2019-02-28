import React, { Component } from 'react';

class AddProduct extends Component {

  render() {
    const { name, price } = this.props;
    return (
      
             <form>
               <h1>Add New Products</h1>
               <input placeholder="name"/>
               <input placeholder="price"/>
               <button>Add</button>
               <hr/>
             </form>
       
    );
  }
}

export default AddProduct;

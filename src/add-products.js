import React, { Component } from 'react';

class AddProduct extends Component {
constructor(props){
  super(props);

  this.onSubmit = this.onSubmit.bind(this);
}
onSubmit(event){
  event.preventDefault();
  this.props.onAdd(this.nameInput.value,this.priceInput.value);
  this.nameInput.value = '';
  this.priceInput.value = '';
}

  render() {
    const { name, price } = this.props;
    return (
      
             <form onSubmit = {this.onSubmit}>
               <h1>Add New Products</h1>
               <input placeholder="name" ref={nameInput=>this.nameInput = nameInput}/><br/><br/>
               <input placeholder="price" ref={priceInput=>this.priceInput = priceInput
               }/><br/><br/>
               <button>Add</button>
               <hr/>
             </form>
       
    );
  }
}

export default AddProduct;

import React, { Component } from 'react';

class ProductItem extends Component {
constructor(props){
  super(props);
  this.onDelete = this.onDelete.bind(this);
}
onDelete(){
  const {onDelete,name}= this.props;
  onDelete(this.props.name);
}
  render() {
    const { name, price } = this.props;
    return (
      
             <div key={name}>
                 <span>{name}</span>
                  {'  | '}
                  <span>{price} </span> 
                  {'  |  '}
                   <button onClick={this.onDelete}>Delete</button>
             </div>
       
    );
  }
}

export default ProductItem;

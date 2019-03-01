import React, { Component } from 'react';

class ProductItem extends Component {
constructor(props){
  super(props);
  this.state = {
    isEdit:false
  };
  this.onDelete = this.onDelete.bind(this);
 this.onEdit = this.onEdit.bind(this);
 this.onEditSubmit = this.onEditSubmit.bind(this);
}
onDelete(){
  const {onDelete,name}= this.props;
  onDelete(this.props.name);
}

onEdit(){
  this.setState({isEdit:true});
}

onEditSubmit(event){
  event.preventDefault();
  this.props.onEditSubmit(this.nameInput.value,this.priceInput.value,this.props.name);
  this.setState({isEdit:false});
}

  render() {
    const { name, price } = this.props;
    return (
      <div>
            {
              this.state.isEdit
              ? (
                <div>
               <form onSubmit = {this.onEditSubmit}>
               <h1>Edit Products</h1>
               <input placeholder="name" ref={nameInput=>this.nameInput = nameInput} defaultValue={name}/><br/><br/>
               <input placeholder="price" ref={priceInput=>this.priceInput = priceInput
               } defaultValue={price}/><br/><br/>
               <button>Save</button>
               <hr/>
             </form>
                </div>
                )
              : (
                <div>
                  <span>{name}</span>
                  {'  | '}
                  <span>{price} </span> 
                  {'  |  '}
                   <button onClick={this.onEdit}>Edit</button>
                  {'  |  '}
                   <button onClick={this.onDelete}>Delete</button>
                </div>
                )
            }
                 
             </div>
       
    );
  }
}

export default ProductItem;

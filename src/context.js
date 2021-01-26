import React from "react";
import { storeProducts, detailProduct } from "./data";
const ProductContext = React.createContext();

class ProductProvider extends React.Component {
  state = {
    products: [],
    detailProduct: detailProduct
  };
  componentDidMount() {
    this.setProducts();
  }
setProducts = () => {
  let tempProducts = []
  storeProducts.forEach((item)=>{
    const singleItem = {...item}
    tempProducts=[...tempProducts, singleItem]


  })
  this.setState(()=> {
    return {products:tempProducts}
  })
}
    

  



  handleDetail = () => {
    console.log("hello from detail");
  };

  addCart = () => {
    console.log("hello from add to cart");
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addCart: this.addCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };

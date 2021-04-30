import React, {Component} from 'react';
import axios from 'axios'
import styled from 'styled-components'

import productDoc from 'data/products.doc.json'
import ProductCard from "../ui/ProductCard.jsx";

class ProductGrid extends Component {
  state = {
    products: productDoc.products,
    apiProducts: []
  }

  async componentDidMount() {
    console.log(this.state.products)
    const {data} = axios('https://m6-amazon-backend.herokuapp.com/products/')
    console.log(data)
  }

  render() {
    return (
      <GridWrapper>
        {this.state.products.map((product, i) => {
          return <ProductCard {...product} key={i} />
        })}
      </GridWrapper>
    );
  }
}

export default ProductGrid;

const GridWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
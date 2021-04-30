import React, {Component} from 'react';
import axios from 'axios'
import styled from 'styled-components'

import productDoc from 'data/products.doc.json'
import ProductCard from "../ui/ProductCard.jsx";

class ProductGrid extends Component {
  state = {
    products: productDoc.products
  }

  async componentDidMount() {
    console.log(this.state.products)
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
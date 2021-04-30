import React, {Component} from 'react';
import axios from 'axios'
import styled from 'styled-components'

import ProductCard from "../ui/ProductCard.jsx";

class ProductGrid extends Component {
  state = {
    apiProducts: []
  }

  async componentDidMount() {
    const {data} = await axios('https://m6-amazon-backend.herokuapp.com/products/')
    this.setState({...this.state, apiProducts: data.products})
  }

  render() {
    return (
      <GridWrapper>
        {this.state.apiProducts.map((product, i) => {
          return <ProductCard {...product} key={i}/>
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
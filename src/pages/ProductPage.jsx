import React, {Component} from 'react';
import {Col, Container, Row} from 'react-bootstrap'
import styled from 'styled-components'
import axios from 'axios'
import StarRatingComponent from 'react-star-rating-component';
import PropTypes from "prop-types";

class ProductPage extends Component {
  state = {
    product: {}
  }

  componentDidMount = async () => {
    const {productId} = this.props.match.params
    console.log(this.props.match.params)
    const {data} = await axios.get(`https://m6-amazon-backend.herokuapp.com/products/${productId}`)
    console.log(data)
  }

  render() {
    return (
      <div>
        <ProductContainer>
          <Row>
            <Col className='col-3'>
              <img
                src="https://cdn.phonehouse.es/res/viewthree450/resource_1021924.jpg?&w=380&h=380&trim=auto&auto=format"
                alt=""/>
            </Col>
            <Col className='col-6'>
              <h5>{this.state.product.image}</h5>
            </Col>
          </Row>
        </ProductContainer>
      </div>
    );
  };
}

const ProductContainer = styled(Container)`
  margins: 0;
`
export default ProductPage;
import React, {Component} from 'react';
import {Col, Container, Row} from 'react-bootstrap'
import styled from 'styled-components'
import StarRatingComponent from 'react-star-rating-component';
import PropTypes from "prop-types";

class ProductPage extends Component {
  state = {
    isLoading: true,
    product: {}
  }

  async componentDidMount() {
    const {productId} = this.props.matched.params
    const {data} = await axios.get(`https://m6-amazon-backend.herokuapp.com/products/${productId}`)
    this.setState({...this.state, product: data})
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
              <h5>{product.image}</h5>
            </Col>
            <Col className='col-6'>
              <h5>{product.name}</h5>
              <h5>{product.brand}</h5>
              <h5>{product.category}</h5>
              <p>{product.description}</p>
            </Col>
          </Row>
        </ProductContainer>
      </div>
    );
  }
  ;
}

const ProductContainer = styled(Container)`
  margins: 0;
`
export default ProductPage;
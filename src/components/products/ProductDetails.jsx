import React from 'react';
import { Col , Container, Row} from 'react-bootstrap'
import styled from 'styled-components'
import StarRatingComponent from 'react-star-rating-component';
import PropTypes from "prop-types";

const ProductPage = () => {

    state = {
      isLoading: true,
      product : {}
    }
    fetchProduct () {
  
    const { handle } = this.props.match.params
    fetch(`https://m6-amazon-backend.herokuapp.com/product/:${handle}`)
    .then(response => response.json())
    .then(data => this.setState({ product: data, isLoading: false}))
    .catch(error => this.setState({ error, isLoading: false }));
    }

    const { isLoading, product, error } = this.state;
    return (
    
      <div>
        <ProductContainer>
          <Row>
            <Col className='col-3'>
              <img src="https://cdn.phonehouse.es/res/viewthree450/resource_1021924.jpg?&w=380&h=380&trim=auto&auto=format" alt=""/>
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
  };
  
  const ProductContainer = styled(Container)`
    margins: 0;
  `
  export default ProductPage;
  
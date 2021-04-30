import React from 'react';
import { Col , Container, Row} from 'react-bootstrap'
import styled from 'styled-components'
import StarRatingComponent from 'react-star-rating-component';
import PropTypes from "prop-types";

const ProductPage = () => {

  // state = {
    
  // }
  componentDidMount = () => {

  const { handle } = this.props.match.params
  console.log(handle)
  }
  return (
    <div>
      <ProductContainer>
        <Row>
          <Col className='col-3'>
            <img src="https://cdn.phonehouse.es/res/viewthree450/resource_1021924.jpg?&w=380&h=380&trim=auto&auto=format" alt=""/>
          </Col>
          <Col className='col-6'>
            <h5>{products.image}</h5>
        
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

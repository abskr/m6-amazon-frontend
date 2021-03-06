import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import StarRatingComponent from "react-star-rating-component";
import PropTypes from "prop-types";

class ProductPage extends Component {
  state = {
    product: {},
  };

  componentDidMount = async () => {
    const { productId } = this.props.match.params;

    const { data } = await axios.get(
      `https://m6-amazon-backend.herokuapp.com/products/${productId}`
    );
    this.setState({ ...this.state, product: data });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <ProductContainer>
          <Row>
            <Col className="col-3">
              <img src={this.state.product.image} alt="" />
            </Col>
            <Col className="col-6">
              <h5>{this.state.product.name}</h5>
              <h5>{this.state.product.brand}</h5>
              <p>{this.state.product.description}</p>
            </Col>
          </Row>
        </ProductContainer>
      </div>
    );
  }
}

const ProductContainer = styled(Container)`
  margins: 0;
`;
export default ProductPage;

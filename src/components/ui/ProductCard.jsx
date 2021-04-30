import React, {useState} from "react";
import {Button, Card} from "react-bootstrap";
import {Link} from 'react-router-dom'
import PropTypes from "prop-types";
import StarRatingComponent from 'react-star-rating-component';
import styled from 'styled-components'

const ProductCard = (product) => {
  const [rating, setRating] = useState(1);

  function onStarClick(nextValue, prevValue, name) {
    setRating({rating: nextValue});
  }

  console.log(product._id)

  return (
    <CardWrapper to={`/product/${product._id}`}>
      <Card className="border-0">
        <Card.Img className="mb-3" variant="top" src={product.imageUrl}/>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>{product.price}</Card.Text>
          <Card.Text>{product.category}</Card.Text>
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={rating}
            onStarClick={() => onStarClick()}
          />
        </Card.Body>
      </Card>
    </CardWrapper>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired
  })
}

export default ProductCard;

const CardWrapper = styled(Link)`
  cursor: pointer;
  max-width: 300px;
`
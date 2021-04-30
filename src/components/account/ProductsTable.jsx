import React, {Component} from 'react';
import {Table} from 'react-bootstrap'
import axios from 'axios'

class ProductsTable extends Component {
  state = {
    products: []
  }

  handleDeleteProduct = async(productId) => {
    const {data} = await axios.delete(`https://m6-amazon-backend.herokuapp.com/products/${productId}`)
    console.log(data)
  }

  fetchProducts = async () => {
    const {data} = await axios.get('https://m6-amazon-backend.herokuapp.com/products/')
    this.setState({...this.state, products: data.products})
  }

  async componentDidMount() {
    await this.fetchProducts()
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState !== this.state) {
      await this.fetchProducts()
    }
  }

  render() {
    return (
      <Table striped bordered hover>
        <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Description</th>
          <th>Brand</th>
          <th>Image</th>
          <th>Category</th>
          <th>Price</th>
          <th>options</th>
        </tr>
        </thead>
        <tbody>
        {this.state.products.map((product, i) => {
          return (
            <tr key={product._id}>
              <td>{i + 1}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.brand}</td>
              <td><img width="100" src={product.imageUrl} alt={product.name} /></td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td><button onClick={() => this.handleDeleteProduct(product._id)}>X</button></td>
            </tr>
          )
        })}
        </tbody>
      </Table>
    );
  }
}

export default ProductsTable;
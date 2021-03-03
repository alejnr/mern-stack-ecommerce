import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + '...' : str
}

const Product = ({ product }) => {
  return (
    <Card className='my-3 py-3 rounded border-0'>
      <Link to={`/product/${product._id}/`}>
        <Card.Img src={product.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}/`}>
          <Card.Title as='div'>
            <strong>{truncate(product.name, 40)}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} recensioni`}
          />
        </Card.Text>

        <Card.Text as='h3'>€{product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product

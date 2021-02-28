import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CheckOutStep = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className='justify-content-center mb-4'>
      <Nav.Item>
        {step1 ? (
          <LinkContainer to='/login'>
            <Nav.Link>
              Accedi <i class='far fa-check-circle'></i>
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Accedi</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to='/shipping'>
            <Nav.Link>
              Spedizione <i class='far fa-check-circle'></i>
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Spedizione</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to='/payment'>
            <Nav.Link>
              Pagamento <i class='far fa-check-circle'></i>
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Pagamento</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer to='/placeorder'>
            <Nav.Link>
              Invia ordine <i class='far fa-check-circle'></i>
            </Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Invia ordine</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  )
}

export default CheckOutStep

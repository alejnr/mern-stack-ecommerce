import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Badge,
  Image,
} from 'react-bootstrap'
import { logout } from '../actions/userActions'

const Header = () => {
  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <Image style={{ width: '13rem' }} src='/logo.png' />
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/cart/'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> Carrello{' '}
                  <Badge variant='primary'>
                    {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                  </Badge>
                </Nav.Link>
              </LinkContainer>

              {userInfo ? (
                <NavDropdown
                  title={'Benvenuto, ' + userInfo.name}
                  id='username'
                >
                  <LinkContainer to='/profile/'>
                    <NavDropdown.Item>Profilo</NavDropdown.Item>
                  </LinkContainer>

                  <NavDropdown.Item onClick={logoutHandler}>
                    Disconnettersi
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login/'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Accedi / Registrati
                  </Nav.Link>
                </LinkContainer>
              )}

              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Pannello di controllo' id='adminmenu'>
                  <LinkContainer to='/admin/users/'>
                    <NavDropdown.Item>Utenti</NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to='/admin/products/'>
                    <NavDropdown.Item>Prodotti</NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to='/admin/orders/'>
                    <NavDropdown.Item>Ordini</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
              <LinkContainer className='notLarge' to='/legal/faqs/'>
                <Nav.Link>FAQs</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header

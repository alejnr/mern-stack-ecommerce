import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from "react-router-bootstrap"
import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap'
import  SearchBox from './SearchBox'
import { logout } from '../actions/userActions'

const Header = () => {

    const dispatch = useDispatch()

    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    
                <LinkContainer to='/'>
                    <Navbar.Brand>MENLAHSHOP</Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                <Route render={({ history }) => <SearchBox history={history} />} />

                <Nav className="ml-auto">

                <LinkContainer to='/cart/'>
                    <Nav.Link><i className='fas fa-shopping-cart'></i> Cart <Badge variant="primary">{cartItems.reduce((acc, item) => acc + item.qty, 0)}</Badge></Nav.Link>
                </LinkContainer>

                {userInfo ? (
                    <NavDropdown title={'Welcome, ' + userInfo.name} id='username'>
                        <LinkContainer to='/profile/'>
                            <NavDropdown.Item>Profile</NavDropdown.Item>
                        </LinkContainer>

                        <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                    </NavDropdown>
                ) : 

                <LinkContainer to='/login/'>
                <Nav.Link><i className='fas fa-user'></i>  Signin / Signup</Nav.Link>
                </LinkContainer>
                }

                {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Dashboard' id='adminmenu'>
                    <LinkContainer to='/admin/users/'>
                        <NavDropdown.Item>Users</NavDropdown.Item>
                    </LinkContainer>
                    
                    <LinkContainer to='/admin/products/'>
                        <NavDropdown.Item>Products</NavDropdown.Item>
                    </LinkContainer>
                    
                    <LinkContainer to='/admin/orders/'>
                        <NavDropdown.Item>Orders</NavDropdown.Item>
                    </LinkContainer>

                </NavDropdown>
                )}

                </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header

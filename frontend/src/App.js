import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'
import ContactScreen from './screens/ContactScreen'
import RefundScreen from './screens/RefundScreen'
import PrivacyScreen from './screens/PrivacyScreen'
import TermsScreen from './screens/TermsScreen'
import FaqScreen from './screens/FaqScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import OrderListScreen from './screens/OrderListScreen'
import UserListScreen from './screens/UserListScreen'
import ProductListScreen from './screens/ProductListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductEditScreen from './screens/ProductEditScreen'

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <main className='py-3'>
          <Container>
            <Route path='/order/:id' component={OrderScreen} />
            <Route path='/placeorder' component={PlaceOrderScreen} />
            <Route path='/payment' component={PaymentScreen} />
            <Route path='/shipping' component={ShippingScreen} />
            <Route path='/product/:id' component={ProductScreen} />
            <Route path='/cart/:id?' component={CartScreen} />
            <Route path='/admin/users' component={UserListScreen} />
            <Route path='/admin/orders' component={OrderListScreen} />
            <Route path='/admin/products' component={ProductListScreen} exact />
            <Route
              path='/admin/products/:pageNumber'
              component={ProductListScreen}
              exact
            />
            <Route path='/admin/user/:id/edit' component={UserEditScreen} />
            <Route
              path='/admin/product/:id/edit'
              component={ProductEditScreen}
            />
            <Route path='/profile' component={ProfileScreen} />
            <Route path='/register' component={RegisterScreen} />
            <Route path='/login' component={LoginScreen} />
            <Route path='/search_query=:keyword' component={HomeScreen} exact />
            <Route path='/page/:pageNumber' component={HomeScreen} exact />
            <Route
              path='/search/:keyword/page/:pageNumber'
              component={HomeScreen}
              exact
            />
            <Route path='/' component={HomeScreen} exact />
            <Route path='/about-us' component={AboutScreen} />
            <Route path='/contact-us' component={ContactScreen} />
            <Route path='/return-and-refund-policy' component={RefundScreen} />
            <Route path='/privacy-policy' component={PrivacyScreen} />
            <Route path='/terms-and-conditions' component={TermsScreen} />
            <Route path='/legal/faqs' component={FaqScreen} />
          </Container>
        </main>
        <Footer />
      </>
    </Router>
  )
}

export default App

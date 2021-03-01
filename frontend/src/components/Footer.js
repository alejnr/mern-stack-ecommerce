import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Image } from 'react-bootstrap'

function Footer() {
  return (
    <footer className='pt-4 my-md-5 pt-md-5 border-top'>
      <Container>
        <div className='row'>
          <div className='col-12 col-md'>
            <Image
              style={{ width: '5rem' }}
              className='mb-2'
              src='/favicon.png'
            />
            <small className='d-block mb-3 text-muted'>
              &copy; 2021 copyright tutti i diritti riservati
            </small>
          </div>

          <div className='col-6 col-md'>
            <h5>
              <Link to='/about-us/'>Chi Siamo</Link>
            </h5>
            <ul className='list-unstyled text-small'>
              <li>
                <Link className='text-muted' to='/contact-us/'>
                  Contattaci
                </Link>
              </li>
              <li>
                <Link className='text-muted' to='/return-and-refund-policy/'>
                  Vendite e rimborsi
                </Link>
              </li>
              <li>
                <Link className='text-muted' to='/privacy-policy/'>
                  Norme sulla privacy
                </Link>
              </li>
              <li>
                <Link className='text-muted' to='/terms-and-conditions/'>
                  Termini e Condizioni
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer

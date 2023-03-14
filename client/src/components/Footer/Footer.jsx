import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import './footer.css'

const quick__links = [
  {
    path: "/tours",
    display: "Tours",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
]

const Footer = () => {

  const year = new Date().getFullYear()
  
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="logo">
              <img src={logo} alt="logo" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to='#'><i className='ri-youtube-line' /></Link>
                </span>
                <span>
                  <Link to='#'><i className='ri-github-fill' /></Link>
                </span>
                <span>
                  <Link to='#'><i className='ri-facebook-circle-line' /></Link>
                  </span>
                <span>
                  <Link to='#'><i className='ri-instagram-line' /></Link>
                </span>
              </div>
            </div>
          </Col>
          
          <Col lg='3'>
            <h5 className='footer__link-title'>Quick Links</h5>
            <ListGroup className="footer__quick-links">
              {quick__links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
          <h5 className='footer__link-title'>Contacts</h5>
            <ListGroup className="footer__quick-links">
              
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className='mb-0 d-flex align-items-center gap-2'>
                    <span>
                      <i className='ri-map-pin-line'></i>
                    </span>
                    Address: 
                  </h6>
                  <p className="mb-0">Albert Straße 12, Berlin</p>
                </ListGroupItem>
              
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className='mb-0 d-flex align-items-center gap-2'>
                    <span>
                      <i className='ri-mail-line'></i>
                    </span>
                    E-mail: 
                  </h6>
                  <p className="mb-0">contact@travelworld.com</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className='mb-0 d-flex align-items-center gap-2'>
                    <span>
                      <i className='ri-phone-line'></i>
                    </span>
                    Phone: 
                  </h6>
                  <p className="mb-0">+49 12 34 56 78 90</p>
                </ListGroupItem>

            </ListGroup>
          </Col>

          <Col lg='12' className='text-center pt-5'>
            <p className="copyright">© Travel World {year}</p>
            <p className="copyright">All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer
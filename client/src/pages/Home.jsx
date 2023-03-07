import '../styles/home.css'
import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'
import Subtitle from './../shared/Subtitle'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery'
import Testimoinals from '../components/Testimonial/Testimonials'
import Newsletter from '../shared/Newsletter'

const Home = () => {
  return (
    <>
      {/* ==================leading title=============== */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={'Before You Go'} />
                  <img src={worldImg} alt="world" />
                </div>
                <h1>Traveling opens the door to creating{""}
                  <span className="highlight"> memories</span>
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, culpa? Soluta tenetur, nemo error ipsam quam eaque, ab pariatur vero expedita quia aspernatur recusandae fugiat fugit, harum magni dolorem eius.</p>
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroImg} alt="louvre" />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box">
                <video controls preload="auto" autoPlay src={heroVideo} type="video/mp4" />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroImg02} alt="altitude" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>

      </section>

      {/* ==================services=============== */}
      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer our best serviecs.</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* ==========featured tour============ */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle subtitle={'Explore'} />
              <h2 className="featured__tour-title">Our Featured Tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      {/* =============experience============*/}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="experience__content">
                <Subtitle subtitle={'Experience'}></Subtitle>
                <h2>We Serve With <br />Expertise & Experience</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  <br />
                  Minus tempora neque iure.  Maxus tempora neque iure.
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>22k+</span>
                  <h6>Successful Trips</h6>
                </div>
                <div className="counter__box">
                  <span>15k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>16</span>
                  <h6>Years of experience</h6>
                </div>
              </div>
            </Col>
            <Col lg='6'>
              <div className="experience__img">
                <img src={experienceImg} alt="experience" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ==================gallery=============== */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Gallery'} />
              <h2 className="gallery__title">
                Visit our customers tour gallery
              </h2>
            </Col>
            <Col lg='12'>
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>

      </section>

      {/* ==============testimonial============== */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Love from Fans'} />
              <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Col lg='12'>
              <Testimoinals />
            </Col>
          </Row>
        </Container>
      </section>

      <Newsletter />
    </>
  )
}
export default Home
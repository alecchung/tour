import { useContext, useEffect, useRef, useState } from 'react'
import { Container, Row, Col, Form, ListGroup } from 'reactstrap'
import { useParams } from 'react-router-dom'
import calculateAvgRaging from './../utils/avgRating'
import avatar from '../assets/images/avatar.jpg'
import '../styles/tour-details.css'
import Booking from '../components/Booking/Booking'
import Newsletter from '../shared/Newsletter'
import useFetch from '../hooks/useFetch'
import { BASE_URL } from '../utils/config'
import { AuthContext } from '../context/AuthContext'

const TourDetails = () => {

  const { id } = useParams()
  const reviewMsgRef = useRef('')
  const [tourRating, setTourRating] = useState(null)
  const { user } = useContext(AuthContext)

  const { data: tour, loading, error } = useFetch(`${BASE_URL}/api/v1/tours/${id}`)

  const { photo, title, desc, price, address, reviews, city, distance, maxGroupSize } = tour

  const { totalRating, avgRating } = calculateAvgRaging(reviews)

  const options = { day: 'numeric', month: 'long', year: 'numeric' }

  const submitHandler = async e => {
    e.preventDefault()
    const reviewText = reviewMsgRef.current.value

    try {
      if (!user || user === undefined || user === null) {
        alert('Please Sign In')
      }

      const reviewObj = {
        username: user?.username,
        reviewText,
        rating: tourRating
      }

      const res = await fetch(`${BASE_URL}/api/v1/review/${id}`, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(reviewObj)
      })

      const result = await res.json()

      if (!res.ok) {
        return alert(result.message)
      }

      alert(result.message)
      console.log(result);

    } catch (err) {
      alert(err.message)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [tour])

  return (
    <>
      <section>
        <Container>
          {loading && <h4 className='text-center pt-5'>Loading...</h4>}
          {error && <h4 className='text-center pt-5'>{error}</h4>}
          {
            !loading && !error &&
            <Row>
              <Col lg='8'>
                <div className='tour__content'>
                  <img src={photo} alt="tour" />
                  <div className="tour__info">
                    <h2>{title}</h2>

                    <div className="d-flex align-items-center gap-5">
                      <span className='tour__rating d-flex align-items-center gap-1'>
                        <i className="ri-star-fill" style={{ color: 'var(--secondary-color' }}></i>
                        {avgRating === 0 ? null : avgRating}
                        {totalRating === 0
                          ? 'Not rated'
                          : (<span>({reviews?.length}) </span>)}
                      </span>

                      <span>
                        <i className='ri-map-pin-fill'></i> {address}
                      </span>
                    </div>

                    <div className="tour__extra-details">
                      <span><i className='ri-map-pin-2-line'></i> {city} </span>
                      <span><i className='ri-money-euro-circle-line'></i> {price} € per capita </span>
                      <span><i className='ri-map-pin-time-line'></i> {distance} km </span>
                      <span><i className='ri-group-line'></i> {maxGroupSize} persons </span>
                    </div>
                    <h5>Description</h5>
                    <p>{desc}</p>
                  </div>

                  <div className="tour__reviews mt-4">
                    <h4>Reviews ({reviews?.length} reviews)</h4>
                    <Form onSubmit={submitHandler}>
                      <div className="d-flex align-items-center gap-3 rating__group">
                        <span onClick={() => setTourRating(1)}>1 <i className='ri-star-s-fill'></i></span>
                        <span onClick={() => setTourRating(2)}>2 <i className='ri-star-s-fill'></i></span>
                        <span onClick={() => setTourRating(3)}>3 <i className='ri-star-s-fill'></i></span>
                        <span onClick={() => setTourRating(4)}>4 <i className='ri-star-s-fill'></i></span>
                        <span onClick={() => setTourRating(5)}>5 <i className='ri-star-s-fill'></i></span>
                      </div>
                      <div className="review__input">
                        <input type="text" ref={reviewMsgRef} placeholder='Share your thoughts' required />
                        <button className="btn primary__btn text-white" type='submit'>Submit</button>
                      </div>
                    </Form>

                    <ListGroup className='user__reviews'>
                      {
                        reviews?.map((review) => (
                          <div className="review__item" key={review._id}>
                            <img src={avatar} alt="avatar" />
                            <div className="w-100">
                              <div className="d-flex align-items-center justify-content-between">
                                <div>
                                  <h5>{review.username}</h5>
                                  <p>{new Date(review.createdAt).toLocaleDateString('de-DE', options)}</p>
                                </div>
                                <span className='d-flex align-items-center'>
                                  {review.rating} <i className='ri-star-s-fill' />
                                </span>
                              </div>
                              <h6>{review.reviewText}</h6>
                            </div>
                          </div>
                        ))
                      }
                    </ListGroup>
                  </div>
                </div>
              </Col>

              <Col lg='4'>
                <Booking tour={tour} avgRating={avgRating} />
              </Col>
            </Row>
          }
        </Container>
      </section>
      <Newsletter />
    </>
  )
}
export default TourDetails
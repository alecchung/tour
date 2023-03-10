import { Col } from 'reactstrap'
import { BASE_URL } from "../../utils/config"
import TourCard from "../../shared/TourCard"
import useFetch from './../../hooks/useFetch'

const FeaturedTourList = () => {

  const {
    data: featuredTours,
    loading,
    error
  } = useFetch('https://alec-tour-api.onrender.com/api/v1/tours')
  
  return (
    <>
      {loading && <h4>Loading...</h4>}
      {error && <h4>{error}.</h4>}
      {!loading && !error &&
        featuredTours?.map(tour => (
          <Col
            lg='3' md='6' sm='6'
            className="mb-4"
            key={tour._id}
          >
            <TourCard tour={tour} />
          </Col>
        ))
      }
    </>
  )
}
export default FeaturedTourList
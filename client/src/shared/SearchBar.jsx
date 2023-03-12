import { useRef } from "react";
import { useNavigate } from 'react-router-dom'
import { Col, Form, FormGroup } from "reactstrap";
import { BASE_URL } from './../utils/config'
import "./search-bar.css";

const SearchBar = () => {
  const locationRef = useRef('')
  const distanceRef = useRef(0)
  const maxGroupSizeRef = useRef(0)
  const navigate = useNavigate()

  const searchHandler = async () => {
    const location = locationRef.current.value
    const distance = distanceRef.current.value
    const maxGroupSize = maxGroupSizeRef.current.value

    if (location === '' || distance === '' || maxGroupSize === '') {
      return alert('All fields are required.')
    }

    const res = await fetch(`${BASE_URL}/api/v1/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`)

    if (!res.ok) alert('something went wrong')

    const result = await res.json()

    navigate(`/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`, { state: result.data })
  }

  return (
    <Col lg='12'>
      <div className="search__bar">
        <Form className="d-flex align-items-center gap-4">

          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i className="ri-map-pin-line" />
            </span>
            <div>
              <h6>Location</h6>
              <input type="text" placeholder="Where do you wanna go?" ref={locationRef} />
            </div>
          </FormGroup>

          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i className="ri-map-pin-time-line" />
            </span>
            <div>
              <h6>Distance</h6>
              <input type="text" inputMode="numeric" placeholder="Distance in km" ref={distanceRef} />
            </div>
          </FormGroup>

          <FormGroup className="d-flex gap-3 form__group form__group-last">
            <span>
              <i className="ri-group-line" />
            </span>
            <div>
              <h6>Max # of persons</h6>
              <input type="text" inputMode="numeric" placeholder="0" ref={maxGroupSizeRef} />
            </div>
          </FormGroup>

          <span className="search__icon" type='submit' onClick={searchHandler}>
            <i className="ri-search-line" />
          </span>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;

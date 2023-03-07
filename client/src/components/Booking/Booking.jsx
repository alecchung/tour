import { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap'
import './booking.css'

const Booking = ({ tour, avgRating }) => {

    const { price, reviews } = tour
    const navigate = useNavigate()

    const [credentials, setCredentials] = useState({
        userId: '01',
        userEmail: 'example@mail.com',
        fullName: '',
        phone: '',
        guestSize: 1,
        bookAt: ''
    })

    const handleChange = e => { 
        setCredentials(prev => ({...prev, [e.target.id]: e.target.value }));
    }

    const servieFee = 10
    const totalAmount = Number(price) * Number(credentials.guestSize) + Number(servieFee)

    const handleClick = e => {
        e.preventDefault()
        navigate('/thank-you')
    }

    return (
        <div className="booking">
            <div className="booking__top d-flex align-items-center justify-content-between">
                <h3>{price} €  <span> per capita </span></h3>
                <span className='tour__rating d-flex align-items-center'>
                    <i className="ri-star-fill"></i>
                    {avgRating === 0 ? null : avgRating} ({reviews?.length})
                </span>
            </div>

            {/* ==========booking form============= */}
            <div className="booking__form">
                <h5>Information</h5>
                <Form className="booking__infor-form" onSubmit={handleClick}>
                    <FormGroup>
                        <input type="text" placeholder='Full Name' id='fullName' required
                            onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <input type="number" placeholder='Phone Number' id='phone' required
                            onChange={handleChange} />
                    </FormGroup>
                    <FormGroup className='d-flex align-items-center gap-3'>
                        <input type="date" placeholder='' id='bookAt' required
                            onChange={handleChange} />
                        <input type="number" placeholder='Number of Guests' id='guestSize' required
                            onChange={handleChange} />
                    </FormGroup>
                </Form>
            </div>

            {/* =============booking button=========== */}
            <div className="booking__button px-0">
                <ListGroup>
                    <ListGroupItem className='border-0 px-0'>
                        <h5 className='d-flex align-items-center gap-1'>{price} € <i className='ri-close-line'></i>1 person</h5>
                        <span>{price} €</span>
                    </ListGroupItem>
                    <ListGroupItem className='border-0 px-0'>
                        <h5>Service Fee</h5>
                        <span>{servieFee} €</span>
                    </ListGroupItem>
                    <ListGroupItem className='border-0 px-0 total'>
                        <h5>Total </h5>
                        <span>{totalAmount} €</span>
                    </ListGroupItem>
                </ListGroup>

                <Button className='btn primary__btn w-100 mt-4' onClick={handleClick} >Book Now</Button>
            </div>
        </div>
    )
}
export default Booking
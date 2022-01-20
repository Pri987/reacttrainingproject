import { Carousel } from 'react-bootstrap';
import Carousal_1 from '../assets/img/Carousal_1.png';
import Carousal_2 from '../assets/img/Carousal_2.png';
import Carousal_3 from '../assets/img/Carousal_3.png';
import More from '../assets/img/more.png';
import { CommonConstants } from '../Constants/constants'
import '../Styles/HomeCarousal.scss';

const HomeCarousal = () => {

    const data = [
        {
            'heading1': 'Looking for Senior Software Engineer',
            'heading2': 'View Job',
            'Image': Carousal_1
        },
        {
            'heading1': 'Campus Recruitment Drive - Chennai',
            'heading2': 'View Details',
            'Image': Carousal_2
        },
        {
            'heading1': 'Badminton Championship',
            'heading2': 'Schedule',
            'Image': Carousal_3
        }
    ]

    return (
        <Carousel>
            {data.map((item) => (
                <Carousel.Item>
                    <Carousel.Caption>
                        <h1>{item.heading1}</h1>
                        <span>{item.heading2}</span><img className="carouselImg" src={More} />
                    </Carousel.Caption>
                    <img
                        className="d-block w-100"
                        src={item.Image}
                        alt={CommonConstants.IMAGE_NOT_LOADING}
                    />
                </Carousel.Item>
            ))
            }
        </Carousel>
    );
}

export default HomeCarousal;

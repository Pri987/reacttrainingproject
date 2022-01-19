import '../Styles/Jobs.scss';
import img from '../assets/img/holi.png'
import bulb from '../assets/img/bulb.png'
import { Form, FormControl } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import { CommonConstants } from '../Constants/constants'

const Jobs = () => {
    return (
        <div className="jobsContainer">
            <div className="jobSearch">
                <Form style={{ width: '500px' }}>
                    <FormControl
                        type="search"
                        placeholder="Search by job title, location, skills and experience"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Search style={{ position: 'relative', top: '0' }} />
                </Form>
            </div>
            <div className="sideSection">
                <div className="jobRecommend">
                    <a href='https://careers.happiestminds.com/job-recommend'>RECOMMEND ME A JOB</a>
                    <a href='https://careers.happiestminds.com/job-recommend'>
                        <img style={{ height: '60px', width: '60px' }} src={bulb} alt={CommonConstants.IMAGE_NOT_LOADING} /></a>
                </div>
                <div className="pics">
                    <img className="pics" src={img} alt={CommonConstants.IMAGE_NOT_LOADING} />
                    <h6 className="textOnImage">Celebrating Life!</h6>
                    <h4 className="textOnImage1">Holi 2021!</h4>
                </div>
            </div>
        </div>
    );
}

export default Jobs;

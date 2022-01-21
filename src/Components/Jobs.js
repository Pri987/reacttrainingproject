import '../Styles/Jobs.scss';
import img from '../assets/img/holi.png'
import bulb from '../assets/img/bulb.png'
import More from '../assets/img/more.png';
import { CommonConstants } from '../Constants/constants';
import SearchJobs from './SearchJobs';
import { Search } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";

const Jobs = () => {

    return (
        <div className="jobsContainer">
            <div className="jobSearch">
                <SearchJobs />
                <Link to="/job-list"><Search className="searchIcon" size="40" /></Link>
            </div>
            <div className="sideSection">
                <div className="jobRecommend">
                    <a href='https://careers.happiestminds.com/job-recommend'>RECOMMEND ME A JOB</a>
                    <a href='https://careers.happiestminds.com/job-recommend'>
                        <img className="bulbImg" src={bulb} alt={CommonConstants.IMAGE_NOT_LOADING} /></a>
                </div>
                <div className="pics">
                    <img className="pics" src={img} alt={CommonConstants.IMAGE_NOT_LOADING} />
                    <h6 className="textOnImage">Celebrating Life!</h6>
                    <h4 className="textOnImage1">Holi 2021!</h4>
                    <img className="textOnImage2" src={More}></img>
                </div>
            </div>
        </div>
    );
}

export default Jobs;

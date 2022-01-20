import '../Styles/Jobs.scss';
import img from '../assets/img/holi.png'
import bulb from '../assets/img/bulb.png'
import { Form } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";
import { useState } from 'react';
import More from '../assets/img/more.png';
import { CommonConstants, JobConstants } from '../Constants/constants';

const Jobs = () => {

    const [suggestions, setSuggestions] = useState([]);
    const [textValue, setTextValue] = useState('');

    const onTextChanged = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = JobConstants.SKILLS.filter(item => regex.test(item));
        }
        setSuggestions(suggestions);
        setTextValue(value);
    }

    const suggestionSelected = (value) => {
        let tagsArr;
        tagsArr = value.target.innerText;
        setTextValue(tagsArr);
        setSuggestions([]);
    }

    return (
        <div className="jobsContainer">
            <div className="jobSearch" >
                <Form className="form">
                    <Form.Control
                        className="formItems"
                        type="search"
                        onChange={onTextChanged}
                        value={textValue}
                        placeholder="Search by skills"
                    />
                    <Form.Select className="formItems">
                        {JobConstants.EXPERIENCE.map((item) => (
                            <option>{item}</option>
                        ))}
                    </Form.Select>
                    <Form.Select className="formItems">
                        {JobConstants.LOCATIONS.map((item) => (
                            <option>{item}</option>
                        ))}
                    </Form.Select>
                    <Link to="/job-list"><Search className="searchIcon" size="40" /></Link>
                    {/* <a href="https://careers.happiestminds.com/job-list"><Search className="searchIcon" size="40" /></a> */}
                </Form>
                <div className="suggestionList">
                    <ul className="suggestions">
                        {suggestions.map((el, i) => (
                            <li key={i} className="list" onClick={(item) => suggestionSelected(item)}>{el}</li>
                        ))}
                    </ul>
                </div>
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

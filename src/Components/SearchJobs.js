import { Form } from 'react-bootstrap';
import { useState } from 'react';
import '../Styles/Jobs.scss';
import { connect } from 'react-redux';
import * as actions from '../Actions/Actions';
import { JobConstants } from '../Constants/constants';

const SearchJobs = props => {

    const [suggestions, setSuggestions] = useState([]);
    const [textValue, setTextValue] = useState('');

    const onTextChanged = e => {
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = JobConstants.SKILLS.filter(item => regex.test(item));
        }
        setSuggestions(suggestions);
        setTextValue(value);
    }

    const suggestionSelected = value => {
        let tagsArr;
        tagsArr = value.target.innerText;
        setTextValue(tagsArr);
        setSuggestions([]);
    }

    const setDropDownValues = (name, value) => {
        if (name === 'location') {
            props.setLocation(value)
        } else {
            props.setExperience(value)
        }
    }

    return (
        <div className="jobSearch" >
            <Form className="form">
                <Form.Control
                    className="formItems"
                    type="search"
                    onChange={onTextChanged}
                    value={textValue}
                    placeholder="Search by skills"
                />
                <Form.Select name="experience" value={props.experience} onChange={e => setDropDownValues(e.target.name, e.target.value)} className="formItems">
                    {JobConstants.EXPERIENCE.map((item) => (
                        <option>{item}</option>
                    ))}
                </Form.Select>
                <Form.Select name="location" value={props.location} onChange={e => setDropDownValues(e.target.name, e.target.value)} className="formItems">
                    {JobConstants.LOCATIONS.map((item) => (
                        <option>{item}</option>
                    ))}
                </Form.Select>
            </Form>
            <div className="suggestionList">
                <ul className="suggestions">
                    {suggestions.map((el, i) => (
                        <li key={i} className="list" onClick={(item) => suggestionSelected(item)}>{el}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        location: state.location,
        experience: state.experience
    };
};

const mapDispatchToProps = dispatch => {

    return {
        setLocation: (location) => dispatch(actions.setLocation(location)),
        setExperience: (experience) => dispatch(actions.setExperience(experience))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchJobs);
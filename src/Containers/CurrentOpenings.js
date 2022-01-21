import SearchJobs from '../Components/SearchJobs';
import { Badge, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Search } from 'react-bootstrap-icons';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import * as actions from '../Actions/Actions';
import { CurrentOpeningsConstants, JobConstants } from '../Constants/constants'
import '../Styles/CurrentOpenings.scss';

const CurrentOpenings = (props) => {

    const [mouseHoverProp, setMouseHoverProp] = useState(false)
    const [cardId, setCardId] = useState(null);
    const [filteredData, setFilteredData] = useState(props.jobOpeningsData);
    const [recentJobValue, setRecentJobValue] = useState(CurrentOpeningsConstants.JOB_ORDER_LIST[0]);

    useEffect(() => {
        props.getJobOpeningsData()
    }, [])

    useEffect(() => {
        setFilteredData([...props.jobOpeningsData].sort((a, b) => {
            return new Date(b.postedDate) - new Date(a.postedDate);
        }))
        filterJobOpeningsData();
    }, [props.jobOpeningsData])

    const handleCardStyling = (id) => {
        setCardId(id)
        setMouseHoverProp(!mouseHoverProp)
    }

    const style = (id) => {
        if (mouseHoverProp && id === cardId) {
            return ({ boxShadow: '10px 10px 10px grey', backgroundColor: 'white', borderRadius: '5px' })
        } else {
            return ({ boxShadow: 'none', backgroundColor: 'white', borderRadius: '5px' })
        }
    }

    const filterJobOpeningsData = () => {
        let filteredData = props.jobOpeningsData;

        if (recentJobValue === CurrentOpeningsConstants.JOB_ORDER_LIST[1]) {
            filteredData = [...props.jobOpeningsData].sort((a, b) => {
                return new Date(a.postedDate) - new Date(b.postedDate);
            });
        } else {
            filteredData = [...props.jobOpeningsData].sort((a, b) => {
                return new Date(b.postedDate) - new Date(a.postedDate);
            });
        }

        if ((props.experience === '' || props.experience === JobConstants.EXPERIENCE[0]) && props.location !== '' && props.location !== JobConstants.LOCATIONS[0]) {
            filteredData = props.jobOpeningsData.filter((job) => (
                job.location === props.location
            ))
        }

        if ((props.location === '' || props.location === JobConstants.LOCATIONS[0]) && props.experience !== '' && props.experience !== JobConstants.EXPERIENCE[0]) {
            filteredData = props.jobOpeningsData.filter((job) => (
                Number(props.experience) >= Number(job.minExperience) && Number(props.experience) <= Number(job.maxExperience)
            ))
        }

        if (props.location !== '' && props.location !== JobConstants.LOCATIONS[0] && props.experience !== '' && props.experience !== JobConstants.EXPERIENCE[0]) {
            let filteredData1;
            filteredData1 = props.jobOpeningsData.filter((job) => {
                if (Number(props.experience) >= Number(job.minExperience) && Number(props.experience) <= Number(job.maxExperience)) {
                    return job;
                }
            })
            filteredData = filteredData1.filter((job) => (
                job.location === props.location
            ))
        }

        setFilteredData(filteredData);
    }

    const resetAllSearchFields = () => {
        props.setLocation('');
        props.setExperience('');
        setFilteredData(props.jobOpeningsData);
    }

    const handleMostRecentField = value => {
        setRecentJobValue(value)
        let filteredData1;
        if (value === CurrentOpeningsConstants.JOB_ORDER_LIST[1]) {
            filteredData1 = [...filteredData].sort((a, b) => {
                return new Date(a.postedDate) - new Date(b.postedDate);
            });
        } else {
            filteredData1 = [...filteredData].sort((a, b) => {
                return new Date(b.postedDate) - new Date(a.postedDate);
            });
        }
        setFilteredData(filteredData1);
    }

    return (
        <div className="currentOpeningsContainer">
            <div className="searchJobDiv">
                <h1>{CurrentOpeningsConstants.HEADING}</h1>
                <div className="searchJobs">
                    <SearchJobs />
                </div>
                <Link to="/job-list">
                    <Search
                        className="searchIcon1"
                        onClick={filterJobOpeningsData}
                        size="40" />
                </Link>
                <Button variant="secondary" onClick={resetAllSearchFields}>{CurrentOpeningsConstants.RESET}</Button>
                <Form className="someMoreFilters">
                    <span >{filteredData.length} {CurrentOpeningsConstants.JOBS_FOUND}</span>
                    <Form.Select className="filter" onChange={e => handleMostRecentField(e.target.value)}>
                        {CurrentOpeningsConstants.JOB_ORDER_LIST.map((el, index) => (
                            <option key={index}>{el}</option>
                        ))}
                    </Form.Select>
                </Form>
            </div>
            <Container className="allJobsContainer">
                <Row lg={4} md={5} sm={6}>
                    {filteredData.length > 0 ? filteredData.map((item) => (
                        <Col key={item.id} lg={4} md={5} sm={6}>
                            <Card>
                                <Card.Body style={style(item.id)} onMouseLeave={() => handleCardStyling(item.id)} onMouseEnter={() => handleCardStyling(item.id)}>
                                    {mouseHoverProp && item.id === cardId ? <Card.Title><h3 className="titleOnCardHover">{item.title}</h3></Card.Title> :
                                        <Card.Title><h3>{item.title}</h3></Card.Title>}
                                    <Card.Text>{CurrentOpeningsConstants.EXPERIENCE} {item.minExperience} - {item.maxExperience}</Card.Text>
                                    <Card.Text>{CurrentOpeningsConstants.LOCATION} {item.location}</Card.Text>
                                    <Card.Text>{CurrentOpeningsConstants.POSTED} {item.postedDate}</Card.Text>
                                    {item.skills.map(badge => (
                                        <Badge bg="light">{badge}</Badge>
                                    ))}<br />
                                    <a href="https://careers.happiestminds.com/job-view/2470"><Button variant="success">{CurrentOpeningsConstants.APPLY}</Button></a>
                                </Card.Body>
                            </Card>
                        </Col>
                    )) :
                        <h4 className="noDataFound">{CurrentOpeningsConstants.NO_DATA}</h4>
                    }
                </Row>
            </Container>
        </div >
    );
}

const mapStateToProps = (state) => {
    return {
        location: state.location,
        jobOpeningsData: state.jobOpeningsData,
        experience: state.experience
    };
};

const mapDispatchToProps = dispatch => {

    return {
        getJobOpeningsData: () => dispatch(actions.getJobOpeningsData()),
        setLocation: (location) => dispatch(actions.setLocation(location)),
        setExperience: (experience) => dispatch(actions.setExperience(experience))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentOpenings);

import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios';
import {DiversityAtWorkConstants} from './../Constants/constants'
import './../Styles/DiversityAtWork.scss'

const DiversityAtWork = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://picsum.photos/v2/list?page=2&limit=10')
            .then((res) => {
                setData(res.data)
            })
    })

    return (
        <div className="diversityAtWorkContainer">
            <div className="flexChild1">
                <h2>{DiversityAtWorkConstants.DIVERSITY_HEADING}</h2>
                <h6>{DiversityAtWorkConstants.DIVERSITY_SUB_HEADING}</h6>
                <p>{DiversityAtWorkConstants.DESC_1}</p>
                <p>{DiversityAtWorkConstants.DESC_2}</p>
                <p>{DiversityAtWorkConstants.DESC_3}</p>
            </div>
            <div className="flexChild2">
                {data && data.map((item) => (
                    <img key={item.id} src={item.download_url} alt="some img" />
                ))}
            </div>
        </div>
    );
}

export default DiversityAtWork;

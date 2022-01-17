import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios';
import './../Styles/TechnologyInfo.scss'

const TechnologyInfo = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://run.mocky.io/v3/9b251126-b32f-486c-ac67-800648929218')
            .then((res) => {
                setData(res.data)
            })
    })

    return (
        <div className="techInfoContainer">
            <div>
                <h2 className="heading">Our Technology Stack</h2>
            </div>
            <div>
                <Container>
                    <Row lg={4} md={5} sm={6}>
                        {data && data.map((item) => (
                            <Col lg={4} md={5} sm={6}>
                                <Card key={item.id}>
                                    <Card.Body>
                                        <p><Card.Img variant="top" src={item.imgUrl} alt="some img" /></p>
                                        <Card.Title><h4>{item.title}</h4></Card.Title>
                                        <Card.Text>
                                            {item.desc}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default TechnologyInfo;

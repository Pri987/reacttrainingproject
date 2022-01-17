import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Styles/TechnologyInfo.scss';

const TechnologyInfo = ({ techStackData, getTechStackList }) => {

    useEffect(() => {
        getTechStackList();
    }, techStackData)

    return (
        <div className="techInfoContainer">
            <div>
                <h2 className="heading">Our Technology Stack</h2>
            </div>
            <div>
                <Container>
                    <Row lg={4} md={5} sm={6}>
                        {techStackData && techStackData.map((item) => (
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

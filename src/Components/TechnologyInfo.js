import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Styles/TechnologyInfo.scss';
import { TechnologyInfoConstants, CommonConstants } from '../Constants/constants'

const TechnologyInfo = ({ techStackData, getTechStackList }) => {

    const [showMoreLink, setShowMoreLink] = useState(false);
    const [cardId, setCardId] = useState(null);

    useEffect(() => {
        getTechStackList();
    }, [])

    const handleMoreLink = (id) => {
        setShowMoreLink(true)
        setCardId(id)
    }

    return (
        <div className="techInfoContainer">
            <div>
                <h2 className="heading">{TechnologyInfoConstants.HEADING}</h2>
            </div>
            <div>
                <Container>
                    <Row lg={4} md={5} sm={6}>
                        {techStackData && techStackData.map((item) => (
                            <Col key={item.id} lg={4} md={5} sm={6}>
                                <Card>
                                    <Card.Body onMouseEnter={() => handleMoreLink(item.id)} onMouseLeave={() => setShowMoreLink(false)}>
                                        <Card.Img variant="top" src={item.imgUrl} alt={CommonConstants.IMAGE_NOT_LOADING} />
                                        {showMoreLink && cardId === item.id &&
                                            <a className="moreLink" href={item.moreLink} target="_target">More |</a>
                                        }
                                        <Card.Title><h4>{item.title}</h4></Card.Title>
                                        <Card.Text>{item.desc}</Card.Text>
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

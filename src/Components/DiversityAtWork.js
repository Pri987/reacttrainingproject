import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { ArrowsFullscreen, ArrowLeftShort, ArrowRightShort } from 'react-bootstrap-icons';
import { DiversityAtWorkConstants, CommonConstants } from '../Constants/constants'
import '../Styles/DiversityAtWork.scss'
import Button from 'react-bootstrap/Button';

const DiversityAtWork = ({ photosList, getPhotosList }) => {

    const [showFullScreenIcon, setShowFullScreenIcon] = useState(false);
    const [imgId, setImgId] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        getPhotosList();
    }, [])

    const handleImageControl = (id) => {
        setShowFullScreenIcon(true);
        setImgId(id);
    }

    const showPreviousImg = () => {
        let imgIdArr = [];
        for (const photo of photosList) {
            imgIdArr.push(photo.id);
        }
        for (let img = 0; img < imgIdArr.length; img++) {
            if (imgIdArr[img] === imgId && img != 0) {
                setImgId(imgIdArr[img - 1])
            }
        }
    }

    const showNextImg = () => {
        let imgIdArr = [];
        for (const photo of photosList) {
            imgIdArr.push(photo.id);
        }
        for (let img = 0; img < imgIdArr.length; img++) {
            if (imgIdArr[img] === imgId && img != imgIdArr.length - 1) {
                setImgId(imgIdArr[img + 1])
            }
        }
    }

    return (
        <div className="diversityAtWorkContainer">
            <div className="flexChild1">
                <h2>{DiversityAtWorkConstants.DIVERSITY_HEADING}</h2><br />
                <h6>{DiversityAtWorkConstants.DIVERSITY_SUB_HEADING}</h6><br />
                <p>{DiversityAtWorkConstants.DESC_1}</p>
                <p>{DiversityAtWorkConstants.DESC_2}</p>
                <p>{DiversityAtWorkConstants.DESC_3}</p>
            </div>
            <div className="flexChild2" style={{ display: 'flex' }}>
                {photosList && photosList.map((item) => (
                    <div key={item.id} style={{ flex: '1', position: 'relative' }}>
                        <img
                            src={item.download_url}
                            alt={CommonConstants.IMAGE_NOT_LOADING}
                            onMouseEnter={() => handleImageControl(item.id)}
                            onMouseLeave={() => setShowFullScreenIcon(false)}
                            onClick={() => setShowModal(true)}
                        />
                        {showFullScreenIcon && imgId === item.id && <ArrowsFullscreen style={{ position: 'absolute', top: '30px', right: '45px' }} onClick={() => { }} />}
                    </div>
                ))}
            </div>
            {showModal && <Modal size="lg" centered aria-labelledby="contained-modal-title-center" onHide={!showModal} show={showModal}>
                <Modal.Body>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Button style={{ height: '50px' }} variant="secondary" onClick={showPreviousImg}><ArrowLeftShort /></Button>
                        {photosList && photosList.map((item) => (
                            imgId === item.id &&
                            <img
                                style={{ width: "90%", height: "100%" }}
                                key={item.id}
                                src={item.download_url}
                                alt={CommonConstants.IMAGE_NOT_LOADING}
                            />
                        ))
                        }
                        <Button style={{ height: '50px' }} variant="secondary" onClick={showNextImg}><ArrowRightShort /></Button>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
                </Modal.Footer>
            </Modal>}
        </div>
    );
}

export default DiversityAtWork;

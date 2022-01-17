import { useEffect } from 'react';
import { DiversityAtWorkConstants } from '../Constants/constants'
import '../Styles/DiversityAtWork.scss'

const DiversityAtWork = ({ photosList, getPhotosList }) => {

    useEffect(() => {
        getPhotosList();
    }, photosList)

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
                {photosList && photosList.map((item) => (
                    <img key={item.id} src={item.download_url} alt="some img" />
                ))}
            </div>
        </div>
    );
}

export default DiversityAtWork;

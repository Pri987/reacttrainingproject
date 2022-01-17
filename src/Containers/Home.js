import DiversityAtWork from '../Components/DiversityAtWork'
import HomeCarousal from '../Components/HomeCarousal'
import TechnologyInfo from '../Components/TechnologyInfo'
import Jobs from '../Components/Jobs'
import { connect } from 'react-redux';
import * as actions from '../Actions/Actions';

const Home = (props) => {
    return (
        <div>
            <HomeCarousal />
            <Jobs />
            <TechnologyInfo
                techStackData={props.techStackData}
                getTechStackList={props.getTechStackList}
            />
            <DiversityAtWork
                photosList={props.photosList}
                getPhotosList={props.getPhotosList}
            />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        photosList: state.photosList,
        techStackData: state.techStackData
    };
};

const mapDispatchToProps = dispatch => {

    return {
        getPhotosList: () => dispatch(actions.getPhotosList()),
        getTechStackList: () => dispatch(actions.getTechStackList())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

import DiversityAtWork from '../Components/DiversityAtWork'
import HomeCarousal from '../Components/HomeCarousal'
import TechnologyInfo from '../Components/TechnologyInfo'
import Jobs from '../Components/Jobs'
import { connect } from 'react-redux';
import { Component } from 'react';
import * as actions from '../Actions/Actions';

class Home extends Component {
    render() {
        const { techStackData, getTechStackList, photosList, getPhotosList } = this.props;
        return (
            <div>
                <HomeCarousal />
                <Jobs />
                <TechnologyInfo
                    techStackData={techStackData}
                    getTechStackList={getTechStackList}
                />
                <DiversityAtWork
                    photosList={photosList}
                    getPhotosList={getPhotosList}
                />
            </div>
        );
    }
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

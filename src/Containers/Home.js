import DiversityAtWork from './../Components/DiversityAtWork'
import HomeCarousal from './../Components/HomeCarousal'
import TechnologyInfo from './../Components/TechnologyInfo'
import Jobs from './../Components/Jobs'

const Home = () => {
    return (
        <div>
            <HomeCarousal />
            <Jobs />
            <TechnologyInfo />
            <DiversityAtWork />
        </div>
    );
}

export default Home;

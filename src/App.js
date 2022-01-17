import Header from './Containers/Header'
import Footer from './Containers/Footer'
import Home from './Containers/Home'
import CurrentOpenings from './Containers/CurrentOpenings'
import Benefits from './Containers/Benefits'
import LifeAtWork from './Containers/LifeAtWork'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Styles/App.scss';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <div>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/job-list" exact element={<CurrentOpenings />} />
            <Route path="/benefits" exact element={<Benefits />} />
            <Route path="/life-work" exact element={<LifeAtWork />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router >
  );
}

export default App;

import logo from './../assets/img/logo.jpg';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import './../Styles/Header.scss'

const Header = () => {
    return (
        <div className="App-header">
            <div className="navbar">
                <img src={logo} className="App-logo" alt="logo" />
                <Link to="/">Careers</Link>
            </div>  
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/job-list">Current Openings</Link>
                <Link to="/benefits">Benefits</Link>
                <Link to="/life-work">Life@Work</Link>
                <Button size="sm" variant="light">COMPANY WEBSITE</Button>
            </div>
        </div>
    );
}

export default Header;

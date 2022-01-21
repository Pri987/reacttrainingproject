import logo from '../assets/img/logo.jpg';
import Button from 'react-bootstrap/Button';
import { List } from 'react-bootstrap-icons'
import { Link } from "react-router-dom";
import '../Styles/Header.scss';
import { HeaderConstants, CommonConstants } from '../Constants/constants';
import { useEffect, useState } from 'react';

const Header = () => {

    const [isDesktop, setIsDesktop] = useState(true);
    const [showCollapsedOption, setShowCollapsedOption] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1000) {
                setIsDesktop(false);
            } else {
                setIsDesktop(true);
                setShowCollapsedOption(false);
            }
        }
        window.addEventListener('resize', handleResize)
    })

    return (
        <div className="App-header">
            <div className="navbar">
                <img src={logo} className="App-logo" alt={CommonConstants.IMAGE_NOT_LOADING} />
                <Link to="/">{HeaderConstants.CARRERS}</Link>
            </div>
            {isDesktop &&
                <div className="navbar">
                    <Link to="/">{HeaderConstants.HOME}</Link>
                    <Link to="/job-list">{HeaderConstants.CURRENT_OPENINGS}</Link>
                    <Link to="/benefits">{HeaderConstants.BENEFITS}</Link>
                    <Link to="/life-work">{HeaderConstants.LIFE_AT_WORK}</Link>
                    <a href="https://www.happiestminds.com/"><Button size="sm" variant="light">{HeaderConstants.COMPANY_WEBSITE}</Button></a>
                </div>
            }
            {showCollapsedOption &&
                <div>
                    <p><Link to="/">{HeaderConstants.HOME}</Link></p>
                    <p><Link to="/job-list">{HeaderConstants.CURRENT_OPENINGS}</Link></p>
                    <p><Link to="/benefits">{HeaderConstants.BENEFITS}</Link></p>
                    <p><Link to="/life-work">{HeaderConstants.LIFE_AT_WORK}</Link></p>
                </div>
            }
            {!isDesktop && <Button className="hamBurgerButton" size="lg" variant="outline-secondary" onClick={() => setShowCollapsedOption(!showCollapsedOption)}><List /></Button>}
        </div>
    );
}

export default Header;

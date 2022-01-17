import './../Styles/Footer.scss';
import { Facebook, Linkedin, Twitter, Youtube, Instagram } from 'react-bootstrap-icons'
import { FooterInfoConstants } from './../Constants/constants'

const FooterInfo = () => {
    return (
        <div className="footerInfo">
            <div className="flex-container">
                <div className="flex-child">
                    <p className="title">{FooterInfoConstants.INFO}</p>
                    <hr />
                    <p><a href="https://www.happiestminds.com/">{FooterInfoConstants.COMPANY_WEBSITE}</a></p>
                    <p><a href="https://www.happiestminds.com/about-us/">{FooterInfoConstants.ABOUT_HM}</a></p>
                    <p><a href="https://www.happiestminds.com/terms-and-conditions/">{FooterInfoConstants.TC}</a></p>
                    <p><a href="https://www.happiestminds.com/privacy-policy/">{FooterInfoConstants.PRIVACY_POLICY}</a></p>
                </div>
                <div className="flex-child">
                    <p className="title">{FooterInfoConstants.ADDRESS}</p>
                    <hr />
                    <p>{FooterInfoConstants.LOCATION}</p>
                    <p><a href="https://bit.ly/38MRWKT" target="_blank">{FooterInfoConstants.GOOGLE_MAP_LOCATION}</a></p>
                    <a href="https://www.happiestminds.com/location/" target="_blank">{FooterInfoConstants.OTHER_LOCATIONS}</a>
                </div>
                <div className="flex-child">
                    <p className="title">{FooterInfoConstants.FOLLOW_US}</p>
                    <hr />
                    <a href="https://www.facebook.com/happiestminds/" target="_blank"><Facebook /></a>
                    <a href="https://www.linkedin.com/company/happiest-minds-technologies" target="_blank"><Linkedin /></a>
                    <a href="https://twitter.com/happiestminds" target="_blank"><Twitter /></a>
                    <a href="https://www.youtube.com/user/HappiestMinds" target="_blank"><Youtube /></a>
                    <a href="https://www.instagram.com/HappiestMinds/" target="_blank"><Instagram /></a>
                </div>
                <div className="flex-child">
                    <p className="title">{FooterInfoConstants.CONTACT}</p>
                    <hr />
                    <p><a href="mailto:peoplepositions@happiestminds.com">{FooterInfoConstants.MAIL_ID}</a></p>
                    <p>Call us on<br />
                        +91 80 61960300<br />
                        +91 80 61960400</p>
                    <p>Fax<br />
                        +91 80 6196 0700</p>
                </div>
            </div>
        </div>
    );
}

export default FooterInfo;

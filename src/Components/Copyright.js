import './../Styles/Footer.scss';
import { FooterInfoConstants } from '../Constants/constants'

const Copyright = () => {
    return (
        <div className="copyright">
            <span>&#169; {FooterInfoConstants.FOOTER_INFO}</span>
        </div>
    );
}

export default Copyright;

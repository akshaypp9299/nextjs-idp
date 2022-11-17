import { faPhone, faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image'  
const FooterContactDetails = () => {
    return (
        
        <div className="col-md-3">
            <Image src='/Assets/miniOrange.png' width={200} height={50} alt="miniOrangeLogo"/>
            <div className='d-flex mt-4'>
                <div className='footer-contact__icon'>
                    <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className='mx-3 footer-link__color'>
                    <span>+1 978 658 9387 (US)</span>
                    <br />
                    <span>+91 97178 45846 (India)</span>
                </div>
            </div>
            <div className='d-flex mt-4'>
                <div className='footer-contact__icon'>
                    <FontAwesomeIcon icon={faEnvelopeOpen} />
                </div>
                <div className='mx-3'>
                    <a href='mailto:info@xecurify.com' className='footer-link__color text-decoration-none'>info@xecurify.com</a>
                </div>
            </div>
            <h6 className='mt-4 mb-4'>STAY CONNECTED</h6>
            <div className='d-inline-flex'>
            <a href='https://www.linkedin.com/company/miniorange' target='_blank' rel="noreferrer" className='footer-link__color'>
                <FontAwesomeIcon className='fa-2x me-4' icon={faLinkedin} />
            </a>
            <a href='https://www.youtube.com/channel/UCxQuL2JNo8HA4baZSIjcgRg' target='_blank' rel="noreferrer" className='footer-link__color'>
                <FontAwesomeIcon className='fa-2x me-4' icon={faYoutube} />
            </a>
            <a href='https://twitter.com/miniOrange_Inc' target='_blank' rel="noreferrer" className='footer-link__color'>
                <FontAwesomeIcon className='fa-2x me-4' icon={faTwitter} />
            </a>
            <a href='https://www.facebook.com/miniorangeinc/' target='_blank' rel="noreferrer" className='footer-link__color'>
                <FontAwesomeIcon className='fa-2x me-4' icon={faFacebook} />
            </a>
            </div>

           <div className='mt-4'>
            <a href="https://www.miniorange.com/businessfreetrial" className='btn btn-success'>Free Sign Up</a>
            </div>
        </div>
    )
}
export default FooterContactDetails;
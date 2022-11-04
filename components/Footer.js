import FooterContactDetails from "./FooterContactDetails";
import FooterProductDetails from './FooterProductDetails';
import FooterSolutiontDetails from './FooterSolutiontDetails';
import FooterWhyMiniorange from './FooterWhyMiniorange';


const Footer = () => {
    return (
        <>
            <div className='container-fluid footer-bg pt-5 pb-3 text-white'>
                <div className="container">
                    <div className="row">
                        <FooterContactDetails />
                        <FooterProductDetails />
                        <FooterSolutiontDetails />
                        <FooterWhyMiniorange />
                    </div>
                    <div className='footer-copyright text-center pt-5'>
                        <hr />
                        <p>@ Copyright  2022  miniOrange. All Rights Reserved.</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer;
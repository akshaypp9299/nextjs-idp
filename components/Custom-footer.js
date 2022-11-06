import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faNewspaper, faBookOpen, faPhone } from "@fortawesome/free-solid-svg-icons"

export default function CustomFooter() {

    const footerData = [
        {
            icon: faEnvelope,
            customHead: "24/7 Support",
            customDesc: "miniOrange provides 24/7 support for all the Secure Identity Solutions. We ensure high quality support to meet your satisfaction.",
            link: <><a className="custom-section-button" style={{ color: "#000" }} href="https://www.miniorange.com/businessfreetrial" target="_blank">Sign Up &rarr;
            </a></>
        },
        {
            icon: faNewspaper,
            customHead: "Customer Reviews",
            customDesc: "See for yourself what our customers say about us.",
            link: <><a className="custom-section-button" style={{ color: "#000" }} href="https://wordpress.org/plugins/miniorange-saml-20-single-sign-on/#reviews" target="_blank">Reviews &rarr;
            </a></>
        },
        {
            icon: faBookOpen,
            customHead: "Extensive Setup guides",
            customDesc: "Easy and precise step-by-step instructions and videos to help you configure within minutes.",
            link: <><a className="custom-section-button" style={{ color: "#000" }} href="https://docs.miniorange.com/demo" target="_blank">Watch Demo &rarr;
            </a></>
        }
    ]

    const footerCard = footerData.map(function (element,index) {
        return (<div id="cutsom-section" className="cutsom-section" key={index} >
            <div className="circle-des"></div>
            <div className="circle-des1"></div>
            <div className="custom-section-icon d-flex justify-content-center">
                <FontAwesomeIcon icon={element.icon} size={"2x"} />
            </div>
            <h5 className="custom-section-head text-center mt-2">{element.customHead}</h5>
            <p className="custom-section-desc text-center">{element.customDesc}</p>
            <div className="mt-2 d-flex justify-content-center">
                {element.link}
            </div>
        </div>
        )
    })

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 plan-head-saml saml-scroll mt-5" id="key-features">
                        Why Our Customers choose miniOrange WordPress Single Sign-On (SSO) Solutions?
                    </div>
                </div>
            </div>

            <div className="main-custom-section d-flex justify-content-center align-items-center flex-wrap mt-3">
                {footerCard}
            </div>
            <p className="text-center mt-5" style={{fontSize:"1.2em"}}> We offer Secure Identity Solutions for Single Sign-On, Two Factor Authentication, Adaptive MFA, Provisioning, and much more.</p>

            <p className="text-center" style={{fontSize:"1.2em"}}> Please contact us at - <FontAwesomeIcon icon={faPhone} /> +1 978 658 9387(US)  +91 97178 45846(India)&nbsp; <FontAwesomeIcon icon={faEnvelope} />&nbsp; <a href="mailto:samlsupport@xecurify.com" className="anchor"><b>samlsupport@xecurify.com</b></a></p>
        </>
    )
}



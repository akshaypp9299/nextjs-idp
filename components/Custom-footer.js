export default function CustomFooter() {

    const footerData = [
        {
            icon: "",
            customHead: "24/7 Support",
            customDesc: "miniOrange provides 24/7 support for all the Secure Identity Solutions. We ensure high quality support to meet your satisfaction.",
            link: <><a className="custom-section-button" style={{color:"#000"}} href="https://www.miniorange.com/businessfreetrial" target="_blank">Sign Up &rarr;
            </a></>
        },
        {
            icon: "",
            customHead: "Customer Reviews",
            customDesc: "See for yourself what our customers say about us.",
            link: <><a className="custom-section-button" style={{color:"#000"}} href="https://wordpress.org/plugins/miniorange-saml-20-single-sign-on/#reviews" target="_blank">Reviews &rarr;
            </a></>
        },
        {
            icon: "",
            customHead: "Extensive Setup guides",
            customDesc: "Easy and precise step-by-step instructions and videos to help you configure within minutes.",
            link: <><a className="custom-section-button" href="https://docs.miniorange.com/demo" target="_blank">Watch Demo &rarr;
            </a></>
        }
    ]

    const footerCard = footerData.map(function (element) {
        return (<div id="cutsom-section" className="cutsom-section">
            <div className="circle-des"></div>
            <div className="circle-des1"></div>
            <div className="custom-section-icon d-flex justify-content-center">
                <i className="icon-envelope cntc-us-icn" style={{ fontSize: 36 }}></i>
            </div>
            <h5 className="custom-section-head text-center"><b>{element.customHead}</b></h5>
            <p className="custom-section-desc text-center">{element.customDesc}</p>
            <div className="mt-5 d-flex justify-content-center">
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
        </>
    )
}



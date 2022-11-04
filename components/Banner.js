import Image from "next/image";

const Banner = () => {
    return (
        <div className="">
            <div className="container-fluid idp-bg-banner">
                <div className="row">
                    <div className="col-md-7 banner-idp">
                        <h1 className="head-title text-black">Login Using WordPress Users</h1>
                        <h3 className="sub-head text-black mt-4">SAML / JWT / WS-FED IDP</h3>
                        <p className="banner-text-idp text-black mt-3 mb-4">WordPress SAML Single Sign-On (SSO) IDP Plugin allows your WordPress users to log into other SAML, WS-Fed, or JWT applications using their WordPress credentials. The plugin makes your WordPress site act as the Identity Provider and makes user login more secure by establishing a trust with other Service Provider (SP) applications.</p>
                        <div class="anchor">
                            <a href="https://wordpress.org/plugins/miniorange-wp-as-saml-idp/" target="_blank" class=" banner-btn-idp mt-5">Download</a>
                            <a href="https://plugins.miniorange.com/step-by-step-guide-for-wordpress-saml-idp" target="_blank" class="banner-btn-idp mt-5">Setup Guidelines</a>
                            <a href="#pricing" class="banner-btn-idp mt-5">Pricing</a>
                            <a href="#request-free-trial" class="banner-btn-idp mt-5">Request Trial</a>
                        </div>
                        <p class="banner-text-idp mt-4" id="banner-txt" >Contact us at <a href="mailto:samlsupport@xecurify.com"><u className="anchor-saml">samlsupport@xecurify.com</u></a> and we'll help you set up your Service Provider with WordPress SAML IDP in no time.</p>
                    </div>
                    <div className="col-md-5 mt-5">
                        <Image src="/Assets/banner.webp" alt="Banner Logo" width={600} height={400} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
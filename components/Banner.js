import Image from "next/image";
import Link from "next/Link";

const Banner = () => {
    return (
        <div className="">
            <div className="container-fluid idp-bg-banner">
                <div className="row">
                    <div className="col-md-7 banner-idp">
                        <h1 className="head-title text-black">Login Using WordPress Users</h1>
                        <h3 className="sub-head text-black mt-4">SAML / JWT / WS-FED IDP</h3>
                        <p className="banner-text-idp text-black mt-3 mb-2">WordPress SAML Single Sign-On (SSO) IDP Plugin allows your WordPress users to log into other SAML, WS-Fed, or JWT applications using their WordPress credentials. The plugin makes your WordPress site act as the Identity Provider and makes user login more secure by establishing a trust with other Service Provider (SP) applications.</p>
                        <div className="anchor">
                            <Link legacyBehavior href="https://wordpress.org/plugins/miniorange-wp-as-saml-idp/"><a target="_blank" className="banner-btn-idp">Download</a></Link>
                            <Link legacyBehavior href="https://plugins.miniorange.com/step-by-step-guide-for-wordpress-saml-idp"><a target="_blank" className="banner-btn-idp">Setup Guidelines</a></Link>
                            <Link legacyBehavior href="#pricing"><a className="banner-btn-idp">Pricing</a></Link>
                            <Link legacyBehavior href="#request-free-trial"><a className="banner-btn-idp">Request Trial</a></Link>
                        </div>
                        <p className="banner-text-idp mt-4" id="banner-txt" >Contact us at <a href="mailto:samlsupport@xecurify.com"><u className="anchor-saml">samlsupport@xecurify.com</u></a> and we'll help you set up your Service Provider with WordPress SAML IDP in no time.</p>
                    </div>
                    <div className="col-md-5 mt-5 banner-image-container" >
                        <Image src="/Assets/banner.webp" alt="Banner Logo" width={600} height={400} layout="fill" priority className="banner-image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
import { faKey,faSync,faUserSecret,faWindowRestore,faUsers,faUserShield, faSignInAlt} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const KeyFeatures = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 plan-head-saml saml-scroll mt-5 mb-3" id="key-features">
                    Key Features
                </div>
                <div className="col-md-3 col-sm-12">
                    <div className="keyfeature">
                        <span className="icon feature_box_col_one">
                            <FontAwesomeIcon icon={faKey}/>
                        </span>
                        
                        <h2 className="subhead mt-3 mb-3">Single Sign-On</h2>
                        <p>Easy, secure, and seamless access to any SAML 2.0, WS-FED, or JWT applications with a single login i.e. authenticate users into applications using WordPress credentials</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12 col-xs-12">
                    <div className="keyfeature">
                        <span className="icon feature_box_col_one">
                            <svg width="40" height="40" viewBox="0 0 31 38" fill="none" style={{ position: "absolute", top: "28%", left: "26%" }} xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.3333 35.3333C15.3333 35.3333 28.6667 28.6667 28.6667 18.6667V7L15.3333 2L2 7V18.6667C2 28.6667 15.3333 35.3333 15.3333 35.3333Z" stroke="black" strokeWidth="4" strokeLinecap="round"
                                     strokeLinejoin="round" />
                                <path d="M15.5 34.5V3.5L4 6V23.5L15.5 34.5Z" fill="black" stroke="black" />
                            </svg>
                        </span>
                        <h2 className="subhead mt-3 mb-3">Multiple SPs Supported</h2>
                        <p>Allow users to <a href="https://www.miniorange.com/products/single-sign-on-sso" className="anchor"> Single Sign-On </a> into multiple applications at once by configuring multiple Service Providers (SP) with WordPress as the Identity Provider (IDP) </p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12 col-xs-12">
                    <div className="keyfeature">
                        <span className="icon feature_box_col_one">
                            <FontAwesomeIcon icon={faSync}/>
                        </span>
                        <h2 className="subhead mt-3 mb-3">Multisite Support</h2>
                        <p>Supports configuring WordPress Multisite Network installation as an Identity Provider, allowing users to SSO login into Service Provider applications using WordPress Multisite credentials
                        </p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12 col-xs-12">
                    <div className="keyfeature">
                        <span className="icon feature_box_col_one">
                            <FontAwesomeIcon icon={faUserSecret}/>
                        </span>
                        <h2 className="subhead mt-3 mb-3">Single Logout</h2>
                        <p>Terminate user’s Single Sign-On session on WordPress as well as on Service Provider applications, when the user logs out of your WP site or any configured Service Provider application
                        </p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12 col-xs-12">
                    <div className="keyfeature role">
                        <span className="icon feature_box_col_one">
                            <FontAwesomeIcon icon={faWindowRestore}/>
                        </span>
                        <h2 className="subhead mt-3 mb-3">Widget/Shortcode to add SP Login</h2>
                        <p>Add a link or button anywhere on your WordPress site, acting as an Identity Provider, to allow IDP initiated SSO into your single or multiple applications</p>
                        <br />
                    </div>
                </div>
                <div className="col-md-3 col-sm-12">
                    <div className="keyfeature">
                        <span className="icon feature_box_col_one">
                           
                            <FontAwesomeIcon icon={faUsers}/>
                        </span>
                        <h2 className="subhead mt-3 mb-3">Customized Role/Attribute Mapping</h2>
                        <p>Relay default or custom user profile attributes from WordPress to Service Providers to maintain user data consistency across applications
                        </p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12">
                    <div className="keyfeature">
                        <span className="icon feature_box_col_one">
                            <FontAwesomeIcon icon={faSignInAlt}/>
                        </span>
                        <h2 className="subhead mt-3 mb-3 custom-login">Custom Login Page</h2><br />
                        <p>Supports custom login page and custom registration page along with the default WordPress login page to allow users to sign up themselves in WordPress </p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12">
                    <div className="keyfeature">
                        <span className="icon feature_box_col_one ">
                        <FontAwesomeIcon icon={faUserShield}/>
                        </span>
                        <h2 className="subhead mt-3 mb-3">SAML Request Verification &amp; Response Encryption</h2>
                        <p>Secures transactions of user profile information from WordPress to Service Providers using signature verification and assertion encryption in SAML Response</p>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default KeyFeatures;
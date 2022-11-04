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
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-key iconPosition"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
                        </span>
                        <h2 className="subhead mt-3 mb-3">Single Sign-On</h2>
                        <p>Easy, secure, and seamless access to any SAML 2.0, WS-FED, or JWT applications with a single login i.e. authenticate users into applications using WordPress credentials</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12 col-xs-12">
                    <div className="keyfeature">
                        <span className="icon feature_box_col_one">
                            <svg width="40" height="40" viewBox="0 0 31 38" fill="none" style={{ position: "absolute", top: "28%", left: "26%" }} xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.3333 35.3333C15.3333 35.3333 28.6667 28.6667 28.6667 18.6667V7L15.3333 2L2 7V18.6667C2 28.6667 15.3333 35.3333 15.3333 35.3333Z" stroke="black" stroke-width="4" stroke-linecap="round"
                                     stroke-linejoin="round" />
                                <path d="M15.5 34.5V3.5L4 6V23.5L15.5 34.5Z" fill="black" stroke="black" />
                            </svg>
                        </span>
                        <h2 className="subhead mt-3 mb-3">Multiple SPs Supported</h2>
                        <p>Allow users to <a href="https://www.miniorange.com/products/single-sign-on-sso" className="anchor"> Single Sign-On </a> into multiple applications at once by configuring multiple Service Providers (SP) with WordPress as the Identity Provider (IDP) </p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12 col-xs-12">
                    <div className="keyfeature">
                        <span className="icon feature_box_col_one"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-refresh-cw iconPosition"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg></span>
                        <h2 className="subhead mt-3 mb-3">Multisite Support</h2>
                        <p>Supports configuring WordPress Multisite Network installation as an Identity Provider, allowing users to SSO login into Service Provider applications using WordPress Multisite credentials
                        </p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12 col-xs-12">
                    <div className="keyfeature">
                        <span className="icon feature_box_col_one"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="iconPosition">
                            <path d="M15 35H8.33333C7.44928 35 6.60143 34.6488 5.97631 34.0237C5.35119 33.3986 5 32.5507 5 31.6667V8.33333C5 7.44928 5.35119 6.60143 5.97631 5.97631C6.60143 5.35119 7.44928 5 8.33333 5H15" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M26.6667 28.3334L35 20L26.6667 11.6667" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M35 20H15" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        </span>
                        <h2 className="subhead mt-3 mb-3">Single Logout</h2>
                        <p>Terminate user’s Single Sign-On session on WordPress as well as on Service Provider applications, when the user logs out of your WP site or any configured Service Provider application
                        </p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12 col-xs-12">
                    <div className="keyfeature role">
                        <span className="icon feature_box_col_one"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="iconPosition">
                            <path d="M33.3333 15H18.3333C16.4924 15 15 16.4924 15 18.3333V33.3333C15 35.1743 16.4924 36.6667 18.3333 36.6667H33.3333C35.1743 36.6667 36.6667 35.1743 36.6667 33.3333V18.3333C36.6667 16.4924 35.1743 15 33.3333 15Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"  />
                            <path d="M8.33337 25H6.66671C5.78265 25 4.93481 24.6488 4.30968 24.0237C3.68456 23.3985 3.33337 22.5507 3.33337 21.6666V6.66665C3.33337 5.78259 3.68456 4.93474 4.30968 4.30962C4.93481 3.6845 5.78265 3.33331 6.66671 3.33331H21.6667C22.5508 3.33331 23.3986 3.6845 24.0237 4.30962C24.6489 4.93474 25 5.78259 25 6.66665V8.33331" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        </span>
                        <h2 className="subhead mt-3 mb-3">Widget/Shortcode to add SP Login</h2>
                        <p>Add a link or button anywhere on your WordPress site, acting as an Identity Provider, to allow IDP initiated SSO into your single or multiple applications</p>
                        <br />
                    </div>
                </div>
                <div className="col-md-3 col-sm-12">
                    <div className="keyfeature">
                        <span className="icon feature_box_col_one"><svg width="50" height="50" viewBox="0 0 45 28" fill="none" xmlns="http://www.w3.org/2000/svg" style={{
                            position: "absolute",
                            top: "20%",
                            left: "21%"
                        }}>
                            <path d="M43 25.7273V23.3394C42.9992 22.2812 42.647 21.2532 41.9987 20.4169C41.3504 19.5806 40.4427 18.9833 39.4181 18.7188" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M32.5183 25.8839V23.2301C32.5183 21.8225 31.9591 20.4725 30.9638 19.4771C29.9684 18.4818 28.6184 17.9226 27.2108 17.9226H16.5957C15.1881 17.9226 13.8381 18.4818 12.8427 19.4771C11.8474 20.4725 11.2882 21.8225 11.2882 23.2301V25.8839" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M21.9032 12.6151C24.8345 12.6151 27.2108 10.2388 27.2108 7.30753C27.2108 4.37626 24.8345 2 21.9032 2C18.972 2 16.5957 4.37626 16.5957 7.30753C16.5957 10.2388 18.972 12.6151 21.9032 12.6151Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M34.6414 5.18451C33.5027 5.45608 32.4934 6.07293 31.7727 6.93782C31.0519 7.8027 30.6607 8.86642 30.6607 9.96129C30.6607 11.0561 31.0519 12.1199 31.7727 12.9848C32.4934 13.8496 33.5027 14.4665 34.6414 14.7381" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M35.4375 5.18451C36.5762 5.45608 37.5855 6.07293 38.3062 6.93782C39.0269 7.8027 39.4181 8.86642 39.4181 9.96129C39.4181 11.0561 39.0269 12.1199 38.3062 12.9848C37.5855 13.8496 36.5762 14.4665 35.4375 14.7381" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9.1637 5.18451C10.191 5.44754 11.1015 6.04499 11.7518 6.88269C12.402 7.72038 12.7549 8.75065 12.7549 9.81109C12.7549 10.8715 12.402 11.9018 11.7518 12.7395C11.1015 13.5772 10.191 14.1746 9.1637 14.4377" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M2.00004 25.0878V22.6999C2.00083 21.6417 2.35303 20.6138 3.00133 19.7775C3.64964 18.9412 4.55734 18.3438 5.58191 18.0793" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8.20862 5.18451C7.18132 5.44754 6.27078 6.04499 5.62055 6.88269C4.97032 7.72038 4.61739 8.75065 4.61739 9.81109C4.61739 10.8715 4.97032 11.9018 5.62055 12.7395C6.27078 13.5772 7.18132 14.1746 8.20862 14.4377" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        </span>
                        <h2 className="subhead mt-3 mb-3">Customized Role/Attribute Mapping</h2>
                        <p>Relay default or custom user profile attributes from WordPress to Service Providers to maintain user data consistency across applications
                        </p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12">
                    <div className="keyfeature">
                        <span className="icon feature_box_col_one"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="iconPosition">
                            <path d="M25 5H31.6667C32.5507 5 33.3986 5.35119 34.0237 5.97631C34.6488 6.60143 35 7.44928 35 8.33333V31.6667C35 32.5507 34.6488 33.3986 34.0237 34.0237C33.3986 34.6488 32.5507 35 31.6667 35H25" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M16.6667 28.3334L25 20L16.6667 11.6667" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M25 20H5" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        </span>
                        <h2 className="subhead mt-3 mb-3 custom-login">Custom Login Page</h2><br />
                        <p>Supports custom login page and custom registration page along with the default WordPress login page to allow users to sign up themselves in WordPress </p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12">
                    <div className="keyfeature">
                        <span className="icon feature_box_col_one "><svg width="40" height="40" viewBox="0 0 43 54" fill="none" xmlns="http://www.w3.org/2000/svg" className="iconPosition" >
                            <path d="M31 52C31 52 41 47 41 39.5V30.75L31 27L21 30.75V39.5C21 47 31 52 31 52Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M18.5 24.5C24.4371 24.5 29.25 19.6871 29.25 13.75C29.25 7.81294 24.4371 3 18.5 3C12.5629 3 7.75 7.81294 7.75 13.75C7.75 19.6871 12.5629 24.5 18.5 24.5Z" stroke="#000" stroke-width="4.83751" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3 47.7919V42.0707C3.00189 39.5354 3.84573 37.0725 5.39903 35.0687C6.95233 33.065 9.12711 31.6338 11.5819 31" stroke="black" stroke-width="4.84" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
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
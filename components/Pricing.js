import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




function Pricing() {

    const pricingFeatures = [
        {   
            title: "User Storage Location",
            featureOne: "Password will be stored in your WordPress Database",
            featureTwo: "Password can be manage by miniOrange or by the 3rd party Identity Provider"
        },
        {
            title: "SSO Support",
            featureOne: <>SAML<br />WS-FED<br />JWT</>,
            featureTwo: <>SAML<br />WS-FED<br />OAUTH<br />OIDC<br />JWT<br />RADIUS</>
        },
        {
            title: "User Registration",
            featureOne: "Use your own exsiting WordPress Sign-up Form",
            featureTwo: "Sign-up via miniOrange Login Page"
        },
        {
            title: "Login Page",
            featureOne: "Use your own existing WordPress Login Page",
            featureTwo: "Fully customizable miniOrange Login Page"
        },
        {
            title: "Custom Domains",
            featureOne: "Use your own WordPress Domain",
            featureTwo: "Fully custom Domain Provided"
        },
        {
            title: "Login Page",
            featureOne: "Use your own existing WordPress Login Page",
            featureTwo: "Fully customizable miniOrange Login Page"
        },
        {
            title: "Social Providers	",
            featureOne: <><a href="https://plugins.miniorange.com/social-login-social-sharing#pricing">Click here</a> to purchase Social Login Plugin seperately</>,
            featureTwo: <>Included<br />(Facebook, Twitter, Google+, etc)</>
        },
        {
            title: "Multi-Factor Authentication",
            featureOne: <><a href="https://plugins.miniorange.com/2-factor-authentication-for-wordpress#pricing">Click here</a> to purchase Multi-Factor Authentication Plugin seperately</>,
            featureTwo: "Included"
        },

    ]

    const data = pricingFeatures.map(function (feature,index) {
        return (
            <tr key={index}>
                
                <td className="background-color">
                    {feature.title}
                </td>
                <td className="data-background-color text-center">
                    {feature.featureOne}
                </td>
                <td className="data-background-color text-center">
                    {feature.featureTwo}
                </td>
            </tr>
        )
    })


    const [userValue, setUserValue] = useState(1);

    const [isActive, setIsActive] = useState(true);

    let [userFirstPrice, setUserFirstPrice] = useState("$500");
    let [userSecondPrice, setUserSecondPrice] = useState("$250");

    const UserHandler = (e) => {
        setUserValue(function (prevState) {
            return prevState = e.target.value;
        })
    }

    useEffect(() => {
        userValueHandler();
    }, [userValue])

    function ActiveHandler() {
        setIsActive(function (prevState) {
            return !prevState;
        });
    }


    function userValueHandler() {
        setIsActive(true);

        if (userValue == 1) {
            setUserFirstPrice("$500");
            setUserSecondPrice("$250");
        }
        else if (userValue == 2) {
            setUserFirstPrice("$600");
            setUserSecondPrice("$300");
        }
        else if (userValue == 3) {
            setUserFirstPrice("$700");
            setUserSecondPrice("350");
        }
        else if (userValue == 4) {
            setUserFirstPrice("$800");
            setUserSecondPrice("$400");
        }
        else if (userValue == 5) {
            setUserFirstPrice("$900");
            setUserSecondPrice("$450");
        }
        else if (userValue == 6) {
            setUserFirstPrice("$1300");
            setUserSecondPrice("$650");
        }
        else if (userValue == 7) {
            setUserFirstPrice("$2000");
            setUserSecondPrice("$1000");
        }
        else if (userValue == 8) {
            setUserFirstPrice("$2600");
            setUserSecondPrice("$1300");
        }
        else if (userValue == 9) {
            setUserFirstPrice("$3100");
            setUserSecondPrice("$1500");
        }
        else if (userValue == 10) {
            setUserFirstPrice("$3500");
            setUserSecondPrice("$1750");
        }
        else if (userValue == 11) {
            ActiveHandler();
        }
    }

    const [isHover, setIsHover] = useState(false);

    function onHoverHandler() {
        setIsHover(true);
    }

    function onLeavehandler() {
        setIsHover(false);
    }


    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 plan-head-saml saml-scroll mt-5 mb-5" id="key-features">
                        Plans For Everyone
                    </div>
                </div>
            </div>
            <div id="pricing">
                <Table className="pricing-table" style={{ width: "82%" }}>
                    <thead>
                        <tr>
                            <td className="background-color rcorners text-center" style={{ width: "15%", verticalAlign: "middle", letterSpacing: "1.6px" }}>
                                <b>Licensing Plan Name</b>
                            </td>
                            <td className="rcorners heading-background-color text-white text-center" style={{ width: "42%" }}>
                                <b>PREMIUM PLAN</b>
                                <br />
                                <br />
                                <p>(Users stored in your own WordPress database)</p>
                            </td>
                            <td className="rcorners heading-background-color text-white text-center">
                                <b>ALL-INCLUSIVE PLAN</b>
                                <br />
                                <br />
                                <p>(Users hosted in miniOrange or Enterprise Directory like Azure AD, Active Directory, LDAP, Office365, Google Apps or any 3rd party providers using SAML, OAuth, Database, APIs etc)
                                </p>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="background-color">User Slab / Pricing</td>
                            <td className="pricing-sub-desc text-center">Yearly Pricing
                                <br />
                                <p style={{ color: "red" }}>(<span className="saml-idp-pricing-slab">50%</span> from 2<sup>nd</sup> year onwards)</p>
                            </td>
                            <td className="pricing-sub-desc text-center">
                                Monthly / Yearly Pricing
                            </td>
                        </tr>
                        <tr className="pr-row">
                            <td className="background-color" rowSpan={2}>
                                Pricing
                            </td>
                            <td className="wp-idp-pricing-dropdown">
                                <table className="idp-inner-table" style={{ borderCollapse: "revert" }}>
                                    <tbody>
                                        <tr >
                                            <td className="wp-idp-pricing-label">
                                                Select SSO Users:
                                            </td>
                                            <td>
                                                <select className="idp-pricing-users" name="serviceNotes" onChange={UserHandler}>
                                                    <option value="1">1-100 Users</option>
                                                    <option value="2">101-200 Users</option>
                                                    <option value="3">201-300 Users</option>
                                                    <option value="4">301-400 Users</option>
                                                    <option value="5">401-500 Users</option>
                                                    <option value="6">501-1000 Users</option>
                                                    <option value="7">1001-2000 Users</option>
                                                    <option value="8">2001-3000 Users</option>
                                                    <option value="9">3001-4000 Users</option>
                                                    <option value="10">4001-5000 Users</option>
                                                    <option value="11">5000+ Users</option>
                                                </select>
                                            </td>
                                        </tr>
                                        {isActive ? <> <tr>
                                            <td className="wp-idp-pricing-label idp-table-border">
                                                1<sup>st</sup> Year Price
                                            </td>
                                            <td className="wp-idp-price text-center idp-table-border">
                                                {userFirstPrice}
                                            </td>
                                        </tr>
                                            <tr>
                                                <td className="wp-idp-pricing-label">
                                                    2<sup>nd</sup> Year Price
                                                </td>
                                                <td className="wp-idp-price text-center">
                                                    {userSecondPrice}
                                                </td>
                                            </tr> </>
                                            :
                                            <tr>
                                                <td colSpan={2}>
                                                    <div className="text-center">
                                                        <a href="https://www.miniorange.com/contact" target="_blank" style={{ color: "#FE7E00", textDecoration: "underline !important", fontWeight: "500", fontSize: "1.1rem" }} className="text-center">Request a Quote</a>
                                                    </div>
                                                </td>
                                            </tr>
                                        }
                                    </tbody>
                                </table>
                            </td>
                            <td className="text-center">
                                <b>Starts from $2/user/month</b>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ verticalAlign: "middle" }} id="rcorners2" className="btn  pricing-btn btn-secondary"><a style={{ color: "#fff" }} href="https://login.xecurify.com/moas/login?redirectUrl=https://login.xecurify.com/moas/initializepayment&amp;requestOrigin=wp_saml_idp_premium_plan" target="_blank" rel="noopener noreferrer">UPGRADE NOW</a></td>
                            <td style={{ verticalAlign: "middle" }} id="rcorners2" className="pricing-btn btn">
                                <a style={{ color: "#fff" }} href="https://www.miniorange.com/contact" target="_blank">REQUEST A QUOTE</a></td>
                        </tr>
                        <tr>
                            <td className="background-color">Multiple Service Providers</td>
                            <td className="data-background-color text-center">$50 per additional SP <FontAwesomeIcon icon={faCircleInfo} onMouseOver={onHoverHandler} onMouseLeave={onLeavehandler} />
                                {isHover &&
                                    <div className="tooltip-text">
                                        If you want more than one Service Providers then you will be charged $50 additional per SP
                                    </div>
                                }
                            </td>
                            <td className="data-background-color text-center">No additional charges for SP</td>
                        </tr>
                        {data}
                        <tr className="lst-row">
                            <td className="background-color">User Provisioning</td>
                            <td className="data-background-color text-center">Not Included</td>
                            <td className="data-background-color text-center">Included</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default Pricing;
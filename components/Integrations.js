import Image from "next/image";
import freshDeskIntegration from "../public/Assets/freshDeskIntegration.webp";
import TalentLmsIntegration from "../public/Assets/talentlmss.webp"
import Thinkific from "../public/Assets/thinkific.webp";

export default function Integration() {
    return (
        <>
            <div className="col-md-12 plan-head-saml saml-scroll mt-5 mb-5" id="key-features">
                Checkout Our Integrations
            </div>
            <div className="container mb-3">
                <div className="benefits-bg row">
                    <div className="card__section col-md-6">
                        <a href="https://plugins.miniorange.com/wordpress-integration-for-freshdesk-sso-login-support-tickets" target="_blank" title="Click here to know more">
                            <div className="ribbon ribbon-top-right"><span>new</span></div>
                            <div className="card__inner card__face--front">
                                <div className=" col-md-4 text-center">
                                    {/* <img width="130px" height="80px" src="https://pluginsminiorangein.s3.amazonaws.com/wp-content/uploads/2022/10/freshdesk-logo.svg" className="idp-int-logo" alt="freshdesk" /> */}
                                    <Image src={freshDeskIntegration} height={80} width={80} className="idp-int-logo" alt="freshdesk" />
                                </div>
                                <div className="col-md-8">
                                    <h2>WordPress Freshdesk Integration</h2>
                                    <div className="card__body">
                                        <p>
                                            Our WordPress Freshdesk Support and SSO Integration plugin enables you to create and customize Freshdesk support tickets using a widget on your WordPress website alongwith Single Sign-On (SSO) support for agents as well as contacts.                            </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="card__section col-md-6">
                        <a href="https://plugins.miniorange.com/wordpress-talentlms-integration-sso-login-user-sync" target="_blank" title="Click here to know more">
                            <div className="ribbon ribbon-top-right"><span>new</span></div>
                            <div className="card__inner card__face--front">
                                <div className=" col-md-4 text-center">
                                    {/* <img width="160px" height="80px" src="https://pluginsminiorangein.s3.amazonaws.com/wp-content/uploads/2022/10/talentlms.svg" className="idp-int-logo" alt="TalentLMS" /> */}
                                    <Image src={TalentLmsIntegration} width={120} height={80} className="idp-int-logo" />
                                </div>
                                <div className="col-md-8">
                                    <h2>WordPress TalentLMS Integration</h2>
                                    <div className="card__body" >
                                        <p>This TalentLMS sync solution is a one-stop shop for user management on both your TalentLMS platform and your WordPress site. This plugin enables one-click login into TalentLMS (TalentLMS login) via SSO using WordPress as IDP.</p>

                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="card__section col-md-6 extra-card mt-4">
                        <a href="https://plugins.miniorange.com/wordpress-thinkific-single-sign-on-sso-login" target="_blank" title="Click here to know more">
                            <div className="ribbon ribbon-top-right"><span>new</span></div>
                            <div className="card__inner card__face--front">
                                <div className=" col-md-4 text-center">
                                    {/* <img width="160px" height="60px" src="https://cdn.discordapp.com/attachments/945949843724075038/1036905983391309835/thinkific-vector-logo-removebg-preview.png" className="idp-int-logo" alt="Thinkific" /> */}
                                    <Image src={Thinkific} width={160} height={60} className="idp-int-logo" alt="Thinkific"/>
                                </div>
                                <div className="col-md-8">
                                    <h2>WordPress Thinkific SSO</h2>
                                    <div className="card__body" >
                                        <p>Login Using WordPress Users Plugin enables you to Single Sign-On (SSO) into your Thinkific applications using the WordPress credentials and stores all the user data in WordPress. Login into Thinkific with a single set of credentials using your WordPress account.</p>

                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                </div>

            </div>


        </>
    )
}



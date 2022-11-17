import Image from "next/image";
import Tableau from "../public/Assets/Tableau.webp"
import Zoho from "../public/Assets/zoho-logo.webp"
import WordPress from "../public/Assets/wordpress.webp"
import Cognito from "../public/Assets/cognito.webp"
import NextCloud from "../public/Assets/Nextcloud.webp"
import freshDesk from "../public/Assets/freshdesk.webp"
import Moodle from "../public/Assets/moodle.webp"
import Zoom from "../public/Assets/Zoom-Logo.webp"
import Salesforce from "../public/Assets/salesforce.webp"
import Canvas from "../public/Assets/canvas.webp"
import Absorb from "../public/Assets/absorb.webp"
import Talent from "../public/Assets/talentlms-logo.webp"

const LogoSection = () => {
    const openTabWindow = (url) =>{
        window.open(url,'_blank');
      }
  
    return (
    <div className="main">  
    <div className="logo-section1">
        <div className="logo-container1 d-flex justify-content-center align-items-center">
            <a className="anchor" href="https://plugins.miniorange.com/tableau-wordpress-single-sign-on-sso-login" target="_blank">
                <div className="logo-idp">
                    <Image className="imagelogo" src={Tableau} width={75} height={55}   alt="tableau logo" />
                    <p className="text-center logo-sec-desc-color">Tableau</p>
                </div>
            </a>
            <a className="anchor" href="https://plugins.miniorange.com/wordpress-zoho-single-sign-on-sso-login" target="_blank">
                <div className="logo-idp" id="zoho-logo">
                    <Image className="imagelogo" src={Zoho} style={{padding:"5px 9px"}} alt="zoho logo" />
                    <p className="text-center logo-sec-desc-color">Zoho</p>
                </div>
            </a>
            <a className="anchor" href="https://plugins.miniorange.com/single-sign-on-sso-between-two-wordpress-sites" target="_blank">
                <div className="logo-idp">
                    <Image className="imagelogo p-2" src={WordPress}  style={{marginLeft:"14%"}} alt="WordPress logo" />
                    <p className="text-center logo-sec-desc-color">WordPress</p>
                </div>
            </a>
            
        </div>
        <div className="logo-container2 d-flex justify-content-center align-items-center">
             <a className="anchor" href="https://plugins.miniorange.com/wordpress-aws-cognito-single-sign-on-sso-login" target="_blank">
                <div className="logo-idp">
                    <Image className="imagelogo p-2" src={Cognito} width={55}height={55} style={{marginLeft:"17%"}} alt="cognito logo" />
                    <p className="text-center logo-sec-desc-color">Cognito</p>
                </div>
             </a>
             <a className="anchor" href="https://plugins.miniorange.com/wordpress-nextcloud-single-sign-on-sso-login" target="_blank">
                <div className="logo-idp" id="zoho-logo">
                    <Image className="imagelogo p-2" src={NextCloud} width={85} height={62} style={{marginTop:"-5px"}} alt="nextcloud logo" />
                    <p className="text-center logo-sec-desc-color">NextCloud</p>
                </div>
            </a>
            <a className="anchor" href="https://plugins.miniorange.com/wordpress-freshdesk-single-sign-on-sso-login" target="_blank">
                <div className="logo-idp">
                    <Image className="imagelogo p-2" src={freshDesk} width={55} height={55} style={{marginTop:"2px",marginLeft:"14%"}} alt="freshdesk logo" />
                    <p className="text-center logo-sec-desc-color">Freshdesk</p>
                </div>
            </a>
        </div>
    </div>

    <div className="logo-section2">
        <div className="content1">
            <p className="text-center logo-sec-desc-color desc-idp">You can enable Single Sign-On (SSO Login) in your SAML / JWT / WS-FED Application using Wordpress as an
                Identity Provider. See our integration guides with the most popular Service Providers.</p>
        </div>
        <button className="button-63" style={{fontSize:15}} role="button" onClick={()=>openTabWindow('https://plugins.miniorange.com/step-by-step-guide-for-wordpress-saml-idp')}>See all Service Providers</button>
        <p className="text-center logo-sec-desc-color"><b>Can't find your SP ?</b> Contact us on <a className="anchor" href="mailto:samlsupport@xecurify.com"><span style={{fontWeight:600}}><u>samlsupport@xecurify.com</u></span></a><br/> We'll
            help you set up your SSO in no time.</p>
    </div>

    <div className="logo-section3 ">
        <div className="logo-container1 d-flex justify-content-center align-items-center">
           
             
        <a className="anchor" href="https://www.miniorange.com/single-sign-on-(sso)-for-moodle-using-wordpress" target="_blank">
            <div className="logo-idp">
                <Image className="imagelogo p-2" src={Moodle} width={55}height={55} style={{marginLeft:"12%"}} alt="moodle logo" />
                <p className="text-center logo-sec-desc-color">Moodle</p>
            </div>
        </a>
        <a className="anchor" href="https://plugins.miniorange.com/wordpress-zoom-single-sign-on-sso-login" target="_blank">
            <div className="logo-idp">
                <Image className="imagelogo p-2" src={Zoom} width={55} height={55} style={{marginLeft:"14%"}} alt="zoom logo" />
                <p className="text-center logo-sec-desc-color">Zoom</p>
            </div>
        </a>
        <a className="anchor" href="https://plugins.miniorange.com/wordpress-salesforce-single-sign-on-sso-login" target="_blank">
            <div className="logo-idp">
                <Image className="imagelogo p-2" src={Salesforce} width={65} height={45} style={{margin:"0 0 11% 12%"}} alt="salesforce logo" />
                <p className="text-center logo-sec-desc-color">Salesforce</p>
            </div>
        </a>

        </div>
        <div className="logo-container2 d-flex justify-content-center align-items-center">
            <a className="anchor" href="https://plugins.miniorange.com/wordpress-canvas-lms-single-sign-on-sso-login" target="_blank">
                <div className="logo-idp">
                    <Image className="imagelogo p-2" src={Canvas} style={{marginLeft:"17%"}}  width={52} height={53} alt="canvas lms logo" />
                    <p className="text-center logo-sec-desc-color" style={{fontSize:"14px"}}>Canvas LMS</p>
                </div>
            </a>
            <a className="anchor" href="https://plugins.miniorange.com/wordpress-absorb-lms-single-sign-on-sso-login" target="_blank">
                <div className="logo-idp">
                    <Image className="imagelogo p-2" src={Absorb} style={{marginLeft:"14%"}} width={55} height={55} alt="absorb lms logo" />
                    <p className="text-center logo-sec-desc-color" style={{fontSize:"14px"}} >Absorb LMS</p>
                </div>
            </a>
            <a className="anchor" href="https://plugins.miniorange.com/wordpress-talentlms-single-sign-on-sso-login" target="_blank">
                <div className="logo-idp">
                    <Image className="imagelogo p-2" src={Talent} style={{marginLeft:"12%"}} width={55} height={55} alt="talent lms logo" />
                    <p className="text-center logo-sec-desc-color">TalentLMS</p>
                </div>
            </a>
        </div>
    </div>

</div>
  )
}

export default LogoSection;

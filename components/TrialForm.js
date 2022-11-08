import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { dataHandler } from "../pages/api/trialformapi";

export default function TrialForm() {

    const[isSuccess,setIsSuccess] = useState(false);

    const defaultData = {

        email: "",
        query: "",
        firstName: "",
        lastName: "",
        phone: "",
        company: "",
        ccEmail: "samlsupport@xecurify.com",
    }

    const [data, setData] = useState(defaultData);

    const valueHandler = (e) => {
        setData(function (prevState) {
            return ({
                ...prevState,
                [e.target.name]: e.target.value
            })
        })
    }

    const [pageURL, setPageURL] = useState("");
    const [refferer, setPageReferer] = useState("");

    const [queryMssg, setQueryMssg] = useState(data.query);

    useEffect(() => {
        setQueryMssg(() => `<b>[Query for TRIAL REQUEST: WORDPRESS SAML/ WS-FED IDP]: </b>  ${data.query} <br/> <b>Page_URL:</b>  ${pageURL} <br/> <b?Refferer:</b>  ${refferer}`);
    }, [data.query])

    useEffect(() => {
        setPageURL(function (prevState) {
            return window.location.href;
        })
        setPageReferer(function (prevState) {
            return document.referrer;
        })
    })



    const finalData = {
        ...data, query: queryMssg
    }


    const sendData = async (event) => {
        event.preventDefault();
        await dataHandler(finalData);
        setIsSuccess(true);
        setTimeout(()=>{
            setIsSuccess(false);
        },3000);
        
        
    }

    return (
        <>
            {isSuccess &&         
                <p className='mo-success'><FontAwesomeIcon icon={faCheckCircle}/> &nbsp;Thank you for the response. We will get back to you soon.</p>
            }
            
            <div className="container-fluid" id="request-free-trial">
                <div className="row mt-5 section-testimonials saml-scroll" id="mo_external_contact_form">
                    <h3 className="h1 mo-saml-free-trial-head size form-title text-center">Get Full - Featured Trial</h3>
                    <div className="col-md-6 mt-5 demo">
                        <h3 className="h1 mo-saml-free-trial-head">10 Days Free Trial</h3>
                        <h6 className="h4 form-font mt-4"><FontAwesomeIcon className='text-green' icon={faCheck} /> &nbsp;    Test the full featured plugin on your WordPress environment
                        </h6>
                        <h6 className="h4 form-font"><FontAwesomeIcon className='text-green' icon={faCheck} /> &nbsp; Integrate with any platform of your choice</h6>
                        <h6 className="h4 form-font"><FontAwesomeIcon className='text-green' icon={faCheck} /> &nbsp;     Test all the premium features before purchasing the license</h6>
                        <h6 className="h4 form-font"><FontAwesomeIcon className='text-green' icon={faCheck} /> &nbsp; 24*7 support to help you with the setup</h6>
                    </div>

                    <div className="col-md-5 mt-5 mo-saml-free-trial-form">
                        <h3 className="h1 form-title text-center" style={{ fontWeight: "400" }}>No Credit Card Required</h3>
                        <form action="" method="POST" className="mo-saml-contact-form" onSubmit={sendData} id="mo_external_contact_form">
                            <label htmlFor="free-trial-email">Email <span className="text-danger">*</span></label>
                            <input type="email" name="email" placeholder="Enter valid email" id="mo_external_contact_form_email" required="" onChange={valueHandler} />

                            <label htmlFor="free-trial-text">Requirement <span className="text-danger">*</span></label>
                            <textarea name="query" placeholder="Tell us about your requirement" id="mo_external_contact_form_query" onChange={valueHandler} required="" ></textarea >

                            <input hidden id="mo_external_contact_form_support" defaultValue="samlsupport@xecurify.com" />

                            <input hidden id="mo_external_contact_form_look" defaultValue="TRIAL REQUEST : WordPress SAML / WS-FED IDP" />

                            <button className="trial-form-btn-saml mt-5">Submit</button>
                        </form>
                        <p className="mo-saml-submit-success-msg"><i className="fas fa-check-circle text-success"></i> &nbsp;Thank you for your response. We will get back to you soon.</p>
                        <p className="mo-saml-submit-error-msg">Something went wrong. Please submit your query again</p>
                    </div>
                </div>
            </div>
        </>
    )
}
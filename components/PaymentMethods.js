import { faCcVisa, faCcMastercard, faCcAmex,faPaypal,faBuil } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

export default function PaymentMethods() {
    return (
        <div className='container'>
            <h2 className="plan-head-saml saml-scroll mt-5 mb-3" id="payment-methods">Payment Methods </h2>
            <div className="row text-center">
                <div className="col-md-4 mt-3">
                    <div className="plan-box">
                        <div className="plan-box-up">
                            <FontAwesomeIcon icon={faCcAmex} size="3x" style={{padding:"2px"}}/>
                            <FontAwesomeIcon icon={faCcVisa} size="3x" style={{padding:"2px"}}/>
                            <FontAwesomeIcon icon={faCcMastercard} size="3x" style={{padding:"2px"}}/>
                        </div>
                        <p>
                            Credit cards (American Express, Discover, MasterCard, and Visa) - If the payment is made through Credit Card/International Debit Card, the license will be created automatically once the payment is completed.
                        </p>
                    </div>
                </div>
                <div className="col-md-4 mt-3">
                    <div className="plan-box">
                        <div className="plan-box-up">
                            <img src="https://plugins.miniorange.com/wp-content/uploads/2022/08/paypal.webp" width="56px" height="56px" />
                            {/* <FontAwesomeIcon icon={faPaypal} size="3x"/> */}
                        </div>
                        <p>
                            Please contact us <a className='anchor' href="https://www.miniorange.com/contact" target="_blank"><b>here</b></a> or drop an email at <a className='anchor' href="mailto:samlsupport@xecurify.com"><b>samlsupport@xecurify.com</b></a> for more information<br /><br />
                        </p>
                    </div>
                </div>
                <div className="col-md-4 mt-3">
                    <div className="plan-box">
                        <div className="plan-box-up d-flex justify-content-center align-items-baseline">
                            <Image src="/Assets/Payment-methods.png" width={42} height={42}/>
                            <span className="h3" style={{fontFamily:"Auto"}}>&nbsp;&nbsp;Bank Transfer</span>
                        </div>
                        <p>
                            Please contact us <a className='anchor' href="https://www.miniorange.com/contact" target="_blank"><b>here</b></a> or drop an email at <a className='anchor' href="mailto:samlsupport@xecurify.com"><b>samlsupport@xecurify.com</b></a> so that we can provide you the bank details.<br /><br />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
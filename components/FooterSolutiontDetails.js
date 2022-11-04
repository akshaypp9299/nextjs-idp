import Link from 'next/link';
const FooterSolutiontDetails = () => {
    return (
        <div className="col-md-3">
            <h5 className='h4'>Solutions</h5>
            <div className='d-flex flex-column'>
                <Link legacyBehavior href='https://miniorange.com/single-sign-on-sso' className='ps-0'><a className='footer-link__color text-decoration-none mt-2'>SAML Solutions</a></Link>
                <Link legacyBehavior href='https://www.miniorange.com/identity-broker-service' className='ps-0'><a className='footer-link__color text-decoration-none mt-2'>OAuth Solutions</a></Link>
                <Link legacyBehavior href='https://www.miniorange.com/identity-broker-service' className='ps-0'><a className='footer-link__color text-decoration-none mt-2'>2FA Solutions</a></Link>
                <Link legacyBehavior href='https://www.miniorange.com/identity-broker-service' className='ps-0'><a className='footer-link__color text-decoration-none mt-2'>Mobile Solutions</a></Link>
                <Link legacyBehavior href='https://www.miniorange.com/identity-broker-service' className='ps-0'><a className='footer-link__color text-decoration-none mt-2'>Directory Integrations</a></Link>
                <Link legacyBehavior href='https://www.miniorange.com/identity-broker-service' className='ps-0'><a className='footer-link__color text-decoration-none mt-2'>Federation Integrations</a></Link>
                <Link legacyBehavior href='https://www.miniorange.com/identity-broker-service' className='ps-0'><a className='footer-link__color text-decoration-none mt-2'>Directory Services</a></Link>
                <Link legacyBehavior href='https://www.miniorange.com/identity-broker-service' className='ps-0'><a className='footer-link__color text-decoration-none mt-2'>Windows Solutions</a></Link>
                <Link legacyBehavior href='https://www.miniorange.com/identity-broker-service' className='ps-0'><a className='footer-link__color text-decoration-none mt-2'>SSO Connectors</a></Link>
                <Link legacyBehavior href='https://www.miniorange.com/identity-broker-service' className='ps-0'><a className='footer-link__color text-decoration-none mt-2'>Secure Browser SSO</a></Link>
                <Link legacyBehavior href='https://www.miniorange.com/identity-broker-service' className='ps-0'><a className='footer-link__color text-decoration-none mt-2'>View All</a></Link>
            </div>
        </div>
    )
}

export default FooterSolutiontDetails;
import Link from 'next/link';
const FooterProductDetails = () => {
    return (
        <div className="col-md-3">
            <h5 className='h4'>Product</h5>
            <div className='d-flex flex-column'>
                <Link legacyBehavior  href='https://miniorange.com/single-sign-on-sso' className='ps-0'><a className='footer-link__color text-decoration-none mt-2'>Single Sign-On</a></Link>
                <Link legacyBehavior href='https://www.miniorange.com/identity-broker-service' className='ps-0'><a className='footer-link__color text-decoration-none mt-2'>Identity Brokering</a></Link>
                <Link legacyBehavior href='https://www.miniorange.com/identity-broker-service' className='ps-0'><a className='footer-link__color text-decoration-none mt-2'>OAuth / OpenID Connect Server</a></Link>
                <Link legacyBehavior href='https://www.miniorange.com/identity-broker-service' className='ps-0'><a className='footer-link__color text-decoration-none mt-2'>Multi Factor Authentication</a></Link>
                <Link legacyBehavior href='https://www.miniorange.com/identity-broker-service' className='ps-0'><a className='footer-link__color text-decoration-none mt-2'>Adaptive Authentication</a></Link>
                <Link legacyBehavior href='https://www.miniorange.com/identity-broker-service' className='ps-0'><a className='footer-link__color text-decoration-none mt-2'>User Provisioning</a></Link>
                <Link legacyBehavior href='https://www.miniorange.com/identity-broker-service' className='ps-0'><a className='footer-link__color text-decoration-none mt-2'>Directory Services</a></Link>
            </div>

        </div>
    )
}

export default FooterProductDetails;

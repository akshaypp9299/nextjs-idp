import Link from 'next/link';
const FooterWhyMiniorange = () => {
    return (
        <div className="col-md-3">
            <h5 className='h4'>Why miniOrange</h5>
            <div className='d-flex flex-column'>
                <Link legacyBehavior href='https://miniorange.com/single-sign-on-sso' className='ps-0'><a className='footer-link__color text-decoration-none mt-2'>Our Success Stories</a></Link>
                <Link legacyBehavior href='https://www.miniorange.com/identity-broker-service' className='ps-0'><a className='footer-link__color text-decoration-none mt-2'>Content Library</a></Link>
                <Link legacyBehavior href='https://www.miniorange.com/identity-broker-service' className='ps-0'><a className='footer-link__color text-decoration-none mt-2'>Videos</a></Link>
                <Link legacyBehavior href='https://www.miniorange.com/identity-broker-service' className='ps-0'><a className='footer-link__color text-decoration-none mt-2'>FAQs</a></Link>
                <Link legacyBehavior href='https://www.miniorange.com/identity-broker-service' className='ps-0'><a className='footer-link__color text-decoration-none mt-2'>Forum</a></Link>
            </div>

            <h5 className='h4 mt-4'>Company</h5>
            <div className='d-flex flex-column'>
                <Link legacyBehavior href='https://miniorange.com/single-sign-on-sso' className='ps-0'><a className='footer-link__color text-decoration-none mt-2'>Overview</a></Link>
                <Link legacyBehavior href='https://www.miniorange.com/identity-broker-service' className='ps-0'><a className='footer-link__color text-decoration-none mt-2'>News</a></Link>
                <Link legacyBehavior href='https://www.miniorange.com/identity-broker-service' className='ps-0'><a className='footer-link__color text-decoration-none mt-2'>Partners</a></Link>
                <Link legacyBehavior href='https://www.miniorange.com/identity-broker-service' className='ps-0'><a className='footer-link__color text-decoration-none mt-2'>Customers</a></Link>
                <Link legacyBehavior href='https://www.miniorange.com/identity-broker-service' className='ps-0'><a className='footer-link__color text-decoration-none mt-2'>Contact Us</a></Link>
            </div>

        </div>
    );
}

export default FooterWhyMiniorange;
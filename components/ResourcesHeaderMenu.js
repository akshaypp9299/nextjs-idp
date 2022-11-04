import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faBookOpen, faGraduationCap, faHome, faLayerGroup, faRectangleList, faVideo} from '@fortawesome/free-solid-svg-icons';
const ResourcesHeaderMenu = () => {
    return(
        <Container fluid className='bg-light p-5 position-absolute z-index'>
            <Container>
            <Row>
                <Col className='d-flex flex-column'>
                    {/* <h6 className='h6 fw-normal mo-color'><FontAwesomeIcon icon={faLayerGroup} className="me-2"/>Content Library</h6> */}
                    <hr className='mt-2 mb-2'/>
                    <Link legacyBehavior href='https://miniorange.com/single-sign-on-sso' className='ps-0'><a className='text-dark text-decoration-none mt-2'>Single Sign-On</a></Link>
                </Col>
                <Col className='d-flex flex-column'>
                    {/* <h6 className='h6 fw-normal mo-color'><FontAwesomeIcon icon={faVideo} className="me-2"/>Video Library</h6> */}
                    <hr className='mt-2 mb-2'/>
                    <Link legacyBehavior href='https://miniorange.com/single-sign-on-sso' className='ps-0'><a className='text-dark text-decoration-none mt-2'>Single Sign-On</a></Link>
                </Col>
                <Col className='d-flex flex-column'>
                    {/* <h6 className='h6 fw-normal mo-color'><FontAwesomeIcon icon={faBookOpen} className="me-2"/>FAQ</h6> */}
                    <hr className='mt-2 mb-2'/>
                    <Link legacyBehavior href='https://miniorange.com/single-sign-on-sso' className='ps-0'><a className='text-dark text-decoration-none mt-2'>Single Sign-On</a></Link>
                </Col>
                <Col className='d-flex flex-column'>
                    {/* <h6 className='h6 fw-normal mo-color'><FontAwesomeIcon icon={faRectangleList} className="me-2"/>Forum</h6> */}
                    <hr className='mt-2 mb-2'/>
                    <Link legacyBehavior href='https://miniorange.com/single-sign-on-sso' className='ps-0'><a className='text-dark text-decoration-none mt-2'>Single Sign-On</a></Link>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col className='d-flex flex-column'>
                    {/* <h6 className='h6 fw-normal mo-color'><FontAwesomeIcon icon={faGraduationCap} className="me-2"/>Concepts</h6> */}
                    <hr className='mt-2 mb-2'/>
                    <Link legacyBehavior href='https://miniorange.com/single-sign-on-sso' className='ps-0'><a className='text-dark text-decoration-none mt-2'>Single Sign-On</a></Link>
                </Col>
            </Row>
            </Container>
        </Container>
    )
}

export default ResourcesHeaderMenu;
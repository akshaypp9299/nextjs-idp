import UncontrolledExample from "./Carousel"
import { faSolid, faStar } from "@fortawesome/free-solid-svg-icons";
import Carousel from 'react-bootstrap/Carousel';
import SvgIcon from "./SvgIcon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from "next/image";

function Review() {
  const openTab = (url) =>{
    window.open(url,'_blank');
  }
 
 
  return (
    <div className="review-carousel">
      <div className="container">
        <div className="row">
          <div className="col-md-12 plan-head-saml saml-scroll mt-5" id="key-features">
            What are our customers saying?
          </div>
        </div>
      </div>
      <Carousel>
        <Carousel.Item>
          <div className="row mt-3">
            <div className="col-md-3 review-box">
              <div className="row p-2">
                <div className="col-md-3" id="user-column">
                  <Image src="/assets/review-user1.png" width={95} height={95} alt="user" />
                </div>
                <div className="col-md-9 review-description" id="rev-desc">
                  <h3 className="review-heading ">Great plugin with even better support!</h3>
                  <div className="rating">
                    <span className="score">
                      <div className="score-wrap">
                        <span className="stars-active" style={{ width: "100%" }}>
                          <SvgIcon icon="home" width="18px" />
                          <SvgIcon icon="home" width="18px"/>
                          <SvgIcon icon="home" width="18px" />
                          <SvgIcon icon="home" width="18px"/>
                          <SvgIcon icon="home" width="18px" />
                        </span>
                      </div>
                    </span>
                  </div>
                  <p className="text-desc">We use the plugin to show a Tableau online environment within our WP site. After a test period, in which we've already got some great...
                    <a href="https://wordpress.org/support/topic/great-plugin-with-even-better-support-26/" target="_blank" className="anchor">Read More</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 review-box">
              <div className="row p-2">
                <div className="col-md-3" id="user-column">
                  <Image src="/assets/review-user2.webp" width={95} height={95} alt="user"/> 
                </div>
                <div className="col-md-9 review-description" id="rev-desc">
                  <h3 className="review-heading ">Great Product - Top tier support</h3>
                  <div className="rating">
                    <span className="score">
                      <div className="score-wrap">
                        <span className="stars-active" style={{ width: "100%" }}>
                          <SvgIcon icon="home" width="18px"/>
                          <SvgIcon icon="home" width="18px" />
                          <SvgIcon icon="home" width="18px" />
                          <SvgIcon icon="home" width="18px" />
                          <SvgIcon icon="home" width="18px" />
                        </span>
                      </div>
                    </span>
                  </div>
                  <p className="text-desc">Great product easy to use, lots of documentation. The support team checks up on you through email and even when I somehow managed...
                    <a href="https://wordpress.org/support/topic/great-product-top-tier-support/" className="anchor" target="_blank">Read More</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 review-box">
              <div className="row p-2">
                <div className="col-md-3" id="user-column">
                  <Image src="/assets/review-user3.webp" width={95} height={95} alt="user" />
                </div>
                <div className="col-md-9 review-description" id="rev-desc">
                  <h3 className="review-heading ">Works well; Outstanding support</h3>
                  <div className="rating">
                    <span className="score">
                      <div className="score-wrap">
                        <span className="stars-active" style={{ width: "100%" }}>
                          <SvgIcon icon="home" width="18px" />
                          <SvgIcon icon="home" width="18px" />
                          <SvgIcon icon="home" width="18px" />
                          <SvgIcon icon="home" width="18px" />
                          <SvgIcon icon="home" width="18px" />
                        </span>
                      </div>
                    </span>
                  </div>
                  <p className="text-desc">We used this plugin recently for a major virtual event that needed to be gated on a non-Wordpress platform that offered SSO integration...
                    <a href="https://wordpress.org/support/topic/works-well-outstanding-support-2/" target="_blank" className="anchor">Read More</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row mt-3">
            <div className="col-md-3 review-box">
              <div className="row p-2">
                <div className="col-md-3" id="user-column">
                <Image src="/assets/review-user1.png" width={95} height={95} alt="user" />
                </div>
                <div className="col-md-9 review-description" id="rev-desc">
                  <h3 className="review-heading ">Good Plugin Exceptional Support</h3>
                  <div className="rating">
                    <span className="score">
                      <div className="score-wrap">
                        <span className="stars-active" style={{ width: "100%" }}>
                          <SvgIcon icon="home" width="18px" />
                          <SvgIcon icon="home" width="18px" />
                          <SvgIcon icon="home" width="18px" />
                          <SvgIcon icon="home" width="18px" />
                          <SvgIcon icon="home" width="18px" />
                        </span>
                      </div>
                    </span>
                  </div>
                  <p className="text-desc">This plugin is easy to use and supports a lot of different SAML functionality for WordPress IdP. It has been sufficient...
                    <a href="https://wordpress.org/support/topic/good-plugin-exceptional-support/" target="_blank" className="anchor">Read More</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 review-box">
              <div className="row p-2">
                <div className="col-md-3" id="user-column">
                <Image src="/assets/review-user2.webp" width={95} height={95} alt="user" />

                </div>
                <div className="col-md-9 review-description" id="rev-desc">
                  <h3 className="review-heading ">Great plugin / great support</h3>
                  <div className="rating">
                    <span className="score">
                      <div className="score-wrap">
                        <span className="stars-active" style={{ width: "100%" }}>
                          <SvgIcon icon="home" width="18px" />
                          <SvgIcon icon="home" width="18px" />
                          <SvgIcon icon="home" width="18px" />
                          <SvgIcon icon="home" width="18px" />
                          <SvgIcon icon="home" width="18px" />
                        </span>
                      </div>
                    </span>
                  </div>
                  <p className="text-desc">My client has been using this plugin for the last couple of years for SSO with different SPs and it has been working superbly...
                    <a href="https://wordpress.org/support/topic/great-plugin-great-support-1365/" target="_blank" className="anchor">Read More</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 review-box">
              <div className="row p-2">
                <div className="col-md-3" id="user-column">
                <Image src="/assets/review-user3.webp" width={95} height={95} alt="user" />
                </div>
                <div className="col-md-9 review-description" id="rev-desc">
                  <h3 className="review-heading ">Great Support Team – SSO Plug In Works as Advertised</h3>
                  <div className="rating">
                    <span className="score">
                      <div className="score-wrap">
                        <span className="stars-active" style={{ width: "100%" }}>
                          <SvgIcon icon="home" width="18px" />
                          <SvgIcon icon="home" width="18px" />
                          <SvgIcon icon="home" width="18px" />
                          <SvgIcon icon="home" width="18px" />
                          <SvgIcon icon="home" width="18px" />
                        </span>
                      </div>
                    </span>
                  </div>
                  <p className="text-desc">First off, I have to mention the fantastic support the miniOrange team provided our organization...<a href="https://wordpress.org/support/topic/great-support-team-sso-plug-in-works-as-advertised/" target="_blank" className="anchor">Read More</a></p>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      <button className="button-63" onClick={()=>openTab('https://wordpress.org/plugins/miniorange-wp-as-saml-idp/#reviews')}>See All Reviews</button>
    </div>
  )
}

export default Review;
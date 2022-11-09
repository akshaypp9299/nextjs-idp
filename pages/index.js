import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from '../components/Banner';
import KeyFeatures from '../components/KeyFeatures';
import LogoSection from '../components/LogoSection';
import Pricing from '../components/Pricing';
import Faq from '../components/Faq';
import Review from '../components/Review';
import Note from '../components/Note';
import CustomFooter from '../components/Custom-footer';
import Integration from '../components/Integrations';
import PaymentMethods from '../components/PaymentMethods';
import TrialForm from '../components/TrialForm';

export default function Home() {

  const faqData = [
    {
      title: "Is the WordPress IDP Premium plugin an annual subscription?",
      desc: "The plugin licenses are subscription based and the Support plan includes 12 month of maintenence and (support and version updates). You will need to renew the license after 12 months at 50% of the current license cost. "
    },
    {
      title: "What is the refund policy?",
      desc: <> At miniOrange, we want to ensure you are 100% happy with your purchase. If the premium plugin you purchased is not working as advertised and you've attempted to resolve any issues with our support team, which couldn't get resolved. We will refund the whole amount within 10 days of the purchase. Please email us at <a className='anchor' href="mailto:samlsupport@xecurify.com" class="text-primary"><b>samlsupport@xecurify.com</b></a> for any queries regarding the return policy or contact us
        <a className='anchor' href="https://www.miniorange.com/contact" target="_blank"><b> here</b></a>.</>
    },
    {
      title: "Does miniOrange offer technical support?",
      desc: <>Yes, we provide 24*7 support for all and any issues you might face while using the plugin, which includes technical support from our developers. You can get prioritized support based on the Support Plan you have opted. You can check out the
        different Support Plans from <a className='anchor' href="https://www.miniorange.com/support-plans" target="_blank" class="text-primary"><b><u>here</u></b></a>.</>
    },
    {
      title: "What is one instance?",
      desc: <>A WordPress instance refers to a single installation of a WordPress site. It refers to each individual website where the plugin is active. In the case of a single site WordPress, each website will be counted as a single instance.<b>License is linked to the domain of the WordPress instance, so if you have dev-staging-prod type of environment then you will require 3 licenses of the plugin (with discounts applicable on pre-production environments)</b>.
      <br/>     <u>Note:</u> <b>Purchasing licenses for Unlimited instances will grant you upto 200 licenses</b>. If you want to purchase more licenses, please contact us <a className='anchor' href="mailto:samlsupport@xecurify.com" target="_blank"><b>samlsupport@xecurify.com</b></a></>
    },
    {
      title: "Does miniOrange store any user data?",
      desc: "miniOrange does not store or transfer any data which is coming from the Identity Provider to the WordPress. All the data remains within your premises / server."
    },
    {
      title: "Does miniOrange provide developer license for paid plugin?",
      desc: "We do not provide the developer license for our paid plugins and the source code is protected. It is strictly prohibited to make any changes in the code without having written permission from miniOrange. There are hooks provided in the plugin which can be used by the developers to extend the plugin's functionality."
    }
  ]

  const faqs = faqData.map(function (faq,index) {
    return <Faq key={index} title={faq.title} desc={faq.desc} />
  })



  return (
    <div className={styles.container}>
      <Head>
        <title>WordPress SAML / WS-FED IDP | WordPress Plugin</title>
        <meta name="description" content="WordPress SAML IDP plugin allows log into any SAML 2.0 or WS-FED compliant Service Provider using your WordPress site and make user login more secure by signing and encrypting response to Service Provider." />
        <link rel="icon" href="/miniorange.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>
      {/* Header Component */}
      <Header />
      {/* Banner Component */}
      <Banner />
      {/* Keyfeature Component */}
      <KeyFeatures />
      {/* Logo Section Component */}
      <LogoSection />
      {/* Pricing Section */}
      <Pricing />
      {/* FAQ Section */}
      <div className='container-fluid'>
        <div className="col-md-12 plan-head-saml saml-scroll mt-5 mb-5" id="key-features">
          Pricing FAQs
        </div>
        <div className='row d-flex justify-content-center'>
          {faqs}
        </div>
      </div>
      {/* Intgerations Section */}
      <Integration/>
      {/* Payment Method section */}
      <PaymentMethods/>
      {/* Trial form section */}
      <TrialForm/>
      {/* Review Section */}
      <Review />
      {/* Note Section */}
      <Note />
      {/* Custom Footer Section */}
      <CustomFooter />
      {/* Footer Section */}
      <Footer></Footer>
    </div>
  )
}

import { useState } from "react";
import Image from "next/image";

function Faq(props) {
  const [faqIcon, setFaqIcon] = useState(false);

  const handleIcon = () => {
    setFaqIcon(!faqIcon);
  }

  return (

    <>
      <div className="col-md-5">
        <div className="faq-item " onClick={handleIcon}>
          <div className="faq-title">
            <div>{props.title}</div>
            <div className="faqIcon">{faqIcon ? "x" : <><Image src="/Assets/chevron.png" width={12} height={12} alt="chevron" /></>}</div>
          </div>
          {faqIcon && <div className="faq-desc">{props.desc}</div>}
        </div>
      </div>
    </>
  )
}

export default Faq;
import { useState } from "react";
import Contact_Hero from "../components/Contact_Hero";
import Content from "../components/Content";

function Contact() {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      <Contact_Hero onAnimationComplete={() => setShowContent(true)} />
      {showContent && <Content />}
    </>
  );
}

export default Contact;

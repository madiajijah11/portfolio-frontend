import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="http://twitter.com/Rappwalk" target="_blank" rel="noreferrer">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a
        href="http://facebook.com/nyanyaw.meong"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a
        href="http://instagram.com/dian.rhmdni"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;

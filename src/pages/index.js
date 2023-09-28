import * as React from "react";
import { useState } from "react";
import Layout from "../components/layout.js";
import headshot from "../images/headshot.jpeg";
import { AiFillLinkedin } from "react-icons/ai";
import { HiMail } from "react-icons/hi";
import { AiOutlineGithub } from "react-icons/ai";
import "./index.css";

const IndexPage = () => {
  const [copied, setCopied] = useState(false);
  const [hoverMail, setHoverMail] = useState(false);

  function resetCopied() {
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }
  return (
    <Layout>
      <svg width="0" height="0">
        <linearGradient id="color-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#4158d0" offset="0%" />
          <stop stopColor="#c850c0" offset="100%" />
        </linearGradient>
      </svg>
      <div class="home-container">
        <div class="home-left">
          <h1>RACHEL LIU</h1>
          <h3>software engineer</h3>
          <h4>human computer interaction</h4>
          <h4>full stack development</h4>
          <h4>ui/ux design</h4>
          <div class="contact-stack">
            <a
              href="https://github.com/liur1111"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineGithub class="contact-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/liur"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin class="contact-icon" />
            </a>
            {!copied ? (
              <div class="mail">
                {hoverMail && (
                  <div class="copy-to-clipboard">copy to clipboard</div>
                )}
                <HiMail
                  onClick={() => {
                    navigator.clipboard.writeText("rachelliu@alum.mit.edu");
                    setCopied(true);
                    resetCopied();
                  }}
                  onMouseEnter={() => setHoverMail(true)}
                  onMouseLeave={() => setHoverMail(false)}
                  class="contact-icon"
                />
              </div>
            ) : (
              <div class="mail">
                <div class="copied">copied</div>
                <HiMail class="contact-icon" />
              </div>
            )}
          </div>
        </div>
        <div class="home-right">
          <img src={headshot} alt=""></img>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import Text from '../components/Text';
import {
  AiFillGithub,
  AiFillMail,
  AiFillCheckCircle
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "../pages/style.css";

function Contactpage() {
  const [ copied, setCopied ] = useState(false);
  console.log(copied);
  function resetCopied() {
    setTimeout(() => {
      setCopied(false);
    }, 500)
  }
  return (
    <div className="contactbackground">
      <Container>
        <h2 className="contacthead">Get In Touch</h2>
        <div className='contactpara'>
        <button onClick={() => {
              window.open("https://github.com/liur1111");
            }}
              className='socailmediabtn'><AiFillGithub className='icon' /></button>
            <button onClick={() => {
              window.open("https://www.linkedin.com/in/liur");
            }}
              className='socailmediabtn'><FaLinkedinIn className='icon' /></button>
            <button onClick={() => {
              navigator.clipboard.writeText("rachelliu@alum.mit.edu");
              setCopied(true);
              resetCopied();
            }}
              className='socailmediabtn'>
                {!copied ? 
                  <AiFillMail className='icon' />
                  :
                  <AiFillCheckCircle className='icon' />
                }
              </button>
          </div>

      </Container>
    </div>
  );
}


export default Contactpage;

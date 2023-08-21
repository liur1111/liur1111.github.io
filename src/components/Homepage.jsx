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


function Home() {
  const [ copied, setCopied ] = useState(false);
  console.log(copied);
  function resetCopied() {
    setTimeout(() => {
      setCopied(false);
    }, 500)
  }

  return (
    <div className='homepagebackground'>
      <Container>
        <Row>
          <Col md={7}>
            <h2 className='headtext'>hi <span className='wave'>👋 </span></h2>
            <h2 className='nametext'>my name is rachel liu</h2>
            <span></span>
            <Text />
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
          </Col>

          <Col md={5}>
            <div className="imagedeveloper">
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home
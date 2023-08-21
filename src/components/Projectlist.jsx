import ProjectCard from "../components/Projectcard";
import { Container, Row, Col } from "react-bootstrap";
import FigmaEmbed from 'react-figma-embed';
import "../pages/style.css";


function Projectlist() {
  return (
    <div className='aboutpagebackground'>
    <Container>
        <Col md={7} >
            <h3 className='aboutmetext'>My <span>Projects</span></h3>
            <FigmaEmbed url="https://www.figma.com/file/TYPtUfKyiGx6R0lwKQNiH2/Rachel-Liu-Projects?type=whiteboard&node-id=0%3A1&t=bWiIHwCWKCKPqMz3-1" />            
        </Col>
    </Container>
</div >
  );
}
export default Projectlist;
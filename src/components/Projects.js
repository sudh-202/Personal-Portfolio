import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/thumb-1.jpg";
import projImg2 from "../assets/img/thumb-2.jpg";
import projImg3 from "../assets/img/thumb-3.jpg";
import projImg4 from "../assets/img/thumb-4.jpg";
import projImg5 from "../assets/img/thumb-5.jpg";
import projImg6 from "../assets/img/thumb-6.jpg";

import { ArrowRightCircle } from 'react-bootstrap-icons';

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
const mystyle = {
  color: "#fff",
  // padding:"20px",
  // width:"100%"
  
};

export const Projects = () => {

  const projects = [
    {
      title: "Mithal industries",
      description: "Mithal Industries Supplies On A Large Scale Of All Grades Of Metal Scrap Like Hms1, Pns, Cast Iron, Shredded, Turning, Crc, And Tincan Bundles Internationally.",
      imgUrl: projImg1,
    },
    {
      title: "Pinksky",
      description: "Pinksky is ecommerce site which focus specially on women clothing and accessories.",
      imgUrl: projImg2,
    },
    {
      title: "GayatriUdhyog",
      description: "GayatriUdhyog create and operate valuable solar and storage projects that benefit communities for decades.",
      imgUrl: projImg3,
    },
    {
      title: "AuxibleIndia",
      description: "AuxibleIndia are industrial pioneers backed by our existing clients. All this is available at a pocket-friendly rate.",
      imgUrl: projImg4,
    },
    {
      title: "Metaverse Madness",
      description: "A UX/UI for Upcoming Site using next.js",
      imgUrl: projImg5,
    },
    {
      title: "Previous Website Sample",
      description: "This site is also made on ReactJs, SCSS and next.js",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2 style={{margin:"0 0 50px 0"}}>Projects</h2>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                    
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                 link= {<a href="https://my-react-portfolio-website.netlify.app/" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}><button onClick={() => console.log('connect')}><ArrowRightCircle size={25} style={mystyle}/></button>
                                  </a>}/>
      
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}

                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}

                                 link= {<a href="https://pinksky.in/" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}><button onClick={() => console.log('connect')}><ArrowRightCircle size={25} style={mystyle}/></button>
                                  </a>}/>
                                  
                            )
                          })
                        }
                      </Row>

                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}

                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                link= {<a href="https://gayatriudhyog.com/" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}><button onClick={() => console.log('connect')}><ArrowRightCircle size={25} style={mystyle}/></button>
                                  </a>}>
                                  </ProjectCard>
                                
                            )
                          })
                        }
                      </Row>

                      <Tab.Pane eventKey="four">
                      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}

                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                link= {<a href="https://www.auxibleindia.com/" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}><button onClick={() => console.log('connect')}><ArrowRightCircle size={25} style={mystyle}/></button>
                                  </a>}>
                                  </ProjectCard>
                                
                            )
                          })
                        }
                      </Row>
                      
                    </Tab.Pane>

                    <Tab.Pane eventKey="four">
                      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}

                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                link= {<a href="https://metaverse-demosite.netlify.app/" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}><button onClick={() => console.log('connect')}><ArrowRightCircle size={25} style={mystyle}/></button>
                                  </a>}>
                                  </ProjectCard>
                                
                            )
                          })
                        }
                      </Row>
                      
                    </Tab.Pane>   <Tab.Pane eventKey="five">
                      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}

                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                link= {<a href="https://my-react-portfolio-website.netlify.app/" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}><button onClick={() => console.log('connect')}><ArrowRightCircle size={25} style={mystyle}/></button>
                                  </a>}>
                                  </ProjectCard>
                                
                            )
                          })
                        }
                      </Row>
                      
                    </Tab.Pane>
                      
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

import './SanyaDash.css';
import React from "react";
import Radial19 from './Radial_19_v3';
import Radial20 from './Radial_20_v3';
import DonutSmall from './donut_small';
import DonutMedium from './donut_medium';
import DonutLarge from './donut_large';
import DonutPort from './donut_heliport';
import StreamGraph from './Stream_v3';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Container, Col } from 'react-bootstrap';
import { Button, Accordion, Card } from 'react-bootstrap';
import Donut from './donut';

class SanyaDashboard extends React.Component {

  render() {

    return (
      <Container fluid className="main">
        <Row className="justify-content-md-center"><h1>Visualize the impact of COVID in 2020 on airports around the world</h1></Row>
        <Row id="affectedAirlines" className="justify-content-md-center">
          <Row className="justify-content-md-center"><h3>Top 10 most affected airlines [Percentage decrease from 2019 to 2020]</h3></Row>
          <Row className="justify-content-md-center">
            <Col className="justify-content-md-center">
              <table>
                <tr>
                  <th className="thh"></th>
                  <th className="thh">Airline</th>
                  <th className="thh">Percentage decrease</th>
                  <th className="thh">2019 count</th>
                  <th className="thh">2020 count</th>
                </tr>
                <tr>
                  <td className="tdd">1</td>
                  <td className="tdd">N829JP</td>
                  <td className="tdd">99.892 %</td>
                  <td className="tdd">933</td>
                  <td className="tdd">1</td>
                </tr>
                <tr>
                  <td className="tdd">2</td>
                  <td className="tdd">KAP639</td>
                  <td className="tdd">99.835 %</td>
                  <td className="tdd">607</td>
                  <td className="tdd">1</td>
                </tr>
                <tr>
                  <td className="tdd">3</td>
                  <td className="tdd">NDU641</td>
                  <td className="tdd">99.834 %</td>
                  <td className="tdd">604</td>
                  <td className="tdd">1</td>
                </tr>
                <tr>
                  <td className="tdd">4</td>
                  <td className="tdd">N535WK</td>
                  <td className="tdd">99.801 %</td>
                  <td className="tdd">504</td>
                  <td className="tdd">1</td>
                </tr>
                <tr>
                  <td className="tdd">5</td>
                  <td className="tdd">UUD</td>
                  <td className="tdd">99.797 %</td>
                  <td className="tdd">494</td>
                  <td className="tdd">1</td>
                </tr>
                <tr>
                  <td className="tdd">6</td>
                  <td className="tdd">HBTEC</td>
                  <td className="tdd">99.750 %</td>
                  <td className="tdd">807</td>
                  <td className="tdd">2</td>
                </tr>
                <tr>
                  <td className="tdd">7</td>
                  <td className="tdd">ADSBTEST</td>
                  <td className="tdd">99.746 %</td>
                  <td className="tdd">395</td>
                  <td className="tdd">1</td>
                </tr>
                <tr>
                  <td className="tdd">8</td>
                  <td className="tdd">N7673W</td>
                  <td className="tdd">99.727 %</td>
                  <td className="tdd">367</td>
                  <td className="tdd">1</td>
                </tr>
                <tr>
                  <td className="tdd">9</td>
                  <td className="tdd">RSCU521</td>
                  <td className="tdd">99.722 %</td>
                  <td className="tdd">361</td>
                  <td className="tdd">1</td>
                </tr>
                <tr>
                  <td className="tdd">10</td>
                  <td className="tdd">ENY3779</td>
                  <td className="tdd">99.650 %</td>
                  <td className="tdd">286</td>
                  <td className="tdd">1</td>
                </tr>
              </table>
            </Col>
            <Col className="justify-content-md-center">
              <div className="radials">

                <Accordion defaultActiveKey="0">
                  <Card style={{backgroundColor:"#EBEDEF00"}}>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0" className="radial19_text">
                        2019 airline frequency!
      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <Radial19 />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card style={{backgroundColor:"#EBEDEF00"}}>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="1" className="radial20_text">
                        2020 airline frequency!
      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <Radial20 />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>

              </div>
            </Col>
          </Row>
        </Row>

        {/* <Row className="justify-content-md-center">
          <h3 className="most_active_donuts">Most active airports during COVID drop [April, May and June]</h3>
        </Row>
        <Row className="justify-content-md-center">
            <Donut />
        </Row> */}


        {/* 4 donuts - replacing */}
        <Row  id="affectedAirlines2" className="justify-content-md-center">
          <Row className="justify-content-md-center"><h3 className="most_active_donuts">Most active airports during COVID drop [April, May and June] - Top 3 in each category</h3></Row>
          <Row>

            <Col>
              <div style={{textAlign:"center"}}>Heliports</div>
              <div><DonutPort /></div>
              <div>
                <span id="circle_light_blue">11</span>
                <span style={{paddingLeft: "10px"}}>Marathon Kotroni Navy helicopter Base - 448 flights</span>
              </div>
              <div>
              <span id="circle_dark_blue">11</span>
              <span style={{paddingLeft: "10px"}}>Tecma Heliport - 516 flights</span>
               </div>
               <div>
                <span id="circle_orange">11</span>
                <span style={{paddingLeft: "10px"}}>Leeds Heliport - 79 flights</span>
              </div>
            </Col>
            <Col>
              <div style={{textAlign:"center"}} >Small Airports</div>
              <DonutSmall />
              <div>
                <span id="circle_light_blue">11</span>
                <span style={{paddingLeft: "10px"}}>Falcon Field - 27651 flights</span>
              </div>
              <div>
              <span id="circle_dark_blue">11</span>
              <span style={{paddingLeft: "10px"}}>Phoenix Deer Valley Airport - 33260 flights</span>
               </div>
               <div>
                <span id="circle_orange">11</span>
                <span style={{paddingLeft: "10px"}}>Scottsdale Airport - 20006 flights</span>
              </div>
            </Col>
            <Col>
              <div style={{textAlign:"center"}}>Medium Airports</div>
              <DonutMedium />
              <div>
                <span id="circle_light_blue">11</span>
                <span style={{paddingLeft: "10px"}}>Phoenix-Mesa gateway Airport - 19745 flights</span>
              </div>
              <div>
              <span id="circle_dark_blue">11</span>
              <span style={{paddingLeft: "10px"}}>Centennial Airport - 21191 flights</span>
               </div>
               <div>
                <span id="circle_orange">11</span>
                <span style={{paddingLeft: "10px"}}>Van Nuys Airport - 18428 flights</span>
              </div>
            </Col>
            <Col>
              <div style={{textAlign:"center"}}> Large Airports</div>
              <DonutLarge />
              <div>
                <span id="circle_light_blue">11</span>
                <span style={{paddingLeft: "10px"}}>Dallas Fort Worth International Airport - 52717 flights</span>
              </div>
              <div>
              <span id="circle_dark_blue">11</span>
              <span style={{paddingLeft: "10px"}}>Chicago O'Hare International Airport - 55765 flights</span>
               </div>
               <div>
                <span id="circle_orange">11</span>
                <span style={{paddingLeft: "10px"}}>Hartsfield Jackson Atlanta International Airport - 45781 flights</span>
              </div>
            </Col>


          </Row>
          </Row>


        <Row  id="affectedAirlines3" className="justify-content-md-center">
          <Row className="justify-content-md-center"><h3>10 Most busy airports during COVID - visualizing total number of flights</h3></Row>
          <Row className="justify-content-md-center">
            <Col>
              <div class="stream_graph">
                <StreamGraph />
              </div>
            </Col>
            <Col>
              <div className="kpi1">

                <div>
                  <div className="kpi">
                    <p className="kpi__value">328,049 <small></small> </p>
                    <p className="kpi__description">flights at Chicago O'hare International Airport in</p>
                    <p>2020</p>

                    <p className="kpi__value">349,946<small></small> </p>
                    <p className="kpi__description">flights at Chicago O'hare International Airport in</p>
                    <p>2019</p>
                  </div>
                </div>

                <div >
                  <div className="kpi">
                    <p className="kpi__value">264,551 <small></small> </p>
                    <p className="kpi__description">flights at Dallas Fort Worth International Airport in</p>
                    <p>2020</p>

                    <p className="kpi__value">272,467<small></small> </p>
                    <p className="kpi__description">flights at Dallas Fort Worth International Airport in</p>
                    <p>2019</p>
                  </div>
                </div>

                <div >
                  <div className="kpi">
                    <p className="kpi__value">225,147 <small></small> </p>
                    <p className="kpi__description">flights at Los Angeles International Airport in</p>
                    <p>2020</p>

                    <p className="kpi__value">229,783<small></small> </p>
                    <p className="kpi__description">flights at Los Angeles International Airport in</p>
                    <p>2019</p>
                  </div>
                </div>

              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    );
  }
}

export default SanyaDashboard;

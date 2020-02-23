import React from 'react';
import { Container, Badge, Row, Col, Alert, Button, Media, ButtonGroup, ButtonToolbar, Breadcrumb, Card } from 'react-bootstrap';
function App() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <Alert variant="primary">Website React Bootstrap</Alert>
          </Col>
          <Col xs={6}>
          <ButtonToolbar className="justify-content-end" style={{marginRight:"30px"}}>
            <ButtonGroup>
              <Button variant="primary">
                Notification <Badge variant="light">9</Badge>
              </Button>
              <Button variant="primary">
                Message <Badge variant="light">19</Badge>
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
          </Col>
          <Col>
            <Media>
              <img width={30}
              height={30}
              alt="profil"
              className="align-self-center"
              src="https://banner2.kisspng.com/20180420/kuq/kisspng-computer-icons-user-clip-art-my-vector-5ad9a348cd2ce1.8035052415242125528404.jpg"
              style={{marginRight:"15px"}}
              />
              <Media.Body>
                <h5>Andreas</h5>
              </Media.Body>
            </Media>
          </Col>
      </Row>
      <Row className="justify-content-end">
        <Col xs={6}>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
              Berita
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Bola</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Img src="https://images.performgroup.com/di/library/GOAL/f7/ad/diego-godin-vs-thailand_l9viaa2o7afh19gjl6vnekbgq.jpg?t=-1214473334&w=1920&h=1362&quality=100" variant="top"/>
            <Card.Body>
              <Card.Title style={{textTransform:'capitalize'}}>Diego Godin ukir rekor spesial lawan Thailand</Card.Title>
              <Card.Text>
                Diego Godin sekarang menjadi pemain Uruguay denga caps terbanyak setelah membantu negaranya melibas Thailand di final Piala Tiongkok. Diego Godin Boleh berbangga setelah resmi menjadi
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600" variant="top"/>
            <Card.Body>
              <Card.Title style={{textTransform:'capitalize'}}>neymar bahas kontrak baru di paris saint-germain</Card.Title>
              <Card.Text>
                Ayah sang pemain Brazil berusaha meredam ketertarikan Madrid. Neymar sedang berdiskusi dengan Paris Saint-Germain soal perpanjangan kontrak bersama kampiun Ligue 1 Perancis, begitu kata ayahnya.
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600" variant="top"/>
            <Card.Body>
              <Card.Title style={{textTransform:'capitalize'}}>inggris mau jadi tim terbaik di dunia</Card.Title>
              <Card.Text>
                Kumpulan talenta terbaik yang dimiliki Inggris saat ini membuat Barkley sangat optimistis. Ross Barkley merasa Inggris sudah berada di jalur yang benar untuk bisa menjadi tim terbaik di dunia dengan banyaknya talenta yang muncul sekarang ini
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600" variant="top"/>
            <Card.Body>
              <Card.Title style={{textTransform:'capitalize'}}>sani rizki fauzi tegaskan mental pemain timnas u-23 indonesia tetap bagus</Card.Title>
              <Card.Text>
                Gelandang tim nasional (Timnas) Indonesia U-23 Sani Rizki Fauzi, menegaskan kesiapannya bermain pada laga melawan Brunei Darusslam U-23. Kedua tim akan bentrok pada laga pamungkas Grup K.
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </Container>
    </div>
  );
}

export default App;

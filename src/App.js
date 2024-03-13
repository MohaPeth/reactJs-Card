// Importation des composants et des styles nécessaires depuis React Bootstrap et Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Button, Row, Col, Image, Card } from 'react-bootstrap';

// Création de la fonction App
function App() {
    return (
        <div className="App">
            {/* Header */}
            <header>
                <Navbar bg="dark" data-bs-theme="dark" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">EduFlex</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Acceuil</Nav.Link>
                            <Nav.Link href="#features">À propos</Nav.Link>
                            <Nav.Link href="#course">Nos Cours</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </header>

            {/* Section principale de la page */}
            <main style={{ backgroundColor: '#F0F0F0' }}>
                <Container>
                   
                    <Row xs={1} md={2}>
                        <Col className="my-4 px-5" sm={7}>
                            {/* Image + txt superposé */}
                            <Image src="https://dummyimage.com/900x400/000/007da7&text=Landing"
                                fluid
                                rounded
                            />
                        </Col>

                        <Col className="my-4" sm={5}>
                            {/* Titre + description */}
                            <h3>Bienvenue sur EduFlex</h3>
                            <h4>Transformez votre manière d'apprendre.</h4>
                            <p class="mt-2">Bienvenue sur EduFlex, votre plateforme de e-learning flexible et innovante.
                                Nous croyons que l'apprentissage devrait être accessible à tous, où que vous soyez et quand vous le souhaitez.
                            </p>

                            {/* Call to action */}
                            <Button style={{ backgroundColor: '#00A8E8', borderColor: 'none' }}>Commencer Maintenant</Button>
                        </Col>
                    </Row>

                    
                    <Row>
                        {/* Citation centrée */}
                        <Card className="text-center text-white my-5 py-2" style={{ backgroundColor: '#003459' }}>
                            <Card.Body>"Apprendre, c'est grandir chaque jour." ~ Albert Einstein</Card.Body>
                        </Card>
                    </Row>

                    
                    <Row>
                        {/* Trois cartes avec des descriptions de formations */}
                        <Col>
                            <Card style={{ width: '18rem', border: 'none' }}>
                                <Card.Img variant="top" src="https://dummyimage.com/286X180/000/007da7&text=Card1" />
                                <Card.Body>
                                    <Card.Title> Web Front-end avancé</Card.Title>
                                    <Card.Text>
                                        Maîtrisez les dernières technologies et techniques du développement web front-end,
                                        y compris HTML5, CSS3, JavaScript avancé.
                                    </Card.Text>
                                    <Button style={{ backgroundColor: '#00A8E8', borderColor: 'transparent' }}>S'inscrire</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem', border: 'none' }}>
                                <Card.Img variant="top" src="https://dummyimage.com/286X180/000/007da7&text=Card2" />
                                <Card.Body>
                                    <Card.Title>Formation en UX/UI Design</Card.Title>
                                    <Card.Text>
                                        Plongez dans le monde de l'UX/UI design et explorez les principes fondamentaux du design d'interfaces utilisateur.
                                    </Card.Text>
                                    <Button style={{ backgroundColor: '#00A8E8', borderColor: 'transparent' }}>S'inscrire</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem', border: 'none' }}>
                                <Card.Img variant="top" src="https://dummyimage.com/286X180/000/007da7&text=Card3" />
                                <Card.Body>
                                    <Card.Title>Web Full Stack avec Node.js</Card.Title>
                                    <Card.Text>
                                        Découvrez le développement web full stack avec une introduction aux technologies telles que Node.js, Express.js, et MongoDB.
                                    </Card.Text>
                                    <Button style={{ backgroundColor: '#00A8E8', borderColor: 'transparent' }}>S'inscrire</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </main>

            {/* Debut Footer  */}
            <footer class="py-5  bg-dark text-center">
                <Container>
                    <p className="text-white">&copy; Tous droits réservés - EduFlex 2024</p>
                    <p className="text-white">Designed by DevDesign</p>
                </Container>
            </footer>
        </div>
    )
}

export default App;

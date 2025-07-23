import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const doctors = [
  { name: 'Dr. Priya Sharma', specialization: 'Orthodontist', image: 'https://www.thedentalroots.com/assets/images/about/dr-sarveshwari.png' },
  { name: 'Dr. Raj Verma', specialization: 'Endodontist', image: 'https://www.yashodahospital.org/uploaded_files/doctors/pi_image1_227.jpg' },
  { name: 'Dr. Nisha Reddy', specialization: 'Pediatric Dentist', image: 'https://moulanahospital.com/wp-content/uploads/2021/05/megha-kumar-2.jpg' },
];

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        id="home"
        style={{
          backgroundImage: `url('https://t4.ftcdn.net/jpg/06/88/62/37/360_F_688623756_xbY1xgAzQVLNYvjPHvKdrECpmIJYXXz5.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '90vh',
          position: 'relative',
          color: 'white',
          paddingTop: '90px',
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7))',
          }}
        />
        <Container className="h-100 d-flex flex-column justify-content-center align-items-center position-relative text-center">
          <motion.h1
            className="display-3 fw-bold"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            SmileCare Dental Clinic
          </motion.h1>

          <motion.p
            className="lead mt-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Creating beautiful smiles with compassionate care
          </motion.p>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button variant="light" className="mt-4 px-5 py-2 fs-5 shadow">
              Book Appointment
            </Button>
          </motion.div>
        </Container>
      </div>

      {/* Our Doctors Section */}
      <Container id="doctors" className="my-5">
        <h2 className="text-center mb-4 fw-bold">Meet Our Experts</h2>
        <Row>
          {doctors.map((doc, index) => (
            <Col md={4} className="mb-4" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card className="shadow-sm">
                <Card.Img variant="top" src={doc.image} />
                <Card.Body>
                  <Card.Title>{doc.name}</Card.Title>
                  <Card.Text>{doc.specialization}</Card.Text>
                  <Button variant="primary">View Profile</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-light py-5">
        <Container>
          <h2 className="text-center fw-bold mb-4">What Our Patients Say</h2>
          <Row className="justify-content-center">
            <Col md={4} data-aos="zoom-in">
              <Card className="shadow-sm">
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>"Absolutely amazing care. The doctors are very kind and skilled!"</p>
                    <footer className="blockquote-footer mt-2">Riya Patel</footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} data-aos="zoom-in" data-aos-delay="150">
              <Card className="shadow-sm">
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>"The clinic is spotless and they made me feel so comfortable."</p>
                    <footer className="blockquote-footer mt-2">Amit Verma</footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-white">
        <Container>
          <h2 className="text-center mb-4 fw-bold">Get in Touch</h2>
          <Row className="justify-content-center">
            <Col md={6}>
              <form>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control" placeholder="Your Name" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-control" placeholder="your@email.com" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows={4} placeholder="Type your message..." required />
                </div>
                <Button variant="primary" type="submit">Send Message</Button>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;

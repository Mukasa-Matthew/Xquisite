'use client';

import { Navbar, Container, Nav, NavbarBrand, NavLink, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { FaMobileAlt, FaHeadphones, FaTools, FaShieldAlt, FaTabletAlt, FaChargingStation, FaStar, FaHandshake, FaClock, FaUser, FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaSnapchatGhost, FaTiktok, FaArrowRight, FaCheckCircle, FaArrowLeft, FaWhatsapp, FaClock as FaClockIcon } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Contact() {
    useEffect(() => {
        // Scroll animation observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen">
            {/* Navigation */}
            <Navbar bg="white" expand="lg" className="shadow-sm fixed-top navbar-glass">
                <Container>
                    <NavbarBrand href="/" className="d-flex align-items-center">
                        <Image src="/1000046406.jpg" alt="XQUISITE GADGETS Logo" width={50} height={50} className="logo-img me-2 animate-logo" />
                        <span className="text-primary fw-bold animate-text">XQUISITE GADGETS</span>
                    </NavbarBrand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink href="/" className="fw-medium nav-link-animated">Home</NavLink>
                            <NavLink href="/services" className="fw-medium nav-link-animated">Services</NavLink>
                            <NavLink href="/products" className="fw-medium nav-link-animated">Products</NavLink>
                            <NavLink href="/about" className="fw-medium nav-link-animated">About</NavLink>
                            <NavLink href="/contact" className="fw-medium nav-link-animated active">Contact</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Page Header */}
            <section className="hero-gradient text-white py-5" style={{ paddingTop: '100px' }}>
                <Container>
                    <div className="text-center">
                        <Link href="/" className="btn btn-outline-light mb-3">
                            <FaArrowLeft className="me-2" />Back to Home
                        </Link>
                        <h1 className="display-4 fw-bold mb-4">Get In Touch</h1>
                        <p className="lead">We&apos;d love to hear from you. Contact us for any inquiries or support.</p>
                    </div>
                </Container>
            </section>

            {/* Contact Information */}
            <section className="py-5">
                <Container>
                    <Row className="g-5">
                        <Col lg={6} className="animate-on-scroll">
                            <h2 className="section-title fw-bold mb-4">Contact Information</h2>
                            <p className="lead mb-4">Get in touch with us through any of these channels. We&apos;re here to help!</p>

                            <div className="space-y-4">
                                <div className="d-flex align-items-start mb-4 contact-item">
                                    <div className="bg-primary bg-gradient text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                                        <FaUser size={20} />
                                    </div>
                                    <div>
                                        <h5 className="fw-bold mb-1">CEO</h5>
                                        <p className="mb-0 text-muted">Rukundo Edmond</p>
                                    </div>
                                </div>

                                <div className="d-flex align-items-start mb-4 contact-item">
                                    <div className="bg-success bg-gradient text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                                        <FaMapMarkerAlt size={20} />
                                    </div>
                                    <div>
                                        <h5 className="fw-bold mb-1">Store Address</h5>
                                        <p className="mb-0 text-muted">Kisa kya Maria Building Level 2, Room No 414<br />William Street, Kampala, Uganda</p>
                                    </div>
                                </div>

                                <div className="d-flex align-items-start mb-4 contact-item">
                                    <div className="bg-warning bg-gradient text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                                        <FaPhone size={20} />
                                    </div>
                                    <div>
                                        <h5 className="fw-bold mb-1">Phone Numbers</h5>
                                        <p className="mb-1 text-muted">+256 772 393 145</p>
                                        <p className="mb-0 text-muted">+256 740 043 345 (WhatsApp)</p>
                                    </div>
                                </div>

                                <div className="d-flex align-items-start mb-4 contact-item">
                                    <div className="bg-info bg-gradient text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                                        <FaEnvelope size={20} />
                                    </div>
                                    <div>
                                        <h5 className="fw-bold mb-1">Email Address</h5>
                                        <p className="mb-0 text-muted">eddierukundo9@gmail.com</p>
                                    </div>
                                </div>

                                <div className="d-flex align-items-start mb-4 contact-item">
                                    <div className="bg-secondary bg-gradient text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px', minWidth: '50px' }}>
                                        <FaClockIcon size={20} />
                                    </div>
                                    <div>
                                        <h5 className="fw-bold mb-1">Business Hours</h5>
                                        <p className="mb-0 text-muted">Monday - Friday: 8:00 AM - 8:00 PM<br />Saturday: 9:00 AM - 6:00 PM<br />Sunday: 10:00 AM - 4:00 PM</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="mt-5">
                                <h5 className="fw-bold mb-3">Follow Us on Social Media</h5>
                                <p className="text-muted mb-3">Stay updated with our latest products, offers, and tech news!</p>
                                <div className="d-flex gap-3 mb-3">
                                    <a href="#" className="text-decoration-none">
                                        <div className="bg-danger bg-gradient text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                                            <FaInstagram size={25} />
                                        </div>
                                    </a>
                                    <a href="#" className="text-decoration-none">
                                        <div className="bg-warning bg-gradient text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                                            <FaSnapchatGhost size={25} />
                                        </div>
                                    </a>
                                    <a href="#" className="text-decoration-none">
                                        <div className="bg-dark bg-gradient text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                                            <FaTiktok size={25} />
                                        </div>
                                    </a>
                                    <a href="#" className="text-decoration-none">
                                        <div className="bg-info bg-gradient text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                                            <FaXTwitter size={25} />
                                        </div>
                                    </a>
                                </div>
                                <p className="fw-medium text-primary">@xquisitegadgets</p>
                            </div>
                        </Col>

                        <Col lg={6} className="animate-on-scroll" data-delay="200">
                            <Card className="border-0 shadow-lg contact-form-card">
                                <Card.Body className="p-5">
                                    <h3 className="fw-bold mb-4">Send us a Message</h3>
                                    <p className="text-muted mb-4">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>

                                    <Form>
                                        <Row>
                                            <Col md={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label className="fw-medium">First Name *</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter your first name" required />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label className="fw-medium">Last Name *</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter your last name" required />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-medium">Email Address *</Form.Label>
                                            <Form.Control type="email" placeholder="Enter your email address" required />
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-medium">Phone Number</Form.Label>
                                            <Form.Control type="tel" placeholder="Enter your phone number" />
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-medium">Subject *</Form.Label>
                                            <Form.Select required>
                                                <option value="">Select a subject</option>
                                                <option value="general">General Inquiry</option>
                                                <option value="sales">Product Sales</option>
                                                <option value="support">Technical Support</option>
                                                <option value="repair">Repair Services</option>
                                                <option value="warranty">Warranty Claims</option>
                                                <option value="other">Other</option>
                                            </Form.Select>
                                        </Form.Group>

                                        <Form.Group className="mb-4">
                                            <Form.Label className="fw-medium">Message *</Form.Label>
                                            <Form.Control as="textarea" rows={5} placeholder="Tell us how we can help you..." required />
                                        </Form.Group>

                                        <div className="d-grid">
                                            <Button type="submit" className="btn-custom btn-lg">
                                                <FaEnvelope className="me-2" />Send Message
                                            </Button>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* WhatsApp CTA */}
            <section className="py-5 bg-success text-white">
                <Container>
                    <div className="text-center">
                        <div className="bg-white bg-opacity-20 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px' }}>
                            <FaWhatsapp size={40} />
                        </div>
                        <h2 className="fw-bold mb-3">Need Immediate Assistance?</h2>
                        <p className="lead mb-4">Get instant support via WhatsApp! Our team responds within minutes.</p>
                        <a href="https://wa.me/256740043345" target="_blank" rel="noopener noreferrer" className="btn btn-light btn-lg">
                            <FaWhatsapp className="me-2" />Chat on WhatsApp
                        </a>
                    </div>
                </Container>
            </section>

            {/* Map Section */}
            <section className="py-5 bg-light">
                <Container>
                    <div className="text-center mb-5">
                        <h2 className="section-title fw-bold mb-3">
                            <FaMapMarkerAlt className="me-3 text-primary" />
                            Find Us in Kampala
                        </h2>
                        <p className="lead text-muted">Visit our store in the heart of Uganda's capital city</p>
                    </div>

                    <Row>
                        <Col lg={8} className="mb-4">
                            <div className="map-container position-relative rounded shadow">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7534!2d32.5822!3d0.3476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177db6c6e093e547%3A0xf86b25a6e8c0e3b1!2sKisa%20kya%20Maria%20Building%2C%20William%20Street%2C%20Kampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1234567890"
                                    width="100%"
                                    height="450"
                                    style={{ border: 0, borderRadius: '10px' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="XQUISITE GADGETS Location - Kisa kya Maria Building, William Street, Kampala"
                                ></iframe>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="location-info p-4 bg-white rounded shadow-sm h-100">
                                <h4 className="fw-bold mb-4 text-primary">
                                    <FaMapMarkerAlt className="me-2" />
                                    Store Location
                                </h4>
                                <div className="mb-4">
                                    <h6 className="fw-bold mb-2">Exact Address</h6>
                                    <p className="text-muted mb-0">
                                        Kisa kya Maria Building<br />
                                        Level 2, Room No 414<br />
                                        William Street<br />
                                        Kampala, Uganda<br />
                                        East Africa
                                    </p>
                                </div>
                                <div className="mb-4">
                                    <h6 className="fw-bold mb-2">Landmarks</h6>
                                    <ul className="list-unstyled text-muted">
                                        <li>• William Street (Main Street)</li>
                                        <li>• Kisa kya Maria Building</li>
                                        <li>• Level 2, Room 414</li>
                                        <li>• Central Business District</li>
                                        <li>• Walking distance from taxi parks</li>
                                    </ul>
                                </div>
                                <div className="mb-4">
                                    <h6 className="fw-bold mb-2">Getting Here</h6>
                                    <p className="text-muted small">
                                        We&apos;re located in the Kisa kya Maria Building on William Street,
                                        easily accessible by public transport, taxi, or private vehicle.
                                        Look for the building entrance on William Street.
                                    </p>
                                </div>
                                <div className="text-center">
                                    <Button
                                        variant="primary"
                                        className="btn-animated"
                                        onClick={() => window.open('https://maps.google.com/?q=Kisa+kya+Maria+Building+William+Street+Kampala+Uganda', '_blank')}
                                    >
                                        <FaMapMarkerAlt className="me-2" />
                                        Open in Google Maps
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Footer */}
            <footer className="bg-dark text-white py-5">
                <Container>
                    <div className="row g-4">
                        <div className="col-lg-3">
                            <div className="d-flex align-items-center mb-3">
                                <Image src="/1000046406.jpg" alt="XQUISITE GADGETS" width={40} height={40} className="footer-logo-img me-2" />
                                <span className="fw-bold">XQUISITE GADGETS</span>
                            </div>
                            <p className="text-muted">Satisfaction, Best Quality & Guarantee</p>
                            <p className="text-muted small">Your trusted partner for premium phones and accessories in Uganda.</p>
                        </div>
                        <div className="col-lg-3">
                            <h5 className="fw-bold mb-3">Quick Links</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><Link href="/" className="text-muted text-decoration-none">Home</Link></li>
                                <li className="mb-2"><Link href="/services" className="text-muted text-decoration-none">Services</Link></li>
                                <li className="mb-2"><Link href="/products" className="text-muted text-decoration-none">Products</Link></li>
                                <li className="mb-2"><Link href="/about" className="text-muted text-decoration-none">About</Link></li>
                                <li className="mb-2"><Link href="/contact" className="text-muted text-decoration-none">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h5 className="fw-bold mb-3">Our Services</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2 text-muted">Phone Sales & Repairs</li>
                                <li className="mb-2 text-muted">Accessories & Parts</li>
                                <li className="mb-2 text-muted">Technical Support</li>
                                <li className="mb-2 text-muted">Warranty Services</li>
                                <li className="mb-2 text-muted">Trade-in Programs</li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h5 className="fw-bold mb-3">Contact Info</h5>
                            <p className="text-muted mb-1"><FaPhone className="me-2" />+256 772 393 145</p>
                            <p className="text-muted mb-1"><FaPhone className="me-2" />+256 740 043 345</p>
                            <p className="text-muted mb-1"><FaEnvelope className="me-2" />eddierukundo9@gmail.com</p>
                            <p className="text-muted mb-0"><FaMapMarkerAlt className="me-2" />Kisa kya Maria Building, Level 2, Room 414, William Street, Kampala</p>
                        </div>
                    </div>
                    <hr className="my-4" />
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <p className="text-muted mb-0">&copy; 2024 XQUISITE GADGETS. All rights reserved.</p>
                        </div>
                        <div className="col-md-6 text-md-end">
                            <div className="d-flex gap-3 justify-content-md-end">
                                <Link href="https://instagram.com/xquisitegadgets" target="_blank" className="text-muted text-decoration-none">
                                    <FaInstagram size={20} />
                                </Link>
                                <Link href="https://snapchat.com/add/xquisitegadgets" target="_blank" className="text-muted text-decoration-none">
                                    <FaSnapchatGhost size={20} />
                                </Link>
                                <Link href="https://tiktok.com/@xquisitegadgets" target="_blank" className="text-muted text-decoration-none">
                                    <FaTiktok size={20} />
                                </Link>
                                <Link href="https://twitter.com/xquisitegadgets" target="_blank" className="text-muted text-decoration-none">
                                    <FaXTwitter size={20} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </footer>
        </div>
    );
}

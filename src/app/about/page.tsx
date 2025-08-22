'use client';

import { Navbar, Container, Nav, NavbarBrand, NavLink, Row, Col, Card } from 'react-bootstrap';
import { FaMobileAlt, FaHeadphones, FaTools, FaShieldAlt, FaTabletAlt, FaChargingStation, FaStar, FaHandshake, FaClock, FaUser, FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaSnapchatGhost, FaTiktok, FaArrowRight, FaCheckCircle, FaArrowLeft, FaAward, FaUsers, FaGlobe, FaHeart } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function About() {
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
                            <NavLink href="/about" className="fw-medium nav-link-animated active">About</NavLink>
                            <NavLink href="/contact" className="fw-medium nav-link-animated">Contact</NavLink>
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
                        <h1 className="display-4 fw-bold mb-4">About XQUISITE GADGETS</h1>
                        <p className="lead">Your Trusted Partner in Technology Since 2020</p>
                    </div>
                </Container>
            </section>

            {/* Company Story */}
            <section className="py-5">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="animate-on-scroll">
                            <h2 className="section-title fw-bold">Our Story</h2>
                            <p className="lead mb-4">XQUISITE GADGETS was founded with a simple mission: to provide premium technology products and exceptional service to our community in Kampala, Uganda.</p>
                            <p className="mb-4">What started as a small phone shop has grown into a comprehensive technology solutions provider, serving thousands of satisfied customers across Uganda. Our journey has been driven by our commitment to quality, innovation, and customer satisfaction.</p>
                            <p className="mb-4">Today, we&apos;re proud to be one of the most trusted names in mobile technology, offering the latest smartphones, tablets, accessories, and professional repair services.</p>

                            <div className="row g-3 mt-4">
                                <div className="col-6">
                                    <div className="text-center p-3 bg-light rounded">
                                        <h3 className="fw-bold text-primary mb-1">4+</h3>
                                        <p className="mb-0 text-muted">Years of Excellence</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="text-center p-3 bg-light rounded">
                                        <h3 className="fw-bold text-success mb-1">1000+</h3>
                                        <p className="mb-0 text-muted">Happy Customers</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="text-center animate-on-scroll">
                            <Image src="/1000046406.jpg" alt="XQUISITE GADGETS" width={400} height={400} className="about-logo floating-animation" />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Mission & Vision */}
            <section className="py-5 bg-light">
                <Container>
                    <Row className="g-4">
                        <Col lg={6} className="animate-on-scroll">
                            <Card className="h-100 border-0 shadow-sm">
                                <Card.Body className="p-4 text-center">
                                    <div className="bg-primary bg-gradient text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                                        <FaGlobe size={30} />
                                    </div>
                                    <h3 className="fw-bold mb-3">Our Mission</h3>
                                    <p className="text-muted">To provide cutting-edge technology solutions while maintaining the highest standards of quality, service, and customer satisfaction. We strive to make premium technology accessible to everyone in Uganda.</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={6} className="animate-on-scroll" data-delay="200">
                            <Card className="h-100 border-0 shadow-sm">
                                <Card.Body className="p-4 text-center">
                                    <div className="bg-success bg-gradient text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                                        <FaAward size={30} />
                                    </div>
                                    <h3 className="fw-bold mb-3">Our Vision</h3>
                                    <p className="text-muted">To become the leading technology retailer in East Africa, known for innovation, reliability, and exceptional customer experience. We envision a future where quality technology is accessible to all.</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Core Values */}
            <section className="py-5">
                <Container>
                    <h2 className="text-center section-title fw-bold mb-5">Our Core Values</h2>
                    <Row className="g-4">
                        <Col md={4} className="animate-on-scroll">
                            <div className="text-center p-4">
                                <div className="bg-warning bg-gradient text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3 mx-auto" style={{ width: '80px', height: '80px' }}>
                                    <FaStar size={30} />
                                </div>
                                <h4 className="fw-bold mb-3">Quality Excellence</h4>
                                <p className="text-muted">We never compromise on quality. Every product we sell meets the highest standards, and every service we provide is delivered with excellence.</p>
                            </div>
                        </Col>
                        <Col md={4} className="animate-on-scroll" data-delay="200">
                            <div className="text-center p-4">
                                <div className="bg-primary bg-gradient text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3 mx-auto" style={{ width: '80px', height: '80px' }}>
                                    <FaHeart size={30} />
                                </div>
                                <h4 className="fw-bold mb-3">Customer First</h4>
                                <p className="text-muted">Our customers are at the heart of everything we do. We listen, understand, and exceed their expectations with personalized service and support.</p>
                            </div>
                        </Col>
                        <Col md={4} className="animate-on-scroll" data-delay="400">
                            <div className="text-center p-4">
                                <div className="bg-success bg-gradient text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3 mx-auto" style={{ width: '80px', height: '80px' }}>
                                    <FaHandshake size={30} />
                                </div>
                                <h4 className="fw-bold mb-3">Integrity & Trust</h4>
                                <p className="text-muted">We build lasting relationships through honesty, transparency, and reliability. Our word is our bond, and trust is our foundation.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Team Section */}
            <section className="py-5 bg-light">
                <Container>
                    <h2 className="text-center section-title fw-bold mb-5">Meet Our Team</h2>
                    <Row className="g-4">
                        <Col lg={6} className="animate-on-scroll">
                            <Card className="border-0 shadow-sm">
                                <Card.Body className="p-4">
                                    <Row className="align-items-center">
                                        <Col md={4} className="text-center mb-3 mb-md-0">
                                            <div className="bg-primary bg-gradient text-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '100px', height: '100px' }}>
                                                <FaUser size={40} />
                                            </div>
                                        </Col>
                                        <Col md={8}>
                                            <h4 className="fw-bold mb-2">Rukundo Edmond</h4>
                                            <p className="text-primary fw-medium mb-2">CEO & Founder</p>
                                            <p className="text-muted mb-3">With over 4 years of experience in the technology industry, Edmond leads XQUISITE GADGETS with vision and dedication. His passion for technology and commitment to customer satisfaction drives our company forward.</p>
                                            <div className="d-flex gap-2">
                                                <FaPhone className="text-muted" />
                                                <span className="text-muted small">+256 772 393 145</span>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={6} className="animate-on-scroll" data-delay="200">
                            <Card className="border-0 shadow-sm">
                                <Card.Body className="p-4">
                                    <Row className="align-items-center">
                                        <Col md={4} className="text-center mb-3 mb-md-0">
                                            <div className="bg-success bg-gradient text-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '100px', height: '100px' }}>
                                                <FaUsers size={40} />
                                            </div>
                                        </Col>
                                        <Col md={8}>
                                            <h4 className="fw-bold mb-2">Our Expert Team</h4>
                                            <p className="text-success fw-medium mb-2">Sales & Technical Support</p>
                                            <p className="text-muted mb-3">Our dedicated team of technology experts and customer service professionals are here to provide you with the best advice, support, and solutions for all your technology needs.</p>
                                            <div className="d-flex gap-2">
                                                <FaEnvelope className="text-muted" />
                                                <span className="text-muted small">eddierukundo9@gmail.com</span>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Why Choose Us */}
            <section className="py-5">
                <Container>
                    <h2 className="text-center section-title fw-bold mb-5">Why Choose XQUISITE GADGETS?</h2>
                    <Row className="g-4">
                        <Col md={3} className="text-center animate-on-scroll">
                            <div className="bg-primary bg-gradient text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3 mx-auto" style={{ width: '80px', height: '80px' }}>
                                <FaShieldAlt size={30} />
                            </div>
                            <h5 className="fw-bold mb-3">Genuine Products</h5>
                            <p className="text-muted">We only stock authentic products from authorized distributors with full warranty coverage.</p>
                        </Col>
                        <Col md={3} className="text-center animate-on-scroll" data-delay="200">
                            <div className="bg-success bg-gradient text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3 mx-auto" style={{ width: '80px', height: '80px' }}>
                                <FaTools size={30} />
                            </div>
                            <h5 className="fw-bold mb-3">Expert Service</h5>
                            <p className="text-muted">Our certified technicians provide professional repair services with quick turnaround times.</p>
                        </Col>
                        <Col md={3} className="text-center animate-on-scroll" data-delay="400">
                            <div className="bg-warning bg-gradient text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3 mx-auto" style={{ width: '80px', height: '80px' }}>
                                <FaClock size={30} />
                            </div>
                            <h5 className="fw-bold mb-3">Reliable Support</h5>
                            <p className="text-muted">24/7 customer support and comprehensive after-sales service for your peace of mind.</p>
                        </Col>
                        <Col md={3} className="text-center animate-on-scroll" data-delay="600">
                            <div className="bg-info bg-gradient text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3 mx-auto" style={{ width: '80px', height: '80px' }}>
                                <FaHandshake size={30} />
                            </div>
                            <h5 className="fw-bold mb-3">Customer Focus</h5>
                            <p className="text-muted">Personalized service and expert advice to help you make the best technology choices.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Call to Action */}
            <section className="py-5 bg-primary text-white">
                <Container>
                    <div className="text-center">
                        <h2 className="fw-bold mb-4">Ready to Experience Excellence?</h2>
                        <p className="lead mb-4">Visit our store or contact us to discover why XQUISITE GADGETS is the trusted choice for technology in Uganda.</p>
                        <div className="d-flex gap-3 justify-content-center flex-wrap">
                            <Link href="/contact" className="btn btn-light btn-lg">
                                <FaPhone className="me-2" />Contact Us
                            </Link>
                            <Link href="/products" className="btn btn-outline-light btn-lg">
                                <FaMobileAlt className="me-2" />View Products
                            </Link>
                        </div>
                    </div>
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

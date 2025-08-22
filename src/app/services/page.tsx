'use client';

import { Navbar, Container, Nav, NavbarBrand, NavLink } from 'react-bootstrap';
import { FaMobileAlt, FaHeadphones, FaTools, FaShieldAlt, FaStar, FaHandshake, FaClock, FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaSnapchatGhost, FaTiktok, FaCheckCircle, FaArrowLeft } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Services() {
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
                            <NavLink href="/services" className="fw-medium nav-link-animated active">Services</NavLink>
                            <NavLink href="/products" className="fw-medium nav-link-animated">Products</NavLink>
                            <NavLink href="/about" className="fw-medium nav-link-animated">About</NavLink>
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
                        <h1 className="display-4 fw-bold mb-4">Our Services</h1>
                        <p className="lead">Comprehensive technology solutions for all your device needs</p>
                    </div>
                </Container>
            </section>

            {/* Services Section */}
            <section className="py-5 bg-light">
                <Container>
                    <div className="row g-5">
                        <div className="col-lg-6 animate-on-scroll">
                            <div className="card service-card h-100 border-0 shadow-lg">
                                <div className="card-body p-5">
                                    <div className="bg-primary bg-gradient text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4 service-icon-container" style={{ width: '100px', height: '100px' }}>
                                        <FaMobileAlt size={40} className="service-icon" />
                                    </div>
                                    <h3 className="fw-bold mb-4">Phone Sales & Consultation</h3>
                                    <p className="text-muted mb-4">Expert guidance in choosing the perfect smartphone for your needs. We offer the latest models from all major brands with competitive pricing and flexible payment options.</p>

                                    <h5 className="fw-bold mb-3">What We Offer:</h5>
                                    <ul className="list-unstyled mb-4">
                                        <li className="mb-2"><FaCheckCircle className="text-success me-2" />Latest smartphone models</li>
                                        <li className="mb-2"><FaCheckCircle className="text-success me-2" />Expert product consultation</li>
                                        <li className="mb-2"><FaCheckCircle className="text-success me-2" />Competitive pricing</li>
                                        <li className="mb-2"><FaCheckCircle className="text-success me-2" />Flexible payment plans</li>
                                        <li className="mb-2"><FaCheckCircle className="text-success me-2" />Trade-in services</li>
                                    </ul>

                                    <div className="service-features">
                                        <span className="feature-tag">Latest Models</span>
                                        <span className="feature-tag">Best Prices</span>
                                        <span className="feature-tag">Expert Advice</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 animate-on-scroll" data-delay="200">
                            <div className="card service-card h-100 border-0 shadow-lg">
                                <div className="card-body p-5">
                                    <div className="bg-success bg-gradient text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4 service-icon-container" style={{ width: '100px', height: '100px' }}>
                                        <FaHeadphones size={40} className="service-icon" />
                                    </div>
                                    <h3 className="fw-bold mb-4">Premium Accessories</h3>
                                    <p className="text-muted mb-4">Complete your device setup with our premium selection of accessories. From protective cases to high-quality audio equipment, we have everything you need.</p>

                                    <h5 className="fw-bold mb-3">Accessories Include:</h5>
                                    <ul className="list-unstyled mb-4">
                                        <li className="mb-2"><FaCheckCircle className="text-success me-2" />Phone cases & screen protectors</li>
                                        <li className="mb-2"><FaCheckCircle className="text-success me-2" />Charging cables & adapters</li>
                                        <li className="mb-2"><FaCheckCircle className="text-success me-2" />Wireless headphones & earbuds</li>
                                        <li className="mb-2"><FaCheckCircle className="text-success me-2" />Car mounts & holders</li>
                                        <li className="mb-2"><FaCheckCircle className="text-success me-2" />Power banks & wireless chargers</li>
                                    </ul>

                                    <div className="service-features">
                                        <span className="feature-tag">Premium Quality</span>
                                        <span className="feature-tag">Wide Selection</span>
                                        <span className="feature-tag">Genuine Products</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 animate-on-scroll" data-delay="400">
                            <div className="card service-card h-100 border-0 shadow-lg">
                                <div className="card-body p-5">
                                    <div className="bg-warning bg-gradient text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4 service-icon-container" style={{ width: '100px', height: '100px' }}>
                                        <FaTools size={40} className="service-icon" />
                                    </div>
                                    <h3 className="fw-bold mb-4">Professional Repair Services</h3>
                                    <p className="text-muted mb-4">Our certified technicians provide fast, reliable repair services for all types of mobile devices. We use genuine parts and offer warranty on all repairs.</p>

                                    <h5 className="fw-bold mb-3">Repair Services:</h5>
                                    <ul className="list-unstyled mb-4">
                                        <li className="mb-2"><FaCheckCircle className="text-success me-2" />Screen replacement</li>
                                        <li className="mb-2"><FaCheckCircle className="text-success me-2" />Battery replacement</li>
                                        <li className="mb-2"><FaCheckCircle className="text-success me-2" />Water damage repair</li>
                                        <li className="mb-2"><FaCheckCircle className="text-success me-2" />Software issues</li>
                                        <li className="mb-2"><FaCheckCircle className="text-success me-2" />Hardware repairs</li>
                                    </ul>

                                    <div className="service-features">
                                        <span className="feature-tag">Expert Technicians</span>
                                        <span className="feature-tag">Quick Service</span>
                                        <span className="feature-tag">Warranty Included</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 animate-on-scroll" data-delay="600">
                            <div className="card service-card h-100 border-0 shadow-lg">
                                <div className="card-body p-5">
                                    <div className="bg-info bg-gradient text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4 service-icon-container" style={{ width: '100px', height: '100px' }}>
                                        <FaShieldAlt size={40} className="service-icon" />
                                    </div>
                                    <h3 className="fw-bold mb-4">Warranty & Support</h3>
                                    <p className="text-muted mb-4">Comprehensive warranty coverage and ongoing customer support. We stand behind our products and services with reliable after-sales support.</p>

                                    <h5 className="fw-bold mb-3">Support Features:</h5>
                                    <ul className="list-unstyled mb-4">
                                        <li className="mb-2"><FaCheckCircle className="text-success me-2" />Full warranty coverage</li>
                                        <li className="mb-2"><FaCheckCircle className="text-success me-2" />24/7 customer support</li>
                                        <li className="mb-2"><FaCheckCircle className="text-success me-2" />Extended warranty options</li>
                                        <li className="mb-2"><FaCheckCircle className="text-success me-2" />Technical assistance</li>
                                        <li className="mb-2"><FaCheckCircle className="text-success me-2" />Product registration</li>
                                    </ul>

                                    <div className="service-features">
                                        <span className="feature-tag">Full Warranty</span>
                                        <span className="feature-tag">24/7 Support</span>
                                        <span className="feature-tag">Peace of Mind</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Why Choose Us */}
            <section className="py-5">
                <Container>
                    <h2 className="text-center section-title fw-bold mb-5">Why Choose XQUISITE GADGETS?</h2>
                    <div className="row g-4">
                        <div className="col-md-4 text-center animate-on-scroll">
                            <div className="bg-primary bg-gradient text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                                <FaStar size={30} />
                            </div>
                            <h4 className="fw-bold mb-3">Quality Assurance</h4>
                            <p className="text-muted">We only stock genuine products from authorized distributors, ensuring the highest quality and reliability.</p>
                        </div>
                        <div className="col-md-4 text-center animate-on-scroll" data-delay="200">
                            <div className="bg-success bg-gradient text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                                <FaHandshake size={30} />
                            </div>
                            <h4 className="fw-bold mb-3">Customer First</h4>
                            <p className="text-muted">Your satisfaction is our priority. We provide personalized service and expert advice to meet your specific needs.</p>
                        </div>
                        <div className="col-md-4 text-center animate-on-scroll" data-delay="400">
                            <div className="bg-warning bg-gradient text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                                <FaClock size={30} />
                            </div>
                            <h4 className="fw-bold mb-3">Reliable Service</h4>
                            <p className="text-muted">Fast turnaround times, professional service, and ongoing support to keep your devices running smoothly.</p>
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

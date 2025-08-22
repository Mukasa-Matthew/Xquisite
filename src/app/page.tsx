'use client';

import { Navbar, Container, Nav, NavbarBrand, NavLink } from 'react-bootstrap';
import { FaMobileAlt, FaHeadphones, FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaSnapchatGhost, FaTiktok, FaArrowRight, FaTabletAlt, FaChargingStation } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Scroll animation observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    // Observe all elements with animate-on-scroll class
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
            <Image
              src="/1000046406.jpg"
              alt="XQUISITE GADGETS Logo"
              width={50}
              height={50}
              className="logo-img me-2 animate-logo"
              priority
              loading="eager"
            />
            <span className="text-primary fw-bold animate-text">XQUISITE GADGETS</span>
          </NavbarBrand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink href="/" className="fw-medium nav-link-animated">Home</NavLink>
              <NavLink href="/services" className="fw-medium nav-link-animated">Services</NavLink>
              <NavLink href="/products" className="fw-medium nav-link-animated">Products</NavLink>
              <NavLink href="/about" className="fw-medium nav-link-animated">About</NavLink>
              <NavLink href="/contact" className="fw-medium nav-link-animated">Contact</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section id="home" className="hero-gradient text-white py-5 hero-section" style={{ paddingTop: '100px' }}>
        <div className="hero-bg-animation"></div>
        <Container>
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6 animate-slide-left">
              <h1 className="display-4 fw-bold mb-4 hero-title">
                Welcome to <span className="text-warning animate-highlight">XQUISITE GADGETS</span>
              </h1>
              <p className="lead mb-4 hero-subtitle">Your Premier Destination for Premium Phones & Accessories</p>
              <p className="mb-4 hero-description">Discover the latest smartphones, tablets, and accessories with our commitment to quality, service, and customer satisfaction.</p>
              <div className="d-flex gap-3 flex-wrap">
                <a href="/products" className="btn btn-warning btn-lg px-4 py-3 fw-bold btn-animated">
                  Explore Products <FaArrowRight className="ms-2" />
                </a>
                <a href="/contact" className="btn btn-outline-light btn-lg px-4 py-3 fw-bold btn-animated">
                  Get in Touch
                </a>
              </div>
            </div>
            <div className="col-lg-6 text-center animate-slide-right">
              <Image
                src="/1000046406.jpg"
                alt="XQUISITE GADGETS"
                width={500}
                height={500}
                className="hero-image floating-animation"
                priority
                loading="eager"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Products Preview */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center section-title fw-bold animate-on-scroll">Featured Products</h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3 animate-on-scroll" data-delay="0">
              <div className="card product-card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-primary bg-gradient text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3 product-icon-container" style={{ width: '100px', height: '100px' }}>
                    <FaMobileAlt size={40} className="product-icon" />
                  </div>
                  <h4 className="fw-bold mb-3">Smartphones</h4>
                  <p className="text-muted mb-3">Latest models from Apple, Samsung, Huawei, and other leading brands</p>
                  <div className="d-flex flex-wrap gap-2 justify-content-center">
                    <span className="badge bg-primary">5G Ready</span>
                    <span className="badge bg-success">High Performance</span>
                    <span className="badge bg-warning">Premium Quality</span>
                  </div>
                  <a href="/products" className="btn btn-outline-primary mt-3">View All</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 animate-on-scroll" data-delay="200">
              <div className="card product-card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-success bg-gradient text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3 product-icon-container" style={{ width: '100px', height: '100px' }}>
                    <FaTabletAlt size={40} className="product-icon" />
                  </div>
                  <h4 className="fw-bold mb-3">Tablets</h4>
                  <p className="text-muted mb-3">Portable tablets for work, entertainment, and productivity</p>
                  <div className="d-flex flex-wrap gap-2 justify-content-center">
                    <span className="badge bg-primary">Lightweight</span>
                    <span className="badge bg-success">Long Battery</span>
                    <span className="badge bg-warning">HD Display</span>
                  </div>
                  <a href="/products" className="btn btn-outline-success mt-3">View All</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 animate-on-scroll" data-delay="400">
              <div className="card product-card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-warning bg-gradient text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3 product-icon-container" style={{ width: '100px', height: '100px' }}>
                    <FaHeadphones size={40} className="product-icon" />
                  </div>
                  <h4 className="fw-bold mb-3">Audio Accessories</h4>
                  <p className="text-muted mb-3">Premium headphones, earbuds, and speakers for immersive sound</p>
                  <div className="d-flex flex-wrap gap-2 justify-content-center">
                    <span className="badge bg-primary">Noise Cancelling</span>
                    <span className="badge bg-success">Wireless</span>
                    <span className="badge bg-warning">High Quality</span>
                  </div>
                  <a href="/products" className="btn btn-outline-warning mt-3">View All</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 animate-on-scroll" data-delay="600">
              <div className="card product-card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-info bg-gradient text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3 product-icon-container" style={{ width: '100px', height: '100px' }}>
                    <FaChargingStation size={40} className="product-icon" />
                  </div>
                  <h4 className="fw-bold mb-3">Charging Solutions</h4>
                  <p className="text-muted mb-3">Fast chargers, wireless chargers, and power banks</p>
                  <div className="d-flex flex-wrap gap-2 justify-content-center">
                    <span className="badge bg-primary">Fast Charging</span>
                    <span className="badge bg-success">Portable</span>
                    <span className="badge bg-warning">Universal</span>
                  </div>
                  <a href="/products" className="btn btn-outline-info mt-3">View All</a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* About Preview */}
      <section className="py-5">
        <Container>
          <div className="row align-items-center">
            <div className="col-lg-6 animate-on-scroll">
              <h2 className="section-title fw-bold">About XQUISITE GADGETS</h2>
              <p className="lead mb-4">XQUISITE GADGETS is your trusted partner in the world of technology. We specialize in providing premium phones, tablets, and accessories with a commitment to excellence and customer satisfaction.</p>
              <p className="mb-4">Our mission is to offer the latest technology products while maintaining the highest standards of quality and service. We believe in building long-term relationships with our customers through trust, reliability, and exceptional support.</p>
              <a href="/about" className="btn btn-custom btn-lg">Learn More</a>
            </div>
            <div className="col-lg-6 text-center animate-on-scroll">
              <Image src="/1000046406.jpg" alt="XQUISITE GADGETS" width={250} height={250} className="about-logo floating-animation" />
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-5">
        <Container>
          <div className="row g-4">
            <div className="col-lg-3 mb-4">
              <Link href="/" className="navbar-brand d-flex align-items-center mb-3">
                <Image
                  src="/1000046406.jpg"
                  alt="XQUISITE GADGETS Logo"
                  width={50}
                  height={50}
                  className="me-2 rounded-circle footer-logo-img"
                  loading="lazy"
                />
                <span className="fw-bold text-white fs-4">XQUISITE GADGETS</span>
              </Link>
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

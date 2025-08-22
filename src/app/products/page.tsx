'use client';

import { Navbar, Container, Nav, NavbarBrand, NavLink, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { FaMobileAlt, FaHeadphones, FaTabletAlt, FaStar, FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaSnapchatGhost, FaTiktok, FaArrowLeft, FaShoppingCart, FaHeart } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Products() {
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

    const smartphones = [
        {
            id: 1,
            name: "Samsung Galaxy S24 Ultra",
            price: "UGX 4,500,000",
            image: "https://images.samsung.com/is/image/samsung/p6pim/latin/2308/gallery/latin-galaxy-s24-s928-sm-s928bzgcgto-534866730?$1304_1038_PNG$",
            specs: ["6.8\" QHD+ Display", "200MP Camera", "S Pen", "5000mAh Battery"],
            brand: "Samsung",
            badge: "New"
        },
        {
            id: 2,
            name: "iPhone 15 Pro Max",
            price: "UGX 4,800,000",
            image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693009284548",
            specs: ["6.7\" Super Retina XDR", "A17 Pro Chip", "48MP Camera", "Titanium Design"],
            brand: "Apple",
            badge: "Popular"
        },
        {
            id: 3,
            name: "Google Pixel 8 Pro",
            price: "UGX 3,800,000",
            image: "https://lh3.googleusercontent.com/3TBrL41bQBOAhwXeCm8Yi4QlDtC9lmq5WiJBJN_OD_svHdyeF5fTfXHmH5m_1g2XegXBB5UH_ATWtba4-3b8Tg=rw-e365-w1440",
            specs: ["6.7\" OLED Display", "Google Tensor G3", "50MP Camera", "AI Features"],
            brand: "Google",
            badge: "Best Camera"
        },
        {
            id: 4,
            name: "OnePlus 12",
            price: "UGX 3,200,000",
            image: "https://image.oneplus.com/india/images/2024/01/23/1705996800000/OnePlus-12-5G-Green-Color.png",
            specs: ["6.82\" QHD+ Display", "Snapdragon 8 Gen 3", "50MP Camera", "5400mAh Battery"],
            brand: "OnePlus",
            badge: "Value"
        }
    ];

    const tablets = [
        {
            id: 5,
            name: "iPad Pro 12.9\"",
            price: "UGX 4,200,000",
            image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202104?wid=940&hei=1112&fmt=p-jpg&qlt=95&.v=1617126613000",
            specs: ["12.9\" Liquid Retina XDR", "M2 Chip", "Pro Camera System", "Thunderbolt 4"],
            brand: "Apple",
            badge: "Premium"
        },
        {
            id: 6,
            name: "Samsung Galaxy Tab S9 Ultra",
            price: "UGX 4,500,000",
            image: "https://images.samsung.com/is/image/samsung/p6pim/latin/2307/gallery/latin-galaxy-tab-s9-ultra-wifi-sm-x710nzaato-534866730?$1304_1038_PNG$",
            specs: ["14.6\" AMOLED Display", "Snapdragon 8 Gen 2", "S Pen Included", "11200mAh Battery"],
            brand: "Samsung",
            badge: "Large Screen"
        }
    ];

    const accessories = [
        {
            id: 7,
            name: "AirPods Pro 2nd Gen",
            price: "UGX 950,000",
            image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1660803972361",
            specs: ["Active Noise Cancellation", "Spatial Audio", "USB-C Charging", "Find My Support"],
            brand: "Apple",
            badge: "Wireless"
        },
        {
            id: 8,
            name: "Samsung Galaxy Buds2 Pro",
            price: "UGX 850,000",
            image: "https://images.samsung.com/is/image/samsung/p6pim/latin/2208/gallery/latin-galaxy-buds2-pro-r510-sm-r510nzaato-534866730?$1304_1038_PNG$",
            specs: ["Active Noise Cancellation", "360 Audio", "IPX7 Waterproof", "29 Hour Battery"],
            brand: "Samsung",
            badge: "Premium"
        },
        {
            id: 9,
            name: "MagSafe Charger",
            price: "UGX 150,000",
            image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MHXH3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1660663771000",
            specs: ["15W Fast Charging", "MagSafe Compatible", "Compact Design", "LED Indicator"],
            brand: "Apple",
            badge: "Fast Charging"
        }
    ];

    const renderProductCard = (product: {
        id: number;
        name: string;
        price: string;
        image: string;
        specs: string[];
        brand: string;
        badge: string;
    }) => (
        <Col key={product.id} lg={3} md={6} className="mb-4 animate-on-scroll">
            <Card className="product-card h-100 border-0 shadow-sm">
                <div className="position-relative">
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={300}
                        height={250}
                        className="card-img-top product-image"
                        style={{ objectFit: 'cover', height: '250px' }}
                        unoptimized={true}
                        loading={product.id <= 4 ? "eager" : "lazy"}
                        priority={product.id <= 4}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <Badge
                        bg={product.badge === 'New' ? 'success' : product.badge === 'Popular' ? 'primary' : 'warning'}
                        className="position-absolute top-0 end-0 m-2"
                    >
                        {product.badge}
                    </Badge>
                    <Button
                        variant="outline-light"
                        size="sm"
                        className="position-absolute top-0 start-0 m-2 heart-btn"
                    >
                        <FaHeart />
                    </Button>
                </div>
                <Card.Body className="d-flex flex-column">
                    <div className="mb-2">
                        <Badge bg="secondary" className="me-2">{product.brand}</Badge>
                    </div>
                    <h5 className="fw-bold mb-2">{product.name}</h5>
                    <p className="text-muted small mb-3">{product.specs.join(' • ')}</p>
                    <div className="mt-auto">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <span className="h4 fw-bold text-primary mb-0">{product.price}</span>
                            <div className="text-warning">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                        <div className="d-grid gap-2">
                            <Button variant="primary" className="btn-animated">
                                <FaShoppingCart className="me-2" />Add to Cart
                            </Button>
                            <Button variant="outline-primary" size="sm">
                                View Details
                            </Button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );

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
                            <NavLink href="/products" className="fw-medium nav-link-animated active">Products</NavLink>
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
                        <h1 className="display-4 fw-bold mb-4">Our Products</h1>
                        <p className="lead">Discover the latest smartphones, tablets, and premium accessories</p>
                    </div>
                </Container>
            </section>

            {/* Smartphones Section */}
            <section className="py-5">
                <Container>
                    <h2 className="section-title fw-bold mb-5 text-center">
                        <FaMobileAlt className="me-3 text-primary" />
                        Latest Smartphones
                    </h2>
                    <Row>
                        {smartphones.map(renderProductCard)}
                    </Row>
                </Container>
            </section>

            {/* Tablets Section */}
            <section className="py-5 bg-light">
                <Container>
                    <h2 className="section-title fw-bold mb-5 text-center">
                        <FaTabletAlt className="me-3 text-success" />
                        Premium Tablets
                    </h2>
                    <Row>
                        {tablets.map(renderProductCard)}
                    </Row>
                </Container>
            </section>

            {/* Accessories Section */}
            <section className="py-5">
                <Container>
                    <h2 className="section-title fw-bold mb-5 text-center">
                        <FaHeadphones className="me-3 text-warning" />
                        Premium Accessories
                    </h2>
                    <Row>
                        {accessories.map(renderProductCard)}
                    </Row>
                </Container>
            </section>

            {/* Call to Action */}
            <section className="py-5 bg-primary text-white">
                <Container>
                    <div className="text-center">
                        <h2 className="fw-bold mb-4">Need Help Choosing?</h2>
                        <p className="lead mb-4">Our expert team is here to help you find the perfect device for your needs.</p>
                        <div className="d-flex gap-3 justify-content-center flex-wrap">
                            <Link href="/contact" className="btn btn-light btn-lg">
                                <FaPhone className="me-2" />Contact Us
                            </Link>
                            <Link href="/services" className="btn btn-outline-light btn-lg">
                                <FaTools className="me-2" />Our Services
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

import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaPaperPlane } from "react-icons/fa";
import api from "@/services/api";

const Footer = () => {
    const [cities, setCities] = useState([]);
    const [activeSection, setActiveSection] = useState(null);

    const getCities = async () => {
        try {
            const res = await api.get("popular-cities");
            setCities(res?.data?.data || []);
        } catch (error) {
            console.error("Failed to fetch cities:", error);
        }
    };

    useEffect(() => {
        getCities();
    }, []);

    const handleSectionClick = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    return (
        <div className="footer">
            <div className="content_wrap">
                <Row>
                    <Col className="footer_cells" lg={6} md={12} sm={18} xs={24}>
                        <Image src="/logo.webp" alt="Mobilez Market Logo" width={180} height={80} />
                        <p>
                            Mobilez Market is Pakistan's #1 buy-and-sell marketplace for smartphones, tablets, and more.
                            <br />
                            Explore the best devices and deals only with Mobilez Market!
                        </p>
                        <ul className="socialIcon">
                            <li>
                                <a href="https://www.facebook.com/MobilezMarket" target="_blank" rel="noopener noreferrer">
                                    <FaFacebookF />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/mobilezmarket" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram />
                                </a>
                            </li>
                            <li>
                                <a href="https://pk.linkedin.com/company/mobilezmarket" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/channel/UC23MWpWJzlvO9xW258H3meA" target="_blank" rel="noopener noreferrer">
                                    <FaYoutube />
                                </a>
                            </li>
                        </ul>
                    </Col>

                    <Col className="footer_cells" lg={4} md={6} sm={8} xs={24}>
                        <div>
                            <h3 className="text_primary" onClick={() => handleSectionClick('useful-links')}>
                                Useful Links
                            </h3>
                            <ul className={activeSection === 'useful-links' ? 'active' : ''}>
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <Link href="/about">About Us</Link>
                                </li>
                                <li>
                                    <Link href="/blogs">Blog</Link>
                                </li>
                                <li>
                                    <Link href="/contact">Contact Us</Link>
                                </li>
                                <li>
                                    <Link href="/devices">Find My Device</Link>
                                </li>
                                <li>
                                    <Link href="/careers">Careers</Link>
                                </li>
                                <li>
                                    <Link href="/videos">Videos</Link>
                                </li>
                                <li>
                                    <Link href="/privacy-policy">Privacy</Link>
                                </li>
                                <li>
                                    <Link href="/terms-conditions">Terms & Conditions</Link>
                                </li>
                            </ul>
                        </div>
                    </Col>

                    <Col className="footer_cells" lg={4} md={6} sm={8} xs={24}>
                        <div>
                            <h3 className="text_primary" onClick={() => handleSectionClick('trending-categories')}>
                                Trending Categories
                            </h3>
                            <ul className={activeSection === 'trending-categories' ? 'active' : ''}>
                                <li>
                                    <Link href="/devices/cat-mobile">Mobile Phones</Link>
                                </li>
                                <li>
                                    <Link href="/devices/cat-tablet">Tablets</Link>
                                </li>
                                <li>
                                    <Link href="/devices/cat-watch">Smart Watches</Link>
                                </li>
                                <li>
                                    <Link href="/devices/cat-accessories">Mobile Accessories</Link>
                                </li>
                            </ul>
                        </div>
                    </Col>

                    <Col className="footer_cells" lg={3} md={6} sm={8} xs={24}>
                        <div>
                            <h3 className="text_primary" onClick={() => handleSectionClick('cities')}>Cities</h3>
                            <ul className={activeSection === 'cities' ? 'active' : ''}>
                                {cities.length > 0 ? (
                                    cities.map((city) => (
                                        <li key={city?.city}>
                                            <Link href={'/devices/c-' + city?.city}>{city?.city}</Link>
                                        </li>
                                    ))
                                ) : (
                                    <li>No cities available</li>
                                )}
                            </ul>
                        </div>
                    </Col>

                    <Col className="footer_cells" lg={7} md={12} sm={18} xs={24}>
                        <h3 className="text_primary no-border">Subscribe to our Newsletter</h3>
                        <p>Be the first to get exclusive offers and the latest news</p>
                        <div className="newsLetterCont">
                            <div className="inputCont">
                                <input type="email" placeholder="Enter your Email" />
                                <button>
                                    <FaPaperPlane />
                                </button>
                            </div>
                        </div>

                        <h3 className="text_primary no-border">Download our App Now</h3>
                        <div className="btnCont">
                            <Link
                                href={`https://play.google.com/store/apps/details?id=com.wizard.mobilez&pcampaignid=web_share`}
                                target="_blank" className="downloadBtn google"
                            >
                                <Image
                                    src="/google-play.svg"
                                    alt="Google Play Store Button"
                                    width={150}
                                    height={50}
                                />
                            </Link>
                            <Link
                                href={`https://apps.apple.com/pk/app/mobilez-market/id6450546695`}
                                target="_blank" className="downloadBtn apple"
                            >
                                <Image
                                    src="/apple-store.svg"
                                    alt="Apple App Store Button"
                                    width={150}
                                    height={50}
                                />
                            </Link>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default React.memo(Footer);

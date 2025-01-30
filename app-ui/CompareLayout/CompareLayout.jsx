import { Col, Row } from "antd";
import Image from "next/image";
import React from "react";
import { BiSearch } from "react-icons/bi";

function CompareLayout() {
  return (
    <section className="compareSec">
      <div className="compareCont">
        <Row className="compareRow">
          <Col lg={3}></Col>
          <Col lg={7}>
            <div className="searchInputCont">
              <label for="">Compare with</label>
              <div className="inputCont">
                <input
                  placeholder="Search Device"
                  type="search"
                  name=""
                  id=""
                />
                <BiSearch />
              </div>
            </div>
          </Col>
          <Col lg={7}>
            <div className="searchInputCont">
              <label for="">Compare with</label>
              <div className="inputCont">
                <input
                  placeholder="Search Device"
                  type="search"
                  name=""
                  id=""
                />
                <BiSearch />
              </div>
            </div>
          </Col>
          <Col lg={7}>
            <div className="searchInputCont">
              <label for="">Compare with</label>
              <div className="inputCont">
                <input
                  placeholder="Search Device"
                  type="search"
                  name=""
                  id=""
                />
                <BiSearch />
              </div>
            </div>
          </Col>
        </Row>
        <Row className="compareRow">
          <Col lg={3}></Col>
          <Col lg={7}>
            <div className="displayCont">
              <h2>Xiaomi Redmi note 14</h2>
              <figure>
                <Image
                  src={"/specs/mobile.png"}
                  width={350}
                  height={350}
                  alt="mobile image"
                />
              </figure>
            </div>
          </Col>
          <Col lg={7}>
            <div className="displayCont">
              <h2>Xiaomi Redmi note 14</h2>
              <figure>
                <Image
                  src={"/specs/mobile.png"}
                  width={350}
                  height={350}
                  alt="mobile image"
                />
              </figure>
            </div>
          </Col>
          <Col lg={7}>
            <div className="displayCont">
              <h2>Xiaomi Redmi note 14</h2>
              <figure>
                <Image
                  src={"/specs/mobile.png"}
                  width={350}
                  height={350}
                  alt="mobile image"
                />
              </figure>
            </div>
          </Col>
        </Row>
        <Row className="compareRow">
          <Col lg={3}>
            <div className="headingCol">
              <h4>Network</h4>
            </div>
          </Col>
          <Col lg={7}>
            <div className="descriptionCol">
              <ul>
                <li>
                  <span>Technology</span>
                  <span>GSM / HSPA / LTE / 5G</span>
                </li>
                <li>
                  <span>2G bands</span>
                  <span>GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2</span>
                </li>
                <li>
                  <span>3G bands</span>
                  <span>HSDPA 850 / 900 / 2100</span>
                </li>
                <li>
                  <span>4G bands</span>
                  <span>1, 3, 5, 8, 28, 40, 41</span>
                </li>
                <li>
                  <span>5G bands</span>
                  <span>1, 3, 5, 8, 28, 40, 78 SA/NSA</span>
                </li>
                <li>
                  <span>Speed</span>
                  <span>HSPA, LTE, 5G</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={7}>
            <div className="descriptionCol">
              <ul>
                <li>
                  <span>Technology</span>
                  <span>GSM / HSPA / LTE / 5G</span>
                </li>
                <li>
                  <span>2G bands</span>
                  <span>GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2</span>
                </li>
                <li>
                  <span>3G bands</span>
                  <span>HSDPA 850 / 900 / 2100</span>
                </li>
                <li>
                  <span>4G bands</span>
                  <span>1, 3, 5, 8, 28, 40, 41</span>
                </li>
                <li>
                  <span>5G bands</span>
                  <span>1, 3, 5, 8, 28, 40, 78 SA/NSA</span>
                </li>
                <li>
                  <span>Speed</span>
                  <span>HSPA, LTE, 5G</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={7}>
            <div className="descriptionCol">
              <ul>
                <li>
                  <span>Technology</span>
                  <span>GSM / HSPA / LTE / 5G</span>
                </li>
                <li>
                  <span>2G bands</span>
                  <span>GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2</span>
                </li>
                <li>
                  <span>3G bands</span>
                  <span>HSDPA 850 / 900 / 2100</span>
                </li>
                <li>
                  <span>4G bands</span>
                  <span>1, 3, 5, 8, 28, 40, 41</span>
                </li>
                <li>
                  <span>5G bands</span>
                  <span>1, 3, 5, 8, 28, 40, 78 SA/NSA</span>
                </li>
                <li>
                  <span>Speed</span>
                  <span>HSPA, LTE, 5G</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="compareRow">
          <Col lg={3}>
            <div className="headingCol">
              <h4>Launch</h4>
            </div>
          </Col>
          <Col lg={7}>
            <div className="descriptionCol">
              <ul>
                <li>
                  <span>Announced</span>
                  <span>2024, December 09</span>
                </li>
                <li>
                  <span>Status</span>
                  <span>Coming soon. Exp. release 2024, December 13</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={7}>
            <div className="descriptionCol">
              <ul>
                <li>
                  <span>Announced</span>
                  <span>2024, December 09</span>
                </li>
                <li>
                  <span>Status</span>
                  <span>Coming soon. Exp. release 2024, December 13</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={7}>
            <div className="descriptionCol">
              <ul>
                <li>
                  <span>Announced</span>
                  <span>2024, December 09</span>
                </li>
                <li>
                  <span>Status</span>
                  <span>Coming soon. Exp. release 2024, December 13</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="compareRow">
          <Col lg={3}>
            <div className="headingCol">
              <h4>Body</h4>
            </div>
          </Col>
          <Col lg={7}>
            <div className="descriptionCol">
              <ul>
                <li>
                  <span>Dimensions</span>
                  <span>162.4 x 75.7 x 8 mm (6.39 x 2.98 x 0.31 in)</span>
                </li>
                <li>
                  <span>Weight</span>
                  <span>190 g (6.70 oz)</span>
                </li>
                <li>
                  <span>Build</span>
                  <span>Glass front, plastic back</span>
                </li>
                <li>
                  <span>SIM</span>
                  <span>Hybrid Dual SIM (Nano-SIM, dual stand-by)</span>
                </li>
                <li>
                  <span>Water Resistant</span>
                  <span>IP64, dust and water resistant</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={7}>
            <div className="descriptionCol">
              <ul>
                <li>
                  <span>Dimensions</span>
                  <span>162.4 x 75.7 x 8 mm (6.39 x 2.98 x 0.31 in)</span>
                </li>
                <li>
                  <span>Weight</span>
                  <span>190 g (6.70 oz)</span>
                </li>
                <li>
                  <span>Build</span>
                  <span>Glass front, plastic back</span>
                </li>
                <li>
                  <span>SIM</span>
                  <span>Hybrid Dual SIM (Nano-SIM, dual stand-by)</span>
                </li>
                <li>
                  <span>Water Resistant</span>
                  <span>IP64, dust and water resistant</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={7}>
            <div className="descriptionCol">
              <ul>
                <li>
                  <span>Dimensions</span>
                  <span>162.4 x 75.7 x 8 mm (6.39 x 2.98 x 0.31 in)</span>
                </li>
                <li>
                  <span>Weight</span>
                  <span>190 g (6.70 oz)</span>
                </li>
                <li>
                  <span>Build</span>
                  <span>Glass front, plastic back</span>
                </li>
                <li>
                  <span>SIM</span>
                  <span>Hybrid Dual SIM (Nano-SIM, dual stand-by)</span>
                </li>
                <li>
                  <span>Water Resistant</span>
                  <span>IP64, dust and water resistant</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="compareRow">
          <Col lg={3}>
            <div className="headingCol">
              <h4>Display</h4>
            </div>
          </Col>
          <Col lg={7}>
            <div className="descriptionCol">
              <ul>
                <li>
                  <span>Type</span>
                  <span>AMOLED, 120Hz, HDR10+, 2100 nits (peak)</span>
                </li>
                <li>
                  <span>Size</span>
                  <span>
                    6.67 inches, 107.4 cm² (~87.4% screen-to-body ratio)
                  </span>
                </li>
                <li>
                  <span>Resolution</span>
                  <span>1080 x 2400 pixels, 20:9 ratio (~395 ppi density)</span>
                </li>
                <li>
                  <span>Protection</span>
                  <span>Corning Gorilla Glass 5</span>
                </li>
                <li>
                  <span></span>
                  <span>Always-on display</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={7}>
            <div className="descriptionCol">
              <ul>
                <li>
                  <span>Type</span>
                  <span>AMOLED, 120Hz, HDR10+, 2100 nits (peak)</span>
                </li>
                <li>
                  <span>Size</span>
                  <span>
                    6.67 inches, 107.4 cm² (~87.4% screen-to-body ratio)
                  </span>
                </li>
                <li>
                  <span>Resolution</span>
                  <span>1080 x 2400 pixels, 20:9 ratio (~395 ppi density)</span>
                </li>
                <li>
                  <span>Protection</span>
                  <span>Corning Gorilla Glass 5</span>
                </li>
                <li>
                  <span></span>
                  <span>Always-on display</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={7}>
            <div className="descriptionCol">
              <ul>
                <li>
                  <span>Type</span>
                  <span>AMOLED, 120Hz, HDR10+, 2100 nits (peak)</span>
                </li>
                <li>
                  <span>Size</span>
                  <span>
                    6.67 inches, 107.4 cm² (~87.4% screen-to-body ratio)
                  </span>
                </li>
                <li>
                  <span>Resolution</span>
                  <span>1080 x 2400 pixels, 20:9 ratio (~395 ppi density)</span>
                </li>
                <li>
                  <span>Protection</span>
                  <span>Corning Gorilla Glass 5</span>
                </li>
                <li>
                  <span></span>
                  <span>Always-on display</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="compareRow">
          <Col lg={3}>
            <div className="headingCol">
              <h4>PLATFORM</h4>
            </div>
          </Col>
          <Col lg={7}>
            <div className="descriptionCol">
              <ul>
                <li>
                  <span>OS</span>
                  <span>Android 14, HyperOS</span>
                </li>
                <li>
                  <span>Chipset</span>
                  <span>Mediatek Dimensity 7025 Ultra (6 nm)</span>
                </li>
                <li>
                  <span>CPU</span>
                  <span>
                    Octa-core (2x2.5 GHz Cortex-A78 & 6x2.0 GHz Cortex-A55)
                  </span>
                </li>
                <li>
                  <span>GPU</span>
                  <span>IMG BXM-8-256</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={7}>
            <div className="descriptionCol">
              <ul>
                <li>
                  <span>OS</span>
                  <span>Android 14, HyperOS</span>
                </li>
                <li>
                  <span>Chipset</span>
                  <span>Mediatek Dimensity 7025 Ultra (6 nm)</span>
                </li>
                <li>
                  <span>CPU</span>
                  <span>
                    Octa-core (2x2.5 GHz Cortex-A78 & 6x2.0 GHz Cortex-A55)
                  </span>
                </li>
                <li>
                  <span>GPU</span>
                  <span>IMG BXM-8-256</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={7}>
            <div className="descriptionCol">
              <ul>
                <li>
                  <span>OS</span>
                  <span>Android 14, HyperOS</span>
                </li>
                <li>
                  <span>Chipset</span>
                  <span>Mediatek Dimensity 7025 Ultra (6 nm)</span>
                </li>
                <li>
                  <span>CPU</span>
                  <span>
                    Octa-core (2x2.5 GHz Cortex-A78 & 6x2.0 GHz Cortex-A55)
                  </span>
                </li>
                <li>
                  <span>GPU</span>
                  <span>IMG BXM-8-256</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="compareRow">
          <Col lg={3}>
            <div className="headingCol">
              <h4>MEMORY</h4>
            </div>
          </Col>
          <Col lg={7}>
            <div className="descriptionCol">
              <ul>
                <li>
                  <span>Card slot</span>
                  <span>Android 14, HyperOS</span>
                </li>
                <li>
                  <span>Internal</span>
                  <span>128GB 8GB RAM, 256GB 8GB RAM</span>
                </li>
                <li>
                  <span></span>
                  <span>UFS 2.2</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={7}>
            <div className="descriptionCol">
              <ul>
                <li>
                  <span>Card slot</span>
                  <span>Android 14, HyperOS</span>
                </li>
                <li>
                  <span>Internal</span>
                  <span>128GB 8GB RAM, 256GB 8GB RAM</span>
                </li>
                <li>
                  <span></span>
                  <span>UFS 2.2</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={7}>
            <div className="descriptionCol">
              <ul>
                <li>
                  <span>Card slot</span>
                  <span>Android 14, HyperOS</span>
                </li>
                <li>
                  <span>Internal</span>
                  <span>128GB 8GB RAM, 256GB 8GB RAM</span>
                </li>
                <li>
                  <span></span>
                  <span>UFS 2.2</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="compareRow">
          <Col lg={3}>
            <div className="headingCol">
              <h4>MAIN CAMERA</h4>
            </div>
          </Col>
          <Col lg={7}>
            <div className="descriptionCol">
              <ul>
                <li>
                  <span>Dual</span>
                  <span>
                    50 MP, f/1.5, 26mm (wide), 1/1.95", 0.8µm, PDAF, OIS
                  </span>
                </li>
                <li>
                  <span></span>
                  <span>8 MP, f/2.2, 21mm (ultrawide)</span>
                </li>
                <li>
                  <span></span>
                  <span>2 MP, f/2.4, (macro)</span>
                </li>
                <li>
                  <span>Features</span>
                  <span>LED flash, HDR, panorama</span>
                </li>
                <li>
                  <span>Video</span>
                  <span>1080p@30fps</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={7}>
            <div className="descriptionCol">
              <ul>
                <li>
                  <span>Dual</span>
                  <span>
                    50 MP, f/1.5, 26mm (wide), 1/1.95", 0.8µm, PDAF, OIS
                  </span>
                </li>
                <li>
                  <span></span>
                  <span>8 MP, f/2.2, 21mm (ultrawide)</span>
                </li>
                <li>
                  <span></span>
                  <span>2 MP, f/2.4, (macro)</span>
                </li>
                <li>
                  <span>Features</span>
                  <span>LED flash, HDR, panorama</span>
                </li>
                <li>
                  <span>Video</span>
                  <span>1080p@30fps</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={7}>
            <div className="descriptionCol">
              <ul>
                <li>
                  <span>Dual</span>
                  <span>
                    50 MP, f/1.5, 26mm (wide), 1/1.95", 0.8µm, PDAF, OIS
                  </span>
                </li>
                <li>
                  <span></span>
                  <span>8 MP, f/2.2, 21mm (ultrawide)</span>
                </li>
                <li>
                  <span></span>
                  <span>2 MP, f/2.4, (macro)</span>
                </li>
                <li>
                  <span>Features</span>
                  <span>LED flash, HDR, panorama</span>
                </li>
                <li>
                  <span>Video</span>
                  <span>1080p@30fps</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="compareRow">
          <Col lg={3}>
            <div className="headingCol">
              <h4>SELFIE CAMERA</h4>
            </div>
          </Col>
          <Col lg={7}>
            <div className="descriptionCol">
              <ul>
                <li>
                  <span>Single</span>
                  <span>20 MP, f/2.2, (wide), 1/4.0", 0.7µm</span>
                </li>
                <li>
                  <span>Video</span>
                  <span>1080p@30fps</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={7}>
            <div className="descriptionCol">
              <ul>
                <li>
                  <span>Single</span>
                  <span>20 MP, f/2.2, (wide), 1/4.0", 0.7µm</span>
                </li>
                <li>
                  <span>Video</span>
                  <span>1080p@30fps</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={7}>
            <div className="descriptionCol">
              <ul>
                <li>
                  <span>Single</span>
                  <span>20 MP, f/2.2, (wide), 1/4.0", 0.7µm</span>
                </li>
                <li>
                  <span>Video</span>
                  <span>1080p@30fps</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="compareRow">
          <Col lg={3}>
            <div className="headingCol">
              <h4>SOUND</h4>
            </div>
          </Col>
          <Col lg={7}>
            <div className="descriptionCol">
              <ul>
                <li>
                  <span>Loudspeaker</span>
                  <span>Yes, with stereo speakers</span>
                </li>
                <li>
                  <span>3.5mm jack</span>
                  <span>Yes</span>
                </li>
                <li>
                  <span></span>
                  <span>24-bit/192kHz Hi-Res audio</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={7}>
            <div className="descriptionCol">
              <ul>
                <li>
                  <span>Loudspeaker</span>
                  <span>Yes, with stereo speakers</span>
                </li>
                <li>
                  <span>3.5mm jack</span>
                  <span>Yes</span>
                </li>
                <li>
                  <span></span>
                  <span>24-bit/192kHz Hi-Res audio</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={7}>
            <div className="descriptionCol">
              <ul>
                <li>
                  <span>Loudspeaker</span>
                  <span>Yes, with stereo speakers</span>
                </li>
                <li>
                  <span>3.5mm jack</span>
                  <span>Yes</span>
                </li>
                <li>
                  <span></span>
                  <span>24-bit/192kHz Hi-Res audio</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="compareRow">
          <Col lg={3}>
            <div className="headingCol">
              <h4>Comms</h4>
            </div>
          </Col>
          <Col lg={7}>
            <div className="descriptionCol">
              <ul>
                <li>
                  <span>WLAN</span>
                  <span>Wi-Fi 802.11 a/b/g/n/ac, dual-band, Wi-Fi Direct</span>
                </li>
                <li>
                  <span>Bluetooth</span>
                  <span>5.3, A2DP, LE</span>
                </li>
                <li>
                  <span>Positioning</span>
                  <span>GPS, GLONASS, BDS, GALILEO</span>
                </li>
                <li>
                  <span>NFC</span>
                  <span>Yes (market/region dependent)</span>
                </li>
                <li>
                  <span>Infrared port</span>
                  <span>Yes</span>
                </li>
                <li>
                  <span>Radio</span>
                  <span>FM radio</span>
                </li>
                <li>
                  <span>USB</span>
                  <span>USB Type-C 2.0, OTG</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={7}>
            <div className="descriptionCol">
              <ul>
                <li>
                  <span>WLAN</span>
                  <span>Wi-Fi 802.11 a/b/g/n/ac, dual-band, Wi-Fi Direct</span>
                </li>
                <li>
                  <span>Bluetooth</span>
                  <span>5.3, A2DP, LE</span>
                </li>
                <li>
                  <span>Positioning</span>
                  <span>GPS, GLONASS, BDS, GALILEO</span>
                </li>
                <li>
                  <span>NFC</span>
                  <span>Yes (market/region dependent)</span>
                </li>
                <li>
                  <span>Infrared port</span>
                  <span>Yes</span>
                </li>
                <li>
                  <span>Radio</span>
                  <span>FM radio</span>
                </li>
                <li>
                  <span>USB</span>
                  <span>USB Type-C 2.0, OTG</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={7}>
            <div className="descriptionCol">
              <ul>
                <li>
                  <span>WLAN</span>
                  <span>Wi-Fi 802.11 a/b/g/n/ac, dual-band, Wi-Fi Direct</span>
                </li>
                <li>
                  <span>Bluetooth</span>
                  <span>5.3, A2DP, LE</span>
                </li>
                <li>
                  <span>Positioning</span>
                  <span>GPS, GLONASS, BDS, GALILEO</span>
                </li>
                <li>
                  <span>NFC</span>
                  <span>Yes (market/region dependent)</span>
                </li>
                <li>
                  <span>Infrared port</span>
                  <span>Yes</span>
                </li>
                <li>
                  <span>Radio</span>
                  <span>FM radio</span>
                </li>
                <li>
                  <span>USB</span>
                  <span>USB Type-C 2.0, OTG</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="compareRow">
          <Col lg={3}>
            <div className="headingCol">
              <h4>FEATURES</h4>
            </div>
          </Col>
          <Col lg={7}>
            <div className="descriptionCol">
              <ul>
                <li>
                  <span>Sensors</span>
                  <span>
                    Fingerprint (under display, optical), accelerometer, gyro,
                    proximity, compass
                  </span>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={7}>
            <div className="descriptionCol">
              <ul>
                <li>
                  <span>Sensors</span>
                  <span>
                    Fingerprint (under display, optical), accelerometer, gyro,
                    proximity, compass
                  </span>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={7}>
            <div className="descriptionCol">
              <ul>
                <li>
                  <span>Sensors</span>
                  <span>
                    Fingerprint (under display, optical), accelerometer, gyro,
                    proximity, compass
                  </span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="compareRow">
          <Col lg={3}>
            <div className="headingCol">
              <h4>BATTERY</h4>
            </div>
          </Col>
          <Col lg={7}>
            <div className="descriptionCol">
              <ul>
                <li>
                  <span>Type</span>
                  <span>5110 mAh, non-removable</span>
                </li>
                <li>
                  <span>Charging</span>
                  <span>45W wired</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={7}>
            <div className="descriptionCol">
              <ul>
                <li>
                  <span>Type</span>
                  <span>5110 mAh, non-removable</span>
                </li>
                <li>
                  <span>Charging</span>
                  <span>45W wired</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={7}>
            <div className="descriptionCol">
              <ul>
                <li>
                  <span>Type</span>
                  <span>5110 mAh, non-removable</span>
                </li>
                <li>
                  <span>Charging</span>
                  <span>45W wired</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="compareRow">
          <Col lg={3}>
            <div className="headingCol">
              <h4>MISC</h4>
            </div>
          </Col>
          <Col lg={7}>
            <div className="descriptionCol">
              <ul>
                <li>
                  <span>Colors</span>
                  <span>Titan Black, Mystique White, Phantom Purple</span>
                </li>
                <li>
                  <span>Price</span>
                  <span>About 200 EUR</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={7}>
            <div className="descriptionCol">
              <ul>
                <li>
                  <span>Colors</span>
                  <span>Titan Black, Mystique White, Phantom Purple</span>
                </li>
                <li>
                  <span>Price</span>
                  <span>About 200 EUR</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={7}>
            <div className="descriptionCol">
              <ul>
                <li>
                  <span>Colors</span>
                  <span>Titan Black, Mystique White, Phantom Purple</span>
                </li>
                <li>
                  <span>Price</span>
                  <span>About 200 EUR</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="compareRow">
          <Col lg={24}>
            <p className="description">
              <span>Disclaimer:</span> We can not guarantee that the information
              on this page is 100% correct.
            </p>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default CompareLayout;

import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import Script from "next/script";
import Image from "next/image";

import ImgIconWhite from "@/assets/images/icon-white.png";
import ImgLogoWhiteGold from "@/assets/images/logo-white-gold.png";

import ImgNetworkX from "@/assets/images/network-x.png";
import ImgNxd from "@/assets/images/nxd.png";
import ImgMettlestate from "@/assets/images/mettlestate.png";
import ImgLuckyHustle from "@/assets/images/lucky-hustle.png";
import ImgStratFarm from "@/assets/images/strat-farm.png";
import ImgKasiKulch from "@/assets/images/kasi-kulcha.png";

import "@/assets/css/globals.css";
import "@/assets/css/bootstrap.min.css";
import "@/assets/css/owl.carousel.min.css";
import "@/assets/css/owl.theme.default.min.css";
import "@/assets/css/animate.min.css";
import "@/assets/css/jquery.pagepiling.css";
import "@/assets/css/jquery.fancybox.min.css";
import "@/assets/css/style.css";

const heebo = Heebo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Network X Group",
  description:
    "We work side by side to make sure our clients targets are achieved holistically - through experts in different fields. From years crossing paths and working together successfully we decided to form partnerships with the industry&apos;s strongest. We created ways of working which benefit our clients and the different needs of each one. Each company has a full inhouse team, consisting of the industry&apos;s best in their respective fields. We provided multi-layered strategies (From ideas to implementation), which have an award-winning proven track record of achieving client KPIs.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#333333",
      },
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={heebo.className}>
        <div className="h-screen w-screen bg-[#0a0a0a] text-white relative">
          <div className="preloader">
            <div className="three-bounce">
              <div className="one"></div>
              <div className="two"></div>
              <div className="three"></div>
            </div>
          </div>
          <div className="wrapper">
            <header id="header" className="header header-fixed">
              <div className="container-fluid">
                <div className="brand">
                  <a href="#Intro">
                    <div className="brand-name font-custom">
                      <Image src={ImgIconWhite} alt="icon white" />
                    </div>
                  </a>
                </div>

                <div className="header-content d-none d-md-flex">
                  <a href="#home" className="header-item">
                    Home
                  </a>
                  <a href="#about" className="header-item">
                    About Us
                  </a>
                  <a href="#our-companies" className="header-item">
                    Our Companies
                  </a>
                  <a href="#contact" className="header-item">
                    Contact
                  </a>
                </div>

                <button className="nav-toggle-btn d-block d-md-none a-nav-toggle">
                  <span className="nav-toggle">
                    <span className="stick stick-1"></span>
                    <span className="stick stick-2"></span>
                  </span>
                </button>

                <div className="menu">
                  <nav className="menu-main" id="accordion">
                    <ul id="menuMain">
                      <li data-menuanchor="home" className="active">
                        <a href="#home">Home</a>
                      </li>
                      <li data-menuanchor="about">
                        <a href="#about">About Us</a>
                      </li>
                      <li data-menuanchor="our-companies">
                        <a href="#our-companies">Our Companies</a>
                      </li>
                      <li data-menuanchor="contact">
                        <a href="#contact">Contact</a>
                      </li>
                    </ul>
                  </nav>

                  <div className="menu-footer">
                    <div className="menu-copyright">
                      &copy; Network X Group <span className="full-year"></span>{" "}
                      <br />
                      All Rights Reserved
                    </div>
                  </div>
                </div>
              </div>
            </header>

            <div id="content" className="content">
              <div className="homepage-personal a-pagepiling">
                <div className="section pp-scrollable slide-dark slide-dark-footer slide-personal-intro">
                  <div className="slide-container relative">
                    <video
                      src="assets/videos/network-x-group-short.mp4"
                      autoPlay
                      loop
                      muted
                    ></video>
                    <div className="slide-bg"></div>
                    <div className="container">
                      <div className="slide-num">1</div>
                      <div className="row">
                        <div className="col-12">
                          <Image
                            src={ImgLogoWhiteGold}
                            className="img-fluid animate-element delay5 fadeIn"
                            alt="logo white gold"
                            quality={100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="section pp-scrollable slide-personal-services">
                  <div className="slide-container">
                    <div className="slide-bg">
                      <div className="slide-photo circle-light slide-services-circle2 transformLeft"></div>
                      <div className="slide-photo circle-brown slide-services-circle1 transformRight"></div>
                    </div>
                    <div className="container">
                      <div className="slide-num">2</div>
                      <div className="row">
                        <div className="col-sm-6 col-12">
                          <Image
                            src={ImgLogoWhiteGold}
                            className="img-fluid animate-element delay5 fadeInDown pb-4"
                            style={{ maxHeight: "100px" }}
                            alt="logo white gold"
                            width={600}
                            height={82}
                            quality={100}
                          />
                          <div className="animate-element delay5 fadeInUp">
                            <h3 className="slide-title-sub">
                              A family of specialist companies
                            </h3>
                            <div className="slide-descr slide-descr-intro">
                              We work side by side to make sure our clients
                              targets are achieved holistically - through
                              experts in different fields. From years crossing
                              paths and working together successfully we decided
                              to form partnerships with the industry&apos;s
                              strongest. We created ways of working which
                              benefit our clients and the different needs of
                              each one. Each company has a full inhouse team,
                              consisting of the industry&apos;s best in their
                              respective fields. We provided multi-layered
                              strategies (From ideas to implementation), which
                              have an award-winning proven track record of
                              achieving client KPIs.
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-12">
                          <div className="resp-iframe-container animate-element delay7 fadeInUp">
                            <iframe
                              className="resp-iframe"
                              src="https://www.youtube.com/embed/DkZgDSXVU90?si=8Hv28JHeA8Z5-MRA"
                              title="Network X Group"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="section pp-scrollable slide-dark-footer slide-personal-awards">
                  <div className="slide-container">
                    <div className="slide-bg">
                      <div className="slide-photo circle-green slide-awards-circle1 transformLeft"></div>
                      <div className="slide-photo circle-brown slide-awards-circle2 transformRight"></div>
                    </div>
                    <div className="container">
                      <div className="slide-num">3</div>
                      <div className="row align-items-center justify-content-end animate-element delay5 fadeInDown">
                        <div className="col-md-7">
                          <h2 className="slide-title mb-5 mb-md-0">
                            our companies
                          </h2>
                        </div>
                        <div className="col-md-5">
                          <h3 className="slide-title-info mb-5 mb-md-0">
                            The best{" "}
                            <span className="text-primary">of the best.</span>
                          </h3>
                        </div>
                      </div>
                      <div className="row award-list animate-element delay5 fadeInUp">
                        <div className="col-lg-4">
                          <div className="award-item">
                            <div className="award-item-logo">
                              <Image
                                src={ImgNetworkX}
                                alt="networkx"
                                className="object-contain"
                              />
                            </div>
                            <div className="award-item-title slide-title-sub">
                              Out Of Home Advertising
                            </div>
                            <div className="award-item-more">
                              <a
                                href="mailto:info@networkx.co.za"
                                className="text-primary inline-flex"
                                target="_blank"
                              >
                                <svg
                                  className="mr-1"
                                  width="14px"
                                  height="14px"
                                  fill="currentColor"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 64 64"
                                >
                                  <path
                                    d="M56,9.6H8c-3.4,0-6.3,2.8-6.3,6.3v32.4c0,3.4,2.8,6.3,6.3,6.3h48c3.4,0,6.3-2.8,6.3-6.3V15.8C62.3,12.4,59.4,9.6,56,9.6z
	 M56,14.1c0.1,0,0.2,0,0.3,0L32,29.7L7.7,14.1c0.1,0,0.2,0,0.3,0H56z M56,49.9H8c-1,0-1.8-0.8-1.8-1.8V18.5l23.4,15
	c0.7,0.5,1.5,0.7,2.3,0.7c0.8,0,1.6-0.2,2.3-0.7l23.4-15v29.7C57.8,49.2,57,49.9,56,49.9z"
                                  />
                                </svg>
                                info@networkx.co.za
                              </a>
                              <a
                                href="https://networkx.co.za"
                                className="text-primary inline-flex"
                                target="_blank"
                              >
                                <svg
                                  className="mr-1"
                                  width="14px"
                                  height="14px"
                                  fill="currentColor"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 64 64"
                                >
                                  <g>
                                    <path
                                      d="M15,51.3c-0.6,0-1.2-0.2-1.6-0.7c-0.9-0.9-0.9-2.3,0-3.2l30.3-30.3H19.5c-1.2,0-2.2-1-2.2-2.2s1-2.2,2.2-2.2H49
		c1.2,0,2.2,1,2.2,2.2v29.7c0,1.2-1,2.2-2.2,2.2s-2.2-1-2.2-2.2V20.5L16.6,50.7C16.2,51.1,15.6,51.3,15,51.3z"
                                    />
                                  </g>
                                </svg>
                                networkx.co.za
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="award-item">
                            <div className="award-item-logo">
                              <Image
                                src={ImgNxd}
                                alt="nxd"
                                className="object-contain"
                              />
                            </div>
                            <div className="award-item-title slide-title-sub">
                              Digital Marketing
                            </div>

                            <div className="award-item-more">
                              <a
                                href="mailto:nicolas@nxd.co.za"
                                className="text-primary inline-flex"
                                target="_blank"
                              >
                                <svg
                                  className="mr-1"
                                  width="14px"
                                  height="14px"
                                  fill="currentColor"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 64 64"
                                >
                                  <path
                                    d="M56,9.6H8c-3.4,0-6.3,2.8-6.3,6.3v32.4c0,3.4,2.8,6.3,6.3,6.3h48c3.4,0,6.3-2.8,6.3-6.3V15.8C62.3,12.4,59.4,9.6,56,9.6z
	 M56,14.1c0.1,0,0.2,0,0.3,0L32,29.7L7.7,14.1c0.1,0,0.2,0,0.3,0H56z M56,49.9H8c-1,0-1.8-0.8-1.8-1.8V18.5l23.4,15
	c0.7,0.5,1.5,0.7,2.3,0.7c0.8,0,1.6-0.2,2.3-0.7l23.4-15v29.7C57.8,49.2,57,49.9,56,49.9z"
                                  />
                                </svg>
                                nicolas@nxd.co.za
                              </a>
                              <a
                                href="https://nxd.co.za"
                                className="text-primary inline-flex"
                                target="_blank"
                              >
                                <svg
                                  className="mr-1"
                                  width="14px"
                                  height="14px"
                                  fill="currentColor"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 64 64"
                                >
                                  <g>
                                    <path
                                      d="M15,51.3c-0.6,0-1.2-0.2-1.6-0.7c-0.9-0.9-0.9-2.3,0-3.2l30.3-30.3H19.5c-1.2,0-2.2-1-2.2-2.2s1-2.2,2.2-2.2H49
		c1.2,0,2.2,1,2.2,2.2v29.7c0,1.2-1,2.2-2.2,2.2s-2.2-1-2.2-2.2V20.5L16.6,50.7C16.2,51.1,15.6,51.3,15,51.3z"
                                    />
                                  </g>
                                </svg>
                                nxd.co.za
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="award-item">
                            <div className="award-item-logo">
                              <Image
                                src={ImgMettlestate}
                                alt="mettlestate"
                                className="object-contain"
                              />
                            </div>
                            <div className="award-item-title slide-title-sub">
                              Esports and Gaming
                            </div>
                            <div className="award-item-more">
                              <a
                                href="mailto:info@mettlestate.com"
                                className="text-primary inline-flex"
                                target="_blank"
                              >
                                <svg
                                  className="mr-1"
                                  width="14px"
                                  height="14px"
                                  fill="currentColor"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 64 64"
                                >
                                  <path
                                    d="M56,9.6H8c-3.4,0-6.3,2.8-6.3,6.3v32.4c0,3.4,2.8,6.3,6.3,6.3h48c3.4,0,6.3-2.8,6.3-6.3V15.8C62.3,12.4,59.4,9.6,56,9.6z
	 M56,14.1c0.1,0,0.2,0,0.3,0L32,29.7L7.7,14.1c0.1,0,0.2,0,0.3,0H56z M56,49.9H8c-1,0-1.8-0.8-1.8-1.8V18.5l23.4,15
	c0.7,0.5,1.5,0.7,2.3,0.7c0.8,0,1.6-0.2,2.3-0.7l23.4-15v29.7C57.8,49.2,57,49.9,56,49.9z"
                                  />
                                </svg>
                                info@mettlestate.com
                              </a>
                              <a
                                href="https://mettlestate.com"
                                className="text-primary inline-flex"
                                target="_blank"
                              >
                                <svg
                                  className="mr-1"
                                  width="14px"
                                  height="14px"
                                  fill="currentColor"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 64 64"
                                >
                                  <g>
                                    <path
                                      d="M15,51.3c-0.6,0-1.2-0.2-1.6-0.7c-0.9-0.9-0.9-2.3,0-3.2l30.3-30.3H19.5c-1.2,0-2.2-1-2.2-2.2s1-2.2,2.2-2.2H49
		c1.2,0,2.2,1,2.2,2.2v29.7c0,1.2-1,2.2-2.2,2.2s-2.2-1-2.2-2.2V20.5L16.6,50.7C16.2,51.1,15.6,51.3,15,51.3z"
                                    />
                                  </g>
                                </svg>
                                mettlestate.com
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="award-item">
                            <div className="award-item-logo">
                              <Image
                                src={ImgLuckyHustle}
                                alt="lucky hustle"
                                className="object-contain"
                              />
                            </div>
                            <div className="award-item-title slide-title-sub">
                              Creative Agency
                            </div>

                            <div className="award-item-more">
                              <a
                                href="mailto:darren@luckyhustle.co.za"
                                className="text-primary inline-flex"
                                target="_blank"
                              >
                                <svg
                                  className="mr-1"
                                  width="14px"
                                  height="14px"
                                  fill="currentColor"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 64 64"
                                >
                                  <path
                                    d="M56,9.6H8c-3.4,0-6.3,2.8-6.3,6.3v32.4c0,3.4,2.8,6.3,6.3,6.3h48c3.4,0,6.3-2.8,6.3-6.3V15.8C62.3,12.4,59.4,9.6,56,9.6z
	 M56,14.1c0.1,0,0.2,0,0.3,0L32,29.7L7.7,14.1c0.1,0,0.2,0,0.3,0H56z M56,49.9H8c-1,0-1.8-0.8-1.8-1.8V18.5l23.4,15
	c0.7,0.5,1.5,0.7,2.3,0.7c0.8,0,1.6-0.2,2.3-0.7l23.4-15v29.7C57.8,49.2,57,49.9,56,49.9z"
                                  />
                                </svg>
                                darren@luckyhustle.co.za
                              </a>
                              <a
                                href="https://luckyhustle.co.za"
                                className="text-primary inline-flex"
                                target="_blank"
                              >
                                <svg
                                  className="mr-1"
                                  width="14px"
                                  height="14px"
                                  fill="currentColor"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 64 64"
                                >
                                  <g>
                                    <path
                                      d="M15,51.3c-0.6,0-1.2-0.2-1.6-0.7c-0.9-0.9-0.9-2.3,0-3.2l30.3-30.3H19.5c-1.2,0-2.2-1-2.2-2.2s1-2.2,2.2-2.2H49
		c1.2,0,2.2,1,2.2,2.2v29.7c0,1.2-1,2.2-2.2,2.2s-2.2-1-2.2-2.2V20.5L16.6,50.7C16.2,51.1,15.6,51.3,15,51.3z"
                                    />
                                  </g>
                                </svg>
                                luckyhustle.co.za
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="award-item">
                            <div className="award-item-logo">
                              <Image
                                src={ImgStratFarm}
                                alt="strat farm"
                                className="object-contain"
                              />
                            </div>
                            <div className="award-item-title slide-title-sub">
                              Media Strategy
                            </div>
                            <div className="award-item-more">
                              <a
                                href="mailto:info@thestratfarm.com"
                                className="text-primary inline-flex"
                                target="_blank"
                              >
                                <svg
                                  className="mr-1"
                                  width="14px"
                                  height="14px"
                                  fill="currentColor"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 64 64"
                                >
                                  <path
                                    d="M56,9.6H8c-3.4,0-6.3,2.8-6.3,6.3v32.4c0,3.4,2.8,6.3,6.3,6.3h48c3.4,0,6.3-2.8,6.3-6.3V15.8C62.3,12.4,59.4,9.6,56,9.6z
	 M56,14.1c0.1,0,0.2,0,0.3,0L32,29.7L7.7,14.1c0.1,0,0.2,0,0.3,0H56z M56,49.9H8c-1,0-1.8-0.8-1.8-1.8V18.5l23.4,15
	c0.7,0.5,1.5,0.7,2.3,0.7c0.8,0,1.6-0.2,2.3-0.7l23.4-15v29.7C57.8,49.2,57,49.9,56,49.9z"
                                  />
                                </svg>
                                info@thestratfarm.com
                              </a>
                              <a
                                href="https://thestratfarm.com"
                                className="text-primary inline-flex"
                                target="_blank"
                              >
                                <svg
                                  className="mr-1"
                                  width="14px"
                                  height="14px"
                                  fill="currentColor"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 64 64"
                                >
                                  <g>
                                    <path
                                      d="M15,51.3c-0.6,0-1.2-0.2-1.6-0.7c-0.9-0.9-0.9-2.3,0-3.2l30.3-30.3H19.5c-1.2,0-2.2-1-2.2-2.2s1-2.2,2.2-2.2H49
		c1.2,0,2.2,1,2.2,2.2v29.7c0,1.2-1,2.2-2.2,2.2s-2.2-1-2.2-2.2V20.5L16.6,50.7C16.2,51.1,15.6,51.3,15,51.3z"
                                    />
                                  </g>
                                </svg>
                                thestratfarm.com
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="award-item">
                            <div className="award-item-logo">
                              <Image
                                src={ImgKasiKulch}
                                alt="kasi kulcha"
                                className="object-contain"
                              />
                            </div>
                            <div className="award-item-title slide-title-sub">
                              Media Strategy, Planning & Buying
                            </div>
                            <div className="award-item-more">
                              <a
                                href="mailto:norman@kasikulcha.co.za"
                                className="text-primary inline-flex"
                                target="_blank"
                              >
                                <svg
                                  className="mr-1"
                                  width="14px"
                                  height="14px"
                                  fill="currentColor"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 64 64"
                                >
                                  <path
                                    d="M56,9.6H8c-3.4,0-6.3,2.8-6.3,6.3v32.4c0,3.4,2.8,6.3,6.3,6.3h48c3.4,0,6.3-2.8,6.3-6.3V15.8C62.3,12.4,59.4,9.6,56,9.6z
	 M56,14.1c0.1,0,0.2,0,0.3,0L32,29.7L7.7,14.1c0.1,0,0.2,0,0.3,0H56z M56,49.9H8c-1,0-1.8-0.8-1.8-1.8V18.5l23.4,15
	c0.7,0.5,1.5,0.7,2.3,0.7c0.8,0,1.6-0.2,2.3-0.7l23.4-15v29.7C57.8,49.2,57,49.9,56,49.9z"
                                  />
                                </svg>
                                norman@kasikulcha.co.za
                              </a>
                              <a
                                href="https://kasikulcha.co.za"
                                className="text-primary inline-flex"
                                target="_blank"
                              >
                                <svg
                                  className="mr-1"
                                  width="14px"
                                  height="14px"
                                  fill="currentColor"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 64 64"
                                >
                                  <g>
                                    <path
                                      d="M15,51.3c-0.6,0-1.2-0.2-1.6-0.7c-0.9-0.9-0.9-2.3,0-3.2l30.3-30.3H19.5c-1.2,0-2.2-1-2.2-2.2s1-2.2,2.2-2.2H49
		c1.2,0,2.2,1,2.2,2.2v29.7c0,1.2-1,2.2-2.2,2.2s-2.2-1-2.2-2.2V20.5L16.6,50.7C16.2,51.1,15.6,51.3,15,51.3z"
                                    />
                                  </g>
                                </svg>
                                kasikulcha.co.za
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="section pp-scrollable slide-personal-contacts">
                  <div className="slide-container">
                    <div className="slide-bg">
                      <div className="slide-photo circle-light slide-contacts-circle1 transformLeft"></div>
                      <div className="slide-photo circle-brown slide-contacts-circle2 transformRight"></div>
                    </div>
                    <div className="container">
                      <div className="slide-num">4</div>
                      <div className="row">
                        <div className="col-lg-7 mb-5 mb-lg-0">
                          <div className="contact-personal-card">
                            <div className="contact-personal-card-title animate-element delay7 fadeInDown">
                              <h2 className="slide-title">contact</h2>
                            </div>
                            <div className="contact-personal-card-detail animate-element delay7 fadeInUp">
                              <div className="row">
                                <div className="col-xl-7 col-lg-10">
                                  <div className="title-mini">contact info</div>
                                  <div className="slide-title-sub">
                                    12 Capricorn Road, Paulshof, Sandton, 2191
                                  </div>
                                  <div className="slide-title-sub">
                                    <a
                                      href="tel:+7068980751"
                                      className="phone-link"
                                    >
                                      +2711 123 1234
                                    </a>
                                  </div>
                                  <div className="text-md text-uppercase">
                                    <a
                                      href="mailto:info@networkx.co.za"
                                      className="text-primary"
                                    >
                                      <strong>info@networkx.co.za</strong>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-5  ">
                          <div className="slide-title-info text-center animate-element fadeInDown delay7">
                            Let&apos;s grab a coffee and{" "}
                            <span className="text-primary">have a chat.</span>
                          </div>
                          <div className=" animate-element fadeInUp delay7">
                            {children}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <footer id="footer" className="footer">
              <div className="copyright copyright-fixed copyright-left d-none d-md-block">
                &copy; Network X Group <span id="full-year"></span>
              </div>
              <div className="copyright copyright-fixed copyright-right d-none d-md-block">
                All Rights Reserved
              </div>
            </footer>
          </div>
        </div>
        <Script src="https://code.jquery.com/jquery-1.12.4.min.js" defer />
        <Script defer src="assets/js/bootstrap.bundle.min.js" />
        <Script defer src="assets/js/owl.carousel.min.js" />
        <Script defer src="assets/js/jquery.pagepiling.min.js" />
        <Script defer src="assets/js/jquery.fancybox.min.js" />
        <Script defer src="assets/js/jquery.validate.min.js" />
        <Script defer src="assets/js/script.js" />
      </body>
    </html>
  );
}

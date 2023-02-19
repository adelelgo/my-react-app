import "../assets/css/animate.css";
import "../assets/css/tailwind.css";
import "../assets/css/tiny-slider.css";

// import "./js/main.js";
// import "./js/menu.js";

// import "../assets/js/isotope.min.js";
// import "../assets/js/tiny-slider.js";
// import "../assets/js/typewriter.js";
// import "../assets/js/wow.min.js";

import image5 from "../assets/images/image-2(1).jpg";
import image4 from "../assets/images/image-1(1).jpg";
import ctaBacground from "../assets/images/NoisePattern.svg";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import AboutTabSingleTab from "../site/aboutTabSingleTab";

import React, { useState } from "react";

function About() {
  const [aboutSliderData, setaboutSliderData] = useState([
    {
      title: "1 - We are Creative Digital Agency Based in USA",
      p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum sapien ac leo cursus dignissim. In ac lectus vel orci accumsan ultricies at in libero accumsan.",
      p2: "Phasellus ex massa, facilisis ac vestibulum eget, ultrices quis nulla. Integer vitae magna lacus. Sed venenatis auctor dolor.",
      p3: "Phasellus ex massa, facilisis ac vestibulum eget, ultrices quis nulla. Integer vitae magna lacus. Sed venenatis auctor dolor.",
      image1: image4,
      image2: image5,
    },
    {
      title: "2 - We are Creative Digital Agency Based in USA",
      p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum sapien ac leo cursus dignissim. In ac lectus vel orci accumsan ultricies at in libero accumsan.",
      p2: "Phasellus ex massa, facilisis ac vestibulum eget, ultrices quis nulla. Integer vitae magna lacus. Sed venenatis auctor dolor.",
      p3: "Phasellus ex massa, facilisis ac vestibulum eget, ultrices quis nulla. Integer vitae magna lacus. Sed venenatis auctor dolor.",
      image1: image4,
      image2: image5,
    },
    {
      title: "3 - We are Creative Digital Agency Based in USA",
      p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum sapien ac leo cursus dignissim. In ac lectus vel orci accumsan ultricies at in libero accumsan.",
      p2: "Phasellus ex massa, facilisis ac vestibulum eget, ultrices quis nulla. Integer vitae magna lacus. Sed venenatis auctor dolor.",
      p3: "Phasellus ex massa, facilisis ac vestibulum eget, ultrices quis nulla. Integer vitae magna lacus. Sed venenatis auctor dolor.",
      image1: image4,
      image2: image5,
    },
  ]);

  return (
    <>
      <dev id="about" className="a1P sm:a1Q lg:a1u[130px]">
        <div className="a1v xl:a1w">
          <div
            className="wow fadeInUp ac a1B a2J a1C az lg:a1U lg:a3p"
            data-wow-delay=".2s"
            style={{
              visibility: "visible",
              animationDelay: "0.2s",
              animationName: "fadeInUp",
            }}
          >
            <span className="title"> ABOUT US </span>
            <h2 className="a1B a1I ae[570px] aE a1J a1G a1t dark:aI sm:a1L md:a1F[50px] md:a3f[60px]">
              Know Details About Our Company
            </h2>
            <p className="a1B ae[570px] aF aG">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
              ante in maximus.
            </p>
          </div>
          <div
            className="wow fadeInUp ac a2w a2T aS aU a3t a3u md:a33[70px] md:a1A[70px] lg:a33[60px] lg:a1A[60px] xl:a33[70px] xl:a1A[70px]"
            data-wow-delay=".3s"
            style={{
              visibility: "visible",
              animationDelay: "0.3s",
              animationName: "fadeInUp",
            }}
          >
            <div
              className="a1 a2 a3 a2D a2a a4 a2x a2y a3n dark:a3o"
              style={{ backgroundImage: "url(" + +ctaBacground + +")" }}
            ></div>
            <div className="a1 a10 a2L/2 a2D a2M/2">
              <svg
                width="1174"
                height="560"
                viewBox="0 0 1174 560"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.4" filter="url(#filter0_f_41_257)">
                  <rect
                    x="450.531"
                    y="279"
                    width="272.933"
                    height="328.051"
                    fill="url(#paint0_linear_41_257)"
                  ></rect>
                </g>
                <defs>
                  <filter
                    id="filter0_f_41_257"
                    x="0.531494"
                    y="-171"
                    width="1172.93"
                    height="1228.05"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feflood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feflood>
                    <feblend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    ></feblend>
                    <fegaussianblur
                      stdDeviation="225"
                      result="effect1_foregroundBlur_41_257"
                    ></fegaussianblur>
                  </filter>
                  <lineargradient
                    id="paint0_linear_41_257"
                    x1="425.16"
                    y1="343.693"
                    x2="568.181"
                    y2="660.639"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#ABBCFF"></stop>
                    <stop offset="0.859375" stop-color="#4A6CF7"></stop>
                  </lineargradient>
                </defs>
              </svg>
            </div>

            <Tabs>
              <TabList className="tabButtons a5 a4 a9 a3v">
                <Tab
                  // style={{
                  //   background: "#111722",
                  //   textAlign: "center",
                  //   color: "rgb(74 108 247)",
                  // }}
                  className="a4 a1x a21 a1D a3w aE aF a1K hover:a28 hover:aH dark:a1z[#4B4E56] dark:aI dark:hover:a28 lg:a3x lg:a3y aH a28 dark:a28"
                >
                  Title 1
                </Tab>
                <Tab
                  // style={{
                  //   background: "#111722",
                  //   textAlign: "center",
                  //   color: "rgb(74 108 247)",
                  // }}
                  className="a4 a1x a21 a1D a3w aE aF a1K hover:a28 hover:aH dark:a1z[#4B4E56] dark:aI dark:hover:a28 lg:a3x lg:a3y aH a28 dark:a28"
                >
                  Title 2
                </Tab>
                <Tab
                  // style={{
                  //   background: "#111722",
                  //   textAlign: "center",
                  //   color: "rgb(74 108 247)",
                  // }}
                  className="a4 a1x a21 a1D a3w aE aF a1K hover:a28 hover:aH dark:a1z[#4B4E56] dark:aI dark:hover:a28 lg:a3x lg:a3y aH a28 dark:a28"
                >
                  Title 3
                </Tab>
              </TabList>

              <div className="a4">
                <TabPanel className="tabPanel">
                  <AboutTabSingleTab
                    data={aboutSliderData[0]}
                  ></AboutTabSingleTab>
                </TabPanel>
                <TabPanel className="tabPanel">
                  <AboutTabSingleTab
                    data={aboutSliderData[1]}
                  ></AboutTabSingleTab>
                </TabPanel>
                <TabPanel className="tabPanel">
                  <AboutTabSingleTab
                    data={aboutSliderData[2]}
                  ></AboutTabSingleTab>
                </TabPanel>
              </div>
            </Tabs>
          </div>
        </div>
      </dev>
    </>
  );
}

export default About;

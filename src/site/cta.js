import { useState } from "react";

import "../assets/css/animate.css";
import "../assets/css/tailwind.css";
import "../assets/css/tiny-slider.css";

// import "./js/main.js";
// import "./js/menu.js";

// import "../assets/js/isotope.min.js";
// import "../assets/js/tiny-slider.js";
// import "../assets/js/typewriter.js";
// import "../assets/js/wow.min.js";

// import image2 from "../images/image-2.jpg";
// import image3 from "../images/image-1.jpg";

import ctaBacground from "../assets/images/NoisePattern.svg";

function Cta() {
  //   var ctaBacground = "../images/NoisePattern.svg";
  //   const [ctaBacground, setCtaBacground] = useState(
  //     "../images/NoisePattern.svg"
  //   );

  return (
    <>
      <section id="cta" class="a1P sm:a1Q lg:a1u[130px]">
        <div class="a1v xl:a1w">
          <div
            class="wow fadeInUp ac a2T a2x a2y a1N[60px] aa a3U dark:a3V sm:a33[70px]"
            data-wow-delay=".2s"
            style={{
              visibility: "visible",
              animationDelay: "0.2s",
              animationName: "fadeInUp",
            }}
          >
            <div
              class="a1 a2 a3 a2D a2a a4 a2x a2y a3n dark:a3o"
              style={{ backgroundImage: "url(" + ctaBacground + ")" }}
            ></div>
            <div class="a1 a10 a2L/2 a2D a2M/2">
              <svg
                width="1215"
                height="259"
                viewBox="0 0 1215 259"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.6" filter="url(#filter0_f_63_363)">
                  <rect
                    x="450"
                    y="189"
                    width="315"
                    height="378"
                    fill="url(#paint0_linear_63_363)"
                  ></rect>
                </g>
                <defs>
                  <filter
                    id="filter0_f_63_363"
                    x="0"
                    y="-261"
                    width="1215"
                    height="1278"
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
                      result="effect1_foregroundBlur_63_363"
                    ></fegaussianblur>
                  </filter>
                  <lineargradient
                    id="paint0_linear_63_363"
                    x1="420.718"
                    y1="263.543"
                    x2="585.338"
                    y2="628.947"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#ABBCFF"></stop>
                    <stop offset="0.859375" stop-color="#4A6CF7"></stop>
                  </lineargradient>
                </defs>
              </svg>
            </div>
            <div class="a1R a5 a6 a9">
              <div class="a4 a1v lg:a1W/3">
                <div class="a1B a1M ae[550px] az lg:a3a lg:a2g lg:aW">
                  <h2 class="a2W aE a2Z a1G a2E a1t dark:aI sm:a1F[38px]">
                    Looking for a collaboration? Get Started Today!
                  </h2>
                  <p class="aF aG">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div class="a4 a1v lg:a1S/3">
                <div class="az lg:a2j">
                  <a
                    href="javascript:void(0)"
                    class="aD a9 aS a16 a1N[14px] aU aE aF aI hover:a19"
                  >
                    Get Started Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cta;

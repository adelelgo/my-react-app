import "../assets/css/animate.css";
import "../assets/css/tailwind.css";
import "../assets/css/tiny-slider.css";

// import "./js/main.js";
// import "./js/menu.js";

// import "../assets/js/isotope.min.js";
// import "../assets/js/tiny-slider.js";
// import "../assets/js/typewriter.js";
// import "../assets/js/wow.min.js";

function FeaturesCom({ data }) {
  return (
    <>
      <div className="a4 a1v md:a1S/2 lg:a1S/3">
        <div
          className="wow fadeInUp aJ a1B a1M ae[380px] az md:a3q"
          data-wow-delay=".2s"
          style={{
            visibility: "visible",
            animationDelay: "0.2s",
            animationName: "fadeInUp",
          }}
        >
          <div className="a1B a1V a5 ah[70px] aR[70px] a9 am a1j a16 a3b aH aN group-hover:a16 group-hover:a3r group-hover:aI dark:an dark:a3b dark:aI dark:group-hover:a16 dark:group-hover:a3r md:a1X md:ah[90px] md:aR[90px]">
            <svg width="44" height="44" viewBox="0 0 44 44" className="aL">
              <path d={data.image1}></path>
              <path opacity="0.5" d={data.image2}></path>
            </svg>
          </div>
          <div>
            <h3 className="a3s aE a2Z a1K a1t dark:aI sm:a1Y md:a1I">
              {/* Crafted for Startups */}
              {data.title}
            </h3>
            <p className="aF aG">{data.p1}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturesCom;

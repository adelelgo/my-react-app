// section menu active
function onScroll(event) {
  const sections = document.querySelectorAll(".menu-scroll");
  const scrollPos =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;

  for (let i = 0; i < sections.length; i++) {
    const currLink = sections[i];
    const val = currLink.getAttribute("href");
    const refElement = document.querySelector(val);
    const scrollTopMinus = scrollPos + 73;
    if (
      refElement.offsetTop <= scrollTopMinus &&
      refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
    ) {
      document.querySelector(".menu-scroll").classList.remove("active");
      currLink.classList.add("active");
    } else {
      currLink.classList.remove("active");
    }
  }
}

window.document.addEventListener("scroll", onScroll);
// ==== About Tabs
const tabButtons = document.querySelectorAll(".tabButtons button");
const tabPanels = document.querySelectorAll(".tabPanel");

function showPanel(panelIndex) {
  tabButtons.forEach(function (node) {
    node.classList.remove("aH", "a28", "dark:a28");
  });
  tabButtons[panelIndex].classList.add("aH", "dark:aI", "a28", "dark:a28");
  tabPanels.forEach(function (node) {
    node.style.display = "none";
  });
  tabPanels[panelIndex].style.display = "flex";
}
showPanel(0);

//========= testimonial
tns({
  container: ".testimonial-active",
  items: 1,
  slideBy: "page",
  autoplay: false,
  mouseDrag: true,
  gutter: 0,
  nav: false,
  controlsText: [
    `<svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          class="aL"
        >
          <path
            d="M6.52329 10.8331L10.9933 15.3031L9.81496 16.4814L3.3333 9.99978L9.81496 3.51811L10.9933 4.69645L6.52329 9.16645L16.6666 9.16645L16.6666 10.8331L6.52329 10.8331Z"
            
          />
        </svg>`,
    `<svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          class="aL"
        >
          <path
            d="M13.4767 9.16689L9.00671 4.69689L10.185 3.51855L16.6667 10.0002L10.185 16.4819L9.00671 15.3036L13.4767 10.8336H3.33337V9.16689H13.4767Z"
            
          />
        </svg>`,
  ],
});

//============== isotope masonry js

const elem = document.querySelector(".portfolio-grid");
const iso = new Isotope(elem, {
  // options
  itemSelector: ".grid-item",
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: ".grid-sizer",
  },
});

const filterButtons = document.querySelectorAll(
  ".portfolio-btn-wrapper button"
);
filterButtons.forEach((e) =>
  e.addEventListener("click", () => {
    const filterValue = event.target.getAttribute("data-filter");
    iso.arrange({
      filter: filterValue,
    });
  })
);

//======= portfolio-btn active
var elements = document.querySelectorAll(".portfolio-btn-wrapper button");
for (var i = 0; i < elements.length; i++) {
  elements[i].onclick = function () {
    // remove class from sibling

    var el = elements[0];
    while (el) {
      if (el.tagName === "BUTTON") {
        //remove class
        el.classList.remove("active");
      }
      // pass to the new sibling
      el = el.nextSibling;
    }

    this.classList.add("active");
  };
}

// =========================================
//  createing a portfolio tabbed component 
// =========================================
const p_btn = document.querySelectorAll(".portfolio-btns .btn");
const overlays = document.querySelectorAll(".overlays");

p_btn.forEach((e) => {
  e.addEventListener("click", (element) => {
    const p_btn_clicked = element.target;
    const dataNum = element.target.dataset.btnNum;
    // console.log(dataNum);
    // console.log(p_btn_clicked);

    // =======for animation of button===== 
    p_btn.forEach((e) => {
      e.classList.remove("btn-active");
    })
    p_btn_clicked.classList.add("btn-active")

    // =====for active images=====
    overlays.forEach((e) => {
      e.classList.add("portfolio-not-active");
    })
    const overlays_active = document.querySelectorAll(`.btn--${dataNum}`);
    // console.log(overlays_active);
    overlays_active.forEach((e) => {
      e.classList.remove("portfolio-not-active");
    })
  })
})



// =========================================
//             swiper section
// =========================================
var swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  // spaceBetween: 20,
  autoplay: {
    delay: 2500,
  },
  direction: getDirection(),
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
});
function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? 'horizontal' : 'horizontal';
  return direction;
}



// =========================================
//      scroll bottom to top
// =========================================
const hero_section = document.querySelector(".hero-section");
const footerElem = document.querySelector(".footer");

const scrollElem = document.createElement("div");
scrollElem.classList.add("bottom-top");
scrollElem.innerHTML = `<i class="fa-solid fa-arrow-up" class="bottom-top-arrow"></i>`

footerElem.after(scrollElem);// deciding the place in DOM

scrollElem.addEventListener("click", () => {
  hero_section.scrollIntoView({ behavior: "smooth" });
})



// =========================================
//      Animate the counter
// =========================================
const counterSection = document.querySelector(".work-counter");
const counterObserver = new IntersectionObserver((entries, observer) => {
  // const entry =  entries[0];
  const [entry] = entries;
  // console.log(entry);
  if (entry.isIntersecting == false) {
    return;
  }
  else {

    const counter = document.querySelectorAll(".counter-number");
    const speed = 200;

    counter.forEach((e) => {
      const updateNum = () => {
        const targetNum = parseInt(e.dataset.number);
        // console.log(targetNum);
        const intialNum = parseInt(e.innerText);
        // console.log(intialNum);
        const incrementNum = Math.trunc(targetNum / 200);
        console.log(incrementNum);

        if (intialNum < targetNum) {
          e.innerText = intialNum + incrementNum + `+`;
          setTimeout(updateNum,5)
        }
      }
      updateNum();
    })

  }
  observer.unobserve(counterSection);
},{
  root: null,
  thresholds: 0
})
counterObserver.observe(counterSection);



// =========================================
//      responsive navigation bar
// =========================================
const navIcon = document.querySelector(".navbar-icons");
const heaDer = document.querySelector(".header")
navIcon.addEventListener("click", () => {
  heaDer.classList.toggle("active");
})


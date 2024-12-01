
// lenis 
function lennis() {
    // Initialize Lenis
    const lenis = new Lenis();
  
    // Listen for the scroll event and log the event data
    lenis.on('scroll', (e) => {
      console.log(e);
    });
  
    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
  
    requestAnimationFrame(raf);
  }
  lennis();
  
  // shery js
  function sheery() {
    Shery.makeMagnet(".magnet" /* Element to target.*/, {
      //Parameters are optional.
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });
  }
  sheery();
  
  
  function customcode() {
    // menu selections
    var menubox = document.getElementById("menubox");
    var menu = document.getElementById("menubtn")
    var menuclose = document.getElementById("menuclose");
    var menuclose2 = document.getElementsByClassName("menuclose2")
  
    // hover selections
  
    // menu
    menu.addEventListener("click", function () {
      gsap.to("#menubox", {
        left: "0px",
        widght: "auto",
      });
    });
  
    menuclose.addEventListener("click", function () {
      gsap.to("#menubox", {
        left: "-600px",
      })
    })
  
  
    const data = [
      {
        name: "TOTUS MEDICINES",
        dis: "Platform to rapidly design covalent drug and cure new illness.",
        info1: "We invested",
        info2: "Pre-Seed ",
        info3: "Last Round",
        info4: "Series B led by DCVC Bio",
        url: "#",
      },
  
      {
        name: "LIMELIGHT STEEL",
        dis: "Harnessing light to power zero-emissions steel manufacturing.",
        info1: "We invested",
        info2: "Pre-Seed",
        info3: "Last round",
        info4: "Seed led by Khosla",
        url: "#",
      },
  
  
      {
        name: "Charm Industrial",
        dis: "Converts waste biomass into fast pyrolysis, high carbon bio-oil.",
        info1: "We invested",
        info2: "Series A",
        info3: "Last round",
        info4: "Series B led by General Catalyst",
        url: "#",
      },
  
      {
        name: "Voyage Foods",
        dis: "Future-proofing your favorite food and drink.",
        info1: "We invested",
        info2: "Seed",
        info3: "Last round",
        info4: "Series A led by Horizons",
        url: "#",
      },
  
      {
        name: "Prometheus Fuels",
        dis: "Removes CO2 and turns it into carbon-zero gasoline, diesel, and jet fuel.",
        info1: "We invested",
        info2: "Pre-Seed",
        info3: "Last round",
        info4: "Unicorn Series B led by Maersk",
        url: "#",
      },
  
      {
        name: "Andela",
        dis: "Build remote engineering teams with the world’s top talent.",
        info1: "We investedfo1",
        info2: "Seed",
        info3: "Last round",
        info4: "Unicorn Series B led by Softbank",
        url: "#",
      },
  
  
    ];
  
    const container = document.getElementById("redirect");
  
    // Generate HTML and append using innerHTML
    data.forEach((item) => {
      container.innerHTML += `
          <!-- redirect section 1 -->
              <div class="redirect relative py-3 border-b-[1px] border-black">
                  <div class="flex flex-col md:flex-row">
                      <div class="flex flex-col w-[80vw] ">
                          <h1 id="text" class="magnet text-[5vh] md:text-[4vw] whitespace-nowrap ">${item.name}</h1>
                          <P class="text-[2vh] md:text-[3vh]">${item.dis}</P>
                      </div>
                      <div class="w-full md:flex flex-col md:w-[40vw]">
                          <div class="mt-3">
                              <span class="sm:text-[3vw] md:w-fit md:text-[2vw] px-[12px] text-white bg-blue-700 ">${item.info1}</span>
                              <span
                                  class="sm:text-[3vw] md:w-fit md:text-[2vw] px-[12px] bg-slate-200 text-blue-700">${item.info2}</span>
                          </div>
                          <div class="">
                              <span
                                  class="text-[20px] sm:text-[2vw] md:w-fit md:text-[1vw] px-[12px] bg-slate-200 text-blue-700">${item.info3}</span>
                              <span
                                  class="text-[20px] sm:text-[2vw] md:w-fit md:text-[1vw] px-[12px] text-white bg-blue-700 ">${item.info4}</span>
                          </div>
                      </div>
                  </div>
  
                   <a href="${item.url}"><i class="absolute top-0 right-0 md:text-[2.5vw] ri-arrow-right-up-line"></i></a> 
              </div>
              
      `;
    });
  
    var elem = document.querySelectorAll(".redirect");
    
   
    console.log(elem);
  
    elem.forEach(function (val){
      // console.log(val)
  
      val.addEventListener("mouseover", function () {
        console.log("hellow")
        // val.style.backgroundColor = "blue";
        // val.style.color = "white";
  
        gsap.to(val,{
        color:"blue",
        duration: 0.2,
        })
      });
      val.addEventListener("mouseleave", function () {
        console.log("bye")
        gsap.to(val,{
          color:"black",
          duration: 2,
        })
      });
    })
  
  };
  
  customcode();
  
  // gsap 
  
  function gsapp() {
  
    gsap.matchMedia().add("(max-width: 768px)", () => {
  
    });
  
    gsap.matchMedia().add("(min-width: 769px)", () => {
      
      Shery.mouseFollower({
        //Parameters are optional.
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      });
  
      gsap.from("header div a", {
        opacity: 0,
        y: -10,
        stagger: 1,
        duration: 0.1,
      })
  
      gsap.from("#sec1 div h2", {
        opacity: 0,
        delay: 1,
        duration: 2.2,
        stagger: 1,
      })
  
      gsap.from("#para1 p", {
        opacity: 0,
        delay: 1.2,
        duration: 2.4,
        stagger: 1,
        scrollTrigger: { // Correct casing
          trigger: "#para1 p",
          scroller: "body",
          start: "top 70%",
          end: "bottom 30%",
          // markers: true,
          scrub: true,
        },
  
      })
  
      gsap.from("#plain", {
        opacity: 0,
        delay: 1.2,
        duration: 2.4,
        stagger: 1,
        scrollTrigger: { // Correct casing
          trigger: "#plain",
          scroller: "body",
          start: "top 70%",
          end: "bottom 30%",
          // markers: true,
          scrub: true,
        },
  
  
  
      })
  
      gsap.from("#sec3 h3", {
        opacity: 0,
        delay: 1.2,
        duration: 2.4,
        stagger: 1,
        color: "black",
        scrollTrigger: { // Correct casing
          trigger: "#sec3 h3",
          scroller: "body",
          start: "top 70%",
          end: "bottom 30%",
          // markers: true,
          scrub: true,
        },
  
  
  
  
  
      })
  
      gsap.to("#fighterplain ", {
        // opacity: 0,
        top: 0,
        left: "100%",
        rotate: 4,
        delay: 1.2,
        duration: 2.4,
        stagger: 1,
        color: "black",
        scrollTrigger: { // Correct casing
          trigger: "#sec3 h3",
          scroller: "body",
          start: "top 60%",
          end: "bottom 0%",
          // markers: true,
          scrub: true,
        },
  
  
  
  
  
      })
  
      gsap.from("#paralax ", {
        opacity: 0,
        top: 0,
        left: "100%",
        delay: 1.2,
        duration: 2.4,
        stagger: 1,
        color: "black",
        scrollTrigger: { // Correct casing
          trigger: "#paralax",
          scroller: "body",
          start: "top 60%",
          end: "bottom 0%",
          // markers: true,
          scrub: true,
        },
  
  
  
  
  
      })
  
      gsap.from("#sec6 ", {
        opacity: 0,
        top: 0,
        delay: 1.2,
        duration: 2.4,
        stagger: 1,
        color: "black",
        scrollTrigger: { // Correct casing
          trigger: "#sec6",
          scroller: "body",
          start: "top 0%",
          end: "bottom 0%",
          // markers: true,
          scrub: true,
          pin: true,
        },
  
      })
  
      gsap.from("#sec7 ", {
        opacity: 0,
        top: 0,
        delay: 1.2,
        duration: 2.4,
        stagger: 1,
        color: "black",
        scrollTrigger: { // Correct casing
          trigger: "#sec7",
          scroller: "body",
          start: "top 80%",
          end: "bottom 0%",
          // markers: true,
          scrub: true,
  
        },
  
      })
  
      gsap.from("#sec9 img ", {
        opacity: 0,
        top: 0,
        delay: 1.2,
        duration: 2.4,
        stagger: 1,
        color: "black",
        scrollTrigger: { // Correct casing
          trigger: "#sec9 img",
          scroller: "body",
          start: "top 80%",
          end: "bottom 0%",
          // markers: true,
          scrub: true,
  
        },
  
      })
  
    });
  }
  gsapp();
  
  
  
  
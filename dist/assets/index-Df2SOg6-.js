(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}})();function a(){const s=new Lenis;s.on("scroll",r=>{console.log(r)});function o(r){s.raf(r),requestAnimationFrame(o)}requestAnimationFrame(o)}a();function l(){Shery.makeMagnet(".magnet",{ease:"cubic-bezier(0.23, 1, 0.320, 1)",duration:1})}l();function d(){document.getElementById("menubox");var s=document.getElementById("menubtn"),o=document.getElementById("menuclose");document.getElementsByClassName("menuclose2"),s.addEventListener("click",function(){gsap.to("#menubox",{left:"0px",widght:"auto"})}),o.addEventListener("click",function(){gsap.to("#menubox",{left:"-600px"})});const r=[{name:"TOTUS MEDICINES",dis:"Platform to rapidly design covalent drug and cure new illness.",info1:"We invested",info2:"Pre-Seed ",info3:"Last Round",info4:"Series B led by DCVC Bio",url:"#"},{name:"LIMELIGHT STEEL",dis:"Harnessing light to power zero-emissions steel manufacturing.",info1:"We invested",info2:"Pre-Seed",info3:"Last round",info4:"Seed led by Khosla",url:"#"},{name:"Charm Industrial",dis:"Converts waste biomass into fast pyrolysis, high carbon bio-oil.",info1:"We invested",info2:"Series A",info3:"Last round",info4:"Series B led by General Catalyst",url:"#"},{name:"Voyage Foods",dis:"Future-proofing your favorite food and drink.",info1:"We invested",info2:"Seed",info3:"Last round",info4:"Series A led by Horizons",url:"#"},{name:"Prometheus Fuels",dis:"Removes CO2 and turns it into carbon-zero gasoline, diesel, and jet fuel.",info1:"We invested",info2:"Pre-Seed",info3:"Last round",info4:"Unicorn Series B led by Maersk",url:"#"},{name:"Andela",dis:"Build remote engineering teams with the world’s top talent.",info1:"We investedfo1",info2:"Seed",info3:"Last round",info4:"Unicorn Series B led by Softbank",url:"#"}],n=document.getElementById("redirect");r.forEach(e=>{n.innerHTML+=`
          <!-- redirect section 1 -->
              <div class="redirect relative py-3 border-b-[1px] border-black">
                  <div class="flex flex-col md:flex-row">
                      <div class="flex flex-col w-[80vw] ">
                          <h1 id="text" class="magnet text-[5vh] md:text-[4vw] whitespace-nowrap ">${e.name}</h1>
                          <P class="text-[2vh] md:text-[3vh]">${e.dis}</P>
                      </div>
                      <div class="w-full md:flex flex-col md:w-[40vw]">
                          <div class="mt-3">
                              <span class="sm:text-[3vw] md:w-fit md:text-[2vw] px-[12px] text-white bg-blue-700 ">${e.info1}</span>
                              <span
                                  class="sm:text-[3vw] md:w-fit md:text-[2vw] px-[12px] bg-slate-200 text-blue-700">${e.info2}</span>
                          </div>
                          <div class="">
                              <span
                                  class="text-[20px] sm:text-[2vw] md:w-fit md:text-[1vw] px-[12px] bg-slate-200 text-blue-700">${e.info3}</span>
                              <span
                                  class="text-[20px] sm:text-[2vw] md:w-fit md:text-[1vw] px-[12px] text-white bg-blue-700 ">${e.info4}</span>
                          </div>
                      </div>
                  </div>
  
                   <a href="${e.url}"><i class="absolute top-0 right-0 md:text-[2.5vw] ri-arrow-right-up-line"></i></a> 
              </div>
              
      `});var t=document.querySelectorAll(".redirect");console.log(t),t.forEach(function(e){e.addEventListener("mouseover",function(){console.log("hellow"),gsap.to(e,{color:"blue",duration:.2})}),e.addEventListener("mouseleave",function(){console.log("bye"),gsap.to(e,{color:"black",duration:2})})})}d();function c(){gsap.matchMedia().add("(max-width: 768px)",()=>{}),gsap.matchMedia().add("(min-width: 769px)",()=>{Shery.mouseFollower({skew:!0,ease:"cubic-bezier(0.23, 1, 0.320, 1)",duration:1}),gsap.from("header div a",{opacity:0,y:-10,stagger:1,duration:.1}),gsap.from("#sec1 div h2",{opacity:0,delay:1,duration:2.2,stagger:1}),gsap.from("#para1 p",{opacity:0,delay:1.2,duration:2.4,stagger:1,scrollTrigger:{trigger:"#para1 p",scroller:"body",start:"top 70%",end:"bottom 30%",scrub:!0}}),gsap.from("#plain",{opacity:0,delay:1.2,duration:2.4,stagger:1,scrollTrigger:{trigger:"#plain",scroller:"body",start:"top 70%",end:"bottom 30%",scrub:!0}}),gsap.from("#sec3 h3",{opacity:0,delay:1.2,duration:2.4,stagger:1,color:"black",scrollTrigger:{trigger:"#sec3 h3",scroller:"body",start:"top 70%",end:"bottom 30%",scrub:!0}}),gsap.to("#fighterplain ",{top:0,left:"100%",rotate:4,delay:1.2,duration:2.4,stagger:1,color:"black",scrollTrigger:{trigger:"#sec3 h3",scroller:"body",start:"top 60%",end:"bottom 0%",scrub:!0}}),gsap.from("#paralax ",{opacity:0,top:0,left:"100%",delay:1.2,duration:2.4,stagger:1,color:"black",scrollTrigger:{trigger:"#paralax",scroller:"body",start:"top 60%",end:"bottom 0%",scrub:!0}}),gsap.from("#sec6 ",{opacity:0,top:0,delay:1.2,duration:2.4,stagger:1,color:"black",scrollTrigger:{trigger:"#sec6",scroller:"body",start:"top 0%",end:"bottom 0%",scrub:!0,pin:!0}}),gsap.from("#sec7 ",{opacity:0,top:0,delay:1.2,duration:2.4,stagger:1,color:"black",scrollTrigger:{trigger:"#sec7",scroller:"body",start:"top 80%",end:"bottom 0%",scrub:!0}}),gsap.from("#sec9 img ",{opacity:0,top:0,delay:1.2,duration:2.4,stagger:1,color:"black",scrollTrigger:{trigger:"#sec9 img",scroller:"body",start:"top 80%",end:"bottom 0%",scrub:!0}})})}c();

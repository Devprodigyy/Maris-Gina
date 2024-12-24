function loco() {

  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("main"),
    smooth: true,
    lerp: 0.05,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
  });


  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();


}
loco();

const arr = [
  {
    sr: 1,
    title: "Sugaring",
    description: "Maris gina sugaring hair removal or ap sugaring as we call it, uses 'alexandria professional (AP)' brand that is the leading brand for sugaring and well known internationally.",
    img: "https://cdn.prod.website-files.com/6753575de0caac9593155ecd/6753575de0caac9593155f0d_Sugaring.avif"
  },

  {
    sr: 2,
    title: "Waxing",
    description: "Waxing is known for being one of the fastest methods to remove hair from the roots, as it allows for the removal of large areas of hair in a single motion using strips.",
    img: "https://cdn.prod.website-files.com/6753575de0caac9593155ecd/6753575de0caac9593155f83_maris-gina-services-waxing.avif"
  },

  {
    sr: 3,
    title: "Laser",
    description: "Our most recommended unique combination of sugaring and laser hair removal delivers exceptional results, durability, and effective hair reduction that you won’t find elsewhere.",
    img: "https://cdn.prod.website-files.com/6753575de0caac9593155ecd/6753575de0caac9593155f8d_maris-gina-services-laser.avif"
  },

  {
    sr: 4,
    title: "Aftercare",
    description: "Alexandria Professional's Full Circle of Skin Conditioning® program is a comprehensive skin care regimen designed to address and prevent ingrown hairs, improve skin texture, and promote long-term hair reduction.",
    img: "https://cdn.prod.website-files.com/6753575de0caac9593155ecd/6753575de0caac9593155f8c_maris-gina-services-aftercare.avif"
  },

]
const block = document.querySelector("#sec5");

arr.forEach(function (item) {
  const blockDiv = document.createElement("div");
  blockDiv.innerHTML = `
      <div class="w-full p-3">
        <div class="flex w-full h-[5vh] items-center">
          <h6 class="text-[2vh] p-3">${item.sr}</h6>
          <h1 class="text-[2vh]">${item.title}</h1>
        </div>
        <p class="text-[1.2vh]">${item.description}</p>
        <img class="w-full h-[20vh] object-cover mt-3"
          src="${item.img}"
          alt="${item.title}">
      </div>
    `;
  block.appendChild(blockDiv);
});




var cards = [
  {
    imgurl: "https://cdn.prod.website-files.com/6753575de0caac9593155ee1/6753575de0caac9593155feb_C011900930.jpeg",
    date: "24.11.2024",
    title: "The Whole world is turning to sugaring",
    content: "The whole world is turning to sugaring! So we tried it. As it gets warmer, we start showing more skin, in areas..."
  },
  {
    imgurl: "https://cdn.prod.website-files.com/6753575de0caac9593155ee1/6755894701bc54196ee75074_Body%20Comfort%204-p-800.webp",
    date: "12.1.2023",
    title: "After care is important for sugaring!",
    content: "The sugaring will give you a more beautiful finish by taking good care at your home...."
  },
  {
    imgurl: "https://cdn.prod.website-files.com/6753575de0caac9593155ee1/675591283c5e3c5052305406_M18-p-500.webp",
    date: "8.12.2022",
    title: "What is full bikini's most popular design?",
    content: "What kind of design is popular with customers who want to leave some hair or get a design for Bekini..."
  },
  {
    imgurl: "https://cdn.prod.website-files.com/6753575de0caac9593155ee1/675587c6f853f70c6bee80e4_5U7A6450-2-p-800.webp",
    date: "5.6.2021",
    title: "Protecting you waxed skin from tanning",
    content: "Sun rays are incredibly strong during the summer. Whenever you leave the house. It si important to...."
  },
  {
    imgurl: "https://cdn.prod.website-files.com/6753575de0caac9593155ee1/6753575de0caac9593155f1d_maris-gina-beautiful-bum-hero.avif",
    date: "3.8.2020",
    title: "Let's Aim for a beautiful bum!",
    content: "Its hard to notice you butt and therefore we disregard taking care of it promptly . if you look carefully....."
  }
];

var seccards = document.querySelector("#seccards");
cards.forEach((itemm) => {
  var div = document.createElement("div");
  div.innerHTML = `
   <div class="w-[300px] h-full p-4 flex flex-col items-center justify-start ">
                    <img class="h-[35vh] w-[100%] object-cover" src="${itemm.imgurl}" alt="">
                    <h6 class="text-[1.1vh] text-purple-400 bg-slate-200 w-fit p-2 m-2">${itemm.date}</h6>
                    <h5 class="text-[1.5vh] w-fit p-2">${itemm.title}</h5>
                    <p class="text-[1.2vh] w-fit p-2">${itemm.content}</p>
  </div>
  `;

  seccards.appendChild(div);
})



let mm = gsap.matchMedia();

mm.add("(min-width: 800px)", () => {
  gsap.from("#head", {
    scale: 0.1,
    opacity: 0.1,
    duration: 1.2,
    ease: "linear",
    // delay:1
    lerp: 1,
  })


  gsap.from("#tagline", {
    opacity: 0,
    delay: 1.4
  })

});

mm.add("(max-width: 799px)", () => {
  // mobile setup code here...
});


gsap.to("#centerCircle", {
  rotate: 360,
  repeat: -1,
  duration: 10,
  ease: "linear",
})


gsap.to("#centerStar", {
  rotate: -360,
  repeat: -1,
  duration: 10,
  ease: "linear",
})

gsap.to("#sec6", {
  top: 0,
  scrollTrigger: {
    trigger: "#sec6",
    scroller: "main",
    start: "0% 0%",
    end: "bottom -100%",
    // markers: true,
    scrub: true,
    pin: true,
  }
})

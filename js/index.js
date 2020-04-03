const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// images
let headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"])

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// nav
let navItem = document.querySelectorAll("a");
navItem[0].textContent = siteContent["nav"]["nav-item-1"]
navItem[1].textContent = siteContent["nav"]["nav-item-2"]
navItem[2].textContent = siteContent["nav"]["nav-item-3"]
navItem[3].textContent = siteContent["nav"]["nav-item-4"]
navItem[4].textContent = siteContent["nav"]["nav-item-5"]
navItem[5].textContent = siteContent["nav"]["nav-item-6"]

// cta
let ctaHeader = document.querySelector("h1");
ctaHeader.textContent = siteContent["cta"]["h1"];

let ctaBtn = document.querySelector("button");
ctaBtn.textContent = siteContent["cta"]["button"];

// main-content
let mainHeaders = document.querySelectorAll("h4");
mainHeaders[0].textContent = siteContent["main-content"]["features-h4"];
mainHeaders[1].textContent = siteContent["main-content"]["about-h4"];
mainHeaders[2].textContent = siteContent["main-content"]["services-h4"];
mainHeaders[3].textContent = siteContent["main-content"]["product-h4"];
mainHeaders[4].textContent = siteContent["main-content"]["vision-h4"];

let mainPara = document.querySelectorAll("p");
mainPara[0].textContent = siteContent["main-content"]["features-content"];
mainPara[1].textContent = siteContent["main-content"]["about-content"];
mainPara[2].textContent = siteContent["main-content"]["services-content"];
mainPara[3].textContent = siteContent["main-content"]["product-content"];
mainPara[4].textContent = siteContent["main-content"]["vision-content"];
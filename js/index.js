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

// Nav Links
let navLinks = document.querySelectorAll("nav a");
// Classes
navLinks[0].setAttribute("class", "nav-item-1");
navLinks[1].setAttribute("class", "nav-item-2");
navLinks[2].setAttribute("class", "nav-item-3");
navLinks[3].setAttribute("class", "nav-item-4");
navLinks[4].setAttribute("class", "nav-item-5");
navLinks[5].setAttribute("class", "nav-item-6");
// Text
navLinks[0].textContent = siteContent["nav"]["nav-item-1"];
navLinks[1].textContent = siteContent["nav"]["nav-item-2"];
navLinks[2].textContent = siteContent["nav"]["nav-item-3"];
navLinks[3].textContent = siteContent["nav"]["nav-item-4"];
navLinks[4].textContent = siteContent["nav"]["nav-item-5"];
navLinks[5].textContent = siteContent["nav"]["nav-item-6"];

// Nav Additions
let navigation = document.querySelector("nav");

let addition1 = document.createElement("a");
addition1.setAttribute("class", "News");
addition1.textContent = "News"
navigation.appendChild(addition1);

let addition2 = document.createElement("a");
addition2.setAttribute("class", "Reading");
addition2.textContent = "Reading"
navigation.prepend(addition2);

// Nav Text Styling
let navNew = document.querySelectorAll("nav a");
navNew.forEach(element => element.style.color = "green");


// CTA
let ctaHeader = document.querySelector(".cta h1");
ctaHeader.textContent = siteContent["cta"]["h1"];

let ctaButton = document.querySelector(".cta button");
ctaButton.textContent = siteContent["cta"]["button"];

let ctaImage = document.getElementById("cta-img");
ctaImage.src = siteContent["cta"]["img-src"];



// Top Content
let topContent = document.querySelector(".top-content");

// -- Features
topContent.children[0].children[0].setAttribute("class", "features-h4");
topContent.children[0].children[1].setAttribute("class", "features-content");

let featuresHeader = document.querySelector(".features-h4");
featuresHeader.textContent = siteContent["main-content"]["features-h4"];

let featuresContent = document.querySelector(".features-content");
featuresContent.textContent = siteContent["main-content"]["features-content"];

// -- About
topContent.children[1].children[0].setAttribute("class", "about-h4");
topContent.children[1].children[1].setAttribute("class", "about-content");

let aboutHeader = document.querySelector(".about-h4");
aboutHeader.textContent = siteContent["main-content"]["about-h4"];

let aboutContent = document.querySelector(".about-content");
aboutContent.textContent = siteContent["main-content"]["about-content"];

// Middle Image
let middleImage = document.getElementById("middle-img");
middleImage.src = siteContent["main-content"]["middle-img-src"];



// Bottom Content
let bottomContent = document.querySelector(".bottom-content");

// -- Services
bottomContent.children[0].children[0].setAttribute("class", "services-h4");
bottomContent.children[0].children[1].setAttribute("class", "services-content");

let servicesHeader = document.querySelector(".services-h4");
servicesHeader.textContent = siteContent["main-content"]["services-h4"];

let servicesContent = document.querySelector(".services-content");
servicesContent.textContent = siteContent["main-content"]["services-content"];

// -- Product
bottomContent.children[1].children[0].setAttribute("class", "product-h4");
bottomContent.children[1].children[1].setAttribute("class", "product-content");

let productHeader = document.querySelector(".product-h4");
productHeader.textContent = siteContent["main-content"]["product-h4"];

let productContent = document.querySelector(".product-content");
productContent.textContent = siteContent["main-content"]["product-content"];

// -- Vision
bottomContent.children[2].children[0].setAttribute("class", "vision-h4");
bottomContent.children[2].children[1].setAttribute("class", "vision-content");

let visionHeader = document.querySelector(".vision-h4");
visionHeader.textContent = siteContent["main-content"]["vision-h4"];

let visionContent = document.querySelector(".vision-content");
visionContent.textContent = siteContent["main-content"]["vision-content"];




// Contact
let contactContent = document.querySelector(".contact");
contactContent.children[1].setAttribute("class", "address")
contactContent.children[2].setAttribute("class", "phone")
contactContent.children[3].setAttribute("class", "email")


let contactHeader = document.querySelector(".contact h4");
contactHeader.setAttribute("class", "contact-h4");

contactHeader.textContent = siteContent["contact"]["contact-h4"];

document.querySelector(".address").textContent = siteContent["contact"]["address"];
document.querySelector(".phone").textContent = siteContent["contact"]["phone"];
document.querySelector(".email").textContent = siteContent["contact"]["email"];


// Footer
let footerContent = document.querySelector("footer p");
footerContent.setAttribute("class", "copyright");
footerContent.textContent = siteContent["footer"]["copyright"];

footerContent.style.marginTop = "100px";

// SCARY!
ctaHeader.innerHTML = "DOM <br> Is <br> Awesome";
let ctaDiv = document.querySelector(".cta-text")

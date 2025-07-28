let projectImage = document.getElementsByClassName("project-img-1");
let title = document.getElementById("project-title");
let projectText = document.getElementById("project-text");
let link = document.getElementById("text-link");
let profileImage = document.getElementById("profile-image");

let img = projectImage[0];

function changeImage(event) {
  event.preventDefault();

  if (img.src.endsWith("geo-explorer.png")) {
    img.src = "./img/gradient-light.png";
    title.innerText = "gradient-calculator";
    projectText.innerText =
      "The Gradient Calculator is a simple, responsive web app that allows users to calculate slope/gradient using distance and level difference. It provides real-time conversion between ratio and percentage formats. This tool is commonly used in civil engineering, architecture, construction and road design. I’m currently in the process of adding the app to the Chrome Web Store.";
    link.innerText =
      "https://chromewebstore.google.com/detail/gradient-calculator/pddmaekghpocljkljdfopeclnleghaeo";
    link.href =
      "https://chromewebstore.google.com/detail/gradient-calculator/pddmaekghpocljkljdfopeclnleghaeo";
  } else if (img.src.endsWith("geo-explorer-dark.png")) {
    img.src = "./img/gradient-dark.png";
    title.innerText = "gradient-calculator";
    projectText.innerText =
      "The Gradient Calculator is a simple, responsive web app that allows users to calculate slope/gradient using distance and level difference. It provides real-time conversion between ratio and percentage formats. This tool is commonly used in civil engineering, architecture, construction and road design. I’m currently in the process of adding the app to the Chrome Web Store.";
    link.innerText =
      "https://chromewebstore.google.com/detail/gradient-calculator/pddmaekghpocljkljdfopeclnleghaeo";
    link.href =
      "https://chromewebstore.google.com/detail/gradient-calculator/pddmaekghpocljkljdfopeclnleghaeo";
  } else if (img.src.endsWith("gradient-light.png")) {
    img.src = "./img/geo-explorer.png";
    title.innerText = "geo-explorer";
    projectText.innerText =
      "GeoExplorer is a learning platform built with Next.js and Tailwind CSS, with a backend developed using Node.js. Users can learn geography by exploring the learning section or by taking quizzes and progressing        through different levels of difficulty. This app was developed by me and five of my colleagues during the Northcoders bootcamp.";
    link.innerText = "https://learn-with-geo-explorer.netlify.app/";
  } else if (img.src.endsWith("gradient-dark.png")) {
    img.src = "./img/geo-explorer-dark.png";
    title.innerText = "geo-explorer";
    projectText.innerText =
      "GeoExplorer is a learning platform built with Next.js and Tailwind CSS, with a backend developed using Node.js. Users can learn geography by exploring the learning section or by taking quizzes and progressing        through different levels of difficulty. This app was developed by me and five of my colleagues during the Northcoders bootcamp.";
    link.innerText = "https://learn-with-geo-explorer.netlify.app/";
    link.href = "https://learn-with-geo-explorer.netlify.app/";
  }
}

function changeLightMode(event) {
  event.preventDefault();

  let img = projectImage[0];
  if (img.src.endsWith("geo-explorer.png")) {
    img.src = "./img/geo-explorer-dark.png";
  } else if (img.src.endsWith("geo-explorer-dark.png")) {
    img.src = "./img/geo-explorer.png";
  } else if (img.src.endsWith("gradient-light.png")) {
    img.src = "./img/gradient-dark.png";
  } else if (img.src.endsWith("gradient-dark.png")) {
    img.src = "./img/gradient-light.png";
  }
}

function changeProfileImage() {
  profileImage.src =
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnE0dm5nMWJ4bDAyY2syaGZwOG5qdWFkc2pxaDM0bmc0dndtbXQ0NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aNqEFrYVnsS52/giphy.gif";
}

function setOriginal() {
  profileImage.src = "./img/IMG_2944.JPG";
}

let projectImage = document.getElementsByClassName("project-img-1");
let title = document.getElementById("project-title");
let projectText = document.getElementById("project-text");
let link = document.getElementById("text-link");
let profileImage = document.getElementById("profile-image");
let svgPath = document.getElementById("svg-image");

let img = projectImage[0];
let lightMode = true;

function changeImage() {
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

function changeImageClick(event) {
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
  lightMode = !lightMode;

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

  if (!lightMode) {
    svgPath.setAttribute(
      "d",
      "M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z"
    );
  } else {
    svgPath.setAttribute(
      "d",
      "M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z"
    );
  }
}

function changeProfileImage() {
  profileImage.src =
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnE0dm5nMWJ4bDAyY2syaGZwOG5qdWFkc2pxaDM0bmc0dndtbXQ0NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aNqEFrYVnsS52/giphy.gif";
}

function setOriginal() {
  profileImage.src = "./img/IMG_2944.JPG";
}

setInterval(changeImage, 15000);

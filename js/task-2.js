`use strict`;
const images = [
  {
    url: "./images/project.jpg",
    alt: "Command project",
  },
  {
    url: "./images/idea.jpg",
    alt: "Idea",
  },
  {
    url: "./images/smartphone.jpg",
    alt: "Phone with notifications",
  },
  {
    url: "./images/conference.jpg",
    alt: "Conference room",
  },
  {
    url: "./images/lounge.jpg",
    alt: "Chilling room",
  },
  {
    url: "./images/workflow.jpg",
    alt: "Wolf of Wall Street",
  }
];


const gallery = document.querySelector(".gallery");
console.log(gallery);
gallery.classList.add("list");

const marcup = images
  .map(
    (image) =>
      `<li class="list-item"><img class="images" src="${image.url}" alt="${image.alt}"></li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", marcup);

`use strict`;
const categories = document.querySelectorAll("#categories .item");
console.log("Number of categories:", categories.length);
categories.forEach(item => {
    console.log("Category:", item.querySelector(".title").textContent);
    console.log("Elements:", item.querySelectorAll(".list-container .list-item").length);
});

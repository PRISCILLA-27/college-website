
// function toggleMenu() {
//     document.getElementById("topnav").classList.toggle("responsive");
// }

// const slider = document.querySelector(".slider");
// const slides = slider.children;
// const realCount = slides.length - 1; // last is clone

// let index = 0;
// const stayTime = 2000;
// const slideTime = 1000;

// setInterval(() => {
//   index++;
//   slider.style.transition = `transform ${slideTime}ms ease-in-out`;
//   slider.style.transform = `translateX(-${index * 100}vw)`;

//   // when clone is reached → instant jump back
//   if (index === realCount) {
//     setTimeout(() => {
//       slider.style.transition = "none";
//       slider.style.transform = "translateX(0)";
//       index = 0;
//     }, slideTime);
//   }
// }, stayTime + slideTime);


function dropdownMenu(){
    document.getElementById("navMenu").classList.toggle("show");
}

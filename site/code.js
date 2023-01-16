const openmenu = document.getElementById("menu-open")
const closemenu = document.getElementById("menu-closed")
const navbar = document.querySelector("nav")

openmenu.addEventListener("click", () =>{
    navbar.classList.add("navin");
    openmenu.style.opacity = "0";
})
closemenu.addEventListener("click", () =>{
    navbar.classList.remove("navin");
    openmenu.style.opacity = "1";
})
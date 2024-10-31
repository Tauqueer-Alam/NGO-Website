let x=document.querySelector(".bar")
let y=document.querySelector(".header")
let z=document.querySelector(".list")
x.addEventListener("click", function () {
    y.classList.toggle("active");
    z.classList.toggle("active");

})
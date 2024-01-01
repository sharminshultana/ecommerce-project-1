// const menuIcon = document.getElementById("menu-icon")

// const menu = document.getElementById('menu');
// menuIcon.addEventListener("click", () => {
//     if (menu.className = "hidden") {
//         menu.classList.remove("hidden");
//     } else {
//         menu.classList.add("hidden");
//     }
// })

// ======show/hide nav menu=====

const menu = document.querySelector('.nav-menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');
menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})



// =======close nav menu=======
const closeNav = () => {
    menu.style.display = "none"
    closeBtn.style.display = "none"
    menuBtn.style.display = "inline-block"
}
closeBtn.addEventListener('click', closeNav);

/* ====nav color change on click==== */
// window.addEventListener('scroll', () => {
//     document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 100);
// })
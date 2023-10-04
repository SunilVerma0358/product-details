// preloader
const preloader = document.getElementById("preloader")
setTimeout(() => {
        preloader.classList.add("d-none")
        preloader.classList.add("pointer-event-none")
        document.body.classList.remove("overflow-hidden")
    }, 3000)
    //add-one
let no = document.querySelector("#Count");
let Sub = document.querySelector("#Sub");
let Add = document.querySelector("#Add");
Add.addEventListener("click", function() {
    if (no.innerHTML < 10) { no.innerHTML = +no.innerHTML + 1; } else if (no.innerHTML <= 10) { no.innerHTML = +no.innerHTML; }
});
Sub.addEventListener("click", function() {
    if (no.innerHTML > 0) { no.innerHTML = +no.innerHTML - 1; } else if (no.innerHTML <= 0) { no.innerHTML = +no.innerHTML; }
});
// my_nav
let nav = document.querySelector(".nav");
let menubar = document.querySelector(".menubar");
let finish = document.querySelectorAll(".finish");
let overlay = document.querySelector(".over-layer")
let bgbody = document.querySelector(".bg-bodys");
let fix1 = document.querySelector(".fix1");
let fix2 = document.querySelector(".fix2");
let fix3 = document.querySelector(".fix3");
nav.addEventListener("click", function() {
    menubar.classList.toggle("left-0")
    fix1.classList.toggle("fixer1")
    fix2.classList.toggle("fixer2")
    fix3.classList.toggle("fixer3")
    overlay.classList.toggle("left-0")
    bgbody.classList.toggle("over-flow")
    nav.classList.toggle("left-corner")
})
overlay.addEventListener("click", function() {
    menubar.classList.toggle("left-0")
    fix1.classList.toggle("fixer1")
    fix2.classList.toggle("fixer2")
    fix3.classList.toggle("fixer3")
    overlay.classList.toggle("left-0")
    bgbody.classList.toggle("over-flow")
    nav.classList.toggle("left-corner")
})
finish.forEach(e => {
    e.addEventListener("click", function() {
        menubar.classList.remove("left-0")
        bgbody.classList.remove("over-flow")
        fix1.classList.toggle("fixer1")
        overlay.classList.toggle("left-0")
        fix2.classList.toggle("fixer2")
        fix3.classList.toggle("fixer3")
        nav.classList.toggle("left-corner")
    })
});
// tab-1
function openTabs(two, Id) {
    let i = null;
    let tabContent = document.querySelectorAll(".tabContent");
    let tabLabel = document.querySelectorAll(".tab_Label");
    tabContent.forEach(function(item1) {
        item1.style.display = 'none';
    });
    tabLabel.forEach(function(item3) {
        item3.classList.remove("tabLabel_Active");
    });
    document.getElementById(Id).style.display = "block";
    two.currentTarget.className += " tabLabel_Active";
}
document.getElementById("defaultOpen").click();

// tabs2
function openTab(evt, Id) {
    let i = null;
    let tabContent = document.querySelectorAll(".tab_Content");
    let tabLabel = document.querySelectorAll(".tabLabel");
    tabContent.forEach(function(item) {
        item.style.display = 'none';
    });
    tabLabel.forEach(function(item2) {
        item2.classList.remove("tabLabelActive");
    });
    document.getElementById(Id).style.display = "block";
    evt.currentTarget.className += " tabLabelActive";
}
document.getElementById("defaultTabs").click();
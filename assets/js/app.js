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
const a = document.getElementById("nav")
const b = document.querySelector("#toggle")
var overflow = document.querySelector(".overflow-hidden")
var line1 = document.querySelector(".fixed1")
var line2 = document.querySelector(".fixed2")
var line3 = document.querySelector(".fixed3")

function responsive() {
    a.classList.toggle("show")
    line1.classList.toggle("fixed1")
    line2.classList.toggle("fixed2")
    line3.classList.toggle("fixed3")
    b.classList.toggle("#toggle")
    overflow.classList.toggle(".overflow-hidden")

}
a.addEventListener("click", function() {
        a.classList.toggle("show")
        b.classList.toggle("#toggle")
        overflow.classList.toggle(".overflow-hidden")
    })
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
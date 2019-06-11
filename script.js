window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    document.querySelector("#mere").addEventListener("click", readMore);
    document.querySelector(".menuknap").addEventListener("click", openNav);
    document.querySelector(".luknav").addEventListener("click", closeNav);
}

function readMore() {
    console.log("read more");
    document.querySelector("#box").classList.toggle("stor");
    document.querySelector("#box").classList.toggle("lille");


}

function openNav() {
    console.log("open nav");
    document.querySelector("#sidenavid").classList.add("show");
}

function closeNav() {
    console.log("close nav");
    document.querySelector("#sidenavid").classList.remove("show");

}

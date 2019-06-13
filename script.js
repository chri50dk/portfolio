window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    if (document.querySelector(".menuknap")) {
        document.querySelector(".menuknap").addEventListener("click", openNav);
    }
    if (document.querySelector(".luknav")) {
        document.querySelector(".luknav").addEventListener("click", closeNav);
    }
    if (document.querySelector("#mere")) {
        document.querySelector("#mere").addEventListener("click", readMore);
    }
    document.querySelector(".menuknap").addEventListener("click", openNav);
    document.querySelector(".luknav").addEventListener("click", closeNav);

    document.querySelector(".luknav").classList.add("hidden");
    document.querySelector("#sidenavid").classList.add("hidden");
}

function readMore() {
    console.log("read more");
    document.querySelector("#box").classList.toggle("stor");
    document.querySelector("#box").classList.toggle("lille");


}

function openNav() {
    console.log("open nav");
    document.querySelector("#sidenavid").classList.remove("hidden");

    document.querySelector(".menuknap").classList.add("hidden");
    document.querySelector(".luknav").classList.remove("hidden");
    document.querySelector(".menuknap").removeEventListener("click", openNav);
}

function closeNav() {
    console.log("close nav");
    document.querySelector(".menuknap").classList.remove("hidden");

    document.querySelector(".luknav").classList.add("hidden");
    document.querySelector("#sidenavid").classList.add("hidden");

    document.querySelector(".menuknap").addEventListener("click", openNav);

}

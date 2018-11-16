"use strict";

window.onload = init;

function init () {

    console.log("Running init func")

    // get DOM elements
    let menu = document.getElementById('menu');
    let nav  = document.getElementById('nav');

    // initialize document listeners
    document.addEventListener('webkitfullscreenchange', () => { toggleScreenBtn() });

    // initialize menu
    let screenBtn = menu.querySelector('#menuBtnScreen');
    let navBtn = menu.querySelector('#navBtn');

    screenBtn.addEventListener('click', (e) => { toggleScreenMode(e) });
    navBtn.addEventListener('click', (e) => { toggleNav(e) });

    // init navigation



    // init view(s)
    import * as pcbView from 'pcbView.js'
    console.log(pcbView)

}

function toggleNav(e) {

    let navBtn = document.getElementById('navBtn');
    let nav = document.getElementById('nav');

    navBtn.classList.toggle("change");
    nav.classList.toggle("showNav");

}

// toggle display between normal and full screen
function toggleScreenMode(e) {

    let docElm = document.documentElement;

    if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
    } else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen();
    }

    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
    }
}

function toggleScreenBtn() {

    let screenBtn = document.getElementById('menuBtnScreen');

    screenBtn.classList.toggle('menuBtnNormalScreen');
    screenBtn.classList.toggle('menuBtnFullScreen');
}
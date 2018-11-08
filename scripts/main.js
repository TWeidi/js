function toggleMenu(obj) {
    obj.classList.toggle("change");

    nav = document.getElementById('nav');
    nav.classList.toggle("showNav");
}

function toggleScreenMode(obj) {
    let docElm = document.documentElement;

    img = document.getElementById('screenModeImg');
    str = img.src.toString()
    
    if (str.match("src/FullScreenSize.png")) {
        img.src="src/ReduceScreenSize.png";
        if (docElm.requestFullscreen) {
            docElm.requestFullscreen();
        } else if (docElm.webkitRequestFullScreen) {
            docElm.webkitRequestFullScreen();
        }
    } else {
        img.src="src/FullScreenSize.png";
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
}
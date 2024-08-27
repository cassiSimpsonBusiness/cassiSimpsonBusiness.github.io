function spotlight() {
    const spotlight = document.querySelector(".spotlight");
    let spotlightSize = "transparent 300px, rgba(0, 0, 0, 1) 350px)";
    window.addEventListener("mousemove", e => updateSpotlight(e));
    function updateSpotlight(e) {
        spotlight.style.backgroundColor = "rgba(0, 0, 0, 0)";
        spotlight.style.backgroundImage = `radial-gradient(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / window.innerHeight * 100}%, ${spotlightSize}`;
    }
}

function sClick() {
    const button = document.querySelector("#sources");
    if (button.style.visibility == "visible") {
        button.style.visibility = "hidden";
    } else {
        button.style.visibility = "visible";
    }
}
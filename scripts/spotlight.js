window.addEventListener("DOMContentLoaded", () => {
    const spotlight = document.querySelector('.spotlight');
    let spotlightSize = 'transparent 200px, rgba(0, 0, 0, 1) 250px)';
    window.addEventListener('mousemove', e => updateSpotlight(e));
    function updateSpotlight(e) {
        spotlight.style.backgroundColor = "rgba(0, 0, 0, 0)";
        spotlight.style.backgroundImage = `radial-gradient(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / window.innerHeight * 100}%, ${spotlightSize}`;
    }
});
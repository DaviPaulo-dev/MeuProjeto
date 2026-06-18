window.addEventListener("scroll", () => {
    let header = document.getElementById("header");
    let scrollTop = window.scrollY;
    let maxScroll = document.body.scrollHeight - window.innerHeight;
    let opacity = Math.max(0, 1 - (scrollTop / maxScroll));
    header.style.opacity = opacity;
});

const btnTopo = document.getElementById("BtTopo");
window.addEventListener("scroll", () => {
    if(window.scrollY > 1450){
        btnTopo.style.display = "block";
    }else{
        btnTopo.style.display = "none";
    }

});

btnTopo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

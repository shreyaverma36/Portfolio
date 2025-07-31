// scroll to top button logic

window.onscroll = function () {
    toggleScrollBtn();
}

function toggleScrollBtn(){
    const btn = document.getElementById("scrollTopBtn");
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        btn.style.display = "block";
     }else{
         btn.style.display="none";
     }
}

function scrollToTop(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}
const toggleBtn = document.getElementById("toggleDarkMode");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");


    //toggle emoji
    if
    (document.body.classList.contains("dark-mode")){
        toggleBtn.textContent = "🌞";
    } else {
        toggleBtn.textContent = "🌙";
    }
});
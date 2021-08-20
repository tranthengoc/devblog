<!-- Reading Progress Bar JS -->
window.onscroll = function() {
    myFunction()
};
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
function myFunction(){
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

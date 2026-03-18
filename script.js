function toggleMode(){
document.body.classList.toggle("dark");
}
//<head>
//<script src="script.js" defer></script>
//</head>
//defer का मतलब:
//पहले HTML पूरा load होगा → फिर JavaScript run होगी।
window.onscroll = function() {
let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
let scrolled = (winScroll / height) * 100;
document.getElementById("progress").style.width = scrolled + "%";
};
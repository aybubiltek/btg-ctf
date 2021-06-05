var fenrir = document.getElementById("fenrir-img");
var fenrirText = document.getElementById("fenrir-text");
var fenrirButton = document.getElementById("fenrir-button");

var gleipner = document.getElementById("gleipner-img");
var gleipnerText = document.getElementById("gleipner-text");
var gleipnerButton = document.getElementById("gleipner-button");

function fenrirImg(){
    fenrir.style.zIndex = "-1";
    fenrir.style.transform ="rotate(-12deg)";
    gleipner.style.zIndex = "2";
    gleipner.style.transform ="rotate(11deg)";
    gleipner.style.left ="10%";
    fenrirText.style.display="none";
    gleipnerText.style.display="flex";
    fenrirButton.style.backgroundColor="#8A8C8E";
    gleipnerButton.style.backgroundColor="white";
}

function gleipnerImg(){
    fenrir.style.zIndex = "2";
    fenrir.style.transform ="rotate(-5deg)";
    gleipner.style.zIndex = "-1";
    gleipner.style.transform ="rotate(11eg)";
    gleipner.style.left ="30%";
    fenrirText.style.display="flex";
    gleipnerText.style.display="none";
    fenrirButton.style.backgroundColor="white";
    gleipnerButton.style.backgroundColor="#8A8C8E";
}

$(".history-btn").click(function(e){
    e.preventDefault();
    $(".history > div").removeClass("active");
    $(".history-img-area > img").removeClass("active");
    var tab = $(this).attr("data-tab");
    $("." + tab).addClass("active");

    $(".history-btn").toggleClass("active")
})
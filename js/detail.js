$(document).ready(function(){
    tabUI();
    popup();
    checkMenu();
    checkMenu1();
    checkMenu2();
});
function tabUI(){
    $(".tabMenu li").click(function(){
        var activeTab = $(this).attr("id");

        $(".tabMenu li").removeClass("activated");
        $(this).addClass("activated");

        $(".tabPage ul").removeClass("activated");
        $("."+activeTab).addClass("activated");
    });
};
function popup(){
    $("span.popupContainer a").click(function(){
        var activeTab = $(this).attr("data-popupName");
        
        $("#"+activeTab).fadeIn(350);
    });
    
    $(".popup a.material-icons").click(function(){

        $(".popup").fadeOut(350);
    });
};
function checkMenu(){
    $("header label").click(function(){
        $("header nav").toggleClass("active");
    });
};
function checkMenu1(){
    $("header div nav ul li").click(function(){
        $("header div nav ul li > a").toggleClass("active");
        $("header div nav ul li ol").toggleClass("active");
    });
};
function checkMenu2(){
    $("header div nav ul li ol li").click(function(){
        $("header nav").removeClass("active");
    });
};
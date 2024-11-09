var username_str = /^[a-zA-Z]{1}[a-zA-Z0-9_]{5,17}$/;
var phone_str = /^1(3|4|5|7|8)\d{9}$/;
var email_str = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var qq_str = /^[1-9]{1}[0-9]{4,13}$/;
var url_str = /^(https?\:\/\/)?[\-\w]+(\.[\-\w]+)+(\:\d+)?(\/[a-zA-Z0-9+\/?&=%#._\-,]*)?$/;


function bgimg(){
	var bg = $("#bgimg");
	var bgi = $("#bgimg img");
	landCenter("#bgimg img",50);

	var winW = document.documentElement.clientWidth;
	var winH = document.documentElement.clientHeight;
	var scale = 0.5625;
}

function landCenter(a,t){
	var land = $(a);
	var th = ($(window).height() - land.outerHeight())/2;
	var rw = ($(window).width() - land.outerWidth())/2;
	if(land.height() >= $(window).height()) th=0;
	land.animate({top:th,opacity:'show',left:rw},t);
};

$(function(){
	bgimg();
	landCenter('#login-box', 500);

	changeBank($("#BankInfoId").val());
	$("#BankInfoId").change(function () {
	    changeBank($(this).val());
	});
});

$(window).resize(function(){
	bgimg();
	landCenter('#login-box',50);
});
function changeBank(bank) {
    if (bank == "1") {
        $("#div_openingBank1").css("display", "none");
    }
    else if (bank == "2") {
        $("#div_openingBank1").css("display", "none");
    }
    else {
        $("#div_openingBank1").css("display", "block");
    }
}
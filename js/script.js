// JavaScript Document


var audio1 = document.getElementById ('audio1');
var playPauseBTN1 = document.getElementById ('playPauseBTN1');
var count = 0;
const icon1 = document.getElementById ('icon1');

function playPause1(){
	if(count == 0){
		count = 1;
		audio1.play();
		playPauseBTN1.innerHTML = '<i id="icon1" class="fas fa-pause"></i>';
	}else{
		count = 0;
		audio1.pause();
		playPauseBTN1.innerHTML = '<i id="icon1" class="fas fa-play"></i>';
	}
}

function playPause2(){
	if(count == 0){
		count = 1;
		audio2.play();
		playPauseBTN2.innerHTML = '<i id="icon1" class="fas fa-pause"></i>';
	}else{
		count = 0;
		audio2.pause();
		playPauseBTN2.innerHTML = '<i id="icon1" class="fas fa-play"></i>';
	}
}

function playPause3(){
	if(count == 0){
		count = 1;
		audio3.play();
		playPauseBTN3.innerHTML = '<i id="icon1" class="fas fa-pause"></i>';
	}else{
		count = 0;
		audio3.pause();
		playPauseBTN3.innerHTML = '<i id="icon1" class="fas fa-play"></i>';
	}
}

function playPause4(){
	if(count == 0){
		count = 1;
		audio4.play();
		playPauseBTN4.innerHTML = '<i id="icon1" class="fas fa-pause"></i>';
	}else{
		count = 0;
		audio4.pause();
		playPauseBTN4.innerHTML = '<i id="icon1" class="fas fa-play"></i>';
	}
}



























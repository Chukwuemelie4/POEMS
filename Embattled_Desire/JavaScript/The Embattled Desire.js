// JavaScript Document
function message () {
 var header = document.querySelector('header');
	var msg = document.createTextNode('To All Trobuled Hearts - We Love You and Want To Let You Know That GOD Loves You');
	var ele = document.createElement('h4');
	ele.appendChild(msg);
	header.appendChild(ele);
	 
	var color_eff= document.querySelector('h4');
	color_eff.setAttribute('class' ,'color_effect')
};
var eff= document.querySelector('article>p');

function foci () {

	eff.setAttribute('class' ,'color_effect2');
};

window.addEventListener('load', message, false);
eff.addEventListener('mousemove', foci, false);

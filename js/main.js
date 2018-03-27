'use strict';

const btnMenu = document.querySelector('.nav-trigger');
const btnCloseMenu = document.querySelector('.nav-close');
const nav = document.querySelector('.nav');


// function to open side menu
const openNav =()=> {
    nav.style.right = "0";
};
// function to close side menu
const closeNav = ()=> {
	nav.style.right = "-1400px";
};

btnMenu.addEventListener('click', openNav);
btnCloseMenu.addEventListener('click', closeNav);
nav.addEventListener('click', closeNav);

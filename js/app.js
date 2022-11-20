// NAVBAR ANIMATION
var lastScrollTop;
navbar = document.getElementById('header__navbar');
nav = document.getElementById('nav');
window.addEventListener('scroll',function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
        navbar.style.top='-80px';
    }
    else{
        navbar.style.top='0';
    }
    lastScrollTop = scrollTop;
});

// ANIMATIONS - SCROLL
jQuery( document ).ready(function() {
    var mywindow = jQuery(window);
    updateStyling(mywindow.scrollTop());
    console.log(mywindow.scrollTop());

    var mywindow = jQuery(window);
    var mypos = mywindow.scrollTop();
    let scrolling = false;
    window.addEventListener('scroll', function() {
        console.log('scrolling');
        mypos = mywindow.scrollTop();
        scrolling = true;
    });
    setInterval(() => {
        if (scrolling) {
            scrolling = false;
            updateStyling(mypos);
        }
    }, 200);

    function updateStyling(mypos){
        if (mypos >= 20) {
            jQuery('#header__navbar').addClass('header__navscroll');
            jQuery('#header__navbar').addClass('nav__shadow');
            jQuery('#nav').removeClass('nav__hr');
            jQuery('#h__banner-left-socials').addClass('animate__animated animate__backOutLeft animate__faster');
            jQuery('#hidden__socials-wrap').removeClass('is-hidden animate__animated animate__backOutLeft animate__faster');
            jQuery('#hidden__socials-wrap').addClass('is-scrolled animate__animated animate__backInLeft animate__faster');
            jQuery('#scrollToTop').removeClass('d-hidden  animate__backOutRight');
            jQuery('#scrollToTop').addClass('d-show animate__backInRight');
        }
        else {
            jQuery('#header__navbar').removeClass('header__navscroll');
            jQuery('#header__navbar').removeClass('nav__shadow');
            jQuery('#nav').addClass('nav__hr');
            jQuery('#h__banner-left-socials').removeClass('animate__animated animate__backOutLeft animate__faster');
            jQuery('#h__banner-left-socials').addClass('animate__animated animate__backInLeft animate__faster');
            jQuery('#hidden__socials-wrap').removeClass('is-scrolled animate__animated animate__backInLeft animate__faster');
            jQuery('#hidden__socials-wrap').addClass('is-hidden animate__animated animate__backOutLeft animate__faster');
            jQuery('#scrollToTop').addClass('d-hidden  animate__backOutRight');
            jQuery('#scrollToTop').removeClass('d-show animate__backInRight');
        }
    }
});

// CURSOR POINTER
var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');
var hasHover = document.querySelectorAll('.has__hover');

document.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});
document.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;
    cursorinner.style.left = x + 'px';
    cursorinner.style.top = y + 'px';
});
document.addEventListener('mousedown', function(){
    cursor.classList.add('click');
    cursorinner.classList.add('cursorinnerhover')
});
document.addEventListener('mouseup', function(){
    cursor.classList.remove('click')
    cursorinner.classList.remove('cursorinnerhover')
});
a.forEach(item => {
    item.addEventListener('mouseover', () => {
        cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
    });
})
hasHover.forEach(item => {
    item.addEventListener('mouseover', () => {
        cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
    });
})

// MEDIA QUERY

// function myFunction(x) {
//     if (mobile.matches) { // If media query matches
//         a.forEach(item => {
//             item.addEventListener('mouseover', () => {
//                 cursor.classList.add('hover');
//             });
//             item.addEventListener('mouseleave', () => {
//                 cursor.classList.remove('hover');
//             });
//         })
//         hasHover.forEach(item => {
//             item.addEventListener('mouseover', () => {
//                 cursor.classList.add('hover');
//             });
//             item.addEventListener('mouseleave', () => {
//                 cursor.classList.remove('hover');
//             });
//         })
//     }
// }
// var mobile = window.matchMedia("(max-width: 768px)")
//   myFunction(x) // Call listener function at run time
//   mobile.addListener(myFunction) // Attach listener function on state changes

// SHOW MENU


jQuery(function() {
    $(document).ready(function() {
        $('.burger__menu').click(function() {
            $(this).toggleClass('active');
            $('.menu__overlay').toggleClass('show__menu');
            $('.menu__overlay').toggleClass('hide__menu');
            $('#header__navbar').removeClass('header__navscroll');
            $('#header__navbar').removeClass('nav__shadow');
            $('#nav').addClass('nav__hr');
            $('body').toggleClass('of__hidden');
        });
    });
});

// PRE-LOADER
var loader = document.getElementById('loader-bg');
window.addEventListener("load", function(){
    // loader.style.display = "none";
    // $('body').removeClass('loading');
    window.setTimeout(function() {
        loader.style.display = "none";
        $('body').removeClass('loading');
    }, 3000);
});


// SLIDER
jQuery(function($) {
    $(document).ready(function() {

        $('.a__details-right-recos-wrap').slick({
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        });

        $('.a__exp-slide-wrap').slick({
            dots: false,
            infinite: false,
            autoplay: false,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: false,
                        dots: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: false,
                        dots: false
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: false,
                        dots: false
                    }
                }
            ]
        });

    });
});

// ACTIVE LINKS
const pageUrl = location.href;
const navLinks = document.querySelectorAll('.nav__links-link');
const menuLength = navLinks.length;

for(let i=0;i<menuLength;i++) {
    if(navLinks[i].href === pageUrl) {
        navLinks[i].classList.add("nav__links-link-active");
    }
}

// IMAGE OVERLAY ON HOVER
const link = document.querySelectorAll('.p__banner-projects-link');
const linkHoverReveal = document.querySelectorAll('.hover__reveal-img');
const linkImages = document.querySelectorAll('.hidden-img');


for(let i = 0; i < link.length; i++) {
    link[i].addEventListener('mousemove', (e) => {
        linkHoverReveal[i].style.opacity = 1;
        linkHoverReveal[i].style.transform = `translate(-120%, -50% ) rotate(5deg)`;
        linkImages[i].style.transform = 'scale(1, 1)';
        linkHoverReveal[i].style.left = e.clientX + "px";
    })
    
    link[i].addEventListener('mouseleave', (e) => {
        linkHoverReveal[i].style.opacity = 0;
        linkHoverReveal[i].style.transform = `translate(-50%, -50%) rotate(-5deg)`;
        linkImages[i].style.transform = 'scale(0.8, 0.8)';
    })
}

// jQuery(function($) {
//     $(document).ready(function() {
//         $('.projectsModal .modal-header').click(function() {
//             $('#projectsModalDev').modal('hide');
//         });
//     });
// });



// TIC TAC TOE
var origBoard;
const huPlayer = '0';
const aiPlayer = 'X';
const winCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
]
const cells = document.querySelectorAll('.square');
startGame();

// START
function startGame(){
    document.querySelector(".endgame").style.display="none"
    origBoard = Array.from(Array(9).keys());
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click', turnClick, false);
    }
}

// TURNS
function turnClick(square){
    if (typeof origBoard[square.target.id] == 'number') {
        turn(square.target.id, huPlayer)
        if (!checkWin(origBoard, huPlayer) && !checkTie()) turn(bestSpot(), aiPlayer);   
    }
}

// TURNS
function turn(squareId, player){
    origBoard[squareId] = player;
    document.getElementById(squareId).innerText = player;
    let gameWon = checkWin(origBoard, player)
    if (gameWon) gameOver(gameWon)
}

// CHECK
function checkWin(board, player){
    let plays = board.reduce((a, e, i) => (e === player) ? a.concat(i) : a, []);
    let gameWon = null;
    for (let [index, win] of winCombos.entries()){
        if (win.every(elem => plays.indexOf(elem) > -1)){
            gameWon = {index: index, player: player};
            break;
            }
        }
    return gameWon;
}

// GAME OVER
function gameOver(gameWon){
    for (let index of winCombos[gameWon.index]) {
        document.getElementById(index).style.backgroundColor = gameWon.player === huPlayer ? "blue" : "red";
    }
    for (var i = 0; i < cells.length; i++){
        cells[i].removeEventListener('click', turnClick, false);
    }
    declareWinner(gameWon.player == huPlayer ? "You Win 👏" : "You Lose 😛")

    if(gameWon.player == huPlayer) {
        window.setTimeout(function() {
            window.location.href = '/';
        }, 1000);
    }

}

// WINNER
function declareWinner(who) {
    document.querySelector(".endgame").style.display = "flex";
    document.querySelector(".endgame .text").innerText = who;
}

// EMPTY
function emptySquares(){
    return origBoard.filter(s => typeof s == 'number')
}


function minimax(newBoard, player){
	var availSpots = emptySquares();

	if (checkWin(newBoard, huPlayer)) {
		return {score: -10};
	} else if (checkWin(newBoard, aiPlayer)) {
		return {score: 10};
	} else if (availSpots.length === 0) {
		return {score: 0};
	}
	var moves = [];
	for (var i = 0; i < availSpots.length; i++) {
		var move = {};
		move.index = newBoard[availSpots[i]];
		newBoard[availSpots[i]] = player;

		if (player == aiPlayer) {
			var result = minimax(newBoard, huPlayer);
			move.score = result.score;
		} else {
			var result = minimax(newBoard, aiPlayer);
			move.score = result.score;
		}

		newBoard[availSpots[i]] = move.index;

		moves.push(move);
	}

	var bestMove;
	if(player === aiPlayer) {
		var bestScore = -10000;
		for(var i = 0; i < moves.length; i++) {
			if (moves[i].score > bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	} else {
		var bestScore = 10000;
		for(var i = 0; i < moves.length; i++) {
			if (moves[i].score < bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	}

	return moves[bestMove];
}

function bestSpot(){
    return minimax(origBoard, aiPlayer).index;
}

function checkTie (){
    if (emptySquares().length == 0){
        for (var i = 0; i < cells.length; i++) {
            cells[i].style.backgroundColor = "green";
            cells[i].removeEventListener('click',turnClick, false);
        }
        declareWinner("It's a TIE!")
        return true;
    }
    return false;
}
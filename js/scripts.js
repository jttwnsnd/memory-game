// All code will wait until DOM is ready

$(document).ready(function(){
	var cards = ['<img src="css/images/alchemy1.gif">','<img src="css/images/alchemy2.gif">', '<img src="css/images/alchemy3.jpg">' ];
	var gridSize = 6;
	var card;
	var mgHTML = '';
	//i did this because there are 3 cards and a 6 grid.
	checkDeck=[];
	var flipWin = 0;
	for(var i = 0; i < cards.length; i++){
		checkDeck.push(cards[i]);
		checkDeck.push(cards[i]);
	}
	function shufflePictures(){
		for(var i = 1; i < gridSize*2; i++){
			var card1 = Math.floor(Math.random() * 6);
			var card2 = Math.floor(Math.random() * 6);
			var temp = checkDeck[card1];
			checkDeck[card1] = checkDeck[card2];
			checkDeck[card2] = temp;
		}
	}
	shufflePictures();
	function buildGrid(){
		for (var i = 0; i < gridSize; i++){
			mgHTML += '<div class="mg-tile col-sm-'+(12/gridSize)+'">';
				mgHTML += '<div class="mg-tile-inner">';
					mgHTML += '<div class="mg-front">'+ checkDeck[i] +'</div>';
					mgHTML += '<div class="mg-back"></div>';
				mgHTML += '</div>';
			mgHTML += '</div>';
		}
	};
	buildGrid();
	$('.mg-contents').html(mgHTML);

	$('.mg-tile-inner').click(function(){
		$(this).toggleClass('flip');
		var cardsUp = $('.flip');
		if(cardsUp.length == 2){
			if(cardsUp.find('img')[0].src == cardsUp.find('img')[1].src){
				setTimeout(function(){$(cardsUp).addClass('goneBaby').removeClass('flip')}, 600);
				flipWin++;
			}else{
				setTimeout(function(){$(cardsUp).removeClass('flip')}, 600);
			}
			if(flipWin > gridSize/3){
			setTimeout(function(){$('.messenger').css({'opacity':'1', 'margin-top':'-40px'})}, 1200);
		}
		}
	})
	$(".restart-btn").click(function(){
		console.log('hello');
		var reset = document.getElementsByClassName('goneBaby');
		shufflePictures();
		for(var i = 0; i < reset.length; i++){
			reset[i].src=checkDeck[i];
		}
		$('.messenger').css({'opacity':'0'});
		$('.goneBaby').removeClass('goneBaby');
		flipWin = 0;

	})
})
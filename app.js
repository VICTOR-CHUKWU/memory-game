
  //cards option
    const cardArray = [
        {
            name: 'joker1',
            img: 'images/joker2.jpg'
        },
        {
            name: 'joker1',
            img: 'images/joker2.jpg'
        },
        {
            name: 'joker2',
            img: 'images/joker3.jpg'
        },
        {
            name: 'joker2',
            img: 'images/joker3.jpg'
        },
        {
            name: 'joker3',
            img: 'images/joker4.jpg'
        },
        {
            name: 'joker3',
            img: 'images/joker4.jpg'
        },
        {
            name: 'joker4',
            img: 'images/joker5.jpg'
        },
        {
            name: 'joker4',
            img: 'images/joker5.jpg'
        },
        {
            name: 'joker5',
            img: 'images/joker6.jpg'
        },
        {
            name: 'joker5',
            img: 'images/joker6.jpg'
        },
        {
            name: 'joker6',
            img: 'images/joker7.jpg'
        },
        {
            name: 'joker6',
            img: 'images/joker7.jpg'
        },
    ];

    cardArray.sort(() => 0.5 - Math.random());
    console.log(cardArray[0].name);


    const grid = document.querySelector('.grid');

    function createGameBoard() {
        for(let i = 0; i < cardArray.length; i += 1){
            var card = document.createElement('img');
            card.setAttribute('src', 'images/joker1.jpg');
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
        return card;
    };

    function clear() {
        return cardArray;
    }
    

    let cardChoosen = [];
   let cardChoosenId = [];
   let cardsWon = [];
   let resultDisplay = document.querySelector('#result');


   function checkForMatch() {
     var cards =document.querySelectorAll('img');
     const optionOneId = cardChoosenId[0];
     const optionTwoId = cardChoosenId[1];
     if(cardChoosen[0] === cardChoosen[1]){
         alert("You found a match");
         cards[optionOneId].setAttribute('src', 'images/joker8.jpg');
         cards[optionTwoId].setAttribute('src', 'images/joker8.jpg');
         cardsWon.push(cardChoosen);

    }else {
        cards[optionOneId].setAttribute('src', 'images/joker1.jpg');
        cards[optionTwoId].setAttribute('src', 'images/joker1.jpg');
        alert('Sorry, Try again!!')
    }
    cardChoosen = [];
    cardChoosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if(cardsWon.length === cardArray.length/2){
        resultDisplay.innerHTML = "Congratulations you have found them all";
        
    }
   }


    function flipCard() {
        var cardId = this.getAttribute('data-id');
        cardChoosen.push(cardArray[cardId].name);
        cardChoosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if(cardChoosen.length === 2){
            setTimeout(checkForMatch, 500);
        }

    };

    createGameBoard();

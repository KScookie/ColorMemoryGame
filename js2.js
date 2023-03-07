const cardFrontElement = document.createElement('div');
cardFrontElement.classList.add('card-front');
cardFrontElement.innerText = '';

// セキュリティ対策
(function () {
  const scriptSrc = document.currentScript.src;
  const scriptOrigin = (new URL(scriptSrc)).origin;
  const gameContainer = document.getElementById('game-container');
  // 配列を初期化する
  let flippedCards = [];
  let matchedCards = [];

  if (gameContainer && scriptOrigin === window.location.origin) {
    const cards = [
      { id: 1, image: 'img/image_0.png' },
      { id: 2, image: 'img/image_0.png' },
      { id: 3, image: 'img/image_1.png' },
      { id: 4, image: 'img/image_1.png' },
      { id: 5, image: 'img/image_2.png' },
      { id: 6, image: 'img/image_2.png' },
      { id: 7, image: 'img/image_3.png' },
      { id: 8, image: 'img/image_3.png' },
      { id: 9, image: 'img/image_4.png' },
      { id: 10, image: 'img/image_4.png' },
      { id: 11, image: 'img/image_5.png' },
      { id: 12, image: 'img/image_5.png' },
      { id: 13, image: 'img/image_6.png' },
      { id: 14, image: 'img/image_6.png' },
      { id: 15, image: 'img/image_7.png' },
      { id: 16, image: 'img/image_7.png' },
      { id: 17, image: 'img/image_8.png' },
      { id: 18, image: 'img/image_8.png' },
      { id: 19, image: 'img/image_9.png' },
      { id: 20, image: 'img/image_9.png' },
      { id: 21, image: 'img/image_10.png' },
      { id: 22, image: 'img/image_10.png' },
      { id: 23, image: 'img/image_11.png' },
      { id: 24, image: 'img/image_11.png' },
      { id: 25, image: 'img/image_12.png' },
      { id: 26, image: 'img/image_12.png' },
      { id: 27, image: 'img/image_13.png' },
      { id: 28, image: 'img/image_13.png' },
      { id: 29, image: 'img/image_14.png' },
      { id: 30, image: 'img/image_14.png' },
      { id: 31, image: 'img/image_15.png' },
      { id: 32, image: 'img/image_15.png' },
      { id: 33, image: 'img/image_16.png' },
      { id: 34, image: 'img/image_16.png' },
      { id: 35, image: 'img/image_17.png' },
      { id: 36, image: 'img/image_17.png' },
      { id: 37, image: 'img/image_18.png' },
      { id: 38, image: 'img/image_18.png' },
      { id: 39, image: 'img/image_19.png' },
      { id: 40, image: 'img/image_19.png' },
      { id: 41, image: 'img/image_20.png' },
      { id: 42, image: 'img/image_20.png' },
      { id: 43, image: 'img/image_21.png' },
      { id: 44, image: 'img/image_21.png' },
      { id: 45, image: 'img/image_22.png' },
      { id: 46, image: 'img/image_22.png' },
      { id: 47, image: 'img/image_23.png' },
      { id: 48, image: 'img/image_23.png' },
      { id: 49, image: 'img/image_24.png' },
      { id: 50, image: 'img/image_24.png' },
      { id: 51, image: 'img/image_25.png' },
      { id: 52, image: 'img/image_25.png' },
    ];

    // shuffle関数：配列をランダムに並び替える関数
    function shuffle(array) {
      let currentIndex = array.length;
      let temporaryValue, randomIndex;

      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }

    // createCard関数：カードを作成する関数
    function createCard(card) {
      const cardElement = document.createElement('div');
      const cardFrontElement = document.createElement('div');
      const cardBackElement = document.createElement('div');
      cardElement.classList.add('card');
      cardFrontElement.classList.add('card-front');
      cardBackElement.classList.add('card-back');
      cardBackElement.style.backgroundImage = `url(${card.image})`; // カードの画像を設定
      cardElement.appendChild(cardFrontElement);
      cardElement.appendChild(cardBackElement);

      // カードがクリックされた時の処理
      cardElement.addEventListener('click', function () {
        if (!cardElement.classList.contains('flipped') && flippedCards.length < 2) {
          cardElement.classList.add('flipped');
          flippedCards.push(cardElement);

          if (flippedCards.length === 2) {
            const firstCardValue = flippedCards[0].querySelector('.card-back').style.backgroundImage;
            const secondCardValue = flippedCards[1].querySelector('.card-back').style.backgroundImage;

            if (firstCardValue === secondCardValue) {
              matchedCards.push(flippedCards[0], flippedCards[1]);
              flippedCards = [];

              if (matchedCards.length === cards.length) {
                setTimeout(function () {
                  alert('おめでとう！クリアしました！');
                }, 500);
              }
            } else {
              setTimeout(function () {
                flippedCards[0].classList.remove('flipped');
                flippedCards[1].classList.remove('flipped');
                flippedCards = [];
              }, 1000);
            }
          }
        }
      });
      return cardElement;
    }

    const gameContainer = document.getElementById('game-container');

    function createCards() {
      shuffle(cards);

      for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        let cardElement;
        cardElement = createCard(card);
        gameContainer.appendChild(cardElement);
      }
    }


    createCards();
  }
}());

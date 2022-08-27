const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span');
let playerLives = 6;

// Link text

playerLivesCount.textContent = playerLives;


// Generate the data

// [{imgSrc: './img/roll.jpeg'}]

const getData = () => [
    {imgSrc: './img/roll.jpeg', name: 'roll'},
    {imgSrc: './img/bottle.jpeg', name: 'bottle'},
    {imgSrc: './img/cake.jpeg', name: 'cake'},
    {imgSrc: './img/icecream.jpeg', name: 'icecream'},
    {imgSrc: './img/pocky.jpeg', name: 'pocky'},
    {imgSrc: './img/tea.jpeg', name: 'tea'},
    {imgSrc: './img/mask.jpeg', name: 'mask'},
    {imgSrc: './img/roll2.jpeg', name: 'roll2'},
    {imgSrc: './img/roll.jpeg', name: 'roll'},
    {imgSrc: './img/bottle.jpeg', name: 'bottle'},
    {imgSrc: './img/cake.jpeg', name: 'cake'},
    {imgSrc: './img/icecream.jpeg', name: 'icecream'},
    {imgSrc: './img/pocky.jpeg', name: 'pocky'},
    {imgSrc: './img/tea.jpeg', name: 'tea'},
    {imgSrc: './img/mask.jpeg', name: 'mask'},
    {imgSrc: './img/roll2.jpeg', name: 'roll2'},
];

// Randomize

const randomize = () => {
    const cardData = getData();
    
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
    // console.log(cardData);
}
// randomize()

// Card Generator Function

const cardGenerator = () => {
    const cardData = randomize();
    // Generate the HTML
    // const cards = document.querySelectorAll('.card');
    cardData.forEach((item) => {
        const card = document.createElement('div');
        const face = document.createElement('img');
        const back = document.createElement('div');
        card.classList = 'card';
        face.classList = 'face';
        back.classList = 'back';
        // Attach the info to the cards
        face.src = item.imgSrc;
        card.setAttribute('name', item.name);
        // Attach the cards to the section
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener('click', (e) => {
            card.classList.toggle('toggleCard');
            checkCards(e)
        })
    });    
};

// Check Cards

const checkCards = (e) => {
    console.log(e)
    const clickedCard = e.target;
    clickedCard.classList.add('flipped');
    const flippedCards = document.querySelectorAll('.flipped');
    const toggleCard = document.querySelectorAll('.toggleCard')
    
    // Logic 
    if(flippedCards.length === 2) {
        if (flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')) {
            console.log('match');
            flippedCards.forEach(card => {
                card.classList.remove('flipped');
                card.style.pointerEvents ='none';
            })
        } else {
            console.log('wrong');
            flippedCards.forEach(card => {
                card.classList.remove('flipped');                
                setTimeout(() => card.classList.remove('toggleCard'), 1000);
            })
            playerLives--;
            playerLivesCount.textContent = playerLives;
            if(playerLives === 0) {
                // alert('try again');
                restart('try again');
                
            }
        }
    }
    // Run a check to see if we won the game
    if(toggleCard.length === 16) {
        restart('you won!');
    }
};

// Restart
const restart = (text) => {
    let cardData = randomize();
    let faces = document.querySelectorAll('.face');
    let cards = document.querySelectorAll('.card');
    section.style.pointerEvents = 'none';
    cardData.forEach((item,index) => {
        cards[index].classList.remove('toggleCard');
        // Randomize
        setTimeout(() => {
            cards[index].style.pointerEvents = 'all';
            faces[index].src = item.imgSrc;
            cards[index].setAttribute('name', item.name);
            section.style.pointerEvents = 'all';
        }, 1000);
    });
    playerLives =  6;
    playerLivesCount.textContent = playerLives;
    setTimeout(() => window.alert(text), 100)
}

cardGenerator()

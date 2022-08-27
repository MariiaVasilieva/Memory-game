// Grab a couple of things

const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span');
const playerLives = 6;

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
    console.log(cardData);
}
randomize()

// Card Generator Function
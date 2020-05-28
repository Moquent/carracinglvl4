var gameState = 0, playerCount = 0, form, player, allPlayers, game;
var database, position;
var car1, car2, car3, car4, cars = [];
var c1pic, c2pic, c3pic, c4pic, track;

function preload(){
    track = loadImage("images/track.jpg");
    c1pic = loadImage("images/car1.png");
    c2pic = loadImage("images/car2.png");
    c3pic = loadImage("images/car3.png");
    c4pic = loadImage("images/car4.png");
}
function setup(){
    createCanvas(displayWidth - 30, displayHeight - 10);

    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("#c68767");
    if(playerCount == 4){
        game.update(1);
    }

    if(gameState == 1){
        game.play();
    }

    console.log(displayWidth, displayHeight);
}



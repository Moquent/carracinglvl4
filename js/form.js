class Form{
    constructor(){
        this.input = createInput("Name");
        this.input.position(displayWidth/2 - 40, displayHeight/2 -80);

        this.button = createButton("PLAY");
        this.button.position(displayWidth/2 + 30, displayHeight/2);
        
        this.greeting = createElement("h3");
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    }
    display(){
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(displayWidth/2 - 50, 50);

        

        this.button.mousePressed(() => {
            this.button.hide();
            this.input.hide();

            player.name = this.input.value();

            playerCount = playerCount + 1;
            player.index = playerCount;

            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello "+ player.name);

        })

    }

    hide(){
        this.button.hide();
        this.input.hide();
        this.greeting.hide();
    }
}
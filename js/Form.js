class Form{

    constructor(){

    }
    

 display(){

    var title = createElement("h2");
    title.html("Car Racing Game");
    title.position(130,0);

    var input = createInput("name");
    input.position(130,150);

    var button = createButton("Play");
    button.position(250,200);

    var greeting = createElement("h3");
    greeting.position(130,160);

    button.mousePressed(function()
    {

        input.hide();
        button.hide();

        var name = input.value();
        playerCount += 1
        player.update(name);
        player.updateCount(playerCount);

        greeting.html("Hello There!", + name);


    })

 }




}
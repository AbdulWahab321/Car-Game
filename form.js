class Form{
    constructor(){

    }
    Hide(){

    }
    display(){
         title=createElement("h2");
         fill("white")
        title.html("Car Racing Game")
        title.position(200,-8)
         input=createInput("Name")
         buttun=createButton("OK")
        
        input.position(330,160)
        buttun.position(450,200)
        buttun.mousePressed(()=>{

            
            player.update();
            player.updateName();
            gameState=SELECTOR
            
            
            
        })
    }

}
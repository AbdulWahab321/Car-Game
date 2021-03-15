class Player {
    constructor(){
      this.index = null;
      
      distance =0;

      this.name = null;
    }
  

  

    getDistance(){
        var contestantCountRef = database.ref('player/distance');
        contestantCountRef.on("value",(data)=>{
          distance = data.val();
        })
      }
   getName(){
        var contestantCountRef = database.ref('player/name');
        var name=input.value();
        contestantCountRef.on("value",(data)=>{
         name = data.val();
        })
    }

    updateName(){
        var contestantIndex = "player";
        var name=input.value();
        database.ref(contestantIndex).set({
          name:name
          
          
        });
    }
    update(){
      var contestantIndex = "player/distances";
      database.ref(contestantIndex).set({
        
        distance:distance+100
        
      });
    }
  

  }
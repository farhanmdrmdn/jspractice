function informationCard(name,location,hobby){
    this.name = name;
    this.location = location;
    this.hobby = hobby;
    }
    
    var myFriend = new informationCard("John","South Africa", "Rugby")
    var mySelf = new informationCard("Farhan","Singapore","Soccer")
    var myWife = new informationCard("Nadi","Bali","Surfing")
    
    console.log("Hi, my name is " + myFriend.name + "." + " I live in " + myFriend.location + " and enjoy " + myFriend.hobby +"."); 
    
    console.log("Hi, my name is " + mySelf.name + "." + " I live in " + mySelf.location + " and enjoys playing " + mySelf.hobby +"."); 
    
    console.log("Hi, my name is " + myWife.name + "." + " I live in " + myWife.location + " and enjoys " + myWife.hobby +".");
//create a fortune cookie class

//on a button click, show a fortune to the user that is generated from the fortune cookie class

//do not allow the user to look at a new fortune unless the user clicks a separate button to "pick up a new fortune cookie"
//clicking this button will replace text on screen with "Please open your cookie"

class fortuneCookie {
    fortunes //stores fortunes in an array

    //constructor
    constructor(fortunes) {
        this.fortunes = fortunes
    }

    //returns a random number from the fortunes array
    randFortune() {
        return this.fortunes[Math.floor(Math.random() * this.fortunes.length)]
    }
}

class fortuneTeller extends fortuneCookie {
    fortuneDisplay //displays the fortune cookie message

    //constructor with fortune messages
    constructor(display) {
        super([
            "A dubious friend may be an enemy in camouflage.", 
            "A faithful friend is a strong defense.", 
            "A fresh start will put you on your way.", 
            "A lifetime friend shall soon be made.", 
            "A smile is your personal welcome mat.", "Adventure can be real happiness.",
            "All will go well with your new project.",
            "All your hard work will soon pay off."
        ])
        this.fortuneDisplay = display
    }

    //function to display the fortunes called from the button
    tellFortune() {
        //if the display div is empty or is ready to open a new cookie
        if(this.fortuneDisplay.innerHTML == "Please open your cookie." || this.fortuneDisplay.innerHTML == "") {
            let tell = this.randFortune() //get a new fortune
            this.fortuneDisplay.innerHTML = tell //display the fortune
        }
    }

    //displays message from second button
    pickUp() {
        this.fortuneDisplay.innerHTML = "Please open your cookie."
    }
}

//create a new fortune object to display 
let myFortune = new fortuneTeller(document.getElementById("fortuneDisplay"))
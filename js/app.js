// Tamagotchi class with methods
class Tamagotchi {
    constructor(name) {
        this.name = name;
        this.age = 0;
        this.hungerLevel = 100;
        this.energyLevel = 100;
        this.playLevel = 100;
    }
    initPet(){
        console.log('Initializing tamagotchi');
        $('#pet').append('<img id="thePet" src="https://66.media.tumblr.com/d8d9ec566f240850f35c703b4b2a42c0/tumblr_or6nwehp7T1wq3wtao4_250.gif"/>');
        const $h1 = $(`<h1>${this.name}</h1>`)
        $('#pet').append($h1);
    }
    feed() {
        this.hungerLevel += 50;
    }
    sleep() {
        this.energyLevel += 40;
    }
    play() {
        this.boredomLevel += 25;
    }
    hungerDeplete() {
        setInterval(() => {
            this.hungerLevel -= 5;
        }, 1000)
    }
    energyDeplete() {
        setInterval(() => {
            this.energyLevel -= 4;
        }, 1000)
    }
    playDeplete() {
        setInterval(() => {
            this.playLevel -= 2.5;
        }, 1000)
    }
}


$('button').on('click', () => {
    console.log('Button works!')
    game.createPet();
    $('button').hide();
})



const game = {
    createPet() {
        const petName = prompt("Enter a name for your Tamagotchi", "");
        alert(`${petName} has been born!`)
        const newPet = new Tamagotchi(petName);
        console.log(newPet)
        newPet.initPet();
    }
}

// Tamagotchi class with methods
class Tamagotchi {
    constructor(name) {
        this.name = name;
        this.hungerLevel = 100;
        this.energyLevel = 100;
        this.playLevel = 100;
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
})



const game = {
    createPet() {
        const petName = prompt("Enter a name for your Tamagotchi", "");
        alert(`${petName} has been born!`)
        const newPet = new Tamagotchi(petName);
        console.log(newPet)
    }
}

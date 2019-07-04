// Tamagotchi class with methods
class Tamagotchi {
    constructor(name) {
        this.name = name;
        this.age = 0;
        this.hungerLevel = 100;
        this.energyLevel = 100;
        this.contentLevel = 100;
    }
    initPet(){
        console.log('Initializing tamagotchi');
        $('#thePet').show();
        const $h2 = $(`<h2>${this.name}</h2>`)
        $('#stats').append($h2);
        $('#stats').show();
        $('#feedButton').on('click', this.feed.bind(this))
        $('#sleepButton').on('click', this.sleep.bind(this))
        $('#playButton').on('click', this.play.bind(this))
        this.hungerDeplete()
        this.energyDeplete()
        this.playDeplete()
        this.ageIncrease()
    }
    ageIncrease() {
        setInterval(() => {
            this.age += 1;
            $('#age').text(`Age: ${this.age}`)
        }, 3000)
    }
    feed() {
        this.hungerLevel += 40;
        if(this.hungerLevel >= 100) this.hungerLevel = 100;
        $('#hunger').text(`Hunger: ${this.hungerLevel}`)
        $('#hunger-bar').css('width', this.hungerLevel + '%');
        
    }
    sleep() {
        this.energyLevel += 70;
        if(this.energyLevel >= 100) this.energyLevel = 100;
        $('#sleepiness').text(`Sleepiness: ${this.energyLevel}`);
        $('#sleep-bar').css('width', this.energyLevel + '%');
    }
    play() {
        this.contentLevel += 25;
        if(this.contentLevel >= 100) this.contentLevel = 100;
        $('#happiness').text(`Happiness: ${this.contentLevel}`);
        $('#happy-bar').css('width', this.contentLevel + '%');
    }
    hungerDeplete() {
        setInterval(() => {
            this.hungerLevel -= 5;
            $('#hunger').text(`Hunger: ${this.hungerLevel}`);
            $("#hunger-bar").css("width", this.hungerLevel + "%");
        }, 1000)
    }
    energyDeplete() {
        setInterval(() => {
            this.energyLevel -= 2;
            $('#sleepiness').text(`Sleepiness: ${this.energyLevel}`);
            $("#sleep-bar").css("width", this.energyLevel + "%");
        }, 1000)
    }
    playDeplete() {
        setInterval(() => {
            this.contentLevel -= 1;
            $('#happiness').text(`Happiness: ${this.contentLevel}`);
            $("#happy-bar").css("width", this.contentLevel + "%");
        }, 1000)
    }
    drain() {
        setInterval(function(){
        if(game.isDead(true)) {
          $("#dead").show();
          $("#stats").hide();
          clearInterval();
        }
      }, 1000)
    }
}

$('#createButton').on('click', () => {
    console.log('Button works!')
    game.createPet();
    $('#createButton').hide();
})



const game = {
    pet: {},
    createPet() {
        const petName = prompt("Enter a name for your Tamagotchi", "");
        alert(`${petName} is born!`)
        const newPet = new Tamagotchi(petName);
        this.pet = newPet
        console.log(this.pet)
        newPet.initPet();
        newPet.drain();
    },
    isDead() {
        if ((game.pet.hungerLevel === 0) || (game.pet.energyLevel === 0) || (game.pet.contentLevel === 0)) {
            return true;
        } else {
            return false;
        }
    },
}

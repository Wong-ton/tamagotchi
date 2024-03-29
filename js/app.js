class Minion {
    constructor(name) {
        this.name = name;
        this.age = 0;
        this.hungerLevel = 100;
        this.energyLevel = 100;
        this.contentLevel = 100;
    }
    initPet(){
        console.log('Initializing Minion');
        $('#thePet').show();
        const $h1 = $(`<h1>${this.name}</h1>`);
        $('#stats').prepend($h1);
        $('#stats').show();
        $('#feedButton').on('click', this.feed.bind(this));
        $('#sleepButton').on('click', this.sleep.bind(this));
        $('#playButton').on('click', this.play.bind(this));
        this.hungerDeplete();
        this.energyDeplete();
        this.playDeplete();
        this.ageIncrease();
    }
    ageIncrease() {
        setInterval(() => {
            this.age += 1;
            $('#age').text(`Age: ${this.age}`)
        }, 3000)
    }
    feed() {
        this.hungerLevel += 40;
<<<<<<< HEAD
        if(this.hungerLevel >= 100);
        this.hungerLevel = 100;
=======
        if(this.hungerLevel >= 100) this.hungerLevel = 100;
>>>>>>> 892a637ef933ed838704c5f643658f425a46742d
        $('#hunger').text(`Hunger: ${this.hungerLevel}`)
        $('#hunger-bar').css('width', this.hungerLevel + '%');
        
    }
    sleep() {
        this.energyLevel += 60;
<<<<<<< HEAD
        if(this.energyLevel >= 100);
        this.energyLevel = 100;
=======
        if(this.energyLevel >= 100) this.energyLevel = 100;
>>>>>>> 892a637ef933ed838704c5f643658f425a46742d
        $('#energy').text(`Energy: ${this.energyLevel}`);
        $('#energy-bar').css('width', this.energyLevel + '%');
    }
    play() {
        this.contentLevel += 25;
<<<<<<< HEAD
        if(this.contentLevel >= 100);
        this.contentLevel = 100;
=======
        if(this.contentLevel >= 100) this.contentLevel = 100;
>>>>>>> 892a637ef933ed838704c5f643658f425a46742d
        $('#happiness').text(`Happiness: ${this.contentLevel}`);
        $('#happy-bar').css('width', this.contentLevel + '%');
    }
    hungerDeplete() {
        setInterval(() => {
<<<<<<< HEAD
            this.hungerLevel -= 10;
=======
            this.hungerLevel -= 15;
>>>>>>> 892a637ef933ed838704c5f643658f425a46742d
            $('#hunger').text(`Hunger: ${this.hungerLevel}`);
            $('#hunger-bar').css('width', this.hungerLevel + '%');
        }, 1750)
    }
    energyDeplete() {
        setInterval(() => {
<<<<<<< HEAD
            this.energyLevel -= 6;
=======
            this.energyLevel -= 9;
>>>>>>> 892a637ef933ed838704c5f643658f425a46742d
            $('#energy').text(`Energy: ${this.energyLevel}`);
            $('#energy-bar').css('width', this.energyLevel + '%');
        }, 2000)
    }
    playDeplete() {
        setInterval(() => {
<<<<<<< HEAD
            this.contentLevel -= 4;
=======
            this.contentLevel -= 7;
>>>>>>> 892a637ef933ed838704c5f643658f425a46742d
            $('#happiness').text(`Happiness: ${this.contentLevel}`);
            $('#happy-bar').css('width', this.contentLevel + '%');
        }, 1500)
    }
    checkDead() {
        setInterval(() => {
<<<<<<< HEAD
        if (game.isDead()) {
          $('#dead').show();
          $(".name").text(game.pet.name);
=======
        if (game.isDead(true)) {
          $('#dead').show();
          $(".name").text(game.pet.name);
          $(".age").text(game.pet.age);
>>>>>>> 892a637ef933ed838704c5f643658f425a46742d
          $('#stats').hide();
        }
      }, 1000)
    }

}

$('#createButton').on('click', () => {
    console.log('Creating minion.')
    game.createPet();
    $('#createButton').hide();
})

$('#reset').on('click', () => {
    location.reload();
    $('#reset').hide();
})


const game = {
    pet: {},
    createPet() {
        const petName = prompt('Enter a name for your minion', '');
        console.log(`${petName} is born!`)
        const newPet = new Minion(petName);
        this.pet = newPet
        console.log(this.pet)
        newPet.initPet();
        newPet.checkDead();
    },
    isDead() {
        if ((game.pet.hungerLevel <= 0) || (game.pet.energyLevel <= 0) || (game.pet.contentLevel <= 0)) {
            $('#thePet').hide();
<<<<<<< HEAD
=======
            clearInterval(game.pet.hungerDeplete());
            clearInterval(game.pet.energyDeplete());
            clearInterval(game.pet.playDeplete());
>>>>>>> 892a637ef933ed838704c5f643658f425a46742d
            return true;
        } else {
            return false;
        }
    },
}

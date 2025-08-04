class mage{
    constructor(name, health, strength, armourClass){
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.armourClass = armourClass;
    }

    mageAttack() {
        let mageDamage = Math.floor(Math.random() * 6) + 1 + this.strength;
        console.log("Merlin has attacked with " + mageDamage + " .");
        return mageDamage;
    }
    
}
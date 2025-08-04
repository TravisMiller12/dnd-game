class warrior{
    constructor(name, health, strength, armourClass, rageThreshold){
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.armourClass = armourClass;
        this.rageThreshold = rageThreshold;
        this.rage = 0;
    }

    warriorAttack(){
        if (this.rage < this.rageThreshold){
            let warriorDamage = Math.floor(Math.random() * 4) + 1 + this.strength;
            console.log(this.name + " has attacked with " + warriorDamage + " damage! Rage increases to " + this.rage + ".");
            this.rage++;
            return warriorDamage;
        } else if (this.rage >= this.rageThreshold) {
            let warriorDamage = (Math.floor(Math.random() * 4) + 1 + this.strength) + (Math.floor(Math.random() * 4) + 1 + this.strength);
            console.log(this.name + " has attacked with " + warriorDamage + " damage! Rage resets.");
            this.rage = 0;
            return warriorDamage;
        }
        console.log(this.rageThreshold);

       
    }
}
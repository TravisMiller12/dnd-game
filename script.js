/*

Create a Mage class

A mage has a name, health, strength, armour class (think about how you would want to pass this into each instantiated mage)
An attack function that returns a number which represents the damage to be done, and it also logs a string in the format: "MAGE_NAME has attacked with power: DAMAGE_AMOUNT"
The damage is calculated as follows:
1d6 + strength

Create a Warrior class

A warrior has a name, health, strength, armour class, rageThreshold (think about how you would want to pass this into each instantiated warrior)
A warrior has an internal counter called rage that starts at 0
An attack function that returns a number which represents the damage to be done, and it also logs a string in the format: "WARRIOR_NAME has attacked with power: DAMAGE_AMOUNT, rage increases", every time they attack their rage increases by one.
The damage is calculated as follows:
1d4 + strength if rage is less than the rageThreshold
2d4 + strength if rage is equal to or more than rageThreshold - once this condition is met rage gets reset back to 0
Once both classes are created, make an index.html file (this will be your entry point). You can then do the following:

----------------------------------------
Instantiate a Mage and a Warrior that will fight each other
Run a while loop that runs until one of them dies
In the while loop the fight begins, at the start of the fight both players roll a 20 sided dice, the higher number gets to attack first.
Once the first attacker is appointed the first attack cycle begins:
When a player is attacking, he must first roll a 20 sides dice.
The dice result must be equal to or greater than the enemies armour class for the attack to hit, if it isn't then the attack does not hit and the players turn is over
If the attack is going to hit, then the player can call his attack function to get the damage done
This damage is then applied to the enemy
The loop will break out when one player dies
log out who the winner was

*/

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

const newMage = new mage('Merlin', 50, 1, 10);
const newWarrior = new warrior('Arthur', 50, 2, 12, 10, 0);

  function turnOne(roll) {
    return Math.floor(Math.random() * 20) + 1;
  }

  let mageRoll;
  let warriorRoll;



  do {
    mageRoll = turnOne();
    warriorRoll = turnOne();
    console.log("Merlin rolls a " + mageRoll + ".");
    console.log("Arthur rolls a " +warriorRoll + ".");


  if (mageRoll === warriorRoll){
    console.log("It's a tie! Rolling again...\n");
  }

} while (mageRoll === warriorRoll);

let isMagesTurn = mageRoll > warriorRoll;

console.log((isMagesTurn ? "Merlin" : "Arthur") + " goes first!\n");



while (newMage.health > 0 && newWarrior.health > 0 ){

    if (isMagesTurn){
        let attackRoll = Math.floor(Math.random() * 20) + 1;
        console.log("Merlin rolls a " + attackRoll + " to hit.");

        if (attackRoll >= newWarrior.armourClass){
    let damageDealt = newMage.mageAttack();
    newWarrior.health -= damageDealt;
    console.log("Arthur has " + newWarrior.health + " health.");
    
}    else {
    console.log("Merlin's attack misses!");
}

    isMagesTurn = false;

} else {
    let attackRoll = Math.floor(Math.random() * 20) + 1;
    console.log("Arthur rolls a " + attackRoll + " to hit.");
    if (attackRoll >= newMage.armourClass){
        let damageDealt = newWarrior.warriorAttack();
        newMage.health -= damageDealt;
        console.log("Merlin has " + newMage.health + " health.");
    } else {
        console.log("Arthur's attack misses!");
    }
    isMagesTurn = true;
}


}

if (newMage.health <= 0)
    {
        console.log("Merlin has died. Arthur is the winner!");
    } else if (newWarrior.health <= 0){
        console.log("Arthur has died. Merlin is the winner!");
    }

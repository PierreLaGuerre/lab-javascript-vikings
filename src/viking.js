// Soldier
class Soldier {
    constructor(health, strength) {
    this.health = health;
    this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
         this.health -= damage;
    }
}
// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    battleCry(){
        return "Odin Owns You All!"
    }
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }
        if (this.health <= 0) {
            return `${this.name} has died in act of combat`;
        }
    }

}
// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        }
        if (this.health <= 0) {
            return `A Saxon has died in combat`;
        }

}
}

// War
class War {
    vikingArmy = []
    saxonArmy = []
    addViking (Viking) {
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }

    // Armies Attacks

    fighterDead() {
        return this.health <= 0;
      }
      generateRandom(max) {
        return Math.floor(Math.random() * max);
      }
    
      chooseSaxonAtRandom() {
        const index = this.generateRandom(this.saxonArmy.length);
        return this.saxonArmy[index];
      }
      chooseVikingAtRandom() {
        const index = this.generateRandom(this.vikingArmy.length);
        return this.vikingArmy[index];
      }

      //

    vikingAttack() { 
        const saxonAttacked = this.chooseSaxonAtRandom();
        const vikingAttacking = this.chooseVikingAtRandom();
        const result = saxonAttacked.receiveDamage(vikingAttacking.strength);
        if (saxonAttacked.fighterDead()) {
          this.saxonArmy.splice(this.saxonArmy.indexOf(saxonAttacked), 1);
        }
        return result;
    }
    saxonAttack() {
        const saxonAttacking = this.chooseSaxonAtRandom();
        const vikingAttacked = this.chooseVikingAtRandom();
        const result = vikingAttacked.receiveDamage(saxonAttacking.strength);
        if (vikingAttacked.fighterDead()) {
          this.vikingArmy.splice(this.vikingArmy.indexOf(vikingAttacked), 1);
        }
        return result;
      }
    showStatus() {
        if (this.saxonArmy.length <= 0) {
            return "Vikings have won the war of the century!"
        }
        else if (this.vikingArmy.length <= 0) {
            return "Saxons have fought for their lives and survived another day..."
        }
        else if (this.saxonArmy.length === 1 && this.vikingArmy.length === 1) {
            return "Vikings and Saxons are still in the thick of battle."
        }
}
}
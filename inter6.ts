class Developer {
    name: string; // only string
    position: string; // only string
  
    constructor(name: string, position: string) {
      this.name = name;
      this.position = position;
    }
  }

const developer = new Developer("Gapur", "Frontend Developer");
console.log(developer.name); // it outputs Gapur
console.log(developer.position); // it outputs Frontend Developer

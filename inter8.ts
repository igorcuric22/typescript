interface IDeveloper {
    name: string
    position: string
    develop: () => void
  }
  
  class Developer implements IDeveloper {
    name: string;
    position: string;
  
    constructor(name: string, position: string) {
      this.name = name;
      this.position = position;
    }
  
    develop(): void {
      console.log('develop an app');
    }
  }

const developer = new Developer("Gapur", "Frontend Developer");
console.log(developer.name); // it outputs Gapur
console.log(developer.position); // it outputs Frontend Developer
developer.develop();
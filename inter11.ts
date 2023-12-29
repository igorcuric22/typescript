class App {
    name: string;
    type: string;
  
    constructor(name: string, type: string) {
      this.name = name;
      this.type = type;
    }
  }

  class Developer {
    static develop(app: App) {
      return { name: app.name, type: app.type }; // output the same
    }
  }

const app = new App('whatsapp', 'mobile');
let xx=Developer.develop(app);
console.log(xx);
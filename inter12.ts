interface App {
    name: string
    type: string
  }

  class Developer {
    static develop(app: App) {
      return { name: app.name, type: app.type }; // output the same
    }
  }

let xx=Developer.develop({name:"tt",type:"55"});
console.log(xx);
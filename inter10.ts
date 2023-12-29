class Developer {
    static develop(app: { name: string, type: string }) {
      return { name: app.name, type: app.type };
    }
  }

  let xx=Developer.develop({ name: 'whatsapp', type: 'mobile' });

  console.log(xx);

  
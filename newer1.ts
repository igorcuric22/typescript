function fn(a: string | number): boolean {
    if (typeof a === "string") {
      return true;
    } else if (typeof a === "number") {
      return false;
    }  
    // make the function valid
    return neverOccur();
  }
  
  let neverOccur = () => {
     throw new Error('Never!');
  } 

  console.log(fn("igor"));
  console.log(fn(3));

  

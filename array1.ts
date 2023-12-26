let skills: string[];
skills = ['Problem Sovling','Software Design','Programming'];


console.log(skills);

let skill:string[]=[];
skill[0] = "Problem Solving";
skill[1] = "Programming";
skill.push('Software Design');

console.log(skill);

console.log(skill.length);

console.log(typeof(skill));

let series = [1, 2, 3];
console.log(series.length); // 3

let doubleIt = series.map(e => e* 2);
console.log(doubleIt);


let scores:(string | number)[] = ['Programming', 5, 'Software Design', 4]; 
console.log(scores);


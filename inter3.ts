interface Person {
    readonly ssn: string;
    firstName: string;
    lastName: string;    
}


let person = {
    ssn: '171-28-0926',
    firstName: 'John',
    lastName: 'Doe'
}

function getFullName(person: Person) {
    return `${person.firstName} ${person.lastName}`;
}



let fullName = getFullName(person);
console.log(fullName); // Jane Doe
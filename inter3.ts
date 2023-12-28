interface Person {
    firstName: string;
    middleName?: string;
    lastName: string;
}

function getFullName(person: Person) {
    if (person.middleName) {
        return `${person.firstName} ${person.middleName} ${person.lastName}`;
    }
    return `${person.firstName} ${person.lastName}`;
}

let jane = {
    firstName: 'Jane',
    middleName: 'K.',
    lastName: 'Doe',
    age: 22
 };

let fullName = getFullName(jane);
console.log(fullName); // Jane Doe
class Employee {
    static headcount: number = 0;

    constructor(
        private firstName: string,
        private lastName: string,
        private jobTitle: string) {

        Employee.headcount++;
    }
}

let john = new Employee('John', 'Doe', 'Front-end Developer');
let jane = new Employee('Jane', 'Doe', 'Back-end Developer');

console.log(Employee.headcount); // 2

class Employee1 {
    private static headcount1: number = 0;

    constructor(
        private firstName: string,
        private lastName: string,
        private jobTitle: string) {

        Employee1.headcount1++;
    }

    public static getHeadcount1() {
        return Employee1.headcount1;
    }
}

let john1 = new Employee1('John', 'Doe', 'Front-end Developer');
let jane1 = new Employee1('Jane', 'Doe', 'Back-end Developer');

console.log(Employee1.getHeadcount1()); // 2


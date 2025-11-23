interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

const teacher1: Teacher = {
    firstName: "Mrs. Itohan",
    lastName: "Okon",
    fullTimeEmployee: true,
    location: "Lagos",
    contract: false
}

// console.log(teacher1);

interface Director extends Teacher {
    numberOfReports: number;
}

const director1: Director = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: true,
    yearsOfExperience: 10,
    location: "New York",
    numberOfReports: 5
}

// console.log(director1);

// interface printTeacherFunction {
//     (firstName: string, lastName: string): string;
// }
interface printTeacherFunction {
    firstName: string,
    lastName: string
}

// const printTeacher: printTeacherFunction = function (firstName: string, lastName: string): string {
//     return `${firstName} ${lastName}`;
// }
// const printTeacher: printTeacherFunction = ( {'firstName, lastName} ): string => {
//     return `${firstName} ${lastName}`;
// }

function printTeacher({ firstName, lastName }: printTeacherFunction): string {
    return `${firstName}. ${lastName}`;
}
// const printTeacher: printTeacherFunction = (firstName, lastName) => {
//   return `${firstName} ${lastName}`;
// };


// console.log(printTeacher({firstName: "John", lastName: "Doe"}));

// --- Interfaces Definitions ---

/**
 * Interface describing the shape of data passed to the constructor.
 */

interface IStudentConstructor {
  firstName: string;
  lastName: string;
}

interface IsStudent {
    firstName: string;
    lastName: string;
    workOnHomework(): void;
    displayName(): string;
}

// --- Class Implementation ---

class StudentClass implements IsStudent {
    firstName: string;
    lastName: string;

    constructor({firstName, lastName}: IStudentConstructor) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(){
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

const student1 = new StudentClass({firstName: "Emmanuel", lastName: "Aigbe"});
const student2 = new StudentClass({firstName: "Ajanaku", lastName: "Emike"});

console.log(student1.displayName());
console.log(student1.workOnHomework());

console.log(student2.displayName());
console.log(student2.workOnHomework());
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

console.log(director1);

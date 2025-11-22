interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearOfExperience?: number;
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

console.log(teacher1);
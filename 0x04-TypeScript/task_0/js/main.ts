interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles",
};

const studentsList: Student[] = [student1, student2];

const s_table = document.getElementById("studentTable") as HTMLTableElement;

//create table header
const headerRow = document.createElement("tr");
const thd1 = document.createElement("th");
thd1.textContent = "First Name";
headerRow.appendChild(thd1);

const thd2 = document.createElement("th");
thd2.textContent = "Location";
headerRow.appendChild(thd2);

s_table.appendChild(headerRow);

//populate table with student data
studentsList.forEach((student) => {
  const row = document.createElement("tr");
  
  const td1 = document.createElement("td");
  td1.textContent = student.firstName;
  row.appendChild(td1);

  const td2 = document.createElement("td");
  td2.textContent = student.location;
  row.appendChild(td2);

  s_table.appendChild(row);
});
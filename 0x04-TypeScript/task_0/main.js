const table = document.getElementById('studentTable');

const header = document.createElement('tr');
header.innerHTML = "<th>First Name</th><th>Last Name</th><th>Age</th><th>Location</th>";
table.appendChild(header);

studentsList.forEach(student => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
    table.appendChild(row);
});
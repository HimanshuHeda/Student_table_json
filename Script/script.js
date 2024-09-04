// AJAX code to fetch data from JSON file
const xhr = new XMLHttpRequest();
xhr.open('GET', 'students.json', true);
xhr.onload = function() {
    if (xhr.status === 200) {
        const students = JSON.parse(xhr.responseText);
        const tableBody = document.getElementById('student-data');
        students.forEach((student) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.age}</td>
                <td>${student.city}</td>
            `;
            tableBody.appendChild(row);
        });
    }
};
xhr.send();
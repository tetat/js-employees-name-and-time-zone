const container = document.getElementById('container');

function setEmployeesNames(employees) {
    container.innerText += "Output: [";
    for (const id in employees) {
        container.innerText += employees[id].employee;
        if (employees[id].employee !== "akib") {
            container.innerText += ",";
        }
    }
    container.innerText += "]";
}

function getEmployees() {
    const url = 'https://api.b2gsoft.com/api/v1/interview/question/one';
    fetch(url)
        .then(res => res.json())
        .then(data => {
            setEmployeesNames(data.data.content.component);
        });
}

getEmployees();
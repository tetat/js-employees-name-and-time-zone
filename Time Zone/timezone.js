const container = document.getElementById('container');

// function for find the specific country time zone
const specificCountryTime = offset => {
    let localDate = new Date();
    let utc = localDate.getTime() + (localDate.getTimezoneOffset() * 60000);
    let targetTime = new Date(utc + (3600000 * offset));
    return [targetTime.toLocaleTimeString(), targetTime.toLocaleDateString()];
}

// check which of the employees have current time match with 11:00 AM (8/25/2020)
// if match then sent the email
function checkOnTime(employees) {
    employees.map(employee => {
        const [time, date] = specificCountryTime(parseInt(employee.offset));

        if (date === "8/25/2022") {
            const hourMinute = time.substring(0, 5);
            const AM = time.substring(time.length - 2);

            // console.log(hourMinute, AM, date);

            if (hourMinute === "11:00" && AM == "AM") {
                const p = document.createElement('p');
                p.innerText = `at ${employee.abbreviation} ${hourMinute} ${AM} (${date})`;
                container.appendChild(p);
            }
        }
    })
}

// load employees from store
function loadEmployeesDetails() {
    fetch('employees.json')
        .then(res => res.json())
        .then(employees => checkOnTime(employees));
}
loadEmployeesDetails();
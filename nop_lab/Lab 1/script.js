function convertDate() {
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;

    if (!isValidDate(day, month, year)) {
        alert("Invalid date!");
        return;
    }

    const inputDate = new Date(`${year}-${month}-${day}`);

    document.getElementById("result1").textContent = inputDate
    .toISOString() 
    .slice(0, 10); 
    document.getElementById("result2").textContent = `${day}/${month}/${year}`;
    document.getElementById("result3").textContent = `${day}.${month}.${year}`;
    document.getElementById("result4").textContent = `${day}, ${getMonthName(month)} ${year}`;
    document.getElementById("result5").textContent = `${day}, ${getFullMonthName(month)} ${year}`;
}

function isValidDate(day, month, year) {
    const inputDate = new Date(`${year}-${month}-${day}`);
    return !isNaN(inputDate.getTime());
}

function getMonthName(month) {
    const months = [
        "Jan", "Feb", "Mar", "Apr",
        "May", "Jun", "Jul", "Aug",
        "Sep", "Oct", "Nov", "Dec"
    ];
    return months[parseInt(month, 10) - 1];
}

function getFullMonthName(month) {
    const months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];
    return months[parseInt(month, 10) - 1];
}

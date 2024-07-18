function convertDate() {
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;

    // Validate the input (you can add more validation as needed)
    if (!isValidDate(day, month, year)) {
        alert("Invalid date!");
        return;
    }

    const inputDate = new Date(`${year}-${month}-${day}`);

    document.getElementById("result1").textContent = inputDate
    .toISOString() // Chuyển đổi một đối tượng Date thành một chuỗi đại diện cho ngày tháng năm theo định dạng chuẩn ISO 8601. Ví dụ: "YYYY-MM-DDTHH:mm:ss.sssZ".
    .slice(0, 10); // Lấy từ ký tự đầu tiên đến ký tự thứ 10 trong chuỗi
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
/* Giải thích Hàm `getMonthName(month)`trong đoạn mã JavaScript có chức năng nhận một số nguyên biểu thị tháng (từ 1 đến 12) 
và trả về tên của tháng tương ứng dưới dạng chuỗi viết tắt.

Dưới đây là giải thích chi tiết về cách hàm này hoạt động:

1. `const months`: Đây là một mảng chứa tên của các tháng theo thứ tự từ tháng 1 đến tháng 12. Mỗi phần tử trong mảng là một chuỗi viết tắt của tên tháng.

2. `parseInt(month, 10) - 1`: Tham số `month` là một chuỗi biểu diễn số nguyên, nhưng để đảm bảo rằng nó được hiểu đúng, chúng ta sử dụng hàm `parseInt()` 
để chuyển đổi nó thành một số nguyên. Tham số thứ hai của `parseInt()` là cơ số, và trong trường hợp này là 10 (decimal). Kết quả sẽ là một số nguyên từ 1 đến 12.

3. `months[parseInt(month, 10) - 1]`: Truy cập phần tử tương ứng trong mảng `months`. Do mảng bắt đầu từ chỉ số 0, 
nên chúng ta trừ đi 1 từ số tháng để lấy đúng vị trí của tháng trong mảng.

Ví dụ, nếu `month` là 3, thì `parseInt(month, 10) - 1` sẽ là 2 (vì 3 - 1 = 2). Hàm sẽ trả về `months[2]`, tức là "Mar" (viết tắt của tháng 3). */
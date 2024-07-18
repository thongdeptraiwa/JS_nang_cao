// Thư viện Moment
// 1. Lấy thời gian hiện tại
var now = moment().format('YYYY MM DD');
console.log(now);
//--> Kết quả: 2024 01 01

// 2. Tạo mốc thời gian bằng 1 chuỗi
var date = moment("2023-10-30").format("YYYY MM DD");
console.log(date);
//--> Kết quả: 2023 10 30

// 3. Nhận diện chuỗi thời gian dựa vào format
var date2 = moment("12-25-1995", "MM-DD-YYYY").format("YYYY MM DD");
console.log(date2);
//--> Kết quả: 1995 12 25
// Nhận diện chuỗi thời gian trùng 1 trong các định dạng
var date3 = moment("25/12/1995", ["MM-DD-YYYY", "DD/MM/YYYY"])
    .format("YYYY MM DD");
console.log(date3);
//--> Kết quả: 1995 12 25

// 4. Đổi định dạng theo format tuỳ chọn
var date4 = moment("12-25-1995", "MM-DD-YYYY")
    .format("DD, MMM YYYY");
console.log(date4);
//--> Kết quả:25, Dec 1995
var date5 = moment("12-25-1995", "MM-DD-YYYY")
    .format("DD, MMMM YYYY");
console.log(date5);
//--> Kết quả: 25, December 1995
var date6 = moment("12-25-1995", "MM-DD-YYYY")
    .format("DD/MM/YYYY");
console.log(date6);
//--> Kết quả: 25/12/1995
// Phần 3: CÁC HÀM BUILT-IN XỬ LÝ NGÀY THÁNG
// Trong javascript tất cả các vấn đề liên quan đến thời gian đều được định nghĩa trong đối tượng Date

// 1. Các cách khởi tạo đối tượng Date
// Lấy ngày tháng năm hiện tại
var timeObj = new Date();
console.log(timeObj);
//--> Kết quả: Mon Jan 01 2024 16:04:00 GMT+0700 (Giờ Đông Dương)

// Truyền vào thời gian miliseconds
var birthDate = new Date(665539200000);
console.log(birthDate);
//--> Kết quả: Sun Feb 03 1991 07:00:00 GMT+0700 (Giờ Đông Dương)

// Truyền vào thời gian
var date = new Date("1991-02-03");
console.log(date);
//--> Kết quả: Sun Feb 03 1991 07:00:00 GMT+0700 (Giờ Đông Dương)

// Truyền vào thời gian chi tiết
//-- newDate(year, month, day, hours, minutes, seconds, miliseconds)
var date = new Date(2019, 10, 29, 20, 50, 30);
console.log(date);
//--> Kết quả: Fri Nov 29 2019 20:50:30 GMT+0700 (Giờ Đông Dương)

// 2. Lấy miliseconds bằng phương thức parse của đối tượng Date

// Lấy miliseconds của ngày 20/11/2019
var miliseconds = Date.parse("2019/11/20");
console.log(miliseconds);
var date = new Date(miliseconds);
console.log(date);
//--> Kết quả:
// 1574182800000
// Wed Nov 20 2019 00:00:00 GMT+0700 (Giờ Đông Dương)

// 3. Format cho chuỗi thời gian khi tạo mới đối tượng thời gian
// 3.1. Dạng ISO: (YYYY-MM-DD) hoặc (YYYY-MM) hoặc (YYYY)
var ISO_1 = new Date("2019-10-29");
var ISO_2 = new Date("2019-10");
var ISO_3 = new Date("2019");

// 3.2. Dạng LONG: truyền vào với tên của tháng là ba chữ cái đầu tiên ghi bằng tiếng Anh
var LONG_1 = new Date("Feb 02 1991");
var LONG_2 = new Date("1990 May 16");
var LONG_3 = new Date("29 2019 Oct");

// 3.3. Dạng SHORT: MM/DD/YYYY hoặc YYYY/MM/DD hoặc MM-DD-YYYY hoặc YYYY-MM-DD
var SHORT_1 = new Date("08-24-2019");
var SHORT_2 = new Date("08/25/2019");
var SHORT_3 = new Date("2018/07/18");
var SHORT_4 = new Date("2017-05-15");

// 4. Các phương thức get/set của đối tượng Date
// Ví dụ 1: Tạo ngày 20/11/2020 bằng phương thức setFullYear()
var date = new Date();
// chỉ số tháng là index của tháng
// tháng 11 có index = 10
date.setFullYear(2020,10,20);
console.log(date);
//--> Kết quả: Fri Nov 20 2020 16:51:53 GMT+0700 (Giờ Đông Dương)

// Ví dụ 2: Lấy thông tin 50 ngày tiếp theo so với hiện tại bằng phương thức getDate()
var date = new Date();
console.log(date); // thông tin ngày hiện tại
date.setDate(date.getDate() + 50);
console.log(date); // thông tin 50 ngày sau
//--> Kết quả:
// Mon Jan 01 2024 16:54:31 GMT+0700 (Giờ Đông Dương)
// Tue Feb 20 2024 16:54:31 GMT+0700 (Giờ Đông Dương)
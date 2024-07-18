// Phần 2 (tt): Một số cách sử dụng hàm callback trong JS

// 1. Sử dụng anonymous functions (Hàm ẩn danh)

// Ví dụ:
// Lọc các phần tử là số lẻ
var arr = [4, 3, 6, 2, 5, 11, 17];
arr2 = arr.filter(function(val, index) {
    return val % 2 == 1;
});
console.log(arr2);

/* Trong ví dụ này, hàm callback ở đây là:
    function(val, index){
        return val % 2 == 1;
    }
    được sử dụng làm đối số cho phương thức `filter` của mảng, và hàm này không được đặt tên (ẩn danh).
    Hàm này nhận 2 tham số: `val` là giá trị của phần tử và `index` là chỉ số của phần tử trong mảng. 
    Hàm này kiểm tra xem giá trị val có là số lẻ không bằng cách sử dụng phép chia lấy dư (val % 2 == 1). 
    Nếu là số lẻ, thì phần tử đó sẽ được giữ lại trong mảng mới arr2, ngược lại sẽ bị loại bỏ.
*/

// Kết quả: (4) [3, 5, 11, 17]

// 2. Sử dụng một hàm đã được đặt tên
function getOddNumber(num) { // Đây là hàm callback (được đặt tên là getOddNumber)
    return num % 2 == 1;
}

// Lọc các phần tử là số lẻ
var arr = [4, 3, 6, 2, 5, 11, 17];
arr2 = arr.filter(getOddNumber); // Hàm callback được sử dụng làm đối số cho phương thức filter 
console.log(arr2);

// Kết quả: (4) [3, 5, 11, 17]

// 3. Hàm động callback (Động hoá hàm thông qua callback)
/* Là cách sử dụng hàm callback để tự định nghĩa và thực thi một hàm theo cách động */
// Ví dụ:

// Định nghĩa hàm xử lý
function getNameCallback(yourName) {
    alert('Hello, ' + yourName);
}

// Định nghĩa hàm sẽ nhận hàm callback
function testFunction(callback) {
    if(callback){
        callback();
    }
}

var name = 'Trần Thị Loan';
// Gọi hàm sử dụng hàm getNameCallback làm tham số
testFunction(getNameCallback(name));
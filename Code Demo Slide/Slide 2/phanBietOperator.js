// Phân biệt toán tử `==` và `===`

// `==`: chỉ so sánh bằng nhau về giá trị (không so sánh kiểu dữ liệu)
// `===`: vừa so sánh bằng nhau về giá trị, vừa so sánh bằng nhau về kiểu dữ liệu 
// (nghĩa là giá trị và kiểu dữ liệu bắt buộc phải giống nhau)

var a = '12';
var b = 12;

if(a === b){
    console.log(true);
}else{
    console.log(false);
}

// Phân biệt toán tử `!==` và `!=`
// `!==`: so sánh không bằng về kiểu dữ liệu */

// `!=`: chỉ so sánh không bằng về giá trị (không so sánh không bằng về kiểu dữ liệu)

// var c = '12';
// var d = 12;

// if(c != d){
//     console.log(true);
// }else{
//     console.log(false);
// }
// Phần 1: Các hàm Built-in xử lý chuỗi

// 1. Thuộc tính .length
var str = "Cao đẳng thực hành FPT POLYTECHNIC";
console.log(str.length);
// Kết quả: 34

// 2. Hàm indexOf()
var str2 = "hello fpt polytechnic";
var keyword = "fpt";
console.log(str2.indexOf(keyword));
// Kết quả: 6

// 3. Hàm lastIndexOf()
var str3 = "hello fpt polytechnic - fpt education";
var keyword2 = "fpt";
console.log(str3.lastIndexOf(keyword2));
// Kết quả: 24

// 4. Hàm search()
var str4 = "hello fpt polytechnic";
var keyword3 = "fpt";
console.log(str4.search(keyword3));
// Kết quả: 6

// 5. Hàm slice(start, [stop])
var str5 = "hello fpt polytechnic";
var str6 = str5.slice(6, 9);
console.log(str5);
console.log(str6);
// Kết quả:
// hello fpt polytechnic
// fpt

// 6. Hàm substring(start, [stop])
var str7 = "hello fpt polytechnic";
var str8 = str7.substring(6, 9);
console.log(str7);
console.log(str8);
// Kết quả:
// hello fpt polytechnic
// fpt

// 7. Hàm substr(start, [length])
var str9 = "hello fpt polytechnic";
var str10 = str9.substr(6, 3);
console.log(str9);
console.log(str10);
// Kết quả:
// hello fpt polytechnic
// fpt

// 8. Hàm toUpperCase()
var str11 = "hello fpt polytechnic";
var str12 = str11.toUpperCase();
console.log(str12);
// Kết quả: HELLO FPT POLYTECHNIC

// 9. Hàm toLowerCase()
var str13 = "HELLO FPT POLYTECHNIC";
var str14 = str13.toLowerCase();
console.log(str14);
// Kết quả: hello fpt polytechnic

// 10. Hàm trim()
var str15 = "   hello world     ";
console.log(str15.length);
var str16 = str15.trim();
console.log(str16.length);
console.log(str16);
// Kết quả:
// 19
// 11
// hello world

// 11. Hàm replace(str_find, str_replace)
var str17 = "hello fpt university";
var str18 = str17.replace("university", "polytechnic");
console.log(str17);
console.log(str18);
// Kết quả:
// hello fpt university
// hello fpt polytechnic

// 12. Hàm split()
var str19 = "hello fpt polytechnic";
var str20 = str19.split(" ");
console.log(str19);
console.log(str20);
// Kết quả:
// hello fpt university
// (3) ['hello', 'fpt', 'polytechnic']

// 13. Hàm concat()
var str21 = "hello ";
var str22 = "FPT Polytechnic!";
var str23 = str21.concat(str22);
console.log(str23);
// Kết quả: hello FPT Polytechnic!
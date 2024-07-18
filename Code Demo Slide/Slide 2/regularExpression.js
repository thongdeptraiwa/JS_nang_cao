// Phần 2: Biểu thức chính quy (Regular Expression)

// 1. Regular expression literal (Biểu thức chính quy thuần)
// Cú pháp: pattern.test(string)
//- pattern: khuôn mẫu sử dụng để kiểm tra
//- string: chuỗi cần kiểm tra
var patt = /poly/;
var result = patt.test("cao dang thuc hanh fpt polytechnic");
console.log(result);
// Kết quả: true

var patt2 = /jsnangcao/;
var result2 = patt2.test("cao dang thuc hanh fpt polytechnic");
console.log(result2);
// Kết quả: false

// 2. Sử dụng đối tượng RegExp
var patt3 = new RegExp("poly");
var result3 = patt3.test("cao dang thuc hanh fpt polytechnic");
console.log(result3);
// Kết quả: true

// 3. Ý nghĩa của các modifier (có thể dùng chung với nhau)
//- Ký tự: g
var patt4 = /fpt/g;
var result4 = patt4.test("fpt polytechnic - fpt education");
console.log(result4);
// Kết quả: true

//- Ký tự: i
var patt5 = /FPT/;
var result5 = patt5.test("fpt polytechnic - fpt education");
console.log(result5);
// Kết quả: false

var patt5 = /FPT/i;
var result5 = patt5.test("fpt polytechnic - fpt education");
console.log(result5);
// Kết quả: true

//- Ký tự: m
var patt6 = /^fpt/; // Kiểm tra chuỗi có bắt đầu bằng 'fpt' không
var result6 = patt6.test("\nfpt polytechnic");
console.log(result6); // Chuỗi có ký tự xuống dòng '\n' => trả về false
// Kết quả: false

var patt6 = /^fpt/m; // Thêm modifier 'm'
var result6 = patt6.test("\nfpt polytechnic");
console.log(result6);
// Kết quả: true

// 4. Các phương thức sử dụng với regex
//- Hàm exec()
var str = "100, 1000 or 10000?";
var patt7 = /\d{3,4}/g; // Tìm các số có 3 hoặc 4 chữ số
var result7 = patt7.exec(str);
console.log(result7);
// Kết quả: ['100', index: 0, input: '100, 1000 or 10000?', groups: undefined]

//- Hàm test()
var str2 = "fpt poly";
var patt8 = /^fp/g;
var result8 = patt8.test(str2);
console.log(result8);
// Kết quả: true

//- Hàm march()
var str3 = "100, 1000 or 10000?";
var patt9 = /\d{3,4}/g; // Tìm các số có 3 hoặc 4 chữ số
var result9 = str3.match(patt9);
console.log(result9);
// Kết quả: (3) ['100', '1000', '1000']

// 5. Ý nghĩa của các pattern: Brackets
//- Ký tự: [abc]
var patt10 = /[p4t]/g;
var str4 = "fpt polytechnic";
var result10 = str4.match(patt10);
console.log(result10);
// Kết quả: (4) ['p', 't', 'p', 't']

//- Ký tự: [^abc]
var patt11 = /[^fpt]/g;
var str5 = "fpt polytechnic";
var result11 = str5.match(patt11);
console.log(result11);
// Kết quả: (10) [' ', 'o', 'l', 'y', 'e', 'c', 'h', 'n', 'i', 'c']

//- Ký tự: [^0-9] hoặc [^a-z] hoặc [^A-Z] hoặc kết hợp
var patt12 = /[a-z]/g;
var str6 = "fpt - 10 nam";
var result12 = str6.match(patt12);
console.log(result12);
// Kết quả: (6) ['f', 'p', 't', 'n', 'a', 'm']

//- Ký tự: (x|y)
var patt13 = /(10|nam)/g;
var str7 = "fpt poly - 10 nam - fe - 20 nam";
var result13 = str7.match(patt13);
console.log(result13);
// Kết quả: (3) ['10', 'nam', 'nam']

// 6. Ý nghĩa của các pattern: Quantifiers
//- Ký tự: n+
var str8 = "Hellooo World";
var patt14 = /o+/g;
var result14 = str8.match(patt14);
console.log(result14);
// Kết quả: (2) ['ooo', 'o']

//- Ký tự: n*
var str9 = "Hellooo World";
var patt15 = /o*/g;
var result15 = str9.match(patt15);
console.log(result15);
// Kết quả: (12) ['', '', '', '', 'ooo', '', '', 'o', '', '', '', '']

//- Ký tự: n?
var str10 = "Hellooo World";
var patt16 = /o?/g;
var result16 = str10.match(patt16);
console.log(result16);
// Kết quả: (14) ['', '', '', '', 'o', 'o', 'o', '', '', 'o', '', '', '', '']

//- Ký tự: n$
var str11 = "fpt poly";
var patt17 = /ld$/g; // Check kết thúc bằng ký tự "ld"
var patt18 = /poly$/g; // Check kết thúc bằng ký tự "poly"
var result17 = patt17.test(str11);
var result18 = patt18.test(str11);
console.log(result17);
console.log(result18);
// Kết quả:
// false
// true

//- Ký tự: ^n
var str12 = "fpt poly";
var patt19 = /^fp/g;
var result19 = patt19.test(str12);
console.log(result19);
// Kết quả: true

//- Ký tự: n{X}
var str13 = "100, 1000 or 10000";
var patt20 = /\d{4}/g;
var result20 = str13.match(patt20);
console.log(result20);
// Kết quả: (2) ['1000', '1000']

//- Ký tự: n{X,Y}
var str14 = "100, 1000 or 10000";
var patt21 = /\d{3,4}/g;
var result21 = str14.match(patt21);
console.log(result21);
// Kết quả: (3) ['100', '1000', '1000']

//- Ký tự: n{X,}
var str15 = "100, 1000 or 10000";
var patt22 = /\d{5,}/g;
var result22 = str15.match(patt22);
console.log(result22);
// Kết quả: ['10000']
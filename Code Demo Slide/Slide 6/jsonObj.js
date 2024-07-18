// Tương tác với JSON Object

// 1. Phương thức JSON.parse(str)
// Đưa một chuỗi (string) về đối tượng JSON

var obj = JSON.parse('{"name": "John", "age": 30, "city": "New York"}');
console.log(obj);

// Kết quả:
/* 
{name: 'John', age: 30, city: 'New York'}
age: 30
city: "New York"
name: "John"
[[Prototype]]: Object
*/

// 2. JSON.stringify(obj)
// Đưa một đối tượng JSON về dạng chuỗi

var obj = {"name": "John", "age": 30, "city": "New York"};
var myJSON = JSON.stringify(obj);
console.log(myJSON);
typeof(myJSON);

// Kết quả:
/*
{"name":"John","age":30,"city":"New York"}
'string'
*/
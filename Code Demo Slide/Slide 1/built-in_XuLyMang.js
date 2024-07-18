// Phần 2: CÁC HÀM BUILT-IN XỬ LÝ MẢNG
// 1. Hàm toString()
var languages = ["English","Vietnamese","Chinese","Japanese"];
var text = languages.toString();
console.log(text);
//--> English,Vietnamese,Chinese,Japanese

// 2. Hàm join()
var str = ["javascript","nâng","cao","FPT","Polytechnic"];
var text2 = str.join("-");
console.log(text2);
//--> javascript-nâng-cao-FPT-Polytechnic

// 3. Hàm push()
var arr = [1,3,6,9];
console.log(arr);
arr.push(12);
console.log(arr);
//--> (4) [1, 3, 6, 9]: Mảng gốc
//--> (5) [1, 3, 6, 9, 12]: Mảng sau khi push

// 4. Hàm pop()
var arr2 = [1,3,6,9];
console.log(arr2);
var lastItem = arr2.pop();
console.log(arr2);
console.log(lastItem);
//--> (4) [1, 3, 6, 9]: Mảng gốc
//--> (3) [1, 3, 6]: Mảng sau khi pop
//--> 9: Giá trị của phần tử cuối cùng

// 5. Hàm unshift()
var arr3 = [15,31,25,87];
console.log(arr3);
arr3.unshift(62);
console.log(arr3);
//--> (4) [15, 31, 25, 87]: Mảng gốc
//--> (5) [62, 15, 31, 25, 87]: Mảng sau khi unshift

// 6. Hàm shift()
var arr4 = [12,3,5,21];
console.log(arr4);
var firstElement = arr4.shift();
console.log(arr4);
console.log(firstElement);
//--> (4) [12, 3, 5, 21]: Mảng gốc
//--> (3) [3, 5, 21]: Mảng sau khi shift
//--> 12: Giá trị của phần tử bị loại bỏ khỏi mảng (phần tử đầu tiên)

// 7. Hàm slice(start, end): Hàm có đối số
var arr5 = [62,15,31,25,87];
var arr6 = arr5.slice(1,3); // lấy từ index = 1 đến trước index = 3
console.log(arr5);
console.log(arr6);
//--> (5) [62, 15, 31, 25, 87]: Mảng gốc
//--> (2) [15, 31]: Mảng sau khi slice(1,3)

// 8. Hàm slice(): Hàm không có đối số
var arr5 = [62,15,31,25,87];
var arr6 = arr5.slice(); // tạo ra bản sao của arr5
console.log(arr5);
console.log(arr6);
//--> (5) [62, 15, 31, 25, 87]: Mảng gốc
//--> (5) [62, 15, 31, 25, 87]: Mảng sau khi slice()

// 9. Hàm filter()
var arr7 = [62,15,31,25,87];
var arr8 = arr7.filter(function(value, index){
    // tham số value là giá trị của phần tử đang được duyệt
    // tham số index là thứ tự index của phần tử đang được duyệt
    return value%2 == 0; // kiểm tra giá trị có phải số chẵn hay không
});
console.log(arr7);
console.log(arr8);
//--> (5) [62, 15, 31, 25, 87]: Mảng gốc
//--> [62]: Mảng sau khi filter

// 10. Hàm reverse()
var arr9 = [2,4,6,8];
var arr10 = arr9.reverse();
console.log(arr9);
console.log(arr10);
//--> (4) [8, 6, 4, 2]: Mảng arr9
//--> (4) [8, 6, 4, 2]: Mảng arr10

/* Giải thích thêm ở hàm reverse():
Biến `arr9` là một mảng chứa các số `[2, 4, 6, 8]`, Khi gọi phương thức `reverse()` trên mảng `arr9`, 
phương thức này sẽ đảo ngược trực tiếp mảng gốc (nghĩa là mảng `arr9`), và cũng trả về mảng đã đảo ngược đó.
Do đó, khi ta gọi `console.log(arr9);` và `console.log(arr10);` cả hai mảng đều đã bị đảo ngược, 
vì vậy kết quả sẽ giống nhau. Điều này xảy ra vì biến `arr10` thực sự là tham chiếu đến cùng một đối tượng mảng như `arr9`.

Nếu chỉ muốn tạo một bản sao của mảng mà không ảnh hưởng đến mảng gốc,
ta có thể sử dụng phương thức `slice()` hoặc toán tử spread (`[...arr9]`). Ví dụ:

var arr9 = [2, 4, 6, 8];
var arr10 = arr9.slice(); // hoặc `var arr10 = [...arr9];`
arr10.reverse();
console.log(arr9); // Kết quả: [2, 4, 6, 8]
console.log(arr10); // Kết quả: [8, 6, 4, 2]

Trong trường hợp này, `arr9` vẫn giữ nguyên, và chỉ `arr10` mới được đảo ngược.
*/

// 11. Hàm splice(position_add, num_element_remove, value1, value2, .. )
/* Trong đó:
- `position_add` là vị trí sẽ thêm (vị trí đầu tiên là 0)
- `num_element_remove` là số phần tử sẽ xóa (bắt đầu từ position_add)
- `value1, value2, ..` là danh sách các phần tử sẽ được thêm vào sau khi tại 
vị trí `position_add` và sau khi `remove num_element_remove` phần tử. */

//--- Chèn phẩn tử mới vào giữa mảng
var arr11 = [2,4,6,8];
// tại vị trí index = 2
// loại bỏ 1 phần tử
// chèn thêm các giá trị 10, 11, 12
arr11.splice(2,1,10,11,12);
console.log(arr11);
//--> (6) [2, 4, 10, 11, 12, 8]

//--- Xoá phần tử khỏi mảng (giữ đúng thứ tự index)
var arr12 = [2,4,6,8];
// xoá phần tử tại vị trí index = 2
arr12.splice(2,1);
console.log(arr12);
//--> (3) [2, 4, 8]
// 0: 2
// 1: 4
// 2: 8
// length: 3
// [[Prototype]]: Array(0)
// Nhận xét: index không bị thay đổi

// 12. Hàm sort(): sắp xếp mảng theo thứ tự alphabete
var arr13 = ['r','k','t','e','b','a'];
console.log(arr13.sort());
//--> (6) ['a', 'b', 'e', 'k', 'r', 't']

// đối với số thì lại không chính xác
var arr14 = [9,3,31,25,87];
console.log(arr14.sort());
//--> (5) [25, 3, 31, 87, 9] (Sai)

// giải pháp:
//-- 12.1. sắp xếp tăng dần: return a-b
var arr15 = [9,3,31,25,87];
var arr16 = arr15.sort(function(a,b){
    return a-b; // sắp xếp tăng dần
});
console.log(arr15);
console.log(arr16);
//--> (5) [3, 9, 25, 31, 87]
//--> (5) [3, 9, 25, 31, 87]
/* Giải thích:
Cần lưu ý rằng `sort()` sẽ thay đổi mảng gốc và cũng trả về mảng đã được sắp xếp. 
Vì vậy, khi ta gán kết quả của `sort()` vào `arr16`, `arr16` sẽ trỏ đến cùng một đối tượng mảng với `arr15`.

Ở đây:

- `arr15.sort(...)`: Phương thức `sort()` sắp xếp mảng `arr15` và trả về mảng đã được sắp xếp. Mảng gốc `arr15` sẽ bị thay đổi.
- `arr16` được gán giá trị của `arr15.sort(...)`, do đó, cả `arr15` và `arr16` đều trỏ đến cùng một mảng đã được sắp xếp.

Do đó, khi gọi `console.log(arr15)` và `console.log(arr16)`, cả hai đều in ra cùng một mảng đã được sắp xếp 
tăng dần `[3, 9, 25, 31, 87]`. */
//-- 12.2. sắp xếp giảm dần: return b-a
var arr17 = [9,3,31,25,87];
var arr18 = arr17.sort(function(a,b){
    return b-a; // sắp xếp giảm dần
});
console.log(arr17);
console.log(arr18);
//--> (5) [87, 31, 25, 9, 3]
//--> (5) [87, 31, 25, 9, 3]

// 13. Hàm forEach(): được sử dụng để lặp qua từng phần tử của một mảng và thực hiện một hàm callback cho mỗi phần tử đó.
//-- Cú pháp cơ bản:
array.forEach(function(currentValue, index, array){
    // Thực hiện công việc gì đó với mỗi phần tử của mảng
});
/* Các tham số của hàm callback trong forEach():
- `currentValue`: Giá trị hiện tại của phần tử mảng trong quá trình lặp.
- `index`: Chỉ số của phần tử hiện tại trong mảng.
- `array`: Mảng gốc mà forEach() đang lặp qua.*/
//-- Ví dụ 1:
var arr19 = [2,4,6,8];
arr19.forEach(function(currentValue, index, array){
    console.log(currentValue + "-" + index);
});

//-- Ví dụ 2:
var numbers = [1,2,3,4,5];
numbers.forEach(function(number, index, array){
    array[index] = number + 2;
});
console.log(numbers);
//--> Kết quả: (5) [3, 4, 5, 6, 7]

// 14. Hàm map(): được sử dụng để tạo ra một mảng mới bằng cách ánh xạ mỗi phần tử của mảng gốc thông qua một hàm callback
//-- Cú pháp cơ bản:
var newArray = array.map(function (currentValue, index, array) {
    // Trả về giá trị mới cho mỗi phần tử của mảng
});

//-- Ví dụ 1:
var numbers = [1,2,3,4,5];
var squaredNumbers = numbers.map(function(number, index, array){
    return number * number;
});
console.log(squaredNumbers);
//--> Kết quả: (5) [1, 4, 9, 16, 25]

//-- Ví dụ 2:
var words = ["apple", "banana", "cherry"];
var uppercaseWords = words.map(function(word, index, array){
    return word.toUpperCase();
});
console.log(uppercaseWords);
//--> Kết quả: ["APPLE", "BANANA", "CHERRY"]

//-- Ví dụ 3:
var animals = [
    {
        name:"cat",
        size:"small"
    },
    {
        name:"dog",
        size:"small"
    },
    {
        name:"lion",
        size:"medium"
    },
    {
        name:"elephant",
        size:"big"
    }
];
// Tạo ra mảng mới gồm tên tất cả các con vật
var animalNames = animals.map(function(animal, index, animals){
    return animal.name;
});
console.log(animals);
console.log(animalNames);
//--> Kết quả:
// (4) [{…}, {…}, {…}, {…}]
// 0: {name: 'cat', size: 'small'}
// 1: {name: 'dog', size: 'small'}
// 2: {name: 'lion', size: 'medium'}
// 3: {name: 'elephant', size: 'big'}
// length: 4
// [[Prototype]]: Array(0)
// (4) ['cat', 'dog', 'lion', 'elephant']
// 0: "cat"
// 1: "dog"
// 2: "lion"
// 3: "elephant"
// length: 4
// [[Prototype]]: Array(0)

// 15. Phân biệt giữa forEach() và map()
/*
Cả `forEach()` và `map()` là các phương thức được sử dụng trong JavaScript để lặp qua các phần tử của mảng, 
nhưng chúng có một số khác biệt quan trọng. Dưới đây là sự phân biệt giữa `forEach()` và `map()`:
1. Kết quả trả về:
   - `forEach()`: Không tạo ra một mảng mới. Nó chỉ duyệt qua từng phần tử của mảng và thực hiện hàm callback, 
   nhưng không trả về giá trị nào.
   - `map()`: Tạo ra một mảng mới bằng cách ánh xạ mỗi phần tử của mảng gốc qua một hàm callback và trả về mảng mới này.
2. Tác động đến mảng gốc:
   - `forEach()`: Thay đổi mảng gốc nếu có sự thay đổi trong hàm callback, nhưng kết quả không được trả về.
   - `map()`: Không làm thay đổi mảng gốc, mà tạo ra một mảng mới.
3. Sử dụng trả giá trị từ hàm callback:
   - `forEach()`: Hàm callback trong `forEach()` thực hiện một công việc mà không cần trả về giá trị.
   - `map()`: Hàm callback trong `map()` cần trả về giá trị mới để được thêm vào mảng mới.
*/
//-- Ví dụ:
// Sử dụng forEach()
var numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number, index, array) {
  array[index] = number * 2; // Thay đổi mảng gốc
});

console.log(numbers); // Kết quả: [2, 4, 6, 8, 10]

// Sử dụng map()
var numbers = [1, 2, 3, 4, 5];
var doubledNumbers = numbers.map(function(number, index, array) {
  return number * 2; // Trả về giá trị mới cho mảng mới
});

console.log(doubledNumbers); // Kết quả: [2, 4, 6, 8, 10]
console.log(numbers); // Mảng gốc vẫn không thay đổi: [1, 2, 3, 4, 5]

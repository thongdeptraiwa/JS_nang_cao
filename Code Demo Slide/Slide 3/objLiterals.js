// Phần 2: Sử dụng Object Literals
// 1. Tạo mới object
var alex = {
    idCard: 16323891,
    name: "Alex Smith",
    age: 45,
    isMarried: true,
    childs: [
        {
            name: "James Smith",
            age: 13
        },
        {
            name: "Sarah Smith",
            age: 7
        }
    ],
    buyHouse: function () {
        console.log('Already own a house in Pennsylvania');
    }
}

// 2. Hiển thị giá trị thuộc tính/ gọi phương thức
//- Lấy giá trị của thuộc tính
console.log(alex.name);
console.log(alex.age);
//=> Kết quả:
// Alex Smith
// 45

//- Thực thi phương thức của đối tượng alex
alex.buyHouse();
//=> Kết quả: Already own a house in Pennsylvania

// 3. Thay đổi giá trị của thuộc tính
//- Sửa giá trị của thuộc tính
console.log(alex.age);
alex.age = 48;
console.log(alex.age);
// Kết quả:
// 45
// 48


//- Thêm giá trị cho thuộc tính dạng mảng
console.log(alex.childs);
var newChild = {
    name: "Jim Smith",
    age: 1
};
alex.childs.push(newChild);
console.log(alex.childs);
//=> Kết quả: 
// [ { name: 'James Smith', age: 13 }, { name: 'Sarah Smith', age: 7 } ]

/* [
  { name: 'James Smith', age: 13 },
  { name: 'Sarah Smith', age: 7 },
  { name: 'Jim Smith', age: 1 }
] */

// 4. Bên cạnh việc tạo object bằng ký tự {} thì chúng ta có thể tạo bằng hàm Object()
var rex = new Object();
rex.name = 'Rex Kumar';
rex.age = 23;
rex.gender = 'male';
rex.goShopping = function () {
    console.log(this.name + ' is going to Super market');
}
console.log(rex);
rex.goShopping();
//=> Kết quả:
/* {
    name: 'Rex Kumar',
    age: 23,
    gender: 'male',
    goShopping: [Function (anonymous)]
  }
  Rex Kumar is going to Super market */

// 5. Điểm hạn chế của cách sử dụng Object Literals
//- 5.1. Không hỗ trợ instantiation (thực thể hoá) đối tượng
//-- Thực thể hoá (instantiation) là gì?
/* Trong OOP, instantiation đối tượng là quá trình tạo ra một thực thể (instance) của một lớp (class). 
Trong JavaScript, khi sử dụng object literals như trên, chúng ta không tạo ra đối tượng thông qua việc 
thực thể hoá, mà thay vào đó, chúng ta chỉ đơn giản là tạo một đối tượng mới bằng cách sử dụng object literals. */

//-- Ví dụ, nếu chúng ta có một "Person" class và sử dụng nó để instantiation đối tượng, có thể code như sau:
// Lớp Person
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Thực thể hoá đối tượng
let person = new Person('John', 30);
person.sayHello();

/* Trong ví dụ này, `new Person('John', 30)` tạo ra một thực thể của lớp `Person`, có tên là `person`. */

//- 5.2. Không có tính chất inheritance (kế thừa)
//-- Inheritance là gì?
/* Kế thừa là một khái niệm trong OOP cho phép một lớp sử dụng lại các thuộc tính và phương thức của một lớp khác. 
Trong các ví dụ trên, không có kế thừa được thể hiện vì chúng ta đơn giản chỉ sử dụng object literals 
mà không sử dụng cơ chế kế thừa của JavaScript. */

//-- Nếu chúng ta muốn áp dụng kế thừa, chúng ta có thể sử dụng các cơ chế khác như prototype hoặc sử dụng class:
// Lớp Person với kế thừa
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Lớp Student kế thừa từ lớp Person
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    study() {
        console.log(`I am studying.`);
    }
}

// Thực thể hoá đối tượng Student
let student = new Student('Alice', 25, 'A');
student.sayHello();
student.study();

/* Trong ví dụ này, lớp `Student` kế thừa từ lớp `Person`, và thông qua `super(name, age)`, 
chúng ta gọi constructor của lớp cha để thiết lập `name` và `age`. Đối tượng `student` bây giờ 
kế thừa cả phương thức `sayHello` từ lớp Person và có thêm phương thức study. */
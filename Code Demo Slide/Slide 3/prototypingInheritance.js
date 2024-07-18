// Phần 4: Sử dụng Prototyping Inheritance

// 1. Thuộc tính prototype
// Ví dụ 1: Gọi hàm sayHello() không được tạo ra từ prototype
function Student(name, age) {
    this.name = name;
    this.age = age;
}
const s1 = new Student('Bad Cuder', 20);

Student.sayHello = function(){
    console.log('Hello');
}

s1.sayHello(); // Lỗi, vì s1 không có hàm sayHello(), hàm này chỉ thuộc Student thôi

// Ví dụ 2: Gọi hàm sayHello() được tạo ra từ prototype
function Student2(name, age) {
    this.name = name;
    this.age = age;
}
const s2 = new Student2('Bad Cuder', 20);

Student2.prototype.sayHello = function(){
    console.log('My name is ' + this.name + ". I'm " + this.age);
}

s2.sayHello(); // các instance (s2) có thể gọi được hàm sayHello()

//=> Kết luận:
/* prototype là nơi định nghĩa ra các thuộc tính, phương thức (hàm) cho khuôn mẫu 
của 1 đối tượng, các thực thể (instance) được tạo ra từ đối tượng đó được quyền 
sử dụng các thuộc tính, phương thức được tạo ra bằng prototype. */

// 2. Thuộc tính __proto__
// Là một dạng hỗ trợ giải quyết vấn đề rút gọn code (có thể coi là một dạng kế thừa) khi sử dụng object
// Ví dụ 3: 
var people = {
    name: 'Đặng Quang Đức',
    age: 2,
    showInfo: function(){
        return 'Cháu tên là ' + this.name + '. Năm nay cháu ' + this.age + ' tuổi';
    }
}

var student = {
    name: 'Trần Trang Anh',
    age: 4,
    showInfo: function(){
        return 'Cháu tên là ' + this.name + '. Năm nay cháu ' + this.age + ' tuổi';
    }
}
/* Nhận xét ví dụ 3: Cả 2 đối tượng đều sử dụng chung phương thức showInfo(), như vậy nếu các đối tượng 
được tạo ra từ phương pháp Object Literals thì các thuộc tính hay phương thức sẽ cần phải viết lại 
khá nhiều, gây phức tạp khi tiến hành maintainance sau này. */

// Ví dụ 4: Sử dụng __proto__ (viết lại code ví dụ 3)
var peopleProto = {
    name: 'Đặng Quang Đức',
    age: 2,
    showInfo: function(){
        return 'Cháu tên là ' + this.name + '. Năm nay cháu ' + this.age + ' tuổi';
    }
}

var quangDuc = {
    __proto__: peopleProto
}
var trangAnh = {
    __proto__:peopleProto
}
trangAnh.name = 'Trần Trang Anh';
trangAnh.age = 4;

console.log(quangDuc.showInfo());
console.log(trangAnh.showInfo());
// Kết quả:
// Cháu tên là Đặng Quang Đức. Năm nay cháu 2 tuổi
// Cháu tên là Trần Trang Anh. Năm nay cháu 4 tuổi

// Nhận xét ví dụ 4: peopleProto được gọi là một khung sườn (base),
// và quangDuc, trangAnh là các đối tượng kế thừa peopleProto thông qua __proto__
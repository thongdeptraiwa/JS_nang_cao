// Định nghĩa constructor function cho đối tượng Student
function Student(name, age, address, phone, birthday) {
    this.Name = name;
    this.Age = age;
    this.Address = address;
    this.Phone = phone;
    this.Birthday = birthday;
    this.Subjects = [];
}

// Phương thức thêm môn học cho đối tượng Student
Student.prototype.addSubject = function (subjectName, teacher, point, year) {
    var newSubject = {
        Name: subjectName,
        Teacher: teacher,
        Point: point,
        Year: year
    };
    this.Subjects.push(newSubject);
};

// Định nghĩa constructor function cho đối tượng StudentPoly kế thừa từ Student
function StudentPoly(name, age, address, phone, birthday, major) {
    // Gọi constructor của đối tượng cha (Student) để khởi tạo các thuộc tính chung
    Student.call(this, name, age, address, phone, birthday);

    // Thuộc tính riêng của đối tượng StudentPoly
    this.Major = major;
}

// Kế thừa từ Student
StudentPoly.prototype = Object.create(Student.prototype);

// Phương thức hiển thị thông tin sinh viên và môn học
StudentPoly.prototype.displayInfo = function () {
    console.log('Name: ' + this.Name);
    console.log('Age: ' + this.Age);
    console.log('Address: ' + this.Address);
    console.log('Phone: ' + this.Phone);
    console.log('Birthday: ' + this.Birthday);
    console.log('Major: ' + this.Major);

    console.log('Subjects:');
    this.Subjects.forEach(function (subject) {
        console.log('  - Name: ' + subject.Name);
        console.log('    Teacher: ' + subject.Teacher);
        console.log('    Point: ' + subject.Point);
        console.log('    Year: ' + subject.Year);
    });
};

// Sử dụng đối tượng StudentPoly
var studentPoly = new StudentPoly('Nguyen Van B', 22, 'Ho Chi Minh', '123456789', '01/01/2004', 'Computer Science');
studentPoly.addSubject('JavaScript', 'Teacher A', 8, 2022);
studentPoly.addSubject('Database', 'Teacher B', 9, 2022);

// Hiển thị thông tin sinh viên và môn học
studentPoly.displayInfo();

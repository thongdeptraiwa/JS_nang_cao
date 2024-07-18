function Student(name, age, address, phone, birthday) {
    this.Name = name;
    this.Age = age;
    this.Address = address;
    this.Phone = phone;
    this.Birthday = birthday;
    this.Subjects = [];
}

Student.prototype.addSubject = function (subjectName, teacher, point, year) {
    var newSubject = {
        Name: subjectName,
        Teacher: teacher,
        Point: point,
        Year: year
    };
    this.Subjects.push(newSubject);
};

function StudentPoly(name, age, address, phone, birthday, major) {
    Student.call(this, name, age, address, phone, birthday);

    this.Major = major;
}

StudentPoly.prototype = Object.create(Student.prototype);

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

var studentPoly = new StudentPoly('Nguyen Van B', 22, 'Ho Chi Minh', '123456789', '01/01/2004', 'Computer Science');
studentPoly.addSubject('JavaScript', 'Teacher A', 8, 2022);
studentPoly.addSubject('Database', 'Teacher B', 9, 2022);

studentPoly.displayInfo();

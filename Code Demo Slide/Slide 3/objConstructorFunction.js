// Phần 3: Object constructor function
// 1. Tạo đối tượng sử dụng Object constructor function
function Animal(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.run = function () {
        console.log(this.name + ' is running!');
    }
}

var duck = new Animal('Donald', 2, 'male'); // Có thể thực thể hoá đối tượng (tương tự class)
duck.hairColor = 'yellow';
console.log(duck);
duck.run();
// Kết quả:
/* Animal {
    name: 'Donald',
    age: 2,
    gender: 'male',
    run: [Function (anonymous)],
    hairColor: 'yellow'
  }
  Donald is running! */

// 2. Để thực hiện kế thừa giữa 2 đối tượng phải sử dụng hàm call() (khác class)
function Cat(name, age, gender, hairColor) {
    Animal.call(this, name, age, gender);
    this.hairColor = hairColor;
}

var doraemon = new Cat('Doraemon', 27, 'male', 'green');
console.log(doraemon);
doraemon.run();
// Kết quả:
/* Cat {
    name: 'Doraemon',
    age: 27,
    gender: 'male',
    run: [Function (anonymous)],
    hairColor: 'green'
  }
  Doraemon is running! */
// Phần 4: THƯ VIỆN LODASH
// 1. Hàm _.join()
var arr = ["FPT", "POLYTECHNIC", "JAVASCRIPT"];
var str = _.join(arr,"~")
console.log(str);
//--> Kết quả: FPT~POLYTECHNIC~JAVASCRIPT

// 2. Hàm _.concat()
var arr2 = [1];
var other = _.concat(arr2, 2, [3],[[4]]);
console.log(other);
//--> kết quả:
// (4) [1, 2, 3, Array(1)]
// 0: 1
// 1: 2
// 2: 3
// 3: [4]
// length: 4
// [[Prototype]]: Array(0)

// 3. Hàm _.chunk()
var arr3 = ['a', 'b', 'c', 'd'];
var arr4 = _.chunk(arr3, 2);
console.log(arr4);
//--> Kết quả:
// (2) [Array(2), Array(2)]
// 0: (2) ['a', 'b']
// 1: (2) ['c', 'd']
// length: 2
// [[Prototype]]: Array(0)

// 4. Hàm _.findIndex()
var users = [
    {
        user: "barney",
        active: false
    },
    {
        user: "fred",
        active: false
    },
    {
        user: "pebbles",
        active: true
    }
];
console.log(_.findIndex(users, function(o){
    return o.user == "fred";
}));
//--> Kết quả: 1

// 5. Hàm _.filter()
var employees = [
    {
        employee: "barney",
        active: false
    },
    {
        employee: "fred",
        active: false
    },
    {
        employee: "pebbles",
        active: true
    }
];
console.log(_.filter(employees, function(o){
    return !o.active;
}));
//--> Kết quả:
// (2) [{…}, {…}]
// 0: {employee: 'barney', active: false}
// 1: {employee: 'fred', active: false}
// length: 2
// [[Prototype]]: Array(0)

// 6. Hàm _.find()
var array = [1,2,3,4,5,6];
console.log(_.find(array, function(a){
    return a > 4;
}));
//--> Kết quả: 5

// 7. Hàm _.includes()
var array2 = [1,2,3,4,5];
// Kiểm tra giá trị 1 có trong mảng array2 hay không
console.log(_.includes(array2, 1));
//--> Kết quả: true

// Kiểm tra có giá trị trong mảng hay không
// Kiểm tra từ phần tử có index = 2
console.log(_.includes(array2, 2, 2));
//--> Kết quả: false

// 8. Hàm _.map()
var array3 = [2,3];
console.log(_.map(array3, function(n){
    return n*n;
}));
//--> kết quả: (2) [4, 9]
var people = [
    {
        user: 'barney'
    },
    {
        user: 'fred'
    }
];
console.log(_.map(people, 'user'));
//--> Kết quả: (2) ['barney', 'fred']

// 9. Hàm _.remove()
var array4 = [1,2,3,4];
var evens = _.remove(array4, function(n){
    return n%2 == 0;
});
console.log(array4);
//--> Kết quả: (2) [1, 3]
console.log(evens);
//--> Kết quả: (2) [2, 4]
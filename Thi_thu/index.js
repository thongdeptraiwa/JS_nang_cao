//b1
console.log("\nb1");
const numbers = [1, 2, 3, 4, 5];
const giai_thua = (n) => {
    let giai_thua = 1;
    for(let i= 1; i<= n; i++){
        giai_thua = giai_thua * i;
    }
    return giai_thua;
}
let arr_giai_thua = numbers.map(index => giai_thua(index));
console.log(arr_giai_thua);

//b2
console.log("\nb2");
const a = 5;
const b = 10;
const result = a ** b;
console.log(result);
console.log("** có nghĩa là luỹ thừa (a^b)\n5^10 = 5*5*5*5*5*5*5*5*5*5 ="+result);

//b3
console.log("\nb3");
const calculateAverage = (n) => {
    let tong=0;
    for(let i=0; i<n.length; i++){
        tong = tong + n[i];
    }
    return tong/n.length;
}
console.log(numbers);
console.log("giá trị trung bình: "+calculateAverage(numbers));



//b4
console.log("\nb4");
const fruits = ['apple', 'banana', 'orange', 'apple', 'mango', 'banana', 'apple'];
while(fruits.length != 0) {
    //đếm số lần xứ hiện
    let n=0;
    for(let j= 0; j<= fruits.length; j++){
        if(fruits[0] == fruits[j]){
            n++;
        }
    }
    console.log(fruits[0]+" xuất hiện "+n+" lần");
    //xoá phẩn tử đã đếm
    for(let j= 1; j<= fruits.length; j++){
        //xoá phẩn tử giống nó
        if(fruits[0] == fruits[j]){
            fruits.splice(j, 1);
        }
    }
    //xoá chính nó
    fruits.splice(0, 1);
}



//b5
const b5 = () => {
    document.querySelector("#thongbao").innerHTML = '<p>Xin chúc mừng bạn!</p>';
}



//b6
console.log("\nb6");
class Rectangle {
    constructor(chieu_dai, chieu_rong) {
        this.chieu_dai = chieu_dai;
        this.chieu_rong = chieu_rong;
    }

    dien_tich() {
        console.log("Diện tích HCM: "+this.chieu_dai * this.chieu_rong);
    }
    chu_vi() {
        console.log("Chu vi HCM: "+((this.chieu_dai + this.chieu_rong)*2));
    }
}
var hcm = new Rectangle(5, 10);
hcm.dien_tich();
hcm.chu_vi();




//b7 fetch
var kq='';
fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "GET"
}).then(function(response){
    // Chuyển dữ liệu trả về thành json
    return response.json();
}).then(function(data){
   
    //console.log("b7 "+data);
    for(let i=0; i<data.length; i++){
        if(data[i].completed == true){
            kq+=`<p>${data[i].title}</p>`;
        }
    }

});
const b7 = () => {
    document.querySelector("#d_b7").innerHTML = kq;
}
//b7 axios
var kq_axios='';
axios.get("https://jsonplaceholder.typicode.com/todos")
    .then(function (response) {
        
        for(let i=0; i<response.data.length; i++){
            if(response.data[i].completed == true){
                kq_axios+=`<p>${response.data[i].title}</p>`;
            }
        }

    })
    .catch(function (error) {
        // Xử lý lỗi nếu có
        console.error("Error fetching data:", error);
    });
const b7_axios = () => {
    document.querySelector("#d_b7_axios").innerHTML = kq_axios;
}




//b8
function delayedSum (a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(a+b);
        }, 1000);
})};
delayedSum(1,2)
    .then((data) => {
        console.log("\nb8");
        console.log("a + b = "+data);
    })



//b9
console.log("\nb9");
try{
    var b9 = 10/0;
    console.log(b9);
}catch(error){
    console.log("Cannot divide by zero!");
}finally{
    console.log("Cannot divide by zero!");
}



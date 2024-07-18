// Phần 3: Khái niệm Promise
/* Promise là một đối tượng (object) được xây dựng sẵn, là một cấu trúc dữ liệu được sử dụng để xử lý các tác vụ
bất đồng bộ. Promise đại diện cho một giá trị chưa được xử lý trong tương lai và cho phép chúng ta xử lý kết quả 
thành công hoặc lỗi của một tác vụ bất đồng bộ một cách tuần tự và dễ đọc hơn. */

// 1. Cách tạo một Promise: Có 5 cách phổ biến
// 1.1. Sử dụng constructor Promise: Truyền vào một hàm executor, hàm này nhận hai tham số là resolve và reject. 
// Có thể sử dụng chúng để thay đổi trạng thái của Promise.
const myPromise = new Promise((resolve, reject) => {
    // Thực hiện các tác vụ bất đồng bộ
    // Nếu thành công, gọi resolve() và truyền giá trị kết quả
    // Nếu gặp lỗi, gọi reject() và truyền giá trị lỗi
});

/* Sau khi có một Promise, chúng ta có thể sử dụng các phương thức `.then()` và `.catch()` để xử lý kết quả của nó.
Phương thức `.then()` được sử dụng để xử lý kết quả thành công, trong khi phương thức `.catch()` được sử dụng để 
xử lý lỗi. */

// Ví dụ:
myPromise.then((result) => {
    // Xử lý kết quả thành công
}).catch((error) => {
    // Xử lý lỗi
});

/* Promise cũng cho phép chúng ta sử dụng phương thức khác như finally() để thực hiện một hành động sau cùng 
sau khi Promise hoàn thành, bất kể kết quả thành công hay lỗi.
Promise giúp làm cho việc xử lý tác vụ bất đồng bộ trong JavaScript trở nên dễ dàng hơn và tránh callback hell.
Nó cung cấp một cú pháp tuần tự và dễ đọc hơn để xử lý các tác vụ bất đồng bộ và quản lý kết quả của chúng. */

// 1.2. Sử dụng phương thức Promise.resolve(): Phương thức Promise.resolve() tạo ra một Promise đã được giải quyết
// (fulfilled) với giá trị đã cho. Nếu đối số truyền vào là một Promise, nó sẽ trả về chính Promise đó.

// Ví dụ:
const resolvedPromise = Promise.resolve(value);

// 1.3. Sử dụng phương thức Promise.reject(): Phương thức Promise.reject() tạo ra một Promise đã bị từ chối
// (rejected) với lý do đã cho.

// Ví dụ:
const rejectedPromise = Promise.reject(reason);

// 1.4. Sử dụng phương thức Promise.all(): Phương thức Promise.all() nhận một mảng các Promise và trả về một Promise
// mới. Promise mới này sẽ được giải quyết khi tất cả các Promise trong mảng đã được giải quyết, hoặc bị từ chối nếu 
// bất kỳ Promise nào trong mảng bị từ chối.

// Ví dụ:
const promisesArr1 = [promise1, promise2, promise3];
const allPromises = Promise.all(promisesArr1);

// 1.5. Sử dụng phương thức Promise.race(): Phương thức Promise.race() nhận một mảng các Promise và trả về một 
// Promise mới. Promise mới này sẽ được giải quyết hoặc bị từ chối ngay khi Promise đầu tiên trong mảng được 
// giải quyết hoặc bị từ chối.

// Ví dụ:
const promisesArr2 = [promise1, promise2, promise3];
const firstPromise = Promise.race(promisesArr2);

// 2. Các trạng thái của Promise: Có 3 trạng thái
/* 2.1. Pending (Đang xử lý/ Chờ): Trạng thái ban đầu của một Promise. Promise đang trong quá trình thực hiện
và chưa hoàn thành hoặc bị lỗi. */
const promise = new Promise((resolve, reject) => {

});
console.log(promise);

// Kết quả:
/*
Promise { <pending> }
[[Prototype]]: Promise
[[PromiseState]]: "pending"
[[PromiseResult]]: undefined
*/

/* 2.2. Fulfilled (resolve - đã hoàn thành/ Thành công): Promise đã hoàn thành thành công và trả về một giá trị
kết quả. */
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(1);
        return resolve(2);
    }, 1000);
});
console.log(promise2);

// Kết quả:
/* 
Promise {<pending>}
[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: 2
1
*/

promise2.then((data) => {
    console.log(data);
    console.log(promise2);
})

// Chạy tiếp đoạn code này thì kết quả:
/* 
2
Promise {<fulfilled>: 2}
[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: 2
Promise {<fulfilled>: undefined}
[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: undefined
*/

// Kết quả chạy full toàn code trên 1 lần:
/*
Promise {<pending>}
Promise {<pending>}
1

2
Promise {<fulfilled>: 2}
[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: 2
*/
/* 2.3. Rejected (Đã bị từ chối/ Thất bại): Promise đã hoàn thành nhưng gặp lỗi và trả về một giá trị lỗi. */
// Ví dụ 1:
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(1);
        return reject('Message báo lỗi');
    }, 1000);
});

console.log(promise3);

// Kết quả:
/*
[[Prototype]]: Promise
[[PromiseState]]: "rejected"
[[PromiseResult]]: "Message báo lỗi"
undefined
1
*/

promise3.catch((message) => {
    console.log(message);
    console.log(promise3);
});

// Kết quả:
/*
Message báo lỗi

Promise {<rejected>: 'Message báo lỗi'}
[[Prototype]]: Promise
[[PromiseState]]: "rejected"
[[PromiseResult]]: "Message báo lỗi"

Promise {<fulfilled>: undefined}
[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: undefined
*/

// Kết quả khi chạy full đoạn code trên. Kết quả:
/*
Promise {<pending>}
[[Prototype]]: Promise
[[PromiseState]]: "rejected"
[[PromiseResult]]: "Message báo lỗi"

Promise {<pending>}
[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: undefined

1

Message báo lỗi 
Promise {<rejected>: 'Message báo lỗi'}
[[Prototype]]: Promise
[[PromiseState]]: "rejected"
[[PromiseResult]]: "Message báo lỗi"
*/

// Ví dụ 2 (Củng cố): Thực hiện chuyển màu màn hình sang màu vàng sau 1 giây, sau đó 1 giây chuyển
// sang màu xanh lá cây.

//- Sử dụng callback
setTimeout(() => {
    document.querySelector('body').style.background = 'yellow';
    setTimeout(() => {
        document.querySelector('body').style.background = 'green';
    }, 1000);
}, 1000);

//- Sử dụng promise
function setColorPerTime(color, time) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            document.querySelector('body').style.background = color;
        }, time);
    })
}

setColorPerTime('yellow', 1000)
    .then(function () {
        setColorPerTime('green', 1000);
    })
    .catch();
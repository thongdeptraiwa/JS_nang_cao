/* Bài tập 2: Cũng sử dụng cách tạo Promise bằng constructor Promise để tạo ra một Promise và sử dụng nhiều lệnh
.then() liên tiếp để xử lý các kết quả thành công của Promise trước đó, không xử lý thất bại.

Lưu ý: Bài tập này ta thực hiện nhiều lệnh .then() liên tiếp: điều này hoàn toàn có thể thực hiện được với một
điều kiện là tham số của hàm .then() là các hàm.
Tuy nhiên có 1 lưu ý là khi ta không sử dung promise trong các hàm .then() liên tiếp thì sẽ dẫn đến việc mất đi
sự đồng bộ. */

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(1);
        return resolve();
    }, 1000);
});
console.log(promise);

promise
    .then(() => {
        setTimeout(() => {
            console.log(2);
        }, 4000);
    })
    .then(() => {
        setTimeout(() => {
            console.log(3);
        }, 3000);
    })
    .then(() => {
        setTimeout(() => {
            console.log(4);
        }, 2000);
    })

// Kết quả:
/*
Promise {<pending>}
[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: undefined
Promise {<pending>}
[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: undefined
1 --> Sử dụng promise nên hiển thị đầu tiên
4 --> Hàm thông thường timeout 2000
3 --> Hàm thông thường timeout 3000
2 --> Hàm thông thường timeout 4000
*/
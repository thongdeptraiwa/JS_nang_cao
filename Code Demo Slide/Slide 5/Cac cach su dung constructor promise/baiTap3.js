// Bài tập 3: Thực hiện liên tiếp các Promise liền nhau cho các nghiệp vụ cần đồng bộ
/* Bài tập này cũng sử dụng cách tạo Promise bằng constructor Promise và kết hợp với việc trả về một Promise mới
trong mỗi .then(). Điều này cho phép chúng ta xử lý các kết quả thành công của Promise trước đó và tạo các Promise
mới trong quá trình xử lý chuỗi các Promise. */

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(1);
        return resolve();
    }, 1000);
});
console.log(promise);

promise
    .then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(2);
                return resolve();
            }, 4000);
        })
    })
    .then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(3);
                return resolve();
            }, 3000);
        })
    })
    .then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(4);
                return resolve();
            }, 2000);
        })
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
1 --> Hiển thị sau 1000 ms
2 --> Hiển thị sau 4000 ms tiếp theo (tính từ sau khi số 1 hiển thị)
3 --> Hiển thị sau 3000 ms tiếp theo (tính từ sau khi số 2 hiển thị)
4 --> Hiển thị sau 2000 ms tiếp theo (tính từ sau khi số 3 hiển thị)
*/
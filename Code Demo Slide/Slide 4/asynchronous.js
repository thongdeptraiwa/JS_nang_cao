// Phần 1: Asynchronous (bất đồng bộ) trong JS

// 1. Synchronous (Xử lý đồng bộ): Theo thứ tự
console.log('Message thứ 1');
console.log('Message thứ 2');
// kết quả:
// Message thứ 1
// Message thứ 2

// 2. Asynchronous (Xử lý bất đồng bộ): Không theo thứ tự

setTimeout(function() {
    console.log('Message thứ 1');
}, 1000);
console.log('Message thứ 2');

// hoặc

setTimeout(() => { // kiểu khai báo này gọi là arrow function
    console.log('Message thứ 1');
}, 1000);
console.log('Message thứ 2');

// Kết quả:
// Message thứ 2
// Message thứ 1

// 3. Nguyên lý bất đồng bộ trong JS: Dựa trên 4 components:
//- 3.1. Call Stack (Ngăn xếp gọi)
//- 3.2. WEB APIs
//- 3.3. Callback Queue (Hàng đợi Callback)
//- 3.4. Event Loop (Vòng lặp sự kiện)

console.log('This is the first line');
setTimeout(() => {
    console.log('This is the second line');
}, 1000);
console.log('This is the last line');

//=> Mô tả nguyên lý chạy đoạn code trên: Xem trong slide

// Kết quả:
// This is the first line
// This is the last line
// This is the second line
// Phần 2: Các cách xử lý Callback Hell
// Có 5 cách:

// 1. Đặt tên cho hàm callback
//nghĩa là nên sử dụng `hàm callback được đặt tên` thay vì dùng hàm callback ẩn danh

// Ví dụ:
// Thay vì sử dụng hàm callback ẩn danh (anonymous function) như đoạn code (không đầy đủ) sau:
var form = document.querySelector('form');
form.onsubmit = (submitEvent) => { // Hàm ẩn danh
    var name = document.querySelector('input').value;
    request({
        uri: 'http://example.com/upload',
        body: name,
        method: 'POST'
    }, (err, response, body) => { // Hàm ẩn danh
        var statusMessage = document.querySelector('.status');
        if (err) {
            return statusMessage.value = err;
        }
        statusMessage.value = body;
    });
}

// Thì sử dụng hàm callback được đặt tên. Sửa lại đoạn code trên như sau:
var form = document.querySelector('form');
form.onsubmit = function formSubmit(submitEvent) { // Hàm ẩn danh được đặt tên là formSubmit
    var name = document.querySelector('input').value;
    request({
        uri: 'http://example.com/upload',
        body: name,
        method: 'POST'
    }, function postResponse(err, response, body) { // Hàm ẩn danh được đặt tên là postResponse
        var statusMessage = document.querySelector('.status');
        if (err) {
            return statusMessage.value = err;
        }
        statusMessage.value = body;
    });
}

// 2. Thiết kế ứng dụng theo dạng module (Module Pattern)
/* nghĩa là sử dụng mô hình module để tạo các module độc lập, giúp tách biệt logic và tránh việc lồng nhau các
callback functions. Mỗi module nên thực hiện một nhiệm vụ cụ thể và có một giao diện rõ ràng để tương tác với 
các module khác. */

// Ví dụ: Đoạn code ban đầu viết lại theo cách 2 như sau:

// Tạo đối tượng formObject
var formObject = {
    // Tạo phương thức formSubmit
    formSubmit: () => { // Sử dụng arrow function
        var name = document.querySelector('input').value;
        request({
            uri: 'http://example.com/upload',
            body: name,
            method: 'POST'
        }, this.postResponse()); // gọi phương thức postResponse
    },

    // Tạo phương thức postResponse
    postResponse: (err, response, body) => {
        var statusMessage = document.querySelector('.status');
        if (err) {
            return statusMessage.value = err;
        }
        statusMessage.value = body;
    }
}

var form = document.querySelector('form');
form.onsubmit = formObject.formSubmit();

// 3. Định nghĩa hàm trước khi gọi
// nghĩa là định nghĩa hàm trước sau đó khi cần sử dụng làm callback thì chỉ cần gọi tên hàm

// Ví dụ: Đoạn code ban đầu viết lại theo cách 3 như sau:
// Tạo phương thức formSubmit
function formSubmit() {
    var name = document.querySelector('input').value;
    request({
        uri: 'http://example.com/upload',
        body: name,
        method: 'POST'
    }, postResponse()); // gọi phương thức postResponse
}

// Tạo phương thức postResponse
function postResponse(err, response, body) {
    var statusMessage = document.querySelector('.status');
    if (err) {
        return statusMessage.value = err;
    }
    statusMessage.value = body;
}

var form = document.querySelector('form');
form.onsubmit = formObject.formSubmit();

// 4. Sử dụng Promises (ES2015 - ES6): Xem trong các bài tập 1 đến 4
// 5. Sử dụng async/ await (ES2017 - ES8): Học ở Slide 6
// Phần 2: Khái niệm Asynchronous JavaScript and XML (AJAX)
/* AJAX là viết tắt của "Asynchronous JavaScript and XML". Nó không phải là một ngôn ngữ hoặc công nghệ mới, mà là một
phương pháp cho việc tương tác với máy chủ từ trang web mà không cần phải tải lại toàn bộ trang. 

Các điểm chính của AJAX là:

1. Asynchronous (Bất đồng bộ): Thực hiện các yêu cầu đến máy chủ và xử lý dữ liệu mà không làm tắc nghẽn luồng chính của
trang web. Điều này giúp trang web tiếp tục hoạt động và phản hồi người dùng mà không giữ lại trang hoặc làm tải lại trang.

2. JavaScript: AJAX sử dụng JavaScript để tạo và gửi yêu cầu đến máy chủ cũng như xử lý dữ liệu nhận được. JavaScript có khả
năng làm cho các yêu cầu và xử lý dữ liệu mà không gây tắc nghẽn.

3. XML hoặc JSON: Trong ngữ cảnh AJAX, XML và JSON thường được sử dụng để đại diện cho dữ liệu. Tuy nhiên, hiện nay, JSON
thường được ưa chuộng hơn vì cú pháp ngắn gọn và dễ đọc hơn so với XML.

Cách sử dụng AJAX thường bao gồm các bước sau:

- Tạo yêu cầu: Sử dụng đối tượng XMLHttpRequest hoặc các API mới như `fetch` để tạo yêu cầu đến máy chủ.
- Gửi yêu cầu: Sử dụng phương thức `open()` và `send()` để gửi yêu cầu đến máy chủ.
- Nhận dữ liệu: Xử lý dữ liệu nhận được từ máy chủ. Dữ liệu này có thể là XML hoặc JSON.
- Cập nhật giao diện: Sử dụng JavaScript để cập nhật giao diện người dùng với dữ liệu mới. */

// Dưới đây là một ví dụ sử dụng AJAX với `XMLHttpRequest`: 

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    // Xử lý dữ liệu nhận được từ máy chủ
    console.log(this.responseText);
  }
};
xhttp.open("GET", "https://example.com/api/data", true);
xhttp.send();

/* Trong ví dụ này, một yêu cầu GET được tạo và gửi đến "https://example.com/api/data", và khi phản hồi được nhận,
nó được xử lý thông qua hàm `onreadystatechange`. */
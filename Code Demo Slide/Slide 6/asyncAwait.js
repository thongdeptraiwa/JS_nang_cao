/* async/await là một cú pháp JavaScript giúp quản lý mã bất đồng bộ (asynchronous code) một cách dễ đọc và dễ hiểu hơn, 
đặc biệt là khi làm việc với Promises. async được sử dụng để định nghĩa một hàm làm việc bất đồng bộ, trong khi await sử 
dụng để đợi cho đến khi một Promise được giải quyết hoặc bị từ chối. async/await thường được sử dụng trong các hàm mà bạn 
muốn gọi như là một phần của một chuỗi bất đồng bộ.

Dưới đây là một ví dụ để minh họa: */

// Hàm trả về một Promise sau một khoảng thời gian giả định
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Hàm bất đồng bộ sử dụng async/await
async function exampleAsyncFunction() {
    console.log("Start");

    try {
        // Sử dụng await để đợi cho đến khi Promise được giải quyết
        await wait(2000);
        console.log("After 2 seconds");

        // Các công việc khác có thể thực hiện ở đây
        // Ví dụ: Gọi một API, đọc từ cơ sở dữ liệu, v.v.

        await wait(1000);
        console.log("After another second");
    } catch (error) {
        // Xử lý lỗi nếu có
        console.error("Error:", error);
    }

    console.log("End");
}

// Gọi hàm bất đồng bộ
exampleAsyncFunction();

/* Trong ví dụ trên:

`wait` là một hàm trả về một Promise sau một khoảng thời gian giả định.
`exampleAsyncFunction` là một hàm bất đồng bộ được định nghĩa với từ khóa async.
`await wait(2000)` là cách sử dụng await để đợi cho đến khi Promise được giải quyết sau 2 giây.
`try/catch` được sử dụng để xử lý lỗi nếu có bất kỳ lỗi nào xảy ra trong quá trình thực thi hàm bất đồng bộ.

Lợi ích của async/await bao gồm:

1. Đơn giản hóa Mã: Giúp mã trở nên ngắn gọn hơn và dễ đọc hơn so với sử dụng các then và catch của Promise.

2. Xử Lý Lỗi Dễ Dàng: Sử dụng cú pháp `try/catch` để xử lý lỗi, giúp quản lý và xử lý lỗi một cách tự nhiên.

3. Tuần tự Hóa Các Thao Tác Bất Đồng Bộ: 
Cho phép ghi mã theo cách tưởng chừng như tuần tự, giúp giảm thiểu hiện tượng "callback hell" (sâu lồi các hàm callback).

4. Tạo Mã Bất Đồng Bộ Tương Tác Như Mã Đồng Bộ:
Giúp mã bất đồng bộ trở nên giống với mã đồng bộ, dễ hiểu hơn đối với những người mới học JavaScript hoặc những người chưa 
quen với lập trình bất đồng bộ.

Tuy nhiên, lưu ý rằng async/await chỉ là một cú pháp "cài đặt trên" của Promises và không thay thế chúng. Khi sử dụng 
async/await, chúng ta vẫn sử dụng Promises bên dưới, và hàm được đánh dấu bởi async sẽ trả về một Promise. */
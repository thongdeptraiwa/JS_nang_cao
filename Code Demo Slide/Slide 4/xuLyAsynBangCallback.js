// Phần 2: Asynchronous bằng hàm callback()

// Có 3 phương án để asynchronous:
//- Phương án 1: Sử dụng hàm callback()
//- Phương án 2: Sử dụng promise (sẽ học ở Slide 5)
//- Phương án 3: Sử dụng async/ await (sẽ học ở Slide 5)

// 1. Định nghĩa hàm callback()
/* Là một hàm được truyền vào một hàm khác như một tham số và thường được gọi lại sau khi 
một tác vụ cụ thể hoàn thành */

// 2. Vai trò của hàm callback(): Có 4 vai trò quan trọng
//- 2.1. Thực hiện hành động sau khi tác vụ hoàn thành
/* cho phép xác định hành động cần thực hiện sau khi một tác vụ không đồng bộ hoàn thành. 
Khi tác vụ không đồng bộ kết thúc, hàm callback được gọi để xử lý kết quả hoặc thực hiện 
các hành động cần thiết */

//- 2.2. Tránh chờ đợi (Blocking)
/* JS là một ngôn ngữ chạy đơn luồng, nghĩa là nó có khả năng thực hiện một tác vụ tại một 
thời điểm. Sử dụng hàm callback giúp tránh tình trạng chương trình bị chặn (blocked) bởi các 
tác vụ lâu dài. Khi một tác vụ không đồng bộ được gọi, chương trình có thể tiếp tục thực hiện 
các tác vụ khác trong khi chờ đợi kết quả. */

//- 2.3. Quản lý luồng thực thi
/* Hàm callback giúp quản lý luồng thực thi bằng cách xác định thứ tự thực hiện các hành động. 
Khi một tác vụ không đồng bộ được gọi, chương trình không phải chờ đợi nó hoàn thành mà có thể 
tiếp tục thực hiện các công việc khác, và khi tác vụ hoàn thành, hàm callback sẽ được gọi. */

//- 2.4. Xử lý lỗi (Error Handling)
/* Hàm callback cũng được sử dụng để xử lý lỗi từ các tác vụ không đồng bộ. Thông qua hàm callback, 
chúng ta có thể chuyển thông điệp lỗi hoặc đối tượng lỗi từ tác vụ không đồng bộ về phần xử lý lỗi 
để thực hiện các hành động phù hợp. */

// 3. Ví dụ
// Ví dụ 1: Không sử dụng callback
function fetchData() {
    // Mô phỏng việc lấy dữ liệu từ server
    setTimeout(() => {
        return 'Dữ liệu từ server'
    }, 2000);
}

function processData() {
    const data = fetchData();
    console.log('Dữ liệu đã được nhận:', data);
}

console.log('Bắt đầu');
processData();
console.log('Kết thúc');

/* Trong ví dụ này, `fetchData` sử dụng `setTimeout` để mô phỏng việc lấy dữ liệu từ server. Tuy nhiên, vì 
`setTimeout` là một hàm không đồng bộ, nó không trả về giá trị ngay lập tức. Kết quả là `processData` sẽ 
tiếp tục thực hiện ngay lập tức mà không chờ đợi kết quả từ `fetchData`. Do đó, log sẽ xuất hiện trước khi 
dữ liệu từ server được nhận. */

// Kết quả:
// Bắt đầu
// Dữ liệu đã được nhận: undefined
// Kết thúc

// 2. Ví dụ 2: Sử dụng callback (không có xử lý lỗi)

// Hàm không đồng bộ mô phỏng việc lấy dữ liệu từ server
function fetchData(callback) {
    setTimeout(() => {
        const data = 'Dữ liệu từ server';
        callback(data);
    }, 2000);
}

// Hàm callback để xử lý dữ liệu khi tác vụ không đồng bộ hoàn thành
function processData(data) {
    console.log('Dữ liệu đã được nhận:', data);
}

console.log('Bắt đầu');

// Gọi hàm không đồng bộ và truyền hàm callback
fetchData(processData);

console.log('Kết thúc');

/* Trong ví dụ này, `fetchData` nhận một tham số là hàm callback (`processData`). Khi tác vụ không đồng bộ hoàn 
thành, `fetchData` gọi callback với dữ liệu từ server. Điều này giúp chương trình tiếp tục thực hiện công việc 
khác mà không chờ đợi `fetchData`. Kết quả là log của "Kết thúc" xuất hiện trước khi dữ liệu từ server được nhận, 
nhưng callback `processData` sẽ được gọi khi dữ liệu sẵn có.

Với sử dụng callback, chúng ta có khả năng kiểm soát luồng xử lý và thực hiện các hành động phụ thuộc vào kết quả 
của tác vụ không đồng bộ, giúp chương trình trở nên linh hoạt và hiệu quả hơn trong việc xử lý các tác vụ không 
đồng bộ. */

// Kết quả:
// Bắt đầu
// Kết thúc
// <sau 2 giây>
// Dữ liệu đã được nhận: Dữ liệu từ server

// 3. Ví dụ 3: Sử dụng callback (có xử lý lỗi)

// Hàm không đồng bộ mô phỏng việc lấy dữ liệu từ server
function fetchData(callback) {
    setTimeout(() => {
        const data = 'Dữ liệu từ server';
        callback(null, data); // null là đối tượng lỗi (nếu có)
    }, 2000);
}

// Hàm callback để xử lý dữ liệu khi tác vụ không đồng bộ hoàn thành
function processData(error, data) {
    if(error){
        console.error('Lỗi:',error);
    }else{
        console.log('Dữ liệu đã được nhận:', data);
    }
}

console.log('Bắt đầu');

// Gọi hàm không đồng bộ và truyền hàm callback
fetchData(processData);

console.log('Kết thúc');

/* Trong ví dụ này, `fetchData` là một hàm không đồng bộ, và khi tác vụ kết thúc, nó gọi hàm callback `processData`
để xử lý kết quả hoặc lỗi. Sử dụng hàm callback giúp chương trình tiếp tục thực hiện các công việc khác mà không 
phải chờ đợi `fetchData` hoàn thành. */

// Kết quả:
// Bắt đầu
// Kết thúc
// <sau 2 giây>
// Dữ liệu đã được nhận: Dữ liệu từ server
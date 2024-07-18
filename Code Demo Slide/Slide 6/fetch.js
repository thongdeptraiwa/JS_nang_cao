// Phần 3: Thực hành sử dụng hàm fetch()
// Ví dụ 1: Gửi request bằng phương thức GET đến server nhưng sử dụng fetch()
var url = "https://jsonplaceholder.typicode.com/todos/1";

fetch(url, {
    method: "GET"
}).then(function(response){
    // Chuyển dữ liệu trả về thành json
    return response.json();
}).then(function(data){
    console.log(data);
});

// Kết quả: { userId: 1, id: 1, title: 'delectus aut autem', completed: false }

// Ví dụ 2: Gửi request dạng POST với dữ liệu lên server
const url = "https://jsonplaceholder.typicode.com/todos";

// post body data
const todo = {
    userId: 2,
    title: 'Dang Anh Tuan',
    completed: true
};

// request options
const options = {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: {
        'Content-Type': 'application/json'
    }
}

// send POST request
fetch(url, options)
.then(res => res.json())
.then(res => console.log(res));

// Kết quả: { userId: 2, title: 'Dang Anh Tuan', completed: true, id: 201 }
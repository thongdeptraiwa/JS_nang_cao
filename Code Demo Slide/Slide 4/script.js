// Hàm callback chứa một hàm khác và sử dụng tham số
function dynamicFunction(yourFunction, yourName) {
  yourFunction(yourName);
}

// Hàm callback mà chúng ta muốn động hóa
function getNameCallback(yourName) {
  alert('Hello, ' + yourName);
}

// Thực hiện động hóa thông qua hàm callback
var name = 'Trần Thị Loan';
dynamicFunction(getNameCallback, name);

/* Trong ví dụ này:
- `dynamicFunction` là một hàm callback chứa một hàm khác và sử dụng tham số để động hóa quá trình callback.
- `getNameCallback` vẫn là hàm chúng ta muốn "động hóa."
Khi chúng ta gọi `dynamicFunction(getNameCallback, name);`, `getNameCallback` được truyền vào `dynamicFunction` như 
là một tham số. Trong `dynamicFunction`, hàm được truyền vào được gọi với tham số `name`. Như vậy, `getNameCallback` 
sẽ được gọi và hiển thị một thông báo chào mừng với tên đã được truyền vào. */
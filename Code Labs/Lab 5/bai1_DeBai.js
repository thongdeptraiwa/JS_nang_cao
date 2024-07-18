// Đoạn script đã cho (theo đề bài):
function ThucDay(viectieptheo) {
    console.log("b1.Đã ngủ dậy!");
    viectieptheo();
}
function DanhRang(viectieptheo) {
    console.log("b2. Đang đánh răng");
    setTimeout(function () {
        console.log("Đã đánh răng xong!");
        viectieptheo();
    }, 2000);
}
function ThayQuanAo(viectieptheo) {
    console.log("b3. Đang thay quan ao");
    setTimeout(function () {
        console.log("Đã thay quần áo xong!");
        viectieptheo();
    }, 3000);
}
function DiHoc(viectieptheo) {
    viectieptheo();
}

// Dưới đây là đoạn script bị callback hell (từ dòng 25 đến 36)
ThucDay(function () {
    DanhRang(function () {
        ThayQuanAo(function () {
            DiHoc(function () {
                console.log("b4. Đang di chuyển...");
                setTimeout(function () {
                    console.log("Đã đến trường!");
                }, 4000);
            });
        });
    });
});

/* Giải thích:
Callback hell (định nghĩa còn gọi là "Pyramid of Doom": "Kim tự tháp diệt vong") xảy ra khi có nhiều
hàm callback được lồng chồng trong nhau, tạo thành một cấu trúc cây nổi giữa các hàm.
Trong trường hợp trên, callback hell xảy ra tại đoạn code từ dòng 15 đến 36.

Ở đây, mỗi hàm (ThucDay, DanhRang, ThayQuanAo, DiHoc) đều là các hàm có callback, và chúng được gọi 
lồng chồng nhau theo kiểu callback hell. Cấu trúc lồng chồng này làm cho mã nguồn trở nên khó đọc và khó quản lý.

Giải pháp để tránh callback hell thường là sử dụng Promises và async/await. */
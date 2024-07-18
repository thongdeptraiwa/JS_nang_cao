// Giải pháp 4: Sử dụng Promise

function ThucDay() {
    return new Promise(resolve => {
        console.log("b1. Đã ngủ dậy!");
        resolve();
    });
}

function DanhRang() {
    return new Promise(resolve => {
        console.log("b2. Đang đánh răng");
        setTimeout(() => {
            console.log("Đã đánh răng xong!");
            resolve();
        }, 2000);
    });
}

function ThayQuanAo() {
    return new Promise(resolve => {
        console.log("b3. Đang thay quan ao");
        setTimeout(() => {
            console.log("Đã thay quần áo xong!");
            resolve();
        }, 3000);
    });
}

function DiHoc() {
    return new Promise(resolve => {
        resolve();
    });
}

ThucDay()
    .then(DanhRang)
    .then(ThayQuanAo)
    .then(DiHoc)
    .then(() => {
        console.log("b4. Đang di chuyển...");
        return new Promise(resolve => setTimeout(resolve, 4000));
    })
    .then(() => {
        console.log("Đã đến trường!");
    })
    .catch(error => console.error(error));
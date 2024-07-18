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

async function startDay() {
    try {
        await ThucDay();
        await DanhRang();
        await ThayQuanAo();
        await DiHoc();
        console.log("b4. Đang di chuyển...");
        await new Promise(resolve => setTimeout(resolve, 4000));
        console.log("Đã đến trường!");
    } catch (error) {
        console.error(error);
    }
}

startDay();

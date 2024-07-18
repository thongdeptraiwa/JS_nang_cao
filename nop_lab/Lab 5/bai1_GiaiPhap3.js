function handleMovingToSchool() {
    console.log("b4. Đang di chuyển...");
    setTimeout(function () {
        console.log("Đã đến trường!");
    }, 4000);
}

function goSchool() {
    console.log("b3. Đang thay quan ao");
    setTimeout(function () {
        console.log("Đã thay quần áo xong!");
        handleMovingToSchool();
    }, 3000);
}

function wearClothes() {
    console.log("b2. Đang đánh răng");
    setTimeout(function () {
        console.log("Đã đánh răng xong!");
        goSchool();
    }, 2000);
}

function wakeUp() {
    console.log("b1. Đã ngủ dậy!");
    wearClothes();
}

wakeUp();
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

// Phần 1: Khái niệm Callback hell
// Ví dụ:
function thuc_day(viecnaodo) {
    viecnaodo();
}

function danh_rang(viecnaodo) {
    viecnaodo();
}

function di_an_sang(viecnaodo) {
    viecnaodo();
}

// Code không tối ưu
function main() {
    thuc_day(() => {
        danh_rang(() => {
            di_an_sang(() => {
                console.log('OMG!!!!');
            });
        });
    });
}
main();
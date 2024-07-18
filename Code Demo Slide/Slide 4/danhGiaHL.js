// Hàm chính yêu cầu thực hiện các công việc liên quan
function doHomeWork(subject, callback) {
    alert('Môn đang học: ' + subject);
    var score = prompt('Điểm đạt được (hệ số 10): ');
    callback(score, subject);
}

// Hàm callback (được đặt tên là alertFinished) xác định học lực dựa trên điểm và hiển thị thông báo tương ứng
function alertFinished(score, subject) {
    if(score < 5){
        alert('Bạn không đủ điều kiện qua môn: ' + subject);
    }else if(score >= 5 && score < 7){
        alert('Bạn đủ điều kiện qua môn: ' + subject
        + ', Học lực: Trung bình');
    }else if(score >= 7 && score < 9){
        alert('Bạn đủ điều kiện qua môn: ' + subject
        + ', Học lực: Khá');
    }else{
        alert('Bạn đủ điều kiện qua môn ' + subject
        + ', Học lực: Giỏi');
    }
}

// Gọi hàm thực thi
doHomeWork('Math',alertFinished);
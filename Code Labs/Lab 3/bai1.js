// Tạo đối tượng sinh viên bằng Object Literals
const sinhvien = {
    // Thuộc tính
    id: 1,
    fullname: 'Nguyen Van Sinh',
    email: 'sinhvien@example.com',
    avatar: 'avatar-url',
    address: '123 Main Street, City',
    study_major: 'Computer Science',
    avgScore: 8.5,
  
    // Phương thức tính điểm trung bình
    getAvgScore: function () {
      return this.avgScore;
    },
  
    // Phương thức cập nhật điểm trung bình
    setAvgScore: function (point) {
      if (typeof point === 'number') {
        this.avgScore = point;
      } else {
        console.error('Điểm trung bình phải là một số.');
      }
    },
  
    // Phương thức thay đổi địa chỉ
    changeAddress: function (newAddress) {
      this.address = newAddress;
    },
  };
  
  // Sử dụng đối tượng sinh viên
  console.log(sinhvien.fullname); // Xuất thông tin tên sinh viên
  console.log(sinhvien.getAvgScore()); // Xuất điểm trung bình
  sinhvien.setAvgScore(9.0); // Cập nhật điểm trung bình
  console.log(sinhvien.getAvgScore()); // Xuất điểm trung bình sau khi cập nhật
  sinhvien.changeAddress('456 New Street, City'); // Thay đổi địa chỉ
  console.log(sinhvien.address); // Xuất địa chỉ mới
  
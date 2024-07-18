// Tạo đối tượng sinh viên bằng Object Literals
const sinhvien = {
    id: 1,
    fullname: 'Nguyen Van Sinh',
    email: 'sinhvien@example.com',
    avatar: 'avatar-url',
    address: '123 Main Street, City',
    study_major: 'Computer Science',
    avgScore: 8.5,
  
    getAvgScore: function () {
      return this.avgScore;
    },
  
    setAvgScore: function (point) {
      if (typeof point === 'number') {
        this.avgScore = point;
      } else {
        console.error('Điểm trung bình phải là một số.');
      }
    },
  
    changeAddress: function (newAddress) {
      this.address = newAddress;
    },
  };
  
  console.log(sinhvien.fullname);
  console.log(sinhvien.getAvgScore()); 
  sinhvien.setAvgScore(9.0); 
  console.log(sinhvien.getAvgScore()); 
  sinhvien.changeAddress('456 New Street, City'); 
  
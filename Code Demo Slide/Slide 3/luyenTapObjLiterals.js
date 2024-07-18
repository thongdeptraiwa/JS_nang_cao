let sinhVien = {
    ma_sinh_vien: 'SV001',
    ho_va_ten: 'Nguyen Van A',
    lop: 'K61',
    ngay_nhap_hoc: new Date('01/09/2023'),
    diem_trung_binh: 8.5,
  
    tinhHocLuc: function() {
      if (this.diem_trung_binh < 5) {
        return 'Học lực Yếu';
      } else if (this.diem_trung_binh < 7) {
        return 'Học lực Trung bình';
      } else if (this.diem_trung_binh < 8) {
        return 'Học lực Khá';
      } else {
        return 'Học lực Giỏi';
      }
    },
  
    thoiGianRaTruong: function() {
      // Tính thời gian còn lại đến khi ra trường
      let ngayHienTai = new Date();
      let thoiGianHoc = 28; // Tổng thời gian học (28 tháng)
  
      // Tính số tháng đã học
      let thoiGianDaHoc = Math.floor((ngayHienTai - this.ngay_nhap_hoc) / (30 * 24 * 60 * 60 * 1000));
  
      // Tính thời gian còn lại
      let thoiGianConLai = thoiGianHoc - thoiGianDaHoc;
  
      return thoiGianConLai > 0 ? thoiGianConLai : 0;
    },
  
    hienThiThongTin: function() {
      console.log(`Mã sinh viên: ${this.ma_sinh_vien}`);
      console.log(`Họ và tên: ${this.ho_va_ten}`);
      console.log(`Lớp: ${this.lop}`);
      console.log(`Ngày nhập học: ${this.ngay_nhap_hoc.toLocaleDateString()}`);
      console.log(`Điểm trung bình: ${this.diem_trung_binh}`);
      console.log(`Học lực: ${this.tinhHocLuc()}`);
      console.log(`Thời gian còn lại đến khi ra trường: ${this.thoiGianRaTruong()} tháng`);
    }
  };
  
  // In ra thông tin sinh viên
  sinhVien.hienThiThongTin();  
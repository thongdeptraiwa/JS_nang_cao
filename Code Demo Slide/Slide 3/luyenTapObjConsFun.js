// Object constructor function
function VanDongVien(ma_van_dong_vien, ho_va_ten, ngay_sinh) {
    this.ma_van_dong_vien = ma_van_dong_vien;
    this.ho_va_ten = ho_va_ten;
    this.ngay_sinh = ngay_sinh;
    this.giai_thuong = [];

    // Phương thức kiểm tra điều kiện
    this.kiemTraDieuKien = function (ngay_to_chuc, tuoi_dieu_kien) {
        const ngay_sinh_vd = new Date(this.ngay_sinh);
        const ngay_to_chuc_date = new Date(ngay_to_chuc);
        const age = ngay_to_chuc_date.getFullYear() - ngay_sinh_vd.getFullYear();

        return age >= tuoi_dieu_kien;
    };

    // Phương thức thêm giải thưởng
    this.themGiaiThuong = function (ten_giai_thuong) {
        this.giai_thuong.push(ten_giai_thuong);
        return this.giai_thuong.length;
    };

    // Phương thức hiển thị danh sách giải thưởng
    this.danhSachGiaiThuong = function () {
        return this.giai_thuong;
    };
}

// Khởi tạo 10 vận động viên
const athletes = [
    new VanDongVien(1, "Nguyen Van A", "1990-05-15"),
    new VanDongVien(2, "Tran Thi B", "1992-08-22"),
    // Thêm các vận động viên khác tại đây
    new VanDongVien(2, "Le Thi C", "1991-07-22"),
    new VanDongVien(3, "Dang Van D", "1990-08-10"),
    new VanDongVien(4, "Nguyen Phuc E", "1992-05-14"),
    new VanDongVien(5, "Ly Long F", "1993-04-02"),
    new VanDongVien(6, "Hoang Ngoc G", "1995-09-26"),
    new VanDongVien(7, "Cao Hoang K", "1999-12-25"),
    new VanDongVien(8, "Bui Ngoc H", "2000-11-22"),
    new VanDongVien(9, "Tri Trong L", "2001-10-02"),
];

// Kiểm tra điều kiện tham gia thi đấu và hiển thị danh sách giải thưởng
const ngay_to_chuc = "2024-01-13";
const tuoi_dieu_kien = 18;

athletes.forEach(athlete => {
    if (athlete.kiemTraDieuKien(ngay_to_chuc, tuoi_dieu_kien)) {
        console.log(`${athlete.ho_va_ten} đủ điều kiện tham gia thi đấu.`);
    } else {
        console.log(`${athlete.ho_va_ten} không đủ điều kiện tham gia thi đấu.`);
    }

    // Thêm giải thưởng
    const soLuongGiaiThuong = athlete.themGiaiThuong(`Giai thuong ${Math.floor(Math.random() * 100)}`);
    console.log(`${athlete.ho_va_ten} đạt được ${soLuongGiaiThuong} giải thưởng.`);
    console.log(`Danh sách giải thưởng của ${athlete.ho_va_ten}: ${athlete.danhSachGiaiThuong().join(", ")}`);
    console.log("\n");
});
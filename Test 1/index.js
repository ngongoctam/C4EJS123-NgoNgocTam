// BÀI 1:
// {
//     let str_input = prompt('Hãy nhập vào một chuỗi bất kỳ');
//     let str_output = '';
//     for (let i = str_input.length - 1; i >= 0; i--) {
//         str_output += str_input[i];
//     }
//     alert(`Chuỗi đảo ngược là: ${str_output}`);
// }

// BÀI 2:
// let str = 'hello a';
// let tachChuoi = str.toLowerCase().split(" ");
// for (let i = 0; i < tachChuoi.length; i++) {
//     tachChuoi[i] = tachChuoi[i][0].toUpperCase() + tachChuoi[i].slice(1);
// }
// str = tachChuoi.join(" ");
// console.log(str);

// BÀI 3:
// let mangTrung = [1, 2, 3, 3, 4, 5, 4, 4, 4, 5, 5];
// let mangLoc = [];
// for (let i = 0; i < mangTrung.length; i++) {
//     if (mangLoc.indexOf(mangTrung[i]) === -1) {
//         mangLoc.push(mangTrung[i]);
//     }
// }
// console.log(mangLoc);

// BÀI 4:
let nhanVien = [
    {
        ten: 'Ngô Ngọc Tâm',
        tuoi: 29,
        mucLuong: 9,
        chucVu: 'Lập trình viên',
    },
    {
        ten: 'Nguyễn Thanh Huy',
        tuoi: 26,
        mucLuong: 8,
        chucVu: 'Trợ giảng',
    },
    {
        ten: 'Nguyễn Huỳnh Thanh Trang',
        tuoi: 27,
        mucLuong: 9,
        chucVu: 'NV Văn phòng',
    },
]
let quanLy = prompt('Vui lòng nhập R, C, U hoặc D');
if (quanLy = 'R') {
    console.log(nhanVien);
}
if (quanLy = 'C') {
    tenNew = prompt('Nhập tên nhân viên mới');
    tuoiNew = prompt('Nhập tuổi nhân viên mới');
    mucLuongNew = prompt('Nhập mức lương nhân viên mới');
    chucVuNew = prompt('Nhập chức vụ nhân viên mới');
    nhanVien.push(
        {
            ten: tenNew,
            tuoi: tuoiNew,
            mucLuong: mucLuongNew,
            chucVu: chucVuNew,
        }
    )
    console.log(nhanVien);
}
if (quanLy = 'U') {
    let stt = prompt('Nhập số thứ tự nhân viên cần update');
    tenNew = prompt('Nhập tên nhân viên update');
    tuoiNew = prompt('Nhập tuổi nhân viên update');
    mucLuongNew = prompt('Nhập mức lương nhân viên update');
    chucVuNew = prompt('Nhập chức vụ nhân viên update');
    nhanVien[stt]
}

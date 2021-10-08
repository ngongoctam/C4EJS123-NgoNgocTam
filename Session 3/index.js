// BÀI 1
// 4 Ví dụ về hoán đổi biến
// Ví dụ 1:
// {
//     let a = 1;
//     let b = 4;
//     console.log(a, b);
//     [a, b] = [b, a]
//     console.log(a, b);
// }
// Ví dụ 2:
// {
//     let a = 1;
//     let b = 4;
//     console.log(a, b);

//     let tam = a;
//     a = b;
//     b = tam;
//     console.log(a, b);
// }
// Ví dụ 3:
// {
//     let a = 1;
//     let b = 4;
//     console.log(a, b);

//     a = a + b;
//     b = a - b;
//     a = a - b;
//     console.log(a, b);
// }
// Ví dụ 4:
// {
//     let a = 1;
//     let b = 4;
//     console.log(a, b);

//     a = a ^ b;
//     b = a ^ b;
//     a = a ^ b;
//     console.log(a, b);
// }

// BÀI 2
// {
//     let chuoi = 'Xin chào tất cả các bạn';
//     let tachChuoi = chuoi.split(' ', 3);
//     console.log(tachChuoi);
// }

// BÀI 3
// {
//     let a = ['10', 'J', 'Q', 'K', 'A', '2'];
//     console.log(...a);
// }

// BÀI 4
// {
//     let shop = ['Áo', 'Quần', 'Ba lô'];
//     let t;
//     while (true) {
//     t = String(prompt('Xin chào, bạn muốn thao tác gì?\n\n- Nhập c để Tạo mới\n- Nhập r để Xem\n- Nhập u để Cập nhật\n- Nhập d để Xóa'));
//     if (t == 'r') {
//         for (i = 0; i < shop.length; i++) {
//             console.log(i + 1 + '. ' + shop[i]);
//         }
//     } else if (t == 'c') {
//         let taoMoi = String(prompt('Nhập tên sản phẩm mới'));
//         shop.push(taoMoi);
//         alert('Đã thêm ' + taoMoi);
//     } else if (t == 'u') {
//         let capNhat = String(prompt('Chọn vị trí cần cập nhật'));
//         let sanPham = String(prompt('Nhập tên sản phẩm cập nhật'));
//         shop[capNhat-1] = sanPham
//         alert('Đã cập nhật ' + sanPham);
//     } else if (t == 'd') {
//         let viTri = String(prompt('Chọn vị trí muốn xóa'));
//         shop.splice(viTri - 1, 1);
//         alert('Đã xóa xong');
//     } else {
//         alert('Bạn đã nhập sai. Vui lòng nhập lại.\n\n- Nhập c để Tạo mới\n- Nhập r để Xem\n- Nhập u để Cập nhật\n- Nhập d để Xóa');
//     }
//     }
// }

// BÀI 5 TÍNH TỔNG
// {
//     let chuoi = prompt('Nhập vào một dãy số, mỗi số cách nhau bởi dấu phảy');
//     let tong = 0;
//     let tachChuoi = chuoi.split(",");
//     console.log(tachChuoi);
//     for (i = 0; i < tachChuoi.length; i++) {
//         tong = tong + Number(tachChuoi[i]);
//     }
//     alert('Tổng chuỗi số bạn vừa nhập là ' + tong);
// }

// BÀI 6 TÌM SỐ NHỎ NHẤT
// {
//     let chuoi = prompt('Nhập vào một dãy số, mỗi số cách nhau bởi dấu phảy');
//     let tachChuoi = chuoi.split(",");
//     console.log(tachChuoi);
//     let min = Number(tachChuoi[0]);
//     for (i = 0; i < tachChuoi.length; i++) {
//         if (min < Number(tachChuoi[i])) {
//             min = min;
//         } else {
//             min = tachChuoi[i];
//         }
//     }
//     alert('Số nhỏ nhất trong chuỗi số bạn vừa nhập là ' + min);
// }

// BÀI 7 TÌM SỐ
// {
//     let daySo = [1, 4, 6, 9, 10, 11, 14, 16, 19];
//     let soNhap = Number(prompt('Hãy nhập một số từ 1 đến 20'));
//     console.log(soNhap);
//     for (let i = 0; i < daySo.length; i++) {
//         if (soNhap == daySo[i]) {
//             alert(soNhap + ' được tìm thấy ở vị trí ' + i);
//         } else {
//             alert('Không tìm thấy số ' + soNhap);
//         }
//     }
// }

// BÀI 8
// Bài 8.1
{
    console.log('Xin chào, đây là kích thước đàn cừu của tôi');
    let danCuu = [5, 9, 160, 60, 86, 211, 25];
    console.log(danCuu);
// Bài 8.2
    let maxCuu = danCuu[0];
    for (i = 0; i < danCuu.length; i++) {
        if (maxCuu > danCuu[i]) {
            maxCuu = maxCuu;
        } else {
            maxCuu = danCuu[i];
        }
    }
    console.log('Con cừu bự nhất là ' + maxCuu);
// Bài 8.3
    danCuu[5] = 8;
    console.log('Đàn cừu còn lại là')
    console.log(danCuu);
// Bài 8.4
    console.log('THÁNG 1');
    for (i = 0; i < danCuu.length; i++) {
        danCuu[i] = danCuu[i] + 50;
    }
    console.log(danCuu);
// Bài 8.5
    console.log('THÁNG 2');
    for (i = 0; i < danCuu.length; i++) {
        danCuu[i] = danCuu[i] + 50;
    }
    console.log(danCuu);
// Bài 8.6
    console.log('Bán cừu');
    let canNang = 0;
    for (i = 0; i < danCuu.length; i++) {
        canNang = canNang + danCuu[i];
    }
    console.log('Tổng khối lượng thịt cừu ' + canNang);
    console.log('Tổng tiền bán được ' + canNang*25);
}



// BÀI 10
// {
//     let chuoiTen = prompt('Nhập vào một chuỗi tên, phân cách bởi dấy phẩy').split(',');
//     let chuoiMoi = [];
//     for (i = 0; i < chuoiTen.length; i++) {
//         chuoiMoi.push('<' + chuoiTen[i] + '>');
//         console.log(chuoiMoi);
//     }
// }


// BÀI 11
// {
//     let daySo = prompt('Nhập vào một dãy số, phân cách bởi dấy phẩy').split(',');
//     let dayLe = [];
//     for (i = 0; i < daySo.length; i++) {
//         if (daySo[i] % 2 == 1) {
//             dayLe.push(daySo[i]);
//         }
//     }
//     console.log(dayLe);
// }

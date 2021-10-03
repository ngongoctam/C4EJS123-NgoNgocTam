// Session 2 Home Work

// BÀI 1
// Câu 1: VAR và CONST trong JavaScript
// => Tương tự như như LET, VAR và CONST là 2 keyword dùng để khai báo biến trong JS

// Câu 2: Khác nhau giữa let và var:
// => let tạo ra biến chỉ có thể truy cập trong block đó
// => var tạo ra biến có phạm vi truy cập trong toàn bộ function

// Câu 3: Khác nhau giữa let và const:
// => biến được khai báo bởi let có thể thay đổi
// => biến được khai báo bởi const là hằng số và không thay đổi trong suốt quá trình chạy

// Câu 4: Sử dụng trong các trường hợp nào:
// => Dùng var khi cần sử dụng biến trong toàn bộ chương trình (ít dùng)
// => Dùng let khi cần sử dụng biến trong cục bộ (ưu tiên dùng)
// => Dùng const khi cần định nghĩa hằng số

// BÀI 2
// Câu 1: Boolean là một kiểu dữ liệu
// Câu 2: Kết quả của Boolean là True hoặc False

// BÀI 3
// Câu a
{
    for (let x = 0; x < 7; x++) {
        console.log(x);
    }
}


// Câu b
{
    let n = prompt('Nhập vào một số:');
    for (let x = 0; x < n; x++) {
        console.log(x);
    }
}

// Câu c
{
    let n = prompt('Nhập vào một số lớn hơn 3:');
    for (let x = 3; x < n; x++) {
        console.log(x);
    }
}

// Câu d
{
    let c = prompt('Nhập vào số c:');
    let n = prompt('Nhập vào số n:');
    for (let x = c; x < n; x++) {
        console.log(x);
    }
}

// Câu e
{
    let c = Number(prompt('Nhập vào số c'));
    let n = Number(prompt('Nhập vào số n'));
    for (let x = c; x < n; x+=3) {
        console.log(x);
    }
}

// Câu f
{
    let c = Number(prompt('Nhập vào số c'));
    let n = Number(prompt('Nhập vào số n'));
    let s = Number(prompt('Nhập bước nhảy s'));
    for (let x = c; x < n; x+=s) {
        console.log(x);
    }
}

// BÀI 4
{
    let n = prompt('Nhập vào số n cần tính giai thừa');
    let giaiThua = 1;
    for (let x = 1; x <= n; x++) {
        giaiThua*=x;
    }
    alert(`${n} giai thừa có kết quả là ${giaiThua}`);
}

// BÀI 5
{
    let age = prompt('Bạn bao nhiêu tuổi?');
    if (age < 14) {
        alert('Bạn chưa đủ 14 tuổi để xem nội dung này.');
    } else {
        alert('Ok, let go!');
    }
}

// BÀI 6
{
    let x = prompt('Hãy nhập một số trong khoảng 0 - 9');
    if (x < 9/2) {
        alert('Số bạn nhập thuộc NỬA DƯỚI trong đoạn 0 - 9');
    } else {
        alert('Số bạn nhập thuộc NỬA TRÊN trong đoạn 0 - 9');
    }
}

// BÀI 7
{
    let n = prompt('Hãy nhập một số bất kỳ');
    let x = prompt('Hãy nhập một số trong đoạn từ 0 đến ' + n);
    if (x < n/2) {
        alert(`Số bạn nhập thuộc NỬA DƯỚI trong đoạn 0 - ${n}`);
    } else {
        alert(`Số bạn nhập thuộc NỬA TRÊN trong đoạn 0 - ${n}`);
    }
}

// BÀI 8
{
    let x = prompt('Hãy nhập một số bất kỳ');
    if (x % 2 == 0) {
        alert(`${x} là một số CHẴN`);
    } else {
        alert(`${x} là một số LẺ`);
    }
}

// BÀI 9
// Câu a
{
    for (let x = 1; x <= 6; x++) {
        if (x <= 6/2) {
            console.log('L');
        } else {
            console.log('H');
        }
    }
}

// Câu b
{
    let n = prompt('Nhập vào số n bất kỳ');
    for (let x = 1; x <= n; x++) {
        if (x <= n/2) {
            console.log('L');
        } else {
            console.log('H');
        }
    }
}

// Câu c
{
    for (let x = 1; x <= 8; x++) {
        if (x % 2 == 0) {
            console.log('1');
        } else {
            console.log('0');
        }
    }
}

// Câu d
{
    let n = prompt('Nhập số n');
    for (let x = 1; x <= n; x++) {
        if (x % 2 == 0) {
            console.log('1');
        } else {
            console.log('0');
        }
    }
}

// BÀI 10
{
    let canNang = prompt('Nhập cân nặng của bạn (kg):');
    let chieuCao = prompt('Nhập chiều cao của bạn (cm):');
    let bmi = canNang * 100 * 100 / chieuCao / chieuCao;
    console.log(bmi);
    if (bmi < 16) {
        alert('Thiếu cân nghiêm trọng');
    } else if (bmi < 18.5) {
        alert('Thiếu cân');
    } else if (bmi < 25) {
        alert('Bình thường');
    } else if (bmi < 30) {
        alert('Thừa cân');
    } else {
        alert('Béo phì');
    }
}
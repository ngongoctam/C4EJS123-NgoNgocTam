// BÀI 1.1
// alert(Math.round(Math.random()*100)/100);

// BÀI 1.2
// let ranArr = [2, 5, 6, 9, 10, 16, 21, 29, 44, 60];
// let viTri = Math.floor(Math.random()*ranArr.length);
// alert(`${ranArr[viTri]}`);

// BÀI 1.3
// let cauDo = [
//     {
//         cauHoi: 'Hệ mặt trời có bao nhiêu hành tinh?',
//         dapAn: [
//             'A. 8 hành tinh',
//             'B. 9 hành tinh',
//             'C. 10 hành tinh',
//             'D. 11 hành tinh',
//         ],
//         ketQua: 'B',
//     },
//     {
//         cauHoi: 'Hành tinh nào gần Mặt trời nhất?',
//         dapAn: [
//             'A. Sao Thủy',
//             'B. Sao Thổ',
//             'C. Sao Kim',
//             'D. Trái Đất',      
//         ],
//         ketQua: 'A',
//     },
//     {
//         cauHoi: 'Hành tinh nào nóng nhất trong hệ Mặt trời?',
//         dapAn: [
//             'A. Sao Thủy',
//             'B. Sao Hỏa',
//             'C. Sao Kim',
//             'D. Sao Thổ',
//         ],
//         ketQua: 'C',
//     },
//     {
//         cauHoi: 'Hệ Mặt trời bao nhiêu tuổi?',
//         dapAn: [
//             'A. 3,6 tỷ năm',
//             'B. 4,6 tỷ năm',
//             'C. 5,6 tỷ năm',
//             'D. 6,6 tỷ năm',
//         ],
//         ketQua: 'B',
//     },
// ]

// BÀI 1.4
// let cauHoi = Math.floor(Math.random()*cauDo.length);
// let traLoi = prompt(`${cauDo[cauHoi].cauHoi}\n${cauDo[cauHoi].dapAn[0]}\n${cauDo[cauHoi].dapAn[1]}\n${cauDo[cauHoi].dapAn[2]}\n${cauDo[cauHoi].dapAn[3]}`);

// BÀI 1.5
// traLoi = traLoi.toUpperCase();
// if (traLoi == cauDo[cauHoi].ketQua) {
//     alert('Câu trả lời chính xác');
// } else {
//     alert('Sai rồi');
// };

// BÀI 1.6, 1.7, 1.8
// let onlyOne = [];
// let item;
// let diemSo = 0;
// for (let i = 1; i < cauDo.length; i++) {
//     let cauHoi = Math.floor(Math.random()*cauDo.length);

//     for (item of onlyOne) {
//         if (cauHoi == item) {
//             let cauHoi = Math.floor(Math.random()*cauDo.length);
//             i++;
//         } else {
//             onlyOne.push(cauHoi);
//         }
//     }

//     let traLoi = prompt(`${cauDo[cauHoi].cauHoi}\n${cauDo[cauHoi].dapAn[0]}\n${cauDo[cauHoi].dapAn[1]}\n${cauDo[cauHoi].dapAn[2]}\n${cauDo[cauHoi].dapAn[3]}`);

//     traLoi = traLoi.toUpperCase();
//     if (traLoi == cauDo[cauHoi].ketQua) {
//         diemSo++;
//     }
// };
// alert(`Bạn đã trả lời đúng ${diemSo}/${cauDo.length}`);

// BÀI 2.1
// let list = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team'];
// let dem = {};
// for (let item of list) {
//     if (dem[item]) {
//         dem[item]++;
//     } else {
//         dem[item] = 1;
//     }       
// }
// console.log(dem);

// BÀI 2.2
let inventory = [
    {
        name: 'HP Envy 13aq',
        price: 21000,
        brand: 'HP',
        quantity: 5,
    },
    {
        name: 'Dell XPS 9370',
        price: 30000,
        brand: 'Dell',
        quantity: 1,
    },
    {
        name: 'Dell Inspiron 3567',
        price: 9300,
        brand: 'Dell',
        quantity: 12,
    },
    {
        name: 'Dell Latitude E5450',
        price: 8600,
        brand: 'Dell',
        quantity: 2,
    },
    {
        name: 'Asus Zenbook',
        brand: 'Asus',
        price: 20000,
        quantity: 4,
    },
    {
        name: 'HP Pavilion',
        brand: 'HP',
        price: 14000,
        quantity: 7,
    },
]

// BÀI 2.3
let inventoryByBrand = {
    'HP': [],
    'Dell': [],
    'Asus': []
}

for (let i = 0; i < inventory.length; i++) {
    let sanpham = inventory[i];
    let thuongHieu = inventory[i].brand;
    inventoryByBrand[thuongHieu].push(inventory[i]);
}
console.log(inventoryByBrand);
// Đang tìm cách tự động hóa chỗ tự chạy brand cho inventoryByBrand

// BÀI 2.4, 2.5, 2.6, 2.7
let xemThuongHieu = prompt('Bạn muốn xem số lượng của thương hiệu nào? (HP, Dell or Asus)');

let listName = inventoryByBrand[xemThuongHieu];
console.log(listName);
let tenMay =[];
let tien;
let tongTien = 0;
for (let i = 0; i < listName.length; i++) {
    tenMay.push(listName[i].name);
    tien = listName[i].price * listName[i].quantity;
    tongTien = tongTien + tien;
}

console.log(tongTien);
// console.log(tenMay);


alert(`Có ${inventoryByBrand[xemThuongHieu].length} sản phẩm mang thương hiệu ${xemThuongHieu}:\n${tenMay.join('\n')}\n\nTổng giá trị: ${tongTien.toLocaleString()}`);


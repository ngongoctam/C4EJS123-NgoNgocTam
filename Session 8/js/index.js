// BÀI 1
// let container = document.getElementById('list');
// for(let i = 0; i < 3; i++) {
// container.insertAdjacentHTML('afterend', `<li>${i}</li>`);
// }
// // 1D, 2A, 3C, 4B

// BÀI 2
// function c4e () {
//     alert('Bài tập buổi 8');
// };
// setTimeout(c4e, 4000);
// setInterval(c4e, 4000);

// BÀI 3
// function letInFunc() {
//     let x = 100;
//     console.log(x);
// };
// console.log(x); //x is not defined, tức là giá trị của biến khai báo bởi let không tồn tại ngoài function

// function letInFunc() {
//     var y = 100;
//     console.log(y);
// };
// console.log(y); //y is not defined, tức là giá trị của biến khai báo bởi var không tồn tại ngoài function

// BÀI 4
// let d = document.getElementsByTagName('li');
// console.log(d);
// for (let i = 0; i < d.length; i++) {
//     console.log(d[i]);
// } //cách 1
// for (item of d) {
//     console.log(item);
// } //cách 2

// BÀI 5
// let d = document.getElementsByClassName('singer');
// console.log(d.length);
// console.log(d[1]);
// for (let i = 0; i < d.length; i++) {
//     console.log(d[i]);
// } //cách 1

// for (item of d) {
//     console.log(item);
// } //cách 2

// BÀI 6
// let d = document.getElementById('xoa');
// d.addEventListener('click', () => {
//     d.remove();
// })

// BÀI 7
// let b = document.getElementById('button 1');
// b.addEventListener('click', (e) => {
//     console.log(e.target);
// });
// let c = document.getElementById('button 2');
// c.addEventListener('click', (f) => {
//     console.log(f.target);
// });
// let d = document.addEventListener('keydown', (g) => {
//     console.log(g.key);
// });

//BÀI 8
// function hiTam() {
//     alert('Ngô Ngọc Tâm Mua siêu xe 11 tỷ');
// }
// hiTam();

//BÀI 9
// function hi(name, wish) {
//     alert(`${name} ${wish}`);
// }
// hi('Ngô Ngọc Tâm', 'Ước gì?')

//BÀI 10
// function hi(name, wish) {
//     alert(`${name} ${wish}`);
// }
// let ten = prompt('Nhập vào tên của bạn:');
// let dieuUoc = prompt('Bạn muốn ước điều gì?');
// if (dieuUoc == "") {
//     alert(`${ten} chưa ước gì`);
// } else {
//     hi(ten, dieuUoc);
// };

//BÀI 11
// let v = document.getElementById('upper');
// console.log(v);
// v.addEventListener('click', (c) => {
//     console.log(c.target);
//     let userName = document.getElementById('nameInput').value;
//     console.log(userName);
//     userName = String(userName).toUpperCase();
//     console.log(userName);
//     let r = document.getElementById('result');
//     console.log(r);
//     r.textContent = String(userName);
// })

//BÀI 12
let item = ["Ba lô", "Đồng hồ", "Nhẫn"];
console.log(item);

let list = document.getElementById('item_list_ul');
console.log(list);

for (let i = 0; i < item.length; i++) {
    list.insertAdjacentHTML('beforeend', `
    <li>${item[i]}</li>
    `)
}
console.log(list);

let xoa = document.getElementsByName('Test Item 1')
xoa.remove();
// for (let i = 0; i < 2; i++) {
//     list[i].remove();
// }


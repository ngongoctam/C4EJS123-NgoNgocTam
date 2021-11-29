// BÀI A1
let data = ["BINH", "HUNG", "PHUOC", "CAO", "KHANH"];
let maxLength = 0;

for (i = 0; i < data.length; i++) {
    if (data[i].length >= maxLength) {
        maxLength = data[i].length
    }    
}

let ketQua = [];
for (i = 0; i < data.length; i++) {
    if (data[i].length == maxLength) {
        ketQua.push(`${data[i]}`);
    }
}
console.log(ketQua);

// BÀI A2
let wAll = [60, 40, 55, 75, 64];
let wTeam1 = 0;
let wTeam2 = 0;
for (i = 0; i < wAll.length; i++) {
    if (i % 2 == 0) {
        wTeam1 = wTeam1 + wAll[i];
    } else {
        wTeam2 = wTeam2 + wAll[i];
    }
}
let canNang = [wTeam1, wTeam2];
console.log(canNang);

// BÀI B
let genNew = document.getElementById('genNew');
let setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
}
  
  genNew.addEventListener('click', setBg);
  setBg();


//Copy mã màu
let copyText = document.getElementById('copyBtn');
copyText.addEventListener('click', () => {
    let hexColor = document.getElementById('color');
    hexColor.select();
    navigator.clipboard.writeText(hexColor.value);
    alert(`Copied the text: ${hexColor.value}`);
})

let numbersArray = [];

// Nhập số n
let inputN = document.getElementById("inputN");
let btnAddNumber = document.getElementById("btnAddNumber");
let outputNumber = document.getElementById("OutputNumber");

// Tính tổng số dương
let btnTinhTong = document.getElementById("btnTinhTong");
let tongSoDuong = document.getElementById("tongSoDuong");

// Hiển thị số nguyên dương
let btnSoDuong = document.getElementById("btnDemSo");
let demSoDuong = document.getElementById("demSoDuong");

btnAddNumber.addEventListener("click", () => {
  let n = parseInt(inputN.value);

  if (!isNaN(n)) {
    numbersArray.push(n);
    outputNumber.textContent += `${n}; `;
  } else {
    outputNumber.innerHTML = "Giá trị không hợp lệ, nhập lại";
  }
});

// Hàm tính tổng số dương
function tinhTongSoDuong(array) {
  return array.reduce((sum, n) => {
    return n > 0 ? sum + n : sum;
  }, 0);
}
// Nút in ra màn hình tổng số dương
btnTinhTong.addEventListener("click", () => {
  const sumOfPositive = tinhTongSoDuong(numbersArray);
  console.log(sumOfPositive);
  tongSoDuong.innerHTML = `Tổng số dương là: ${sumOfPositive}`;
});

// Hàm lọc số nguyên dương
function positiveNumbers(array) {
  return array.filter((n) => n > 0);
}
// Nút in ra màn hình các số dương
btnSoDuong.addEventListener("click", () => {
  const soDuong = positiveNumbers(numbersArray);
  demSoDuong.innerHTML = `Số nguyên dương là: ${soDuong} `;
});

// Tìm số nhỏ nhất
let btnSoNN = document.getElementById("btnSoNN");
let soNN = document.getElementById("soNN");

function soNhoNhat(array) {
  if (array.length === 0) {
    return "Mảng rỗng xin mời nhập số vào mảng";
  }
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}
// Nút in ra số nhỏ nhất
btnSoNN.addEventListener("click", () => {
  const minNumber = soNhoNhat(numbersArray);
  soNN.innerHTML = `Số nhỏ nhất là: ${minNumber}`;
});

// Tìm số dương nhỏ nhất

let btnSoDuongNN = document.getElementById("btnSoDuongNN");
let soDuongNN = document.getElementById("soDuongNN");

function soDuongNhoNhat(array) {
  const positiveArray = positiveNumbers(array);
  if (positiveArray === 0) {
    return "Không có số nguyên dương trong mảng.";
  }
  let min = positiveArray[0];
  for (let i = 1; i < positiveArray.length; i++) {
    if (positiveArray[i] < min) {
      min = positiveArray;
    }
    return min;
  }
}

btnSoDuongNN.addEventListener("click", () => {
  const minNumber = soDuongNhoNhat(numbersArray);
  soDuongNN.innerHTML = `Số dương nhỏ nhất: ${minNumber}`;
});

// Tìm số chẵn cuối cùng
let btnSoChanCC = document.getElementById("btnSoChanCC")
let soChanCC = document.getElementById("soChanCC")

function timSoChanCuoiCung(array){
  for( let i = array.length - 1; i >= 0; i--){
    if(i%2==0){
      return array[i]
    }
  }
}

btnSoChanCC.addEventListener("click", ()=>{
  const soCCC = timSoChanCuoiCung(numbersArray)
  soChanCC.innerHTML = `Số chẵn cuối cùng: ${soCCC}`
})

// Đổi vị trí 2 phần tử trong mảng
let vitri1 = document.getElementById("vitri1")
let vitri2 = document.getElementById("vitri2")
let btnSwap = document.getElementById("btnSwap")
let swapp = document.getElementById("swapp")

function checkSwap(array, VT1, VT2){
  if(VT1 >=0 && VT1 < array.length && VT2 >= 0 && VT2 < array.length){
    [array[VT1], array[VT2]] = [array[VT2], array[VT1]]
    return array;
  }else{
    throw new Error ("Nhập số chỉ định trong mảng")
  }
}
btnSwap.addEventListener("click", () => {
  let index1 = vitri1.value;
  let index2 = vitri2.value;
  let result = checkSwap(numbersArray, index1, index2)

  try {
    swapp.innerHTML = `Sau khi đổi vị trí: ${result}`
  } catch (error) {
    swapp.innerHTML = `Lỗi: ${error.message}`
  }
})

// sắp xếp giá trị tăng dần

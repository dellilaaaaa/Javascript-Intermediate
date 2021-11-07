// // let angka = [1, 4, 6, 7];
// let angka2 = [1, 2, 3];
// let angka = [7, 4, 2, 1];
// function oke(yahh) {
//   for (let i = 0; i < yahh.length; i++) {
//     angka2.reverse(yahh[i]);
//   }
//   return angka2;

// //   for (let i = 0; i < yahh.length; i++) {
// //     angka.reverse(yahh[i]);
// //   }
// //   return angka;
// }
// // console.log(oke([1,2,3]));
// // console.log(oke([7,4,2,1]));
// // console.log(oke([angka]));
// console.log(oke([angka2]));

let arr = [1, 4, 6, 7];
let arr2 = [7, 4, 2, 1];
let arr3 = [5];

function dataArray(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}
console.log(dataArray(arr));
console.log(dataArray(arr2));
console.log(dataArray(arr3));

// let bla = [5, 2, 4];
// let bli = [];
// function coba(haha) {
//   for (let i = bla.length - 1; i >= 0; i--) {
//     bli.push(haha[i]);
//   }
//   return bli;
// }
// console.log(coba(bla));

let angka = [8, 3, 9, 2, 5];
let angka2 = [1, 1, 1, 1, 1];
let angka3 = [0, 0, 0];
let angka4 = [5, 7];
let angka5 = [8];

function dataAngka(angka) {
  let newAngka = 0;
  for (let i = 0; i < angka.length; i++) {
    newAngka += angka[i];
  }
  return newAngka;
}
console.log(dataAngka(angka));
console.log(dataAngka(angka2));
console.log(dataAngka(angka3));
console.log(dataAngka(angka4));
console.log(dataAngka(angka5));

// let num = [8, 3, 9, 2, 5];
// function linear(yahh) {
//   let hasil = 0;
//   for (let i = 0; i < yahh.length; i++) {
//     num.find((data) => data > 2 && data < 4);
//   }
//   return hasil;
// }
// console.log(linear(num));

let num = [8, 3, 9, 2, 5];

for (let i = 0; i < num.length; i++) {
  if (num[i] > 2 && num[i] < 4) {
    console.log(num[i]);
  }
}
let num2 = [2 ,6 ,7 ,2 ,1]
let hasil = num2.find(data => data > 2 && data < 4)
console.log(hasil)

// let ha = [1,2]
// let hi = []
// for (let i = ha.length - 1; i >= 0; i--){
//   hi.push(ha[i])
// }
// console.log(hi)
let cari1 = [8, 3, 9, 2, 5];
let cari2 = [3, 4, 6, 7, 9];
let cari3 = [4, 5, 9, 15, 19];
let cari4 = [2, 4, 7, 8, 1];

function cariFizz(dataFizz) {
  for (let i = 0; i < dataFizz.length; i++) {
    if (dataFizz[i] % 3 === 0) {
      dataFizz[i] = "fizz";
    } else if (dataFizz[i] % 5 === 0) {
      dataFizz[i] = "buzz";
    } else if (dataFizz[i] % 15 === 0) {
      dataFizz[i] = "fizzbuzz";
    }
  }
  return dataFizz;
}
console.log(cariFizz(cari1));
console.log(cariFizz(cari2));
console.log(cariFizz(cari3));
console.log(cariFizz(cari4));

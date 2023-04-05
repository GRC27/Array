//no 1
let array2 = [5, 2, 4, 1, 3, 5];
array2.sort();
console.log(array2);
console.log(" ");

//no 2
let array3 = [
  "Selamat",
  "anda",
  "melakukan",
  "perulangan",
  "array",
  "dengan",
  "for",
];
for (let element of array3) {
  console.log(element);
}
console.log(" ");

//no 3
let array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let genap = [];
let ganjil = [];
for (var i = 0; i < array4.length; i++) {
  if (array4[i] % 2 == 0) {
    genap.push(array4[i]);
  } else {
    ganjil.push(array4[i]);
  }
}
console.log(genap);
console.log(" ");

//no 4
let kalimat = ["Saya", "sangat", "senang", "belajar", "javascript"];
let join = kalimat.join(" ");
console.log(join);
console.log(" ");

//no 5
var sayuran = [];
let sayur = [
  "Kangkung",
  "Bayam",
  "Buncis",
  "Kubis",
  "Timun",
  "Seledri",
  "Tauge",
];
sayuran.push(sayur);
console.log(sayuran);

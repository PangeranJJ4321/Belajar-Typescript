"use strict";
let saya = 'Pangeran Juhrifar Jafar';
let username = 123;
let ekyyku;
// ekyyku = 'Resky Auliyah kartini askin';
ekyyku = 1;
let kita = ['pangeran', 'ekyykuu']; // yidak boleh tipe data lain, tidak terbatas
let numbers; // tuple, jumlah elemen tetap, artinya disini cuman 3
numbers = ['1', 2, true];
// Mixed Array
/* Jika kamu ingin membuat array yang mengizinkan tipe campuran tertentu: */
let mixed = ['hello', 123, 'world', true]; // bisa kedua tipe itu, tidak terbatas
let tupleData = ['Resky Auliyah Kartini Askin', 19, true];
let people = [
    { nama: 'Ekyykuu', age: 19, isActive: true },
    { nama: 'Pangeran', age: 19, isActive: true },
];
let ekyykuuu = {
    names: ['Ekyy', 'Resky Auliyah Kartini Askin', 'cintakuu', 'sayangkuu', 'munyunkuuu', 'cantikkuu', 'bidadarikuu'],
    age: 19,
    personality: 'Penyayang, ceria, munyun, perhatian',
    favoriteThings: ['vanila', 'hujan', 'belajar', 'senyum'],
    isSpecial: true,
};
let munyunnku = {
    names: ['Eky Resky Auliyah Kartini Askin', 'cintakuu', 'sayangkuu', 'munyunkuuu'],
    age: 20,
    personality: 'Penyayang, ceria, dan perhatian',
    favoriteThings: ['kopi', 'hujan', 'buku', 'musik'],
    isSpecial: true,
};
//   console.log(`Aku memanggilnya: ${munyunnku.names[1]} ❤️❤️❤️😘`);
//   function
function create() {
    return 12;
}
//  arrw function
const create2 = () => 'Helo ekyykuu';
console.log(create());
console.log(create2());
// function berparameter
function add(a, b) {
    return a + b;
}
function min(a, b) {
    return `hailsnya ${a - b}`;
}
const hasil1 = min(23, 6);
console.log(hasil1);
const hasil = add(12, 3);
console.log(hasil);
let sayaManusia;
sayaManusia = 'Pangeran Juhrifar Jafar';
console.log(sayaManusia);
const createIntel = (prosesscor) => console.log('berhasil membuat prosesscor ' + prosesscor.brand + ' ' + prosesscor.baseModel);
const CoreI5 = {
    brand: "intel",
    baseModel: 'core I5',
    modelName: 'i5011359F',
    clockSize: 2,
    turboBoost: true // kalau amb maka ini diubah jadi precisionBoosts
};
const Ryzen7 = {
    brand: "AMD",
    baseModel: "Ryzen 7",
    modelName: "5800X",
    clockSize: 4,
    precisionBoost: false
};
const Ryzen9 = {
    brand: "AMD",
    baseModel: "Ryzen 9",
    modelName: "7950X",
    clockSize: 4,
    // presicion nggak ada
};
createIntel(CoreI5);
createIntel(Ryzen7);
createIntel(Ryzen9);

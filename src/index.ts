
let saya: string = 'Pangeran Juhrifar Jafar';

let username : number = 123;

let ekyyku: string | number;

// ekyyku = 'Resky Auliyah kartini askin';
ekyyku = 1;

let kita : String[] = ['pangeran', 'ekyykuu']; // yidak boleh tipe data lain, tidak terbatas

let numbers : [string, number, boolean]; // tuple, jumlah elemen tetap, artinya disini cuman 3
numbers = ['1', 2, true];

// Mixed Array
/* Jika kamu ingin membuat array yang mengizinkan tipe campuran tertentu: */
let mixed: (string | number | boolean)[] = ['hello', 123, 'world', true]; // bisa kedua tipe itu, tidak terbatas

// tuple cuatome
/* Jika kamu ingin tuple dengan struktur tertentu:*/

type CustomeTuple = [string, number, boolean];
let tupleData: CustomeTuple = ['Resky Auliyah Kartini Askin', 19, true];

// Menggunakan interface
/* interface memungkinkan kamu mendefinisikan tipe yang lebih kaya, terutama untuk objek. Tapi, bisa juga digunakan untuk struktur array. */

interface MixedObject {
    nama  : string;
    age : number;
    isActive : boolean;
}

let people: MixedObject[] = [
    {nama : 'Ekyykuu', age: 19, isActive: true},
    {nama : 'Pangeran', age: 19, isActive: true},
];

/*MixedObject adalah tipe custom untuk objek di dalam array.
people adalah array yang hanya boleh berisi objek dengan struktur MixedObject. */

// contoh, aku ingin mendeskripsikan misal ekyykuu kayak gimana

// Menggunakn Type

type Ekyykuu = {
    names : string[];
    age : number;
    personality : string;
    favoriteThings : string[];
    isSpecial : boolean;
};

let ekyykuuu: Ekyykuu = {
    names: ['Ekyy', 'Resky Auliyah Kartini Askin', 'cintakuu', 'sayangkuu', 'munyunkuuu', 'cantikkuu', 'bidadarikuu'],
    age: 19,
    personality: 'Penyayang, ceria, munyun, perhatian',
    favoriteThings: ['vanila', 'hujan', 'belajar', 'senyum'],
    isSpecial: true,
};



console.log(`Panggilan untuk dia: ${ekyykuuu.names.join(', ')}`);


// Mrnggunakan Interface

interface Munyunkuu {
    names: string[]; // Array berisi berbagai panggilan
    age: number;
    personality: string;
    favoriteThings: string[];
    isSpecial: boolean;
  }
  
  let munyunnku: Munyunkuu = {
    names: ['Eky Resky Auliyah Kartini Askin', 'cintakuu', 'sayangkuu', 'munyunkuuu'],
    age: 20,
    personality: 'Penyayang, ceria, dan perhatian',
    favoriteThings: ['kopi', 'hujan', 'buku', 'musik'],
    isSpecial: true,
  };
  
  console.log(`Aku memanggilnya: ${munyunnku.names[1]} ❤️❤️❤️😘`);
  

  
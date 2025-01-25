
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



// console.log(`Panggilan untuk dia: ${ekyykuuu.names.join(', ')}`);


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
  
//   console.log(`Aku memanggilnya: ${munyunnku.names[1]} ❤️❤️❤️😘`);
  

//   function

function create(): number {
    return 12;
}

//  arrw function

const create2 = ():string => 'Helo ekyykuu';

console.log(create());
console.log(create2());

// function berparameter

function add(a:number, b:number): number {
    return a + b;
    
}

function min(a:number, b:number): string {
    return `hailsnya ${a - b}`;
    
}

const hasil1 = min(23, 6);
console.log(hasil1);

const hasil = add(12, 3);
console.log(hasil);


// Type
type Wanita = string;
type Pria = boolean;

type Gender = Wanita | Pria;

let sayaManusia: Gender;
sayaManusia = 'Pangeran Juhrifar Jafar';

console.log(sayaManusia);


// interface, atau hal yang ingin kita gambarkan bukan type
// kayak ekyykuu kayak apa, pinter rajin tidur dan lain lain
type Core = 2 | 4 | 6 | 8 | 'dual core'; // pecah juga ini juga nggak pa apa
// yang diatas itu union, kalau pakai & maka dia harus keduanya intersection
interface IsProsessor {
    brand: string;
    baseModel: string;
    modelName: string;
    clockSize: Core; // nah ini jika ingin lebih spesifik
}
//  kita bisa duplikat


// karena dia sebuah interface maka dia bisa di extends

interface Intel extends IsProsessor {
    turboBoost: boolean;
}

interface AMD extends IsProsessor {
    // amd tidak memeiliki turboBoost, tapi precision
    precisionBoost?: boolean; // kita bisa tambahkan tanda tanya kalau emang nggak ada
}

const createIntel = (prosesscor : Intel | AMD): void => console.log('berhasil membuat prosesscor ' + prosesscor.brand + ' ' + prosesscor.baseModel);

const CoreI5 : Intel = { // langsung kasih typenya aja juga bisa supaya nda bingung
    brand: "intel",
    baseModel: 'core I5',
    modelName: 'i5011359F',
    clockSize: 2, 
    turboBoost: true // kalau amb maka ini diubah jadi precisionBoosts
}

const Ryzen7: AMD = {
    brand: "AMD",
    baseModel: "Ryzen 7",
    modelName: "5800X",
    clockSize: 4,
    precisionBoost: false
};

const Ryzen9: AMD = {
    brand: "AMD",
    baseModel: "Ryzen 9",
    modelName: "7950X",
    clockSize: 4,
    // presicion nggak ada
};

createIntel(CoreI5);
createIntel(Ryzen7);
createIntel(Ryzen9);
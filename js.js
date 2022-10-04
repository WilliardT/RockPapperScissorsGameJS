// let arr = [1,2,3,4,5,6];

// console.log(arr.splice(3,3));

//----

// let user = new Map();

// user.set('name', 'John');
// user.set(19, 'Ivan');
// user.set('age', 19)

// console.log(user.size);

// //--- итератор - проход по словарю map
// let recipeMap = new Map([
//    ['огурец', 500],
//    ['помидор', 350],
//    ['лук', 50],
// ]);

// // перебор по ключам
// for (let vegetables of recipeMap.keys()) {
//    console.log(vegetables);
// }

// // перебор по значениям
// for (let i of recipeMap.values()) {
//    console.log(i);
// }

// // перебор элементов в формате [ключ, значение]
// for (let i of recipeMap) { // тоже самое самое что recipeMap.entries()
//    console.log(i);
// }

//---

// let date = new Date(1970, 9);

// console.log(date.getTime());


// let t1 = Date.now();

// for (let i = 0; i < 5000; i++) {
//    console.log(i);
// }

// let t2 = Date.now();

// console.log(`Код выполнялся: ${t2 - t1} ms`);

//---

// let user = {
//    name: 'Jeneva',
//    age: 32,
//    isAdmin: true,
// }

// let string = JSON.stringify(user);

// console.log(string);


//---

// function pow(x,n) {
//    let result = 1;

//    for (let i = 0; i < n; i++){
//       result *= x;
//    }
//    return console.log(result);
// }

// pow(1,3)

// console.log((Math.pow(3,3)))


// рекурсия

// function powRecurs(x,n) {
//    if (n === 1) {
//       return x;
//    } else {
//       return x * powRecurs(x,n - 1);
//    }
// }

// console.log(powRecurs(3,3))

// ---

// let company = {
//    sales: [{name: 'John', salary: 1000}, {name:'Alice', salary: 600}],
//    development: {
//       sites: [{name: 'Taras', salary: 2000}, {name: 'Alex', salary: 1800}],
//       internals: [{name: 'Jack', salary: 1300}]
//    }
// }

// function sumSalaries(departament) {
//    if (Array.isArray(departament)) { // случай 1
//       return departament.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
//    } else { // случай 2
//       let sum = 0;

//       for (let subdep of Object.values(departament)) { // рекурсивно вызывается для подотделов, суммируя рузультаты
//          sum += sumSalaries(subdep);
//       }
//       return sum;
//    }
// }

// console.log (sumSalaries(company));


// ---

// function factorial (n) {
//    return (n != 1) ? n * factorial (n - 1) : 1;
// }

// console.log(factorial(5));


//---


// let user = {
//    name: 'Pipin',
//    surname: 'Vasilevskyy',

//    get fullName() {
//       return `${this.name} ${this.surname}`;
//    }, 

//    set fullName(value) {
//       [this.name, this.surname] = value.split(" ");
//    }
// };

// user.fullName = "Ann Smith"

// console.log(user.fullName);

// console.log(user);

// ---

// let user = {
//    _name: '',

//    get name() {
//       return this._name
//    },

//    set name(value) {
//       if (value < 4) {
//          console.log('so small');
//          return;
//       } else {
//          this._name = value;
//       }
//    }
// };

// user.name = "Phetek Phillippe";
// console.log(user.name);

// ---

// class User {
//    constructor (name, surname) {
//       this.name = name;
//       this.surname = surname;
//    }

//    sayHi() {
//       console.log(`hi ${this.name} and ${this.surname}`);
//    }
// }

// let john = new User ('John', 'Smith');
// console.log(john);

// ----

// function loadScript(src, callback) { // передаем источник
//    let script = document.createElement('script'); // создает элемент на сайте
//    script.src = src; // передается параметр функции
//    script.onload = () => callback(script); //  передается параметр от тега скрипт
//    document.head.appendChild(script); // добавляет загруженный скрипт на штмл страницу
// };

// loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
//    alert (`Здорово, скрипт ${script.src} загрузился`);
//    alert ( _ ); // функция объявленная в звгруженном скрипте
// });

// ---

// function loadScript(scr) {
//    return new Promise(function(resolve, reject){
//       let script = document.createElement('script');
//       script.src = scr;
//       script.onload = () => resolve(script);
//       script.onerror = () => reject(new Error(`Eroror with ${src}`));
//       document.head.appendElement(script);
//    });
// }


// ---

// class Waiter {
//    async wait() {
//       return await Promise.resolve(1);
//    }
// }

// new Waiter()
// .wait()
// .then(console.log();)

// --- ВОПРОС

// async function f() {
//    return 1;
// }

// f().then(alert); // не  возвращает / думаю вернет

// ---

// async function f() {
//    return Promise.resolve(1);
// }

// f().then(alert); // не возвращает / думаю вернет

// ---

// function f(){
//    let promise = new Promise(1);
//    let result = await promise; // не возвращает. ошибка
// }

// --- 

// (async () =>  {
//    let responce = await fetch('/dsfdsf');
//    let user = await responce.json(); // не весь синтаксис
// })

// --- 


//array

const numbers = [0, 3.14, 9.81,37, 100];
const web = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'];

console.log('Numbers: ', numbers);
console.log('Numbers length: ', numbers.length);

console.log('Web: ', web);
console.log('Web length: ', web.length);

const arr =[
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinky'},
    {skills: ['HTML', 'CSS', 'JS', 'React', 'Python']},
]

console.log(arr);

//array constructor
const arr1 = Array();
console.log(arr1);

const arr2 = Array(8).fill('X');
console.log(arr2);

//object
const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    address:{
        street: "Hermetage",
        pobox: "16"
    },
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js',
    ],
    isMarried: true,
    getfullNAme: function(){
        return `${this.firstName} ${this.lastName}`
    },
    'phone number': '+35845+45+464645'
};

console.log(person.getfullNAme());

person.nationality = 'Ethiopian'
person.country = 'Finland'
person.title = 'teacher'
person.skills.push('Meteor')
console.log(person);

//object methods

const copyPerson = Object.assign({}, person); //копирует объект без модификации оригинала
console.log(copyPerson);

const keys= Object.keys(copyPerson);//возврат ключей или свойства объекта ввиде массива
console.log(keys)
const address = Object.keys(copyPerson.address);
console.log(address);

const val = Object.values(copyPerson);// значения объектов
console.log(val);

const entries = Object.entries(copyPerson)//возврат ключей и значений ввиде массива
console.log(entries)

console.log(copyPerson.hasOwnProperty('name'))//проверка на существование ключа
console.log(copyPerson.hasOwnProperty('score'))
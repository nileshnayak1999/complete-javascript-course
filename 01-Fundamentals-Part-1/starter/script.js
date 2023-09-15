let js = 'amazing';
// if(js==='amazing') alert('hiiii');
console.log("test");


let checkBoolean = true;
console.log(checkBoolean);

//typeof is a special operator used to show the data type in JS
console.log(typeof checkBoolean);
console.log(typeof true);
console.log(typeof 99);

//We always need to use single or double quotes for String
console.log(typeof 'nilesh');

//this will print nayak
lastname='nayak'
console.log(lastname);

const firstName='nilesh';
const age = 24;

// to check how concatennation works in JS
const myName = "Hi my name is " + firstName + lastname + 'and my age is ' + age;
console.log(myName);

// new way to concatenate (template literals)
const myNameNew= `Hi my name is ${firstName}${lastname}, and my age is ${age}`;
console.log(myNameNew);

let n ='1'+ 1; // ans is 11
n = n-1;
console.log(n);

//truthsy and falsly values
// 5 falsy values are : 0,'',undefined,null,Nan

// Equality operators == vs ===
// === is strict whereas == is loose , '18' == 18 will give true(== supports type coercion)
if(age ===18);
    console.log('Adult');

const fav = prompt('What is your favourite no');
console.log(fav);

//SWITCH IN JS

const day ='Monday';

switch(day){
    case 'Monday':
        console.log('Today is monday');
        break;
    case 'Tuesday':
    case 'Wednesday':
        console.log('Both Days');
        break;
    default:
        console.log('Not a valid day');
}

//Conditional operator - Ternary operator
 age>= 18 ? console.log(true) : console.log(false);
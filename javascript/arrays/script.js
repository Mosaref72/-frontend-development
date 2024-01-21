

const foods = [
    'pizza',    'hamburger',
    'sushi',    'ice cream',
    'steak',    'pasta',
    'chicken',  'salad',
    'taco',     'sushi roll',
    'sandwich', 'ramen',
    'burrito',  'pancake',
    'lobster',  'soup',
    'curry',    'fruit',
    'cake',     'chocolate'
  ]
  foods.reverse()
// foods.pop()
// foods.splice(7,foods.length-1,"Mosaref")
// for (let i = 0; i < foods.length; i++) {
//     const list = document.querySelector(".liList");
//     const li = document.createElement("li");
//     li.textContent = foods[i];
//     list.appendChild(li)
//     list.style.backgroundColor="#5567";
//     li.style.color="#786"
    
// }


// const value1 = [25,45,34,56,67,87,56,23,78]

// reduce() method accept an initial value
// let newsum = value1.reduce(myfun,200)

// let sum = value1.reduce(myfun)

// console.log(`sum is ${sum}`);

// function myfun(sum,value,arr) {
//     console.log(`sum is ${sum} value is ${value}  and arr is ${arr}`);
//     return sum + value
//     // console.log(arr);
// }

// let somenum = [25,34,54,56,76]

// let newSome = somenum.reduceRight(newfun)
// console.log(newSome);

// function newfun(sum,value,arr){
//     console.log(sum,value,arr);
//     return sum + value
// }




// foods.forEach((v) => {
//     console.log(v);
// })

// let somefood = foods.map((f) => {
//     console.log(f);
// })


// let myarr = "MOSAREF"

// let newarr = Array.from(myarr)

// console.log(newarr);


const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];


const num1 = [1,2,3,4]
const num2 = [5,6,7,8]
const num3 = [9,10,11,12]
const num4 = [13,14,15,16]

const allNumber = [...num1,...num2,...num3,...num4]

// console.log(allNumber);
// allNumber.map((v) => {
//     console.log(v);
// })

allNumber.forEach((v) => {
    console.log(`this is forEach method  ${v*2}`);
})
console.log(allNumber);


console.log("hello M");


// https://www.w3schools.com/js/js_array_iteration.asp



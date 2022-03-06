////////////////////////////********************///////////////////////////////////////

const luis = ["luis"];
const everyone = [
  "haziq",
  "shindy",
  "johan",
  "austin",
  "luis",
  "jhonson",
  "ken",
  "rashdan",
  "waqas",
  "shaun",
];
const large = new Array(1000).fill("steven");

// O(1) CONSTANT TIME
function print_champ(array) {
  console.log(array[0]);
}

// print_champ(everyone);

////////////////////////////********************///////////////////////////////////////

// O(n) LINEAR TIME
function find_champ(array) {
  for (let i = 0; i < array.length; i++) {
    console.log("running");
    if (array[i] === "luis") {
      console.log("found luis");
      //break
    }
  }
}

// find_champ(everyone);

////////////////////////////********************///////////////////////////////////////

// Rule Book
// Rule 1: Worst case,
// Rule 2: Remove Constants,
// Rule 3: Different Terms for Input,
// Rule 4: Drop Non Dominants

// Anything that happens with same indentation, you should add O(a+b)
// Anything that happens with nested indentation, you should multiply O(a*b)

// Right Data Structures + Right Algorithms = Good Programs

// Readable + Scalable = Good Code

// Scalable = Speed + Memory

////////////////////////////********************///////////////////////////////////////

const orders = ["TLMKhaziq", "TLMKshindy", "TLMKjohan", "TLMKaustin"];
const priority_orders = [
  "TLMKluis",
  "TLMKjhonson",
  "TLMKken",
  "TLMKrashdan",
  "TLMKwaqas",
  "TLMKshaun",
];

// O(a+b)
function compress_orders(orders, orders_p) {
  //O(n)
  orders.forEach((order) => {
    console.log(order);
  });

  //O(n)
  orders_p.forEach((order) => {
    console.log(order);
  });
}

// O(a + b) or O(n + m)
// compress_orders(orders, priority_orders);

////////////////////////////********************///////////////////////////////////////

const new_orders = ["TLMK1", "TLMK2", "TLMK3", "TLMK4", "TLMK5"];

// O(n^2) QUADRATIC TIME
function log_all_pairs_of_array(orders) {
  // O(n)
  for (let i = 0; i < orders.length; i++) {
    // O(n)
    for (let j = 0; j < orders.length; j++) {
      console.log(orders[i], orders[j]);
    }
  }
}

// O(n * n)
// log_all_pairs_of_array(new_orders);

////////////////////////////********************///////////////////////////////////////

const new_numbers = [1, 2, 3];

// O(n^2) QUADRATIC TIME
function log_all_numbers_and_then_log_all_pairs_of_array(numbers) {
  console.log("numbers only");

  // O(n)
  for (let k = 0; k < numbers.length; k++) {
    console.log(numbers[k]);
  }

  console.log("sum of each pair");

  // O(n)
  for (let i = 0; i < numbers.length; i++) {
    // O(n)
    for (let j = 0; j < numbers.length; j++) {
      console.log(numbers[i], "+",  numbers[j]);
      console.log(numbers[i] + numbers[j]);
    }
  }
}

// O(n + n * n) -> Rule 4: Drop Non Dominants
// log_all_numbers_and_then_log_all_pairs_of_array(new_numbers);

////////////////////////////********************///////////////////////////////////////

// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

// 2 parameters - arrays - no size limit
// return true or false

const array1 = ['a','b','c','d','x']
const array2 = ['q', 'w', 'z']

function containCommonItemsOn2(arrayA, arrayB) {

    for (let i = 0; i < arrayA.length; i++) {
        for (let j = 0; j < arrayB.length; j++) {
            if (arrayA[i] === arrayB[j]) {
                return true
            }
        }
    }
    return false
}
// Time Complexity O(n^2)
// Space Complexity O(1)
// console.log(containCommonItemsOn2(array1, array2))


function containCommonItemsOn(arrayA, arrayB) {

    let map = {}
    for (let i = 0; i < arrayA.length; i++) {
        map[arrayA[i]] = true
    }

    for (let j = 0; j < arrayB.length; j++) {
        if(map[arrayB[j]]){
            return true
        }
    }
    console.table(map)
    return false
}
// Time Complexity O(n + n)
// Space Complexity O(n)
// console.log(containCommonItemsOn(array1, array2))

function containCommonItemsOnReadble(array1, array2) {
    return array1.some(item => array2.includes(item))
}

console.log(containCommonItemsOnReadble(array1, array2))

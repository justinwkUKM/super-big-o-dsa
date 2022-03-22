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
      console.log(numbers[i], "+", numbers[j]);
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

const array1 = ["a", "b", "c", "d", "x"];
const array2 = ["q", "w", "z"];

function contain_common_items_on_2(arrayA, arrayB) {
  for (let i = 0; i < arrayA.length; i++) {
    for (let j = 0; j < arrayB.length; j++) {
      if (arrayA[i] === arrayB[j]) {
        return true;
      }
    }
  }
  return false;
}
// Time Complexity O(n^2)
// Space Complexity O(1)
// console.log(contain_common_items_on_2(array1, array2))

function contain_common_items_on(arrayA, arrayB) {
  let map = {};
  for (let i = 0; i < arrayA.length; i++) {
    map[arrayA[i]] = true;
  }

  for (let j = 0; j < arrayB.length; j++) {
    if (map[arrayB[j]]) {
      return true;
    }
  }
  console.table(map);
  return false;
}
// Time Complexity O(n + n)
// Space Complexity O(n)
// console.log(contain_common_items_on(array1, array2))

function contain_common_items_on_readble(array1, array2) {
  return array1.some((item) => array2.includes(item));
}

// console.log(contain_common_items_on_readble(array1, array2))

////////////////////////////********************///////////////////////////////////////

function merge_sorted_arrays(array1sorted, array2sorted) {
  const mergedSortedArray = [];
  let array1Item = array1sorted[0];
  let array2Item = array2sorted[0];
  let i = 1;
  let j = 1;

  if (array1sorted.length === 0) {
    return array2sorted;
  }
  if (array2sorted.length === 0) {
    return array1sorted;
  }

  while (array1Item || array2Item) {
    console.log(array1Item, array2Item);
    if (!array2Item || array1Item < array2Item) {
      mergedSortedArray.push(array1Item);
      array1Item = array1sorted[i];
      i++;
    } else {
      mergedSortedArray.push(array2Item);
      array2Item = array2sorted[j];
      j++;
    }
  }

  return mergedSortedArray;
}

// console.log(merge_sorted_arrays([0, 5, 12, 34], [4, 6, 9, 21]));

////////////////////////////********************///////////////////////////////////////

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};

var twoSum2 = function (nums, target) {
  let map = new Map();
  for (var i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
};

var twoSum3 = function (nums, target) {
  let previousValues = {};
  for (var i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    console.log("current number", currentNumber);
    let neededValue = target - currentNumber;
    console.log("neededValue", neededValue);
    const index2 = previousValues[neededValue];
    console.log("index2", index2);
    if (index2 != null) {
      console.log("return index2", index2, i);
      return [index2, i];
    } else {
      console.log("previousValues", previousValues);

      previousValues[currentNumber] = i;
    }
  }
};

// console.log(twoSum3([2, 3, 4], 6));

////////////////////////////********************///////////////////////////////////////

//Given an array find the first recurring item.

const arrayA = [2, 1, 3, 4, 5, 2, 1, 3, 4];
const arrayB = [2, 1, 3, 4, 3, 2, 1, 3, 4];

const map = {};

function recurringDigit(arrayRecurring) {
  let map = {};
  for (let i = 0; i < arrayRecurring.length; i++) {
    const element = arrayRecurring[i];
    // console.log(element);
    const key = element.toString();

    if (map[key]) {
      return element;
    } else {
      map[key] = element;
    }
    // console.log(map);
  }
  return undefined;
}
// O(n)
console.log(recurringDigit([1,2,33,3,33]));

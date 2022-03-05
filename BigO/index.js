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

print_champ(everyone);


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

find_champ(everyone);

////////////////////////////********************///////////////////////////////////////


// Rule Book
// Rule 1: Worst case,
// Rule 2: Remove Constants,
// Rule 3: Different Terms for Input,
// Rule 4: Drop Non Dominants

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
compress_orders(orders, priority_orders);

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
log_all_pairs_of_array(new_orders);

////////////////////////////********************///////////////////////////////////////

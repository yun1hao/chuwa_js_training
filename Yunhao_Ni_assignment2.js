// Problem1
const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];
//function for generate a new array to double.
const double_arr = (arr) => {
  return arr.map(({ quantity, price }) => {
    return { quantity: quantity * 2, price: price * 2 };
  });
};
//console.log(double_arr(itemsObject));

//function for generate a conditional array
const only_arr = (e) => {
  let result = e.filter(({ quantity, price }) => {
    return quantity > 2 && price > 300;
  });
  return result;
};
//console.log(only_arr(itemsObject));

//function for calculate the total value of the items
const total_value = (e) => {
  let value = 0;
  e.forEach(({ quantity, price }) => {
    value += quantity * price;
  });
  return value;
};
//console.log(total_value(itemsObject));

// Problem2
const string =
  " Perhaps The Easiest-to-understand  Case  For Reduce Is  To Return The Sum Of  All The Elements In  An Array ";

//remove all the non-alphabet characters and extra space, also to all lowercase
function remove(str) {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z]/g, " ")
    .trim()
    .split("  ")
    .join(" ");
}
console.log(remove(string));

// Problem3
const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];
const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];
//merge two array.
function merge(first, second) {
  const result = [];
  let index_second;
  first.forEach((item) => {
    const index = second.findIndex((i) => i.uuid === item.uuid);
    //if we have the same uuid
    if (index !== -1) {
      index_second = index;
      result.push({
        uuid: second[index].uuid,
        name: item.name,
        role: second[index].role,
      });
    } else {
      result.push({
        uuid: item.uuid,
        name: item.name,
        role: null,
      });
    }
  });

  second.forEach((_, i) => {
    if (i != index_second) {
      result.push({
        uuid: second[i].uuid,
        name: null,
        role: second[i].role,
      });
    }
  });
  result.sort((a, b) => {
    return a.uuid - b.uuid;
  });
  return result;
}
console.log(merge(first, second));

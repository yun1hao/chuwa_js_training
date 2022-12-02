// Problem1
const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];
//function for generate a new array to double.
let double_arr = itemsObject.map(({ quantity, price }) => {
  return { quantity: quantity * 2, price: price * 2 };
});

//function for generate a conditional array
let only_arr = itemsObject.filter(({ quantity, price }) => {
  return quantity > 2 && price > 300;
});

//function for calculate the total value of the items
let value = 0;
itemsObject.forEach((e) => {
  value += e.price;
});

// Problem2
const string =
  " Perhaps The Easiest-to-understand  Case  For Reduce Is  To Return The Sum Of  All The Elements In  An Array ";

//remove all the non-alphabet characters and extra space, also to all lowercase
function remove(str) {
  let str1 = "";
  let str2 = "";
  let new_arr1 = str.toLowerCase();
  let new_arr2 = new_arr1.split("-");
  new_arr2.forEach((e) => {
    str1 = str1 + e;
  });
  let new_arr3 = str1.split("  ");
  new_arr3.forEach((e) => {
    str2 = str2 + " " + e;
  });
  return str2;
}
//console.log(remove(string));

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

  second.forEach((element, i) => {
    if (i != index_second) {
      result.push({
        uuid: second[i].uuid,
        name: null,
        role: second[i].role,
      });
    }
  });
  return result;
}
let merge_result = merge(first, second);
merge_result.sort((a, b) => {
  return a.uuid - b.uuid;
});
console.log(merge_result);

const creater = (type, context, className) => {
  const element = document.createElement(type);
  element.textContent = context;
  element.className = className;
  return element;
};

//---------------------------problem 1
const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

let tr_list = [];
let each_row = [];
//create 4 <tr> tag
for (let i = 1; i < 5; i++) {
  tr_list.push(creater("tr", "", `r${i}`));
}
//append each <tr> in this table
const table = document.getElementsByClassName("table")[0];
for (let i = 0; i < tableInfo.tableContent.length; i++) {
  table.append(tr_list[i]);
  each_row[i] = document.getElementsByClassName(`r${i + 1}`)[0];
}
//create each <th> tag
const head_title = document.querySelector("#head");
const head = tableInfo.tableHeader.map((e) => {
  return creater("th", e, "");
});

head_title.append(...head);

for (let i = 0; i < tableInfo.tableContent.length; i++) {
  const row = Object.values(tableInfo.tableContent[i]).map((e) => {
    return creater("td", e, "");
  });
  each_row[i].append(...row);
}

//----------------------------------problem 2
const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

const list_items = document.getElementsByClassName("list")[0];
const tag1 = creater("ol", "", "tag1");
const tag2 = creater("ul", "", "tag2");
list_items.append(tag1);
list_items.append(tag2);
const list_follow = list.map((e) => {
  return creater("li", e, "");
});

const list_follow1 = list.map((e) => {
  return creater("li", e, "");
});

tag1.append(...list_follow);
tag2.append(...list_follow1);

//------------------------------------problem 3
const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

const droplist = document.getElementsByClassName("dropdown")[0];
const selecttag = creater("select", "", "selecttag");
droplist.append(selecttag);

for (let i = 0; i < dropDownList.length; i++) {
  const newone = creater("option", dropDownList[i].content, "choose");
  newone.value = dropDownList[i].value;
  selecttag.append(newone);
}

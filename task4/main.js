console.log("1 Задание");
const pos = [[11, 34], [1, 7], [191, 15], [63, 18]];
let sum = 0;

for (let item of pos)
{
    console.log("--------");
    for (let num of item)
    {
        console.log(`num: ${num}`);
        sum += num;
    }
}
console.log("--------");
console.log(`sum:${sum}`);

console.log("2 Задание");

const chars = [   
    {name: "Kazuma", class:"thief"}, 
    {name: "Aqua", class:"goddess"},
    {name: "Megumin", class:"fire mage"},
    {name: "Darkness", class:"paladin"}
];

for (let character of chars)
{
    console.log(`Name: ${character["name"]}.`);
    character["class"] = "unlucky " + character["class"];
    console.log(`Class: ${character["class"]}`);
    console.log("--------");
}

console.log("3 Задание");

const companies = {
    companyA: {
        companyName: "Company A",
        employees: ["John", "Mary", "Alex"]
    },
    companyB: {
        companyName: "Company B",
        employees: ["Sarah", "Mike", "Emily"]
    },
    companyC: {
        companyName: "Company C",
        employees: ["David", "Anna", "Peter"]
    }
  };
  
  for (let company in companies) {
    console.log(`${company}`);
    for (let employ of companies[company]["employees"])
    {
        console.log(`Name: ${employ}`);
    }
  }



let employee = {
    name: "Karol",
    lastName: "Morgan",
    age: 30,
    city: "Cincy",
    greet: () => console.log("oh hey, ola!"),
    favThings: ["beach", "Cara", "Ice cream", 8],
    languages: {js: "excellent", csharp: "excellent", python:"basic"}
}

// employee.greet();

// console.log(employee.name);
// console.log(employee.favThings[0]);
// console.log(employee.languages.csharp);
// console.log(employee["city"]);

for (const key in employee) {
    console.log(employee[key]);
}

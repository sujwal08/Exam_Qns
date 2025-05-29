const users = [
{ id: 1, name: "Alice", age: 22 },
{ id: 2, name: "Bob", age: 17 },
{ id: 3, name: "Charlie", age: 25 },
{ id: 4, name: "David", age: 15 },
];
// To filter
const adults = users.filter(user => user.age >=18);
console.log("Adults: ", adults);
const charlie = users.find(user => user.name ==="Charlie");
console.log("Charlie: ", charlie);
const upperCaseName = users.map(user => user.name.toUpperCase());
console.log("Uppercase ", upperCaseName);
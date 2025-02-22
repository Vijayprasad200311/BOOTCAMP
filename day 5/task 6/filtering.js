function filterByProperty(arr, property, value) {
    return arr.filter(item => item[property] > value);
}

const users = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 27 }
];

const filteredUsers = filterByProperty(users, "age", 25);
console.log(filteredUsers);
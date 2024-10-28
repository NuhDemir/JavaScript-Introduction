const students = new Map();

students.set(1, "Cahit Eftal");
students.set("434342435457", "Salih Tümen");
students.set(true, "Murat Karlı")

console.log(students.get(1));
console.log(students.get("434342435457"));
console.log(students.get(true));


let conclusion;

conclusion = students.size;
conclusion = students.has(2);
students.delete(1);
conclusion = students.size;
// students.clear();

for (let x of students.keys()) {
    console.log(x);
}

for (let x of students.values()) {
    console.log(x);
}

for (let x of students.entries()) {
    console.log(x);
}

console.log(students);
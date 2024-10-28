function showBasicArray() {
    let numbers = [1, 2, 3, 4, 5];
    document.getElementById("output1").textContent = "Numbers Array: " + numbers;
}

function showLoopArray() {
    let fruits = ["Elma", "Armut", "Muz"];
    let result = "Fruits Array: " + fruits.join(", ");
    document.getElementById("output2").textContent = result;
}

function showPushPopArray() {
    let cities = ["İstanbul", "Ankara", "İzmir"];
    cities.push("Bursa");
    cities.pop();
    document.getElementById("output3").textContent = "Cities Array after push and pop: " + cities;
}

function showMapArray() {
    let numbers = [1, 2, 3, 4, 5];
    let squares = numbers.map(x => x * x);
    document.getElementById("output4").textContent = "Squares of numbers: " + squares;
}

function showFilterArray() {
    let ages = [15, 21, 18, 30, 17];
    let adults = ages.filter(age => age >= 18);
    document.getElementById("output5").textContent = "Filtered Adults (>=18): " + adults;
}

function showReduceArray() {
    let numbers = [1, 2, 3, 4, 5];
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    document.getElementById("output6").textContent = "Sum of numbers: " + sum;
}

function showSortArray() {
    let names = ["Zeynep", "Ali", "Ayşe", "Hakan"];
    names.sort();
    document.getElementById("output7").textContent = "Sorted Names: " + names;
}

function showJoinArray() {
    let words = ["Merhaba", "Dünya"];
    let sentence = words.join(" ");
    document.getElementById("output8").textContent = "Joined Words: " + sentence;
}

function showSpliceArray() {
    let colors = ["Kırmızı", "Mavi", "Yeşil"];
    colors.splice(1, 1, "Sarı");
    document.getElementById("output9").textContent = "Colors Array after splice: " + colors;
}

function showConcatArray() {
    let array1 = [1, 2, 3];
    let array2 = [4, 5, 6];
    let combinedArray = array1.concat(array2);
    document.getElementById("output10").textContent = "Concatenated Array: " + combinedArray;
}

function showBlockBody() {
    const multiplyAndLog = (a, b) => {
        const result = a * b;
        return result;
    };
    document.getElementById("output4").textContent = "3 * 5 = " + multiplyAndLog(3, 5);
}

//filter



const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const tNum = num.map((num) => num % 2 == 1);

console.log(tNum);

const product = [
    { productName: "samsung galaxy s21 FE 5G", price: 21000 },
    { productName: "samsung galaxy s22 FE", price: 22000 },
    { productName: "samsung galaxy A73", price: 17000 },
    { productName: "samsung galaxy A34 5G", price: 10000 },

];

const conclusion = product.map(product => product.productName);

console.log(conclusion);

const conclusionFilter = product.filter(product => product.price > 20000);

console.log(conclusionFilter.map(product => product.productName));

const conclusionIndex = product.find(product => product.price > 12000);

console.log(conclusionIndex);
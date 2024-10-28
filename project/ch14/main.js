   // 1. Array Destructuring
   function arrayDestructuring() {
       let numbers = [1, 2, 3];
       let [a, b, c] = numbers;
       document.getElementById("output1").textContent = `Destructured values: a = ${a}, b = ${b}, c = ${c}`;
   }

   // 2. Default Değerler ile Destructuring
   function defaultValuesDestructuring() {
       let colors = ['Kırmızı', 'Mavi'];
       let [firstColor, secondColor, thirdColor = 'Yeşil'] = colors;
       document.getElementById("output2").textContent = `Colors: ${firstColor}, ${secondColor}, ${thirdColor}`;
   }

   // 3. Nesne Destructuring
   function objectDestructuring() {
       let person = { name: 'Ali', age: 30 };
       let { name, age } = person;
       document.getElementById("output3").textContent = `Name: ${name}, Age: ${age}`;
   }

   // 4. Fonksiyon Parametrelerinde Destructuring
   function display({ name, age }) {
       return `Name: ${name}, Age: ${age}`;
   }

   function functionParameterDestructuring() {
       let person = { name: 'Ayşe', age: 25 };
       let result = display(person);
       document.getElementById("output4").textContent = result;
   }

   // 5. Destructuring ile Array Üzerinde İşlem
   function arrayOperationDestructuring() {
       let numbers = [10, 20, 30];
       let [x, y, z] = numbers;
       let sum = x + y + z;
       document.getElementById("output5").textContent = `Toplam: ${sum}`;
   }

   // 6. Destructuring ile Rest Operatörü
   function restOperatorDestructuring() {
       let numbers = [1, 2, 3, 4, 5];
       let [first, ...rest] = numbers;
       document.getElementById("output6").textContent = `First: ${first}, Rest: ${rest}`;
   }

   // 7. Nested Destructuring
   function nestedDestructuring() {
       let user = { info: { name: 'Zeynep', age: 25 } };
       let { info: { name, age } } = user;
       document.getElementById("output7").textContent = `Name: ${name}, Age: ${age}`;
   }

   // 8. Destructuring ile Array ve Nesne Kombinasyonu
   function combinationDestructuring() {
       let data = { values: [1, 2, 3] };
       let { values: [firstValue, secondValue, thirdValue] } = data;
       document.getElementById("output8").textContent = `Values: ${firstValue}, ${secondValue}, ${thirdValue}`;
   }

   // 9. Destructuring ile Değişken Yeniden Adlandırma
   function renameVariablesDestructuring() {
       let person = { name: 'Ayşe', age: 20 };
       let { name: fullName, age: years } = person;
       document.getElementById("output9").textContent = `Full Name: ${fullName}, Years: ${years}`;
   }

   // 10. Destructuring ile Arrays ve Nesneler Arası İlişki
   function arraysAndObjectsDestructuring() {
       let arr = [{ a: 1 }, { b: 2 }];
       let [{ a }, { b }] = arr;
       document.getElementById("output10").textContent = `Values: a = ${a}, b = ${b}`;
   }
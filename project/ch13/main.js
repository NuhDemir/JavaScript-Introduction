   // Array Kopyalama
   function copyArray() {
       const originalArray = [1, 2, 3, 4, 5];
       const copiedArray = [...originalArray]; // Spread operatörü ile kopyalama
       document.getElementById("output1").textContent = "Orijinal Array: " + originalArray + ", Kopyalanan Array: " + copiedArray;
   }

   // Array Birleştirme
   function mergeArrays() {
       const array1 = [1, 2, 3];
       const array2 = [4, 5, 6];
       const mergedArray = [...array1, ...array2]; // Spread operatörü ile birleştirme
       document.getElementById("output2").textContent = "Birleşik Array: " + mergedArray;
   }

   // Array'e Eleman Ekleme
   function addElement() {
       const numbers = [1, 2, 3];
       const newArray = [...numbers, 4]; // Spread operatörü ile eleman ekleme
       document.getElementById("output3").textContent = "Yeni Array: " + newArray;
   }
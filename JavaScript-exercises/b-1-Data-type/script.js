var num1 = 10;//sayısaş
var st1 = "What is This"//metin
var bool = true;//mantıksal
var emptyVar = null ;
var undefined ;//undefined

//Karmaşık veri türleri
var obj1 = {name: "Stuart Gant", age: 23};//Nesne
var arr2 = [1,2,3,"What is This"];//Dizi
function whatİsThis() {
    console.log("What is This");
}//Fonksiyon

var num2 = parseInt("123"); //Metni sayıya dönüştürür
var str2 = String(num1);// Sayıy metne dönüştürür


//Operator
var sum = num1 + num2;//Toplama
var difference = num1 - num2;
var product = num1 * num2;
var quotient = num1 / product;

//Koşullu ifadeler
if (num1<num2){
    console.log("Number 1, Number 2'den küçüktür. ");
}else {
    console.log("Number 1, Number 2'den büyüktür. ");
}

//Döngüler
var arr1 = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// Döngü değişkenini tanımlama
var i;

// Diziyi döngüden geçme
for (i = 0; i < arr1.length; i++) {

  // Asallık kontrolü
  if (arr1[i] % 2 == 0 && arr1[i] > 2) {
    // Sayı asal değil
    console.log(arr1[i] + " asal sayı değildir.");
  } else if (arr1[i] == 2) {
    // Sayı 2'ye eşit
    console.log(arr1[i] + " asal sayıdır.");
  } else {
    // Sayı asal
    console.log(arr1[i] + " asal sayıdır.");
  }
}



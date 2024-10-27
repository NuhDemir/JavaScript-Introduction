let sonuc;
sonuc = document.getElementById("title");
sonuc=document.getElementById("title").id;
sonuc = document.getElementById("title").className;
sonuc = document.getElementById("title").style.fontFamily="Agdasima";
sonuc = document.querySelector(".card").style.fontFamily="Agdasima";

taskList = document.getElementsByTagName("#task");


for(let task of taskList){
    task.style.color="red";
}
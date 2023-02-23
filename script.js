let example1 =document.querySelector("article");
console.log(example1);

let example2 = document.querySelector("p");
example2.textContent = "Hello world";
example2.style.color = "tomato"
example2.style.fontSize = "20px"
console.log(example2);

let example3 = document.querySelector(".example-3");
example3.textContent = "My name is Nagima";
example3.style.backgroundColor = "yellow"
example3.style.padding = "20px"
console.log(example3);

let example4 = document.querySelector("#example-4");
example4.textContent = example4.textContent + " What is your name?";
example4.style.border = "2px solid red";
console.log(example4);

let example5 = document.querySelector("p:nth-child(4)");
example5.textContent += " Nice to meet you!";
example5.style.border = "2px solid green";
example5.style.borderRadius = " 10px";
example5.style.padding = "20px";
console.log(example5);

let example6 = document.querySelectorAll("article p");
for (let i =0; i< example6.length; i ++) {
  let paragraph = example6[i];
  paragraph.textContent += " 😉";
}
// создать элемент заполнить его и привязать его в конце определенного элемента apend athe end prepend at the beginning

let example7 = document.createElement("p"); 
example7.textContent = "Lorem ipsum";
document.body.append(example7);

example1.append(example7);

let example8 = document.createElement("ul");
example8.className =" example-8";
document.body.append(example8);
for( let i =1; i <=10; i ++) {
  let listItem = document.createElement("li");
  listItem.textContent = "example " + i;
  listItem.style.color = "red";

  example8.append(listItem);
}

let fruits = ["apple", "banana", "orange", "pear"];
let example9 = document.createElement("ul");
document.body.append(example9);
for (let i = 0; i < fruits.length; i++) {
  let listEl = document.createElement("li")
  listEl.textContent = fruits[i];

  example9.append(listEl);
}

example9.remove(); // можем добавить в любое время обратно6

example2.style.backgroundColor = "tomato";
example2.style.color = "white";
example3.style.backgroundImage = "url(/comode.JPG)";

example4.style.transform = "rotate(-25deg)";
example4.style.fontSize = "12px";
example4.style.width = "24px";
example4.style.height = "20px";


let example10 = document.createElement("ul"); //step1
document.body.append(example10); //step2
for (let i =1; i <=10; i ++) {
  let listEl = document.createElement("li");
  listEl.textContent = "Lorem" + i;
  example10.append(listEl);
}

//events 
 
let helloBtn = document.querySelector("#hello");
helloBtn.addEventListener("click", function() {
  alert("Hello!");
})

let byeBtn = document.querySelector("#bye");
byeBtn.addEventListener("click", function (){
  alert("Bye!");
})  
let talkBtn = document.querySelector("#talk");
talkBtn.addEventListener("click", function(){
  alert("My name is Alica");
} )

let addParagraph = document.querySelector ("#add-paragraph");
addParagraph.addEventListener("click", function(){
  let article =document.querySelector("article");
  let newParagraph = document.createElement("p");
  newParagraph.textContent = "Facilis consectetur eius accusamus provident, magni inventore illum fugit incidunt et aliquam impedit sit qui alias nam veniam debitis cumque!";
  newParagraph.style.backgroundColor =" yellow";
  article.append(newParagraph);
})



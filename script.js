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
// создать элемент заполнить его и привязать его в конце определенного элемента

let example7 = document.createElement("p");
example7.textContent = "Lorem ipsum";
document.body.append(example7);
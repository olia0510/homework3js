// - створити функцію яка обчислює та повертає площу прямокутника висотою
function plosha (a,d) {
   return a*d;
}
let h = plosha(  5, 15);
console.log(h)

//створити функцію яка обчислює та повертає площу кола
function kolo (r) {
   return 3.14*r**2;
}
let s = kolo(25);
console.log(s)

// створити функцію яка обчислює та повертає площу циліндру
function cilindr (k,h) {
   return 2*3.14*k*(k+h);
}
let s1 = cilindr(k=10, h=5);
console.log(s1)

//створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
 function num (q,w,r,t) {
   let min = arguments[0];
   let max = arguments[0];
   for (let argument of arguments){
      if (argument< min){
         min=argument;
      }
      if (argument> max){
         max=argument;
      }
   }
   console.log(max);
   return min
 }

 const min = num (208, 123,65,589)
console. log(min)

// // створити функцію яка  створює блок з текстом. Текст задати через аргумент
function createDiv (text){
    let div = document.createElement('div')
    div.innerText = text
    document.body.appendChild(div)

}
let text1 = createDiv('Monday');
console.log(text1)

// // створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulli(content) {
    document.write("<ul>");
    let i;
    for (i = 0; i>content; i++){
        document.write(`<li>${content}</li>`);
    }
    document.write("</ul>")
}
ulli('Hallo friend')



// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ulnum(content, count) {
    document.write("<ul>");
    for (let i=0; i<count;i++){
        document.write(`<li>${count}</li>`);
    }
    document.write("</ul>")
}
ulnum('Hallo friends',3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// ???
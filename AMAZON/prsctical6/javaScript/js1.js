/*console.log("hell");
console.log("2+7"); // print 2+7
console.log('2+7'); // print 2+7
console.log(7-8); // print -1

document.write("i am good"); 
document.write(6+5);

document.getElementById(one)*/

//document.querySelector("h1").innerHTML="hop";
/* var a = document.querySelector("h1")
 a.innerHTML="Changed";
 console.log(a);
 var b = document.querySelector("h2")
 b.style.color=("red");
 b.style.backgroundColor=("brown")*/

 // sum of two given numbers
 /*var a = 10;
 var b = 9;
 var c = a + b;
 console.log(c);
 // sum of two number enter by user
var a = Number(prompt('enter 1st number:'))
var b = Number(prompt('enter 2nd number'))
var c = a+b;
console.log('The sum of two numbers is:',c)*/
// multiple of two number by user in html output
/*var a = Number(prompt("enter 1st number:"))
var b = Number(prompt("enter 2nd number:"))

document.querySelector(".ans").innerHTML = `${a*b}`   */

/*{
    let a = 10;
    var b = 9;
}
console.log(a)
console.log(b) */

// 4 pillars of DOM
// 1. selection of element
 /*var a = document.querySelector("h1")
console.log(a)*/

 /* 2.Changing HTML
 var a = document.querySelector("h1")
a.innerHTML='changed' */

// 3. Changing CSS
/*var a = document.querySelector("h1")
a.style.color = "red"
a.style.backgroundColor = "blue"
a.addEventListener("click",function(){
  console.log("Hello")
})
/*a.addEventListener("click",function()
{
    a.innerHTML="Balad gya hu mein"
})*/


 /*var a = document.querySelector("h1")
 a.style.color = "green"
 a.style.backgroundColor = "LightBlue"
 a.addEventListener("click",function()
 {
  a.innerHTML="changed"
   //console.log("Changed")
   
 }) */
 var bulb = document.querySelector("#bulb")
 var btn = document.querySelector("button")
 var flag = 0
 btn.addEventListener("click",function(){
  if(flag == 0){
  bulb.style.backgroundColor = "yellow"
  flag = 1
  }
 else{
  bulb.style.backgroundColor = "Transparent"
  flag = 0
 }
})






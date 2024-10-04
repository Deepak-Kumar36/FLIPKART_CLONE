let number1 =  prompt("Enter The Number");
let ans =number1.split(",");

ans.reverse();

console.log(ans);

document.getElementById("output").innerHTML = ans;

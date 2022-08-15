const num1= Math.ceil (Math.random()*10);
const num2= Math.ceil (Math.random()*10);
const formEl= document.getElementById("form");

const questionE1= document.getElementById("question");
const inputEl = document.getElementById("input");

const scoreEl= document.getElementById("score");

let score=JSON.parse(localStorage.getItem("score"));
if(!score)
{
    score=0;
}
questionE1.innerText= `what is ${num1} multiply by ${num2}?`;

scoreEl.innerText= `score:${score}`;

const correctAns= num1*num2 ;
formEl.addEventListener("submit", ()=>{
const userAns= +inputEl.value;

if(userAns===correctAns)
{
    score++;
    updateLocalStorage();
}
else
{
    score--;
    updateLocalStorage();

}



});

 function updateLocalStorage(){

    localStorage.setItem("score", JSON.stringify(score));
 }

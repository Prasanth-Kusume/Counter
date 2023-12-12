let Incbtn=document.getElementById("Inc");
let Decbtn=document.getElementById("Dec");
let Resetbtn=document.getElementById("Reset");
let number=document.getElementById("num");
function Inc() {
    Incbtn.style.backgroundColor="green";
    Decbtn.style.backgroundColor="grey";
    Resetbtn.style.backgroundColor="grey";
    let Countervalue=number.textContent;
    let updatedvalue=parseInt(Countervalue)+1;
    if (updatedvalue >0) {
        number.style.color="skyblue";
    }
    else if (updatedvalue <0) {
        number.style.color="red";
    }
    else {
        number.style.color="white";
    }
    number.textContent=updatedvalue;
}
function Dec() {
    Incbtn.style.backgroundColor="grey";
    Decbtn.style.backgroundColor="pink";
    Resetbtn.style.backgroundColor="grey";
    let Countervalue=number.textContent;
    let updatedvalue=parseInt(Countervalue)-1;
    if (updatedvalue >0) {
        number.style.color="skyblue";
    }
    else if (updatedvalue <0) {
        number.style.color="red";
    }
    else {
        number.style.color="white";
    }
    number.textContent=updatedvalue;
}
function Reset() {
    Incbtn.style.backgroundColor="grey";
    Decbtn.style.backgroundColor="grey";
    Resetbtn.style.backgroundColor="black";
    let Countervalue=number.textContent;
   
    number.textContent=0;
    number.style.color="white";
    Resetbtn.style.color="white";
}
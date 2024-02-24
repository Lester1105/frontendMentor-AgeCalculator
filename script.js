// select outputs
const output_day=document.querySelector(".output-day");
const output_month=document.querySelector(".output-month");
const output_year=document.querySelector(".output-year");
const submit=document.querySelector(".submit");

//select inputs
const input_day=document.querySelector("#day");
const input_month=document.querySelector("#month");
const input_year=document.querySelector("#year");
let isValid=false;

//select errors
const error_day=document.querySelector(".error-days");
const error_month=document.querySelector(".error-month");
const error_year=document.querySelector(".error-year");

//code

input_day.addEventListener("input",(e)=>{
    if(+input_day.value>31){
error_day.textContent="Must be a valid date";
isValid=false;
return;
    }else{
        isValid=true;
        error_day.textContent="";
    }
    if(+input_day.value===0){
        error_day.textContent="This field is required";
        isValid=false;
        return;
    }else{
        error_day.textContent="";
        isValid=true;
    }
});

input_month.addEventListener("input",(e)=>{
    if(+input_month.value>12){
error_month.textContent="Must be a valid date";
isValid=false;
return;
    }else{
        isValid=true;
        error_month.textContent="";
    }
    if(+input_month.value===0){
        error_month.textContent="This field is required";
        isValid=false;
        return;
    }else{
        error_month.textContent="";
        isValid=true;
    }
});

input_year.addEventListener("input",(e)=>{
    if(+input_year.value>2024){
error_year.textContent="Must be a from the past";
isValid=false;
return;
    }else{
        isValid=true;
        error_year.textContent="";
    }
    if(+input_year.value===0){
        error_year.textContent="This field is required";
        isValid=false;
        return;
    }
    else{
        error_year.textContent="";
        isValid=true;
    }
    if(+input_year.value===""){
        error_year.textContent="This field is required";
        isValid=false;
        return;
    }
});

function calculate(){
    if(isValid){
let birthday=`${input_month.value}/${input_day.value}/${input_year.value}`;
console.log(birthday);
let birthdayObj=new Date(birthday);
let ageDiffMill=Date.now() - birthdayObj;
let ageDate=new Date(ageDiffMill);
let ageYear=ageDate.getUTCFullYear()-1970;
let ageMonth=ageDate.getUTCMonth();
let ageDay=ageDate.getUTCDay();

output_day.textContent=ageDay;
output_month.textContent=ageMonth;
output_year.textContent=ageYear;
    }else{
        alert("error");
    }
}
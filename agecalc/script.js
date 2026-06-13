const btn= document.querySelector(".calbtn");
const result=document.querySelector(".result");
const input= document.querySelector("input[type='date']");

btn.addEventListener("click" , () => {
if(input.value === ""){
    alert("enter Date of birth");
    result.innerHTML="enter Date of birth";
    return; //to stop function
}

    const birthDate= new Date(input.value);
    const today = new Date();
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
  if(days<0){ //(JavaScript me January = 0 hota hai.)
    months--;
   
        const previousMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        ).getDate();

        days += previousMonth;
    }

    if(months < 0){
        years--;
        months += 12;
    }

    result.innerHTML =
    `You are <b>${years}</b> years <b>${months}</b> months <b>${days}</b> days old 🎉`;

});

 
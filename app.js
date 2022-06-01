window.addEventListener("load",()=>{
    const contain=document.querySelector(".contain");
    contain.style.opacity="0";
    contain.style.visibility="hidden";
    const hour=document.querySelector(".hour")
    const updateHour=setInterval(() => {
     const date=new Date()
     hour.innerHTML=`${date.getHours()}:${date.getMinutes()}-${date.getFullYear()}`
    }, 1000);
   	updateHour()

})




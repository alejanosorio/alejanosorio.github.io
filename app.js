const hour=document.querySelector(".hour")
const updateHour=setInterval(() => {
 const date=new Date()
 hour.innerHTML=`${date.getHours()}:${date.getMinutes()}-${date.getFullYear()}`
}, 1000);
updateHour()
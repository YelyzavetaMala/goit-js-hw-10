import"./assets/modulepreload-polyfill-ec808ebb.js";import{f as u,i as h}from"./assets/vendor-a71e76b7.js";const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){console.log(e[0]),userSelectedDate<=new Date?(h.error({title:"Error",message:"Please choose a date in the future"}),document.querySelector("[data-start]").disabled=!0):document.querySelector("[data-start]").disabled=!1}};u("#datetime-picker",y);function o(e){return e.toString().padStart(2,"0")}function n(e){const i=Math.floor(e/864e5),l=Math.floor(e%864e5/36e5),m=Math.floor(e%864e5%36e5/6e4),f=Math.floor(e%864e5%36e5%6e4/1e3);return{days:i,hours:l,minutes:m,seconds:f}}console.log(n(2e3));console.log(n(14e4));console.log(n(2414e4));function c(e){const{days:t,hours:r,minutes:a,seconds:s}=n(e);document.querySelector("[data-days]").textContent=o(t),document.querySelector("[data-hours]").textContent=o(r),document.querySelector("[data-minutes]").textContent=o(a),document.querySelector("[data-seconds]").textContent=o(s)}let d;document.querySelector("[data-start]").addEventListener("click",()=>{const t=u("#datetime-picker").selectedDates[0]-new Date;if(t<=0){izitoast.error({title:"Error",message:"Please choose a date in the future"});return}c(t),d=setInterval(()=>{c(t),t<=0&&(clearInterval(d),izitoast.success({title:"Success",message:"Countdown has ended!"})),t-=1e3},1e3)});
//# sourceMappingURL=commonHelpers.js.map
import"./assets/modulepreload-polyfill-ec808ebb.js";import{f as p,i as r}from"./assets/vendor-a71e76b7.js";const i=document.querySelector("[data-start]"),l=document.querySelector("#datetime-picker"),S=document.querySelector("[data-days]"),g=document.querySelector("[data-hours]"),D=document.querySelector("[data-minutes]"),v=document.querySelector("[data-seconds]");let t=0,s;const q={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose([e]){t=0,a(t),clearInterval(s);const n=e<=Date.now();n&&r.error({title:"Error",message:"Please choose a date in the future"}),i.disabled=n}};p(l,q);function o(e){return e.toString().padStart(2,"0")}function w(e){const m=Math.floor(e/864e5),f=Math.floor(e%864e5/36e5),h=Math.floor(e%864e5%36e5/6e4),y=Math.floor(e%864e5%36e5%6e4/1e3);return{days:m,hours:f,minutes:h,seconds:y}}function a(e){const{days:n,hours:c,minutes:u,seconds:d}=w(e);S.textContent=o(n),g.textContent=o(c),D.textContent=o(u),v.textContent=o(d)}i.addEventListener("click",()=>{const e=new Date(l.value).getTime(),n=new Date().getTime();if(t=e-n,t<=0){r.error({title:"Error",message:"Please choose a date in the future"});return}a(t),s=setInterval(()=>{a(t),t<=0&&(clearInterval(s),r.success({title:"Success",message:"Countdown has ended!"})),t-=1e3},1e3)});
//# sourceMappingURL=commonHelpers.js.map

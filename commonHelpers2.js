import"./assets/modulepreload-polyfill-ec808ebb.js";import"./assets/vendor-a71e76b7.js";document.addEventListener("DOMContentLoaded",function(){const o=document.querySelector("[name='delay']"),s=document.querySelectorAll("[name='state']"),n=document.querySelector(".form");flatpickr(o,{enableTime:!1,dateFormat:"U",minDate:"today"}),n.addEventListener("submit",function(i){i.preventDefault();const t=o.value,r=Array.from(s).find(e=>e.checked);new Promise((e,a)=>{setTimeout(()=>{r.value==="fulfilled"?e(t):a(t)},t)}).then(e=>{izitoast.success({title:"Success",message:`✅ Fulfilled promise in ${e}ms`})}).catch(e=>{izitoast.error({title:"Error",message:`❌ Rejected promise in ${e}ms`})})})});
//# sourceMappingURL=commonHelpers2.js.map
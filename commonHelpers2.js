import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".feedback-form");e.addEventListener("input",function(a){if(a.target.tagName.toLowerCase()==="input"||a.target.tagName.toLowerCase()==="textarea"){const m=e.email.value.trim(),s=e.message.value.trim();localStorage.setItem("feedback-form-state",JSON.stringify({email:m,message:s}))}});const t=localStorage.getItem("feedback-form-state");if(t){const a=JSON.parse(t);e.email.value=a.email,e.message.value=a.message}e.addEventListener("submit",function(a){a.preventDefault(),e.email.value.trim()!==""&&e.message.value.trim()!==""&&(console.log({email:e.email.value.trim(),message:e.message.value.trim()}),localStorage.removeItem("feedback-form-state"),e.reset())})});
//# sourceMappingURL=commonHelpers2.js.map
(()=>{var h="<no value>",r="☀️",a="🌙",i="light",d="dark",s,c,n;function m(e){s||(s=document.getElementById(e)),s.innerHTML=localStorage.theme===i?r:a,s.addEventListener("click",f)}function f(){let e=localStorage.getItem("theme"),t=e===i?d:i;switch(g(e,t),h){case"utterances":_(`github-${t}`);break;case"giscus":p(t);break;default:}}function g(e,t){let{classList:o}=document.documentElement,l=t===i?r:a;o.remove(e),o.add(t),localStorage.setItem("theme",t),s.innerHTML=l}function _(e){c=c||document.querySelector("iframe.utterances-frame"),c&&c.contentWindow.postMessage({type:"set-theme",theme:e},"https://utteranc.es")}function p(e){n=n||document.querySelector("iframe.giscus-frame"),n&&n.contentWindow.postMessage({giscus:{setConfig:{theme:e}}},"https://giscus.app")}function u(){"true"==="false"&&(document.documentElement.style="user-select:none")}m("theme-switch");u();})();

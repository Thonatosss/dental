document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("menu__toggle"),n=document.getElementById("menu__overlay"),t=document.querySelectorAll(".menu__item");e.addEventListener("change",(function(){document.body.classList.toggle("menu-open",e.checked)})),n.addEventListener("click",(function(){e.checked=!1,document.body.classList.remove("menu-open")})),t.forEach((function(n){n.addEventListener("click",(function(){e.checked=!1,document.body.classList.remove("menu-open")}))}))}));
//# sourceMappingURL=index.af2379cc.js.map
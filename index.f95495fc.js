document.querySelectorAll(".tree > li > :first-child").forEach(function(e){var t=document.createElement("span");t.textContent=e.textContent,e.textContent="",e.appendChild(t),t.addEventListener("click",function(){var t=e.parentElement.querySelector("ul");t&&(t.style.display="none"===t.style.display?"":"none")})});
//# sourceMappingURL=index.f95495fc.js.map

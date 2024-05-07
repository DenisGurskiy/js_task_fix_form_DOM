document.querySelectorAll("input").forEach(function(e){var t=e.getAttribute("name"),a=t.charAt(0).toUpperCase()+t.slice(1),l=document.createElement("label");l.classList.add("field-label"),l.setAttribute("for",e.id),l.textContent=t.toUpperCase(),e.placeholder=a.replace(/([a-z])([A-Z])/g,"$1 $2"),e.before(l)});
//# sourceMappingURL=index.00c8157b.js.map

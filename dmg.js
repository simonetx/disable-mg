//Mobile guardian respawns everytime you delete it, so...
var _Guardian = document.getElementById("guardian");_Guardian.remove();console.log("Attempting to remove MG!");setInterval(() => {_Guardian.remove()}, 5) //5 ms to dont kill your browser.

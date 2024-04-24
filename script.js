var span = document.querySelector("span");
var input = document.querySelectorAll("input");

input.forEach(variable => variable.addEventListener("change", updatevariable));
input.forEach(variable => variable.addEventListener("mousemove", updatevariable));

function updatevariable() {
    const suffix = this.dataset.sizing ||"";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
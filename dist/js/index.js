const inputs = document.querySelectorAll(".control input");

function uploadStyle() {
    const suffix = this.dataset.suffix || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener("change", uploadStyle));
inputs.forEach(input => input.addEventListener("mousemove", uploadStyle));
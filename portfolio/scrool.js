document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.createElement("button");
    toggleButton.innerHTML = "🌙";
    toggleButton.classList.add("toggle-theme-button");
    document.body.appendChild(toggleButton);
    
    function setTheme(dark) {
        if (dark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            toggleButton.innerHTML = "☀️";
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            toggleButton.innerHTML = "🌙";
        }
    }
    
    const darkMode = localStorage.getItem("theme") === "dark";
    setTheme(darkMode);
    
    toggleButton.addEventListener("click", () => {
        setTheme(!document.documentElement.classList.contains("dark"));
    });
    
    toggleButton.style.position = "fixed";
    toggleButton.style.bottom = "20px";
    toggleButton.style.right = "20px";
    toggleButton.style.padding = "10px";
    toggleButton.style.background = "gray";
    toggleButton.style.color = "white";
    toggleButton.style.border = "none";
    toggleButton.style.borderRadius = "50%";
    toggleButton.style.cursor = "pointer";
});
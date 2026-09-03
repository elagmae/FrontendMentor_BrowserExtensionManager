const toggleThemeButton = document.getElementById("theme-toggle");

UpdateThemePreference();
toggleThemeButton.onclick = ToggleThemePreference;

function UpdateThemePreference()
{ 
    if(localStorage.getItem("theme") === "dark-mode")
    {
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");

        toggleThemeButton.innerHTML = `<img src="./assets/images/icon-sun.svg" alt="Light mode icon">`;
    }

    else
    {
        document.body.classList.add("light-mode");
        document.body.classList.remove("dark-mode");

        toggleThemeButton.innerHTML = `<img src="./assets/images/icon-moon.svg" alt="Dark mode icon">`;
    }
}

function ToggleThemePreference()
{
    localStorage.getItem("theme") === "dark-mode" ? 
        localStorage.setItem("theme", "light-mode") : localStorage.setItem("theme", "dark-mode");

    UpdateThemePreference();
}

const allFilter = document.getElementById("filter-all");
const activeFilter = document.getElementById("filter-active");
const inactiveFilter = document.getElementById("filter-inactive");
const filterParent = document.getElementById("filter-buttons");
const extensionList = document.getElementById("extension-list");

function FilterExtensions(filter)
{
    localStorage.setItem('filter', filter);

    [...filterParent.children].forEach(button =>
    {
        if(button.id == "filter-" + filter)
            button.classList.add("active");

        else button.classList.remove("active");
    });

    [...extensionList.children].forEach(extension =>
    {
        const toggle = extension.querySelector(".extension-buttons-box button:nth-child(2)");
        const isActive = toggle.classList.contains("toggle-active");
        
        if(filter == "all") extension.style.display = "";

        else if(filter == "active" && isActive) extension.style.display = "";
        else if(filter == "inactive" && !isActive) extension.style.display = "";
        
        else extension.style.display = "none";
    });
}
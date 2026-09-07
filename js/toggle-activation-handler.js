function OnToggleClicked(toggle, json)
{
    const isActive = localStorage.getItem(json.name);
    localStorage.setItem(json.name, isActive == "true" ? "false" : "true");
    json.isActive = localStorage.getItem(json.name);

    if(json.isActive == "false")
    {
        toggle.classList.remove("toggle-active");
        toggle.classList.add("toggle-inactive");
    }

    else
    {
        toggle.classList.add("toggle-active");
        toggle.classList.remove("toggle-inactive");
    }

    FilterExtensions(localStorage.getItem("filter") || 'all');
}
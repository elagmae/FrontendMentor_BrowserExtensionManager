function OnExtensionRemoved(element, extension)
{
    localStorage.setItem(extension.name + "_removed", "true");
    element.style.display = "none";
}
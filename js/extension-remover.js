function OnExtensionRemoved(element, extension)
{
    element.style.display = "none";
    localStorage.setItem(extension.name + "_removed", "true");
}
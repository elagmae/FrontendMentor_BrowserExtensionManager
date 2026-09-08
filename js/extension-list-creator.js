const extensionList = document.getElementById("extension-list");
LoadData();

async function LoadData()
{
    const response = await fetch("./data.json");
    const json = await response.json();

    CreateExtensionList(json);

    LoadFilterVariables(extensionList = null, json = null);
}

function CreateExtensionList(json) 
{
    for(var i = 0; i < json.length; i++)
    {
        const extension = json[i]; // Retreive every extension from the json array

        // Create extension elements and append them to extensionList

        const extensionElement = document.createElement("div");
        extensionElement.classList.add("extension");

        if(localStorage.getItem(extension.name + "_removed"))
        {
            OnExtensionRemoved(extensionElement, extension);
            continue;
        }

        const extensionInfosBox = document.createElement("div");
        extensionInfosBox.classList.add("extension-infos-box");

        const extensionLogo = document.createElement("img");
        extensionLogo.classList.add("extension-logo");
        extensionLogo.src = extension.logo;
        extensionLogo.alt = extension.name + " logo";

        const extensionTextBox = document.createElement("div");
        extensionTextBox.classList.add("extension-text-box");

        const extensionName = document.createElement("h2");
        extensionName.textContent = extension.name;

        const extensionDescription = document.createElement("p");
        extensionDescription.textContent = extension.description;

        extensionTextBox.appendChild(extensionName);
        extensionTextBox.appendChild(extensionDescription);

        extensionInfosBox.appendChild(extensionLogo);
        extensionInfosBox.appendChild(extensionTextBox);

        const extensionButtonsBox = document.createElement("div");
        extensionButtonsBox.classList.add("extension-buttons-box");

        const extensionRemoveButton = document.createElement("button");
        extensionRemoveButton.classList.add("extension-remove");
        extensionRemoveButton.textContent = "Remove";

        extensionRemoveButton.onclick = () => OnExtensionRemoved(extensionElement, extension);

        const extensionToggle = document.createElement("button");

        if(localStorage.getItem(extension.name))
            extension.isActive = localStorage.getItem(extension.name);

        localStorage.setItem(extension.name, extension.isActive);

        extensionToggle.classList.add(extension.isActive === true || extension.isActive === "true" ? "toggle-active" : "toggle-inactive");
        
        extensionToggle.onclick = () => OnToggleClicked(extensionToggle, extension);

        const extensionToggleIcon = document.createElement("span");
        extensionToggleIcon.classList.add("extension-toggle-icon");

        extensionButtonsBox.appendChild(extensionRemoveButton);
        extensionButtonsBox.appendChild(extensionToggle);
        extensionToggle.appendChild(extensionToggleIcon);

        extensionToggle.type = "button";
        extensionToggle.setAttribute("role", "switch");
        extensionToggle.setAttribute("aria-checked", String(extension.isActive));
        extensionToggle.setAttribute("aria-label", `Enable ${extension.name}`);

        extensionRemoveButton.type = "button";
        extensionRemoveButton.setAttribute("aria-label", `Remove ${extension.name}`);

        extensionElement.appendChild(extensionInfosBox);
        extensionElement.appendChild(extensionButtonsBox);

        extensionList.appendChild(extensionElement);
    }
}
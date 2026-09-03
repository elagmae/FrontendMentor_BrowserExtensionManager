LoadData();

async function LoadData()
{
    const response = await fetch("./data.json");
    const json = await response.json();
    console.log(json);

    CreateExtensionList(json);
}

function CreateExtensionList(json) 
{
    const extensionList = document.getElementById("extension-list");

    for(var i = 0; i < json.length; i++)
    {
        var extension = json[i]; // Retreive every extension from the json array

        // Create extension elements and append them to extensionList

        var extensionElement = document.createElement("div");
        extensionElement.classList.add("extension");

        var extensionInfosBox = document.createElement("div");
        extensionInfosBox.classList.add("extension-infos-box");

        var extensionLogo = document.createElement("img");
        extensionLogo.classList.add("extension-logo");
        extensionLogo.src = extension.logo;
        extensionLogo.alt = extension.name + " logo";

        var extensionTextBox = document.createElement("div");
        extensionTextBox.classList.add("extension-text-box");

        var extensionName = document.createElement("h2");
        extensionName.textContent = extension.name;

        var extensionDescription = document.createElement("p");
        extensionDescription.textContent = extension.description;

        extensionTextBox.appendChild(extensionName);
        extensionTextBox.appendChild(extensionDescription);

        extensionInfosBox.appendChild(extensionLogo);
        extensionInfosBox.appendChild(extensionTextBox);

        var extensionButtonsBox = document.createElement("div");
        extensionButtonsBox.classList.add("extension-buttons-box");

        var extensionRemoveButton = document.createElement("button");
        extensionRemoveButton.classList.add("extension-remove");
        extensionRemoveButton.textContent = "Remove";

        var extensionToggle = document.createElement("button");
        extensionToggle.classList.add(extension.isActive ? "toggle-active" : "toggle-inactive");

        var extensionToggleIcon = document.createElement("span");
        extensionToggleIcon.classList.add("extension-toggle-icon");

        extensionButtonsBox.appendChild(extensionRemoveButton);
        extensionButtonsBox.appendChild(extensionToggle);
        extensionToggle.appendChild(extensionToggleIcon);

        extensionElement.appendChild(extensionInfosBox);
        extensionElement.appendChild(extensionButtonsBox);

        extensionList.appendChild(extensionElement);
    }
}
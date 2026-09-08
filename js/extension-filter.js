const filterParent = document.getElementById("filter-buttons");

let extensions = null;
let json = null;

function LoadFilterVariables(extensionList, jsonData)
{
    extensions = extensionList;
    json = jsonData;
}
function FilterExtensions(filter)
{
    localStorage.setItem('filter', filter);

    [...filterParent.children].forEach(button =>
    {
        if(button.id === "filter-" + filter)
            button.classList.add("active");

        else button.classList.remove("active");
    });

    for(var i = 0; i < json.length; i++)
    {
        const extensionData = json[i];
        const extensionDiv = extensions.children[i];

        console.log(extensionDiv);

        if(localStorage.getItem(extensionData.name + "_removed"))
            extensionDiv.style.display = "none";

        else
        {
            const toggle = extensionDiv.querySelector(".extension-buttons-box button:nth-child(2)");
            const isActive = toggle.classList.contains("toggle-active");
            
            if(filter === "all") extensionDiv.style.display = "grid";

            else if(filter === "active" && isActive) extensionDiv.style.display = "grid";
            else if(filter === "inactive" && !isActive) extensionDiv.style.display = "grid";
            
            else extensionDiv.style.display = "none";
        }
    };
}
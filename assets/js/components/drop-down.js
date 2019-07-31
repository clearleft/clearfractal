function DropDown() {
    console.log("beepboop");
    const dropdown = document.querySelector(".Dropdown");

    const button = dropdown.querySelector(".Dropdown-button");
    const content = dropdown.querySelector(".Dropdown-content");
    content.setAttribute("aria-hidden", "true");

    button.addEventListener("click", toggleContent);

    function toggleContent() {
        console.log("test");

        let expanded = button.getAttribute("aria-expanded");

        if (expanded === "true") {
            button.setAttribute("aria-expanded", "false");
            content.setAttribute("aria-hidden", "true");
        } else {
            button.setAttribute("aria-expanded", "true");
            content.setAttribute("aria-hidden", "false");
        }
    }
}

export default DropDown;

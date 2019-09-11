function DropDown() {
    const dropdowns = document.querySelectorAll(".Dropdown");

    const escape = 27;
    const downArrow = 40;
    const upArrow = 38;

    // run this code for every dropdown element
    for (i = 0; i < dropdowns.length; i++) {

        let dropdown = dropdowns[i];

        const button = dropdown.querySelector(".Dropdown-button");
        const content = dropdown.querySelector(".Dropdown-content");
        content.setAttribute("aria-hidden", "true");

        function openFilter() {
            button.setAttribute("aria-expanded", "true");
            content.setAttribute("aria-hidden", "false");
        }

        function closeFilter() {
            button.setAttribute("aria-expanded", "false");
            content.setAttribute("aria-hidden", "true");
        }

        function toggleContent() {
            let expanded = button.getAttribute("aria-expanded");
            if (expanded === "true") {
                closeFilter();
            } else {
                openFilter();
            }
        }
        button.addEventListener("click", toggleContent);

        function escapeFilter(e) {
            let expanded = button.getAttribute("aria-expanded");
            if (e.keyCode === escape && expanded === "true") {
                closeFilter();
            }
        }
        document.addEventListener("keyup", escapeFilter);

        function updown(e) {
            let expanded = button.getAttribute("aria-expanded");

            if (e.keyCode === upArrow && expanded === "true") {
                dropdown.querySelectorAll(".Dropdown-link")

                let dropdownLinks = dropdown.querySelectorAll(".Dropdown-link")
                const currentFocused = dropdown.querySelector(":focus")

                if (currentFocused === dropdownLinks[0]) {
                    button.focus();
                    closeFilter()
                } else {
                    for (i = 1; i < dropdownLinks.length; i++) {
                        if (currentFocused === dropdownLinks[i]) {
                            dropdownLinks[i - 1].focus();
                        }
                    }
                }

            } else if (e.keyCode === downArrow) {

                if (expanded === "true") {

                    dropdown.querySelectorAll(".Dropdown-link")

                    let dropdownLinks = dropdown.querySelectorAll(".Dropdown-link")
                    const currentFocused = dropdown.querySelector(":focus")

                    if (currentFocused === button) {
                        dropdownLinks[0].focus()
                    } else {
                        for (i = 0; i < dropdownLinks.length - 1; i++) {

                            if (currentFocused === dropdownLinks[i]) {
                                dropdownLinks[i + 1].focus()
                            }
                        }
                    }

                } else if (expanded === "false") {

                    dropdown.querySelectorAll(".Dropdown-link")

                    let dropdownLinks = dropdown.querySelectorAll(".Dropdown-link")
                    const currentFocused = dropdown.querySelector(":focus")

                    if (currentFocused === button) {
                        console.log("cassie");
                        openFilter()
                        dropdownLinks[0].focus()
                    }
                }

            }
        }
        dropdown.addEventListener("keyup", updown);

        function externalClick(e) {
            // If the click happened inside dropdown, exit.
            if (event.target.closest(".Dropdown-inner")) return;

            closeFilter()
        }
        document.addEventListener("click", externalClick);

    }

}

export default DropDown;

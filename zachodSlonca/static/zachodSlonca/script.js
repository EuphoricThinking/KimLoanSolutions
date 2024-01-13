function delayedAction() {
            var hiddenContent = document.getElementById("hidCont");
            hiddenContent.style.display = "block";
}

function hideElem() {
            var hiddenContent = document.getElementById("hidCont");
            hiddenContent.style.display = "none";
}

window.onload = function() {
            setTimeout(delayedAction, 3000);
            setTimeout(hideElem, 5000);
};

function displayAlert() {
            const href = window.location.href;
            const page_name = href.split('/').slice(-2)[0];
            if (page_name === "edytuj_trase") {
                        alert("Poprzednia trasa zostanie usunięta.")
            }
}

function hideTimeWindow() {
            const dropdown = document.getElementById("okno_trasa");
            const selectedVal = dropdown.options[dropdown.selectedIndex].value;
            const toggle = document.getElementsByClassName("jesli_okno_czasowe")[0];
            if (selectedVal !== "okno") {
                        toggle.style.display = "none";
            }
            else {

                        toggle.style.display = "block";
            }
}

function init() {
            displayAlert();
            hideTimeWindow();
            const dropdown = document.getElementById("okno_trasa");
            dropdown.addEventListener("change", hideTimeWindow);
}

window.onload = init;

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
/* ----- Hiding dropdowns when clicked on anywhere on the page  START ----- */

window.addEventListener('click', (event) => {
    if (!(event.target.matches('.nav-btn') || event.target.matches('.nav-btn-label') || event.target.matches('.nav-btn-arrow'))) {
        var navBtns = document.querySelectorAll('.nav-btn');
        var dropDowns = document.querySelectorAll('.dropdown');
        var i;
        for (i = 0; i < dropDowns.length; i++) {
            navBtns[i].checked = false;
            dropDowns[i].style.display = "none";
        }
    }

    if (event.target.matches('.nav-btn')) {
        if (event.target.checked) {
            event.target.nextElementSibling.style.display = "block";
        } else {
            closeDropdown(event.target.nextElementSibling);
            event.target.nextElementSibling.style.display = "none";
        }
    } else if (event.target.matches('.nav-btn-label')) {
        if (event.target.nextElementSibling.checked) {
            event.target.nextElementSibling.nextElementSibling.style.display = "block";
        } else {
            closeDropdown(event.target.nextElementSibling.nextElementSibling);
            event.target.nextElementSibling.nextElementSibling.style.display = "none";
        }
    }

    var siblings = event.target.parentElement.parentElement.children;
    var current = event.target.parentElement;
    var i = 0;
    for (i = 0; i < siblings.length; i++) {
        if (!current.isEqualNode(siblings[i])) {
            var elements = siblings[i].children;
            if (elements[0].matches('.nav-btn-label')) {
                elements[1].checked = false;
                elements[2].style.display = 'none';
            }
        }
    }
});

function closeDropdown(container) {
    var elements = container.children;
    var i = 0;
    for (i = 0; i < elements.length; i++) {
        if (elements[i].matches('.dropdown-container')) {
            var children = elements[i].children;
            children[1].checked = false;
            closeDropdown(children[2]);
            children[2].style.display = "none";
        }
    }
}

/* ----- Hiding dropdowns when clicked on anywhere on the page  END ----- */
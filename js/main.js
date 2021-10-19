/* ----- Hiding dropdowns when clicked on anywhere on the page  START ----- */

window.addEventListener('click', (event) => {
    if (!(event.target.matches('.nav-btn') || event.target.matches('.nav-btn-label') || event.target.matches('.nav-btn-arrow'))) {
        let navBtns = document.querySelectorAll('.nav-btn');
        let dropDowns = document.querySelectorAll('.dropdown');
        var i;
        for (i = 0; i < dropDowns.length; i++) {
            navBtns[i].checked = false;
            dropDowns[i].style.display = "none";
        }
    }
});

/* ----- Hiding dropdowns when clicked on anywhere on the page  END ----- */
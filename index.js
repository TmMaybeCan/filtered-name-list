function filterFunction() {
    let getInput, getUl, getLi, getA, toUpper, getValue;

    getInput = document.getElementById("field");
    toUpper = getInput.value.toUpperCase();
    getUl = document.getElementById("contact-list");
    getLi = getUl.getElementsByTagName("li");

    for (let i = 0; i < getLi.length; i++) {
        getA = getLi[i].getElementsByTagName("a")[0];
        getValue = getA.textContent || getA.innerHTML;

        if (getValue.toUpperCase().indexOf(toUpper) > -1) {
            getLi[i].style.display="";
        }
        else {
            getLi[i].style.display="none";
        }
    }
}
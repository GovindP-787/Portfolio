let contact = document.getElementById("cn");
contact.addEventListener("click", function() {
    let scElem = document.getElementById("sc");
    scElem.style.transform = "scale(1.1)";
    setTimeout(function() {
        scElem.style.transform = "scale(1)";
    }, 1000);
});
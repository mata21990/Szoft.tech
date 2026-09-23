const menuk = document.querySelectorAll("select");

menuk.forEach(function (menu) {
    menu.addEventListener("change", function () {
        if (this.value !== "") {
            window.location.href = this.value;
        }
    });
});
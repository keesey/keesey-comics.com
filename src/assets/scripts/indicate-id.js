(function () {
    function indicateID() {
        const fragment = (window.location.hash || "").replace(/^#/, "");
        const element = document.getElementById(fragment);
        if (element) {
            const current = document.getElementsByClassName("indicated");
            for (let i = 0; i < current.length; ++i) {
                current.item(i).classList.remove("indicated");
            }
            element.classList.add("indicated");
        }
    }
    document.addEventListener("DOMContentLoaded", indicateID);
    window.addEventListener("hashchange", indicateID);
})();

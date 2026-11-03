// Cambio de tema claro/oscuro. Respeta la preferencia del sistema
// hasta que el usuario elige un tema manualmente.
(function () {
    var root = document.documentElement;
    var KEY = "mlops-theme";

    function systemPrefersDark() {
        return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    function currentTheme() {
        return root.getAttribute("data-theme") || (systemPrefersDark() ? "dark" : "light");
    }

    function updateButtons(theme) {
        document.querySelectorAll(".theme-toggle").forEach(function (btn) {
            var label = theme === "dark" ? "Cambiar a tema claro" : "Cambiar a tema oscuro";
            btn.setAttribute("aria-label", label);
            btn.setAttribute("title", label);
        });
    }

    document.addEventListener("DOMContentLoaded", function () {
        // Fija el atributo para que los iconos reflejen el tema activo.
        root.setAttribute("data-theme", currentTheme());
        updateButtons(currentTheme());

        document.querySelectorAll(".theme-toggle").forEach(function (btn) {
            btn.addEventListener("click", function () {
                var next = currentTheme() === "dark" ? "light" : "dark";
                root.setAttribute("data-theme", next);
                try { localStorage.setItem(KEY, next); } catch (e) { /* sin almacenamiento */ }
                updateButtons(next);
            });
        });

        var year = document.getElementById("year");
        if (year) year.textContent = new Date().getFullYear();
    });
})();

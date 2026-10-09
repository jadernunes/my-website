(function () {
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector("#site-nav");
  if (toggle && header && nav) {
    toggle.addEventListener("click", function () {
      var open = header.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "Close" : "Menu";
    });
  }
  var form = document.querySelector("#contact-mail");
  if (!form) return;
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var data = new FormData(form);
    var name = (String(data.get("first") || "") + " " + String(data.get("last") || "")).trim();
    var email = String(data.get("email") || "").trim();
    var message = String(data.get("message") || "").trim();
    var body = message + "\n\nFrom: " + name + " <" + email + ">";
    window.location.href = "mailto:jadernunes.jbn@gmail.com?subject="
      + encodeURIComponent("Message from " + name)
      + "&body=" + encodeURIComponent(body);
  });
})();
